/**
 * Email Service - routes through Vercel serverless function /api/send-email
 *
 * Local dev:  the /api/send-email function runs via `vercel dev`
 * Vercel:     add GMAIL_USER and GMAIL_PASS in Project Settings > Environment Variables
 */

const SERVICE_LABELS = {
  residential: 'Residential Painting',
  commercial: 'Commercial Painting',
  farm: 'Farm & Agricultural Painting',
  'roof-coating': 'Roof Coating',
  other: 'Other / Not Sure Yet',
};

/**
 * Sends form data to the Vercel API route, which emails it via Gmail/Nodemailer.
 * Gmail credentials never touch the browser.
 */
export async function sendFormEmails(data) {
  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: SERVICE_LABELS[data.service] || data.service,
    message: data.message || '(no details provided)',
  };

  const res = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to send email');
  }

  return res.json();
}

// No-op — EmailJS is no longer used, kept so main.jsx import does not break
export function initEmailJS() {}
