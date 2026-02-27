// ═══════════════════════════════════════════════════════════════
//  ARK Learning Arena — Email Templates
//  Branded HTML emails for user welcome + admin notification
// ═══════════════════════════════════════════════════════════════

interface LeadData {
  name: string;
  email: string;
  phone: string;
  grade: string;
  program: string;
  timestamp: string;
}

/* ─── Shared Styles ─── */
const COLORS = {
  navy: "#0B2C55",
  navyDeep: "#071E3D",
  yellow: "#FFC107",
  yellowLight: "#FFD54F",
  white: "#FFFFFF",
  gray: "#F8F9FA",
  textMuted: "#6B7280",
};

const baseWrapper = (content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>ARK Learning Arena</title>
  <!--[if mso]>
  <style type="text/css">
    table, td { font-family: Arial, sans-serif; }
  </style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#F0F2F5;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F0F2F5;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;background-color:${COLORS.white};border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          ${content}
        </table>
        <!-- Footer -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;margin-top:16px;">
          <tr>
            <td style="padding:16px 24px;text-align:center;color:#9CA3AF;font-size:12px;line-height:1.5;">
              ARK Learning Arena &bull; Chennai, Tamil Nadu<br/>
              +91 76393 99217 &bull; info@tuitionwithark.com<br/><br/>
              <span style="color:#D1D5DB;">This email was sent because a form was submitted on tuitionwithark.com.<br/>
              If you did not request this, please ignore this email.</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

/* ═══════════════════════════════════════════
   USER WELCOME EMAIL
   ═══════════════════════════════════════════ */
export function getUserWelcomeEmail(data: LeadData): { subject: string; html: string } {
  const subject = "Welcome to ARK Learning Arena — Your Free Academic Assessment is Confirmed";

  const html = baseWrapper(`
    <!-- Header -->
    <tr>
      <td style="background:linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyDeep} 100%);padding:40px 32px;text-align:center;">
        <img
          src="https://tuitionwithark.com/ark-logo.jpeg"
          alt="ARK Learning Arena"
          width="72"
          height="72"
          style="display:block;margin:0 auto 16px;border-radius:14px;"
        />
        <h1 style="margin:0;color:${COLORS.white};font-size:22px;font-weight:800;letter-spacing:0.5px;">
          ARK Learning Arena
        </h1>
        <p style="margin:4px 0 0;color:${COLORS.yellow};font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">
          Where Discipline Meets Direction
        </p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:36px 32px 20px;">
        <h2 style="margin:0 0 8px;color:${COLORS.navy};font-size:20px;font-weight:700;">
          Hi ${data.name},
        </h2>
        <p style="margin:0 0 24px;color:${COLORS.textMuted};font-size:15px;line-height:1.6;">
          Thank you for booking your <strong style="color:${COLORS.navy};">Free Academic Assessment</strong> with ARK Learning Arena. We're excited to help you take the first step toward academic excellence!
        </p>

        <!-- Details Card -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:${COLORS.gray};border-radius:12px;margin-bottom:24px;">
          <tr>
            <td style="padding:24px;">
              <p style="margin:0 0 16px;color:${COLORS.navy};font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                Your Assessment Details
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding:6px 0;color:${COLORS.textMuted};font-size:13px;width:140px;">Student Name</td>
                  <td style="padding:6px 0;color:${COLORS.navy};font-size:14px;font-weight:600;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:${COLORS.textMuted};font-size:13px;">Current Grade</td>
                  <td style="padding:6px 0;color:${COLORS.navy};font-size:14px;font-weight:600;">${data.grade}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:${COLORS.textMuted};font-size:13px;">Program of Interest</td>
                  <td style="padding:6px 0;color:${COLORS.navy};font-size:14px;font-weight:600;">${data.program}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:${COLORS.textMuted};font-size:13px;">Phone</td>
                  <td style="padding:6px 0;color:${COLORS.navy};font-size:14px;font-weight:600;">${data.phone}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Advisory message -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:linear-gradient(135deg, ${COLORS.navy}08, ${COLORS.yellow}15);border-left:4px solid ${COLORS.yellow};border-radius:0 8px 8px 0;margin-bottom:28px;">
          <tr>
            <td style="padding:16px 20px;">
              <p style="margin:0;color:${COLORS.navy};font-size:14px;line-height:1.6;">
                📞 <strong>Our academic advisor will contact you within 24 hours</strong> to schedule your free diagnostic test at a convenient time.
              </p>
            </td>
          </tr>
        </table>

        <!-- Assessment highlights -->
        <p style="margin:0 0 14px;color:${COLORS.navy};font-size:15px;font-weight:700;">
          What's Included in Your Free Assessment:
        </p>
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
          <tr>
            <td style="padding:8px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:28px;vertical-align:top;">
                    <div style="width:22px;height:22px;background:${COLORS.yellow};border-radius:50%;text-align:center;line-height:22px;font-size:12px;color:${COLORS.navy};font-weight:800;">✓</div>
                  </td>
                  <td style="padding-left:10px;color:#374151;font-size:14px;line-height:1.5;">
                    <strong>Diagnostic Test</strong> — Comprehensive subject-wise evaluation
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:28px;vertical-align:top;">
                    <div style="width:22px;height:22px;background:${COLORS.yellow};border-radius:50%;text-align:center;line-height:22px;font-size:12px;color:${COLORS.navy};font-weight:800;">✓</div>
                  </td>
                  <td style="padding-left:10px;color:#374151;font-size:14px;line-height:1.5;">
                    <strong>Performance Breakdown</strong> — Identify strengths and gaps
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:28px;vertical-align:top;">
                    <div style="width:22px;height:22px;background:${COLORS.yellow};border-radius:50%;text-align:center;line-height:22px;font-size:12px;color:${COLORS.navy};font-weight:800;">✓</div>
                  </td>
                  <td style="padding-left:10px;color:#374151;font-size:14px;line-height:1.5;">
                    <strong>Personalized Strategy</strong> — Custom study roadmap for your goals
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- CTA Button -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
          <tr>
            <td align="center">
              <a
                href="https://tuitionwithark.com/#programs"
                target="_blank"
                style="display:inline-block;background:${COLORS.yellow};color:${COLORS.navy};font-size:15px;font-weight:800;padding:14px 36px;border-radius:10px;text-decoration:none;letter-spacing:0.3px;box-shadow:0 4px 14px rgba(255,193,7,0.35);"
              >
                Explore Our Programs →
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Bottom accent -->
    <tr>
      <td style="background:linear-gradient(90deg, ${COLORS.navy}, ${COLORS.navyDeep});padding:20px 32px;text-align:center;">
        <p style="margin:0;color:${COLORS.white}99;font-size:12px;line-height:1.6;">
          ARK Learning Arena — Chennai's Premier Academic Institution<br/>
          Trusted by 500+ families across Tamil Nadu
        </p>
      </td>
    </tr>
  `);

  return { subject, html };
}

/* ═══════════════════════════════════════════
   ADMIN NOTIFICATION EMAIL
   ═══════════════════════════════════════════ */
export function getAdminNotificationEmail(data: LeadData): { subject: string; html: string } {
  const subject = `New Assessment Lead — ${data.name}`;

  const html = baseWrapper(`
    <!-- Header -->
    <tr>
      <td style="background:linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyDeep} 100%);padding:28px 32px;text-align:center;">
        <h1 style="margin:0;color:${COLORS.white};font-size:18px;font-weight:700;">
          🔔 New Assessment Lead
        </h1>
        <p style="margin:6px 0 0;color:${COLORS.yellow};font-size:13px;font-weight:600;">
          Submitted on ${data.timestamp}
        </p>
      </td>
    </tr>

    <!-- Lead Details Table -->
    <tr>
      <td style="padding:32px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;">
          <tr style="background:${COLORS.gray};">
            <td style="padding:12px 20px;color:${COLORS.textMuted};font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #E5E7EB;" colspan="2">
              Lead Information
            </td>
          </tr>
          <tr>
            <td style="padding:14px 20px;color:${COLORS.textMuted};font-size:13px;border-bottom:1px solid #F3F4F6;width:140px;font-weight:600;">Student Name</td>
            <td style="padding:14px 20px;color:${COLORS.navy};font-size:14px;border-bottom:1px solid #F3F4F6;font-weight:700;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding:14px 20px;color:${COLORS.textMuted};font-size:13px;border-bottom:1px solid #F3F4F6;font-weight:600;">Email</td>
            <td style="padding:14px 20px;border-bottom:1px solid #F3F4F6;">
              <a href="mailto:${data.email}" style="color:#2563EB;font-size:14px;text-decoration:none;font-weight:600;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 20px;color:${COLORS.textMuted};font-size:13px;border-bottom:1px solid #F3F4F6;font-weight:600;">Phone</td>
            <td style="padding:14px 20px;border-bottom:1px solid #F3F4F6;">
              <a href="tel:${data.phone}" style="color:#2563EB;font-size:14px;text-decoration:none;font-weight:600;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 20px;color:${COLORS.textMuted};font-size:13px;border-bottom:1px solid #F3F4F6;font-weight:600;">Current Grade</td>
            <td style="padding:14px 20px;color:${COLORS.navy};font-size:14px;border-bottom:1px solid #F3F4F6;font-weight:600;">${data.grade}</td>
          </tr>
          <tr>
            <td style="padding:14px 20px;color:${COLORS.textMuted};font-size:13px;border-bottom:1px solid #F3F4F6;font-weight:600;">Program</td>
            <td style="padding:14px 20px;color:${COLORS.navy};font-size:14px;border-bottom:1px solid #F3F4F6;font-weight:600;">${data.program}</td>
          </tr>
          <tr>
            <td style="padding:14px 20px;color:${COLORS.textMuted};font-size:13px;font-weight:600;">Submitted At</td>
            <td style="padding:14px 20px;color:${COLORS.navy};font-size:14px;font-weight:600;">${data.timestamp}</td>
          </tr>
        </table>

        <!-- Action note -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:20px;background:${COLORS.yellow}15;border:1px solid ${COLORS.yellow}40;border-radius:10px;">
          <tr>
            <td style="padding:16px 20px;">
              <p style="margin:0;color:${COLORS.navy};font-size:13px;line-height:1.6;">
                ⚡ <strong>Action Required:</strong> Please contact this lead within 24 hours to schedule their free academic assessment.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `);

  return { subject, html };
}
