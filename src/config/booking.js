/** GoHighLevel online booking widget — override via VITE_GHL_BOOKING_URL in .env */
export const GHL_BOOKING_WIDGET_URL =
  import.meta.env.VITE_GHL_BOOKING_URL ||
  "https://link.creativeiq.marketing/widget/booking/2CY9UJoww9kjPpTUhXOS";

export const GHL_FORM_EMBED_SCRIPT =
  "https://link.creativeiq.marketing/js/form_embed.js";

/** Origins that may post booking-complete messages from the embedded widget */
export const GHL_BOOKING_ORIGINS = [
  "https://link.creativeiq.marketing",
  "https://api.leadconnectorhq.com",
  "https://services.leadconnectorhq.com",
];

/**
 * GHL admin checklist — client confirmation emails (owner / agency):
 * 1. Calendars → [calendar] → Notifications → "Appointment Booked" → Email ON
 * 2. Recipients must include Contact (not just assigned user / admin)
 * 3. Settings → Email Services → verify Mailgun subdomain or SMTP is connected
 * 4. Send a test confirmation from notification settings
 * 5. Check spam; consider enabling SMS confirmation as backup
 *
 * Staff notifications working + client emails missing = almost always step 1–3.
 */

/**
 * Slot durations are configured inside GHL (Calendars → Event duration).
 * If combos still save as 30 min, increase duration on the matching GHL calendar
 * or create a dedicated "Dermaplaning + Facial" calendar at the correct length.
 */
