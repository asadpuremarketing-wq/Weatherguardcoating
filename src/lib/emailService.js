/**
 * Email Service - powered by Google Apps Script (completely free, uses your existing Gmail)
 *
 * Local dev:  set VITE_GOOGLE_SCRIPT_URL in .env
 * Vercel:     add VITE_GOOGLE_SCRIPT_URL in Project Settings > Environment Variables
 */
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const SERVICE_LABELS = {
  residential: 'Residential Painting',
  commercial: 'Commercial Painting',
  farm: 'Farm & Agricultural Painting',
  'roof-coating': 'Roof Coating',
  other: 'Other / Not Sure Yet',
};

/**
 * Sends both emails (business notification + customer confirmation)
 * by calling the Google Apps Script web app.
 */
export async function sendFormEmails(data) {
  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: SERVICE_LABELS[data.service] || data.service,
    message: data.message || '(no details provided)',
  };

  // mode: 'no-cors' is required for Google Apps Script cross-origin requests.
  // The script still fully executes and sends both emails — we just can't read
  // the response body (opaque response), which is fine for our use case.
  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

// No-op — EmailJS is no longer used, kept so main.jsx import doesn't break
export function initEmailJS() {}
