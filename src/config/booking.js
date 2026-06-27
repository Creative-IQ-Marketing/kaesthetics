/** GoHighLevel online booking widget — override via VITE_GHL_BOOKING_URL in .env */
export const GHL_BOOKING_WIDGET_URL =
  import.meta.env.VITE_GHL_BOOKING_URL ||
  "https://link.creativeiq.marketing/widget/booking/2CY9UJoww9kjPpTUhXOS";

export const GHL_FORM_EMBED_SCRIPT =
  "https://link.creativeiq.marketing/js/form_embed.js";

/**
 * Slot durations are configured inside GHL (Calendars → Event duration).
 * If combos still save as 30 min, increase duration on the matching GHL calendar
 * or create a dedicated "Dermaplaning + Facial" calendar at the correct length.
 */
