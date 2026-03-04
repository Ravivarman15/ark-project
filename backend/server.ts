// ═══════════════════════════════════════════════════════════════
//  ARK Learning Arena — Backend API Server
//  Handles: Email automation (Brevo API), Zapier webhook, rate limiting
// ═══════════════════════════════════════════════════════════════

import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { getUserWelcomeEmail, getAdminNotificationEmail } from "./email-templates";

dotenv.config();

// ─── Load ARK logo as Base64 data URI for email embedding ───
const logoPath = path.join(__dirname, "ark-logo.jpeg");
let logoDataUri = "";
try {
    const logoBase64 = fs.readFileSync(logoPath).toString("base64");
    logoDataUri = `data:image/jpeg;base64,${logoBase64}`;
    console.log("✅ ARK logo loaded for email embedding");
} catch (err) {
    console.warn("⚠️  Could not load ark-logo.jpeg — emails will be sent without logo");
}

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Brevo API Configuration ───
const BREVO_API_KEY = process.env.BREVO_API_KEY || "";
const BREVO_SENDER_EMAIL = "automation@thearktuition.com";
const BREVO_SENDER_NAME = "ARK Learning Arena";

if (!BREVO_API_KEY) {
    console.error("❌ ERROR: BREVO_API_KEY is not set in .env — email automation will NOT work!");
    console.error("   → Get your API key from https://app.brevo.com → SMTP & API → API Keys");
}
if (!process.env.ADMIN_EMAIL) {
    console.error("❌ ERROR: ADMIN_EMAIL is not set in .env — admin notifications will NOT work!");
}

// ─── Brevo Email Helper ───
async function sendBrevoEmail(
    to: string,
    subject: string,
    html: string,
    senderName: string = BREVO_SENDER_NAME
): Promise<void> {
    if (!BREVO_API_KEY) {
        throw new Error("BREVO_API_KEY is not configured");
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
            sender: { name: senderName, email: BREVO_SENDER_EMAIL },
            to: [{ email: to }],
            subject,
            htmlContent: html,
        }),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error("  ❌ Brevo API error response:", errorBody);
        throw new Error(`Brevo API responded with ${response.status}: ${errorBody}`);
    }
}

// ─── Middleware ───
const allowedOrigins = [
    "https://tuitionwithark.vercel.app",
    "http://localhost:8080",
    "http://localhost:5173",
];

app.use(cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === "development") {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["POST", "GET"],
    credentials: false
}));
app.use(express.json({ limit: "10kb" }));

// ─── Rate Limiting ───
const assessmentLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // max 10 submissions per IP per 15 min
    message: {
        success: false,
        error: "Too many submissions. Please try again after 15 minutes.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// ─── Helpers ───
function sanitize(str: string): string {
    return str
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
        .trim();
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
    // Allow digits, spaces, +, -, ()
    const cleaned = phone.replace(/[\s\-\(\)]/g, "");
    return /^\+?\d{10,15}$/.test(cleaned);
}

// ─── Assessment Lead Endpoint ───
app.post("/api/assessment-lead", assessmentLimiter, async (req: express.Request, res: express.Response) => {
    try {
        const { name, email, phone, grade, program, honeypot } = req.body;

        // ── Honeypot check (spam bots fill hidden fields) ──
        if (honeypot) {
            // Silently succeed to not tip off bots
            console.log("🍯 Honeypot triggered — likely bot submission");
            return res.json({ success: true });
        }

        // ── Validation ──
        const errors: string[] = [];

        if (!name || typeof name !== "string" || name.trim().length < 2) {
            errors.push("Student name is required (min 2 characters).");
        }
        if (!email || typeof email !== "string" || !isValidEmail(email)) {
            errors.push("A valid email address is required.");
        }
        if (!phone || typeof phone !== "string" || !isValidPhone(phone)) {
            errors.push("A valid phone number is required.");
        }
        if (!grade || typeof grade !== "string" || grade.trim().length < 1) {
            errors.push("Current grade is required.");
        }
        if (!program || typeof program !== "string" || program.trim().length < 1) {
            errors.push("Program of interest is required.");
        }

        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }

        // ── Sanitize inputs ──
        const leadData = {
            name: sanitize(name),
            email: sanitize(email).toLowerCase(),
            phone: sanitize(phone),
            grade: sanitize(grade),
            program: sanitize(program),
            timestamp: new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                dateStyle: "medium",
                timeStyle: "short",
            }),
        };

        console.log(`📋 New lead: ${leadData.name} (${leadData.email})`);

        // ── Run all 3 tasks in parallel ──
        const results = await Promise.allSettled([
            // 1️⃣ Send user welcome email via Brevo API
            (async () => {
                console.log("📧 Sending welcome email to user via Brevo...");
                const { subject, html } = getUserWelcomeEmail(leadData);
                await sendBrevoEmail(leadData.email, subject, html);
                console.log(`✅ Welcome email sent successfully to ${leadData.email}`);
            })(),

            // 2️⃣ Send admin notification email via Brevo API
            (async () => {
                console.log("📧 Sending admin notification email via Brevo...");
                const adminEmail = process.env.ADMIN_EMAIL || "admin@thearktuition.com";
                const { subject, html } = getAdminNotificationEmail(leadData);
                await sendBrevoEmail(adminEmail, subject, html, "ARK Lead System");
                console.log(`✅ Admin notification sent successfully to ${adminEmail}`);
            })(),

            // 3️⃣ Send data to Zapier webhook (for Google Sheets)
            (async () => {
                const zapierUrl = process.env.ZAPIER_WEBHOOK_URL;
                if (!zapierUrl) {
                    console.warn("  ⚠️  ZAPIER_WEBHOOK_URL not set — skipping sheet update");
                    return;
                }
                const response = await fetch(zapierUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        student_name: leadData.name,
                        email: leadData.email,
                        phone: leadData.phone,
                        grade: leadData.grade,
                        program: leadData.program,
                        timestamp: leadData.timestamp,
                        source: "assessment_form",
                    }),
                });
                if (!response.ok) {
                    throw new Error(`Zapier responded with ${response.status}`);
                }
                console.log(`  📊 Data sent to Zapier (Google Sheets)`);
            })(),
        ]);

        // ── Check results ──
        const emailFailed = results[0].status === "rejected";
        const adminFailed = results[1].status === "rejected";
        const zapierFailed = results[2].status === "rejected";

        if (emailFailed) {
            console.error("❌ Brevo email failed (user):", (results[0] as PromiseRejectedResult).reason?.message);
        }
        if (adminFailed) {
            console.error("❌ Brevo email failed (admin):", (results[1] as PromiseRejectedResult).reason?.message);
        }
        if (zapierFailed) {
            console.error("❌ Zapier webhook failed:", (results[2] as PromiseRejectedResult).reason?.message);
        }

        // Even if some tasks fail, we return success to the user
        return res.json({
            success: true,
            message: "Assessment request received successfully.",
        });

    } catch (err: any) {
        console.error("❌ Unexpected error:", err.message);
        return res.status(500).json({
            success: false,
            error: "Something went wrong. Please try again later.",
        });
    }
});

