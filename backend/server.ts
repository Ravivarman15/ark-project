// ═══════════════════════════════════════════════════════════════
//  ARK Learning Arena — Backend API Server
//  Handles: Email automation (Resend), Zapier webhook, rate limiting
// ═══════════════════════════════════════════════════════════════

import express from "express";
import cors from "cors";
import { Resend } from "resend";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { getUserWelcomeEmail, getAdminNotificationEmail } from "./email-templates";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Resend Email Client ───
// Guard: don't crash if key is missing, log warning instead
let resend: Resend | null = null;
if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
} else {
    console.warn("⚠️  RESEND_API_KEY not set — email sending will be disabled");
}

// ─── Middleware ───
// Temporarily allow all origins during initial deployment
// TODO: Restrict to specific origins after Vercel deployment is confirmed
app.use(cors({
    origin: "*",
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
            // 1️⃣ Send user welcome email via Resend
            (async () => {
                if (!resend) { console.warn("  ⚠️  Resend not configured — skipping user email"); return; }
                const { subject, html } = getUserWelcomeEmail(leadData);
                await resend.emails.send({
                    from: "ARK Learning Arena <onboarding@resend.dev>",
                    to: leadData.email,
                    subject,
                    html,
                });
                console.log(`  ✉️  Welcome email sent to ${leadData.email}`);
            })(),

            // 2️⃣ Send admin notification email via Resend
            (async () => {
                if (!resend) { console.warn("  ⚠️  Resend not configured — skipping admin email"); return; }
                const adminEmail = process.env.ADMIN_EMAIL || "admin@thearktuition.com";
                const { subject, html } = getAdminNotificationEmail(leadData);
                await resend.emails.send({
                    from: "ARK Lead System <onboarding@resend.dev>",
                    to: adminEmail,
                    subject,
                    html,
                });
                console.log(`  📩 Admin notification sent to ${adminEmail}`);
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
            console.error("  ❌ User email failed:", (results[0] as PromiseRejectedResult).reason?.message);
        }
        if (adminFailed) {
            console.error("  ❌ Admin email failed:", (results[1] as PromiseRejectedResult).reason?.message);
        }
        if (zapierFailed) {
            console.error("  ❌ Zapier webhook failed:", (results[2] as PromiseRejectedResult).reason?.message);
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

// ─── Health Check ───
app.get("/api/health", (_req: express.Request, res: express.Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Start Server ───
app.listen(PORT, () => {
    console.log(`\n🚀 ARK Lead API running on port ${PORT}`);
    console.log(`   Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`   Resend API: ${process.env.RESEND_API_KEY ? "Configured" : "NOT SET"}`);
    console.log(`   Admin: ${process.env.ADMIN_EMAIL || "NOT SET"}`);
    console.log(`   Zapier: ${process.env.ZAPIER_WEBHOOK_URL ? "Configured" : "NOT SET"}\n`);
});
