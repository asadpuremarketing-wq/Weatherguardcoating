/**
 * Google Ads conversion helpers (AW-313955898)
 * Import these functions wherever a tracked event should fire.
 */

/**
 * Click-to-call conversion.
 * Returns false so it can be used as an onClick handler on <a> tags.
 * @param {string} [url] - optional URL to navigate to after the event
 */
export function gtagReportCallConversion(url) {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location = url;
    }
  };

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-313955898/PPiACLX9yJ4cELqs2pUB',
      value: 1.0,
      currency: 'CAD',
      event_callback: callback,
    });
  } else {
    callback();
  }

  return false;
}

/**
 * Lead-form submission conversion.
 * Call once after a successful form send.
 */
export function gtagReportFormConversion() {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-313955898/Hfa6CNvAzZ4cELqs2pUB',
      value: 1.0,
      currency: 'CAD',
    });
  }
}