// ─── Test Email Endpoint (for local verification) ───
app.get("/test-email", async (_req: express.Request, res: express.Response) => {
    try {
        if (!BREVO_API_KEY) {
            return res.status(500).json({
                success: false,
                message: "BREVO_API_KEY is not set in .env",
            });
        }

        const adminEmail = process.env.ADMIN_EMAIL || "admin@thearktuition.com";

        console.log(`🧪 Sending test email to ${adminEmail}...`);

        await sendBrevoEmail(
            adminEmail,
            "✅ ARK Brevo Test — Email Integration Working",
            `
            <div style="font-family:'Segoe UI',Roboto,Arial,sans-serif;max-width:500px;margin:0 auto;padding:32px;background:#f8f9fa;border-radius:12px;">
                <h2 style="color:#0B2C55;margin:0 0 16px;">🎉 Brevo Integration Test</h2>
                <p style="color:#374151;font-size:15px;line-height:1.6;">
                    This is a test email from <strong>ARK Learning Arena</strong> backend.
                </p>
                <p style="color:#374151;font-size:15px;line-height:1.6;">
                    If you're reading this, your Brevo email integration is working correctly!
                </p>
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
                <p style="color:#9CA3AF;font-size:12px;">
                    Sent from: ${BREVO_SENDER_EMAIL}<br/>
                    Timestamp: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                </p>
            </div>
            `
        );

        console.log(`✅ Test email sent successfully to ${adminEmail}`);

        return res.json({
            success: true,
            message: "Test email sent successfully",
        });
    } catch (err: any) {
        console.error("❌ Test email failed:", err.message);
        return res.status(500).json({
            success: false,
            message: `Test email failed: ${err.message}`,
        });
    }
});

// ─── Health Check ───
app.get("/api/health", (_req: express.Request, res: express.Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Start Server ───
app.listen(PORT, () => {
    console.log(`\n🚀 ARK Lead API running on port ${PORT}`);
    console.log(`   Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`   Brevo API: ${BREVO_API_KEY ? "✅ Configured" : "❌ NOT SET"}`);
    console.log(`   Sender: ${BREVO_SENDER_EMAIL}`);
    console.log(`   Admin: ${process.env.ADMIN_EMAIL || "❌ NOT SET"}`);
    console.log(`   Zapier: ${process.env.ZAPIER_WEBHOOK_URL ? "✅ Configured" : "⚠️  NOT SET (optional)"}`);
    console.log(`   Test endpoint: http://localhost:${PORT}/test-email\n`);
});
