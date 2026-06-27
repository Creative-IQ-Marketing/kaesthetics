import React, { useEffect, useId, useRef } from "react";
import {
  GHL_BOOKING_WIDGET_URL,
  GHL_FORM_EMBED_SCRIPT,
} from "../config/booking";

let embedScriptAttached = false;

function loadGhlEmbedScript() {
  if (embedScriptAttached) return;
  if (document.querySelector(`script[src="${GHL_FORM_EMBED_SCRIPT}"]`)) {
    embedScriptAttached = true;
    return;
  }

  const script = document.createElement("script");
  script.src = GHL_FORM_EMBED_SCRIPT;
  script.type = "text/javascript";
  script.async = true;
  document.body.appendChild(script);
  embedScriptAttached = true;
}

/**
 * GHL booking calendar — loaded only when step 2 is visible.
 * Avoids scrolling="no" and overflow:hidden, which cause the form to
 * appear frozen when fields (like email) sit below the iframe fold.
 */
export default function BookingCalendar({ servicesSummary = "" }) {
  const iframeId = useId().replace(/:/g, "");
  const iframeRef = useRef(null);

  const bookingUrl = (() => {
    const url = new URL(GHL_BOOKING_WIDGET_URL);
    if (servicesSummary) {
      url.searchParams.set("appointment_notes", servicesSummary.slice(0, 500));
    }
    return url.toString();
  })();

  useEffect(() => {
    loadGhlEmbedScript();
  }, []);

  // Let GHL form_embed.js resize the iframe; fallback height if script is slow
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onMessage = (event) => {
      if (event.origin !== new URL(GHL_BOOKING_WIDGET_URL).origin) return;
      const height =
        event.data?.height ||
        event.data?.iframeHeight ||
        event.data?.scrollHeight;
      if (typeof height === "number" && height > 0) {
        iframe.style.height = `${height}px`;
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="ghl-booking-wrap w-full overflow-visible">
      <iframe
        ref={iframeRef}
        id={iframeId}
        src={bookingUrl}
        title="K-Aesthetic booking calendar"
        className="w-full border-0"
        style={{ minHeight: 720, display: "block" }}
        loading="lazy"
      />
    </div>
  );
}
