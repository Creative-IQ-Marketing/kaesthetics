import React, { useEffect, useId, useRef } from "react";
import {
  GHL_BOOKING_WIDGET_URL,
  GHL_FORM_EMBED_SCRIPT,
  GHL_BOOKING_ORIGINS,
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

function isBookingCompleteMessage(data) {
  if (data === "msgsndr-booking-complete") return true;
  if (Array.isArray(data) && data[0] === "msgsndr-booking-complete") return true;
  if (data?.type === "msgsndr-booking-complete") return true;
  if (data?.event === "msgsndr-booking-complete") return true;
  return false;
}

/**
 * GHL booking calendar — loaded only when step 2 is visible.
 * Listens for msgsndr-booking-complete so we can show on-site confirmation
 * even when GHL client emails are misconfigured.
 */
export default function BookingCalendar({
  servicesSummary = "",
  onBookingComplete,
}) {
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

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onMessage = (event) => {
      if (!GHL_BOOKING_ORIGINS.includes(event.origin)) return;

      if (isBookingCompleteMessage(event.data)) {
        onBookingComplete?.();
      }

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
  }, [onBookingComplete]);

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
