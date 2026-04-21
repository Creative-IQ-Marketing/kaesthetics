const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

function isEnabled() {
  return typeof GA_MEASUREMENT_ID === "string" && GA_MEASUREMENT_ID.trim().length > 0;
}

function ensureGtag() {
  if (!isEnabled()) return false;
  if (typeof window === "undefined") return false;

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  const existingScript = document.querySelector(
    `script[src^="https://www.googletagmanager.com/gtag/js?id="]`,
  );

  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      GA_MEASUREMENT_ID,
    )}`;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  return true;
}

export function initializeAnalytics() {
  return ensureGtag();
}

export function trackPageView(path, title) {
  if (!ensureGtag()) return;
  window.gtag("event", "page_view", {
    page_path: path || window.location.pathname,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}

export function trackEvent(eventName, eventParams = {}) {
  if (!ensureGtag()) return;
  window.gtag("event", eventName, {
    ...eventParams,
    page_path: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString(),
  });
}

