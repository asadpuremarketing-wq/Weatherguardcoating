import nodemailer from 'nodemailer';

/**
 * Vercel Serverless Function: POST /api/send-email
 *
 * Sends two emails directly via Gmail + Nodemailer:
 *   1. Business notification  -> WeatherGuardcoating@gmail.com
 *   2. Customer confirmation  -> visitor's email address
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ error: 'Missing required fields: name, email, service' });
  }

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_PASS = process.env.GMAIL_PASS;

  if (!GMAIL_USER || !GMAIL_PASS) {
    console.error('Missing GMAIL_USER or GMAIL_PASS environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
  });

  const submittedAt = new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' });
  const details = message || '(no details provided)';

  // ── Template 1: Business Notification ────────────────────────────────────────
  const businessHTML = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#1a1a1e;padding:28px 32px;text-align:center;">
            <h1 style="margin:0;color:#C9A84C;font-size:22px;letter-spacing:2px;text-transform:uppercase;">Weather Guard Coatings</h1>
            <p style="margin:8px 0 0;color:#888;font-size:13px;">New Lead - Action Required</p>
          </td>
        </tr>

        <!-- Badge -->
        <tr>
          <td style="padding:24px 32px 8px;">
            <span style="display:inline-block;background:#C9A84C;color:#ffffff;font-size:11px;font-weight:bold;letter-spacing:1px;padding:6px 16px;border-radius:20px;">NEW QUOTE REQUEST</span>
          </td>
        </tr>

        <!-- Details Table -->
        <tr>
          <td style="padding:8px 32px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#999;font-size:11px;font-weight:bold;text-transform:uppercase;width:120px;">Name</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#1a1a1a;font-weight:bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#999;font-size:11px;font-weight:bold;text-transform:uppercase;">Phone</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;"><a href="tel:${phone}" style="color:#C9A84C;font-size:15px;text-decoration:none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#999;font-size:11px;font-weight:bold;text-transform:uppercase;">Email</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;"><a href="mailto:${email}" style="color:#C9A84C;font-size:15px;text-decoration:none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#999;font-size:11px;font-weight:bold;text-transform:uppercase;">Service</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#1a1a1a;">${service}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;color:#999;font-size:11px;font-weight:bold;text-transform:uppercase;vertical-align:top;">Details</td>
                <td style="padding:12px 0;font-size:15px;color:#444;">${details}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9f9f9;padding:16px 32px;text-align:center;border-top:1px solid #eee;">
            <p style="margin:0;color:#bbb;font-size:11px;">Submitted: ${submittedAt}</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  // ── Template 2: Customer Confirmation ─────────────────────────────────────────
  const customerHTML = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#1a1a1e;padding:28px 32px;text-align:center;">
            <h1 style="margin:0;color:#C9A84C;font-size:22px;letter-spacing:2px;text-transform:uppercase;">Weather Guard Coatings</h1>
            <p style="margin:8px 0 0;color:#ccc;font-size:13px;">London, Ontario Trusted Painting Contractor - 35+ Years</p>
          </td>
        </tr>

        <!-- Checkmark -->
        <tr>
          <td style="padding:32px 32px 8px;text-align:center;">
            <div style="display:inline-block;width:64px;height:64px;background:#e8f5e9;border-radius:50%;line-height:64px;font-size:32px;text-align:center;color:#4CAF50;">&#10003;</div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:16px 40px 32px;text-align:center;">
            <h2 style="margin:0 0 16px;color:#1a1a1a;font-size:20px;">Request Received!</h2>
            <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.8;">
              Hi <strong>${name}</strong>,<br>
              Thank you for reaching out. We have received your quote request for
              <strong style="color:#C9A84C;">${service}</strong> and our team will be in touch within
              <strong>24 hours</strong>.
            </p>
          </td>
        </tr>

        <!-- Contact Box -->
        <tr>
          <td style="padding:0 32px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#fffbee;border:1px solid #e8d87a;border-radius:8px;padding:20px;">
              <tr>
                <td style="padding:6px 20px;">
                  <p style="margin:0 0 8px;color:#555;font-size:13px;"><strong>Phone:</strong> (519) 555-0192</p>
                  <p style="margin:0 0 8px;color:#555;font-size:13px;"><strong>Email:</strong> ${GMAIL_USER}</p>
                  <p style="margin:0;color:#555;font-size:13px;"><strong>Hours:</strong> Mon-Fri 7am-5pm - Sat 8am-2pm</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CTA Button -->
        <tr>
          <td style="padding:0 32px 32px;text-align:center;">
            <a href="https://weatherguardcoatings.ca/portfolio"
               style="display:inline-block;background:#C9A84C;color:#ffffff;text-decoration:none;font-size:15px;font-weight:bold;padding:14px 36px;border-radius:8px;">
              View Our Work
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9f9f9;padding:16px 32px;text-align:center;border-top:1px solid #eee;">
            <p style="margin:0;color:#bbb;font-size:11px;">Weather Guard Coatings - London, Ontario</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    await Promise.all([
      // Email 1 - Business
      transporter.sendMail({
        from: `"Weather Guard Website" <${GMAIL_USER}>`,
        to: GMAIL_USER,
        subject: `New Quote Request from ${name}`,
        html: businessHTML,
      }),
      // Email 2 - Customer
      transporter.sendMail({
        from: `"Weather Guard Coatings" <${GMAIL_USER}>`,
        to: email,
        replyTo: GMAIL_USER,
        subject: `We Received Your Request - ${name}`,
        html: customerHTML,
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Nodemailer send error:', err);
    return res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
}
