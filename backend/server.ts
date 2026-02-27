// ═══════════════════════════════════════════════════════════════
//  ARK Learning Arena — Backend API Server
//  Handles: Email automation, Zapier webhook, rate limiting
// ═══════════════════════════════════════════════════════════════

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import path from "path";
import { getUserWelcomeEmail, getAdminNotificationEmail } from "./email-templates";

const LOGO_PATH = path.resolve(__dirname, "..", "public", "ark-logo.jpeg");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ───
const allowedOrigins = [
    process.env.FRONTEND_URL,
    "http://localhost:8080",
    "http://localhost:5173",
].filter(Boolean) as string[];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === "development") {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["POST", "GET"],
    credentials: true
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

// ─── Nodemailer Transporter ───
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Verify transporter on startup
transporter.verify()
    .then(() => console.log("✅ SMTP connection verified"))
    .catch((err) => console.error("❌ SMTP connection failed:", err.message));

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
app.post("/api/assessment-lead", assessmentLimiter, async (req, res) => {
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
            // 1️⃣ Send user welcome email
            (async () => {
                const { subject, html } = getUserWelcomeEmail(leadData);
                await transporter.sendMail({
                    from: `"ARK Learning Arena" <${process.env.SMTP_USER}>`,
                    to: leadData.email,
                    subject,
                    html,
                    attachments: [{
                        filename: "ark-logo.jpeg",
                        path: LOGO_PATH,
                        cid: "arklogo",
                    }],
                });
                console.log(`  ✉️  Welcome email sent to ${leadData.email}`);
            })(),

            // 2️⃣ Send admin notification email
            (async () => {
                const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;
                const { subject, html } = getAdminNotificationEmail(leadData);
                await transporter.sendMail({
                    from: `"ARK Lead System" <${process.env.SMTP_USER}>`,
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
        // (emails will be retried or handled via logs)
        return res.json({
            success: true,
            message: "Assessment request received successfully.",
            _debug: process.env.NODE_ENV === "development" ? {
                emailSent: !emailFailed,
                adminNotified: !adminFailed,
                sheetUpdated: !zapierFailed,
            } : undefined,
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
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Start Server ───
app.listen(PORT, () => {
    console.log(`\n🚀 ARK Lead API running on http://localhost:${PORT}`);
    console.log(`   Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`   SMTP: ${process.env.SMTP_USER || "NOT SET"}`);
    console.log(`   Admin: ${process.env.ADMIN_EMAIL || process.env.SMTP_USER || "NOT SET"}`);
    console.log(`   Zapier: ${process.env.ZAPIER_WEBHOOK_URL ? "Configured" : "NOT SET"}\n`);
});
