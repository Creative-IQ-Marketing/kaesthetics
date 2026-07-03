import {
  GHL_API_KEY,
  GHL_LOCATION_ID,
  GHL_CALENDAR_ID,
  TIMEZONE,
} from "../config/booking";

const headers = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  "Content-Type": "application/json",
  Version: "2021-07-28",
};

async function ghl(path, method = "GET", body = null) {
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`/ghl${path}`, opts);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Request failed (${res.status})`);
  }
  return res.json();
}

export async function fetchSlots(startDate, endDate) {
  const qs = new URLSearchParams({
    startDate: String(new Date(startDate).getTime()),
    endDate: String(new Date(endDate).getTime()),
    timezone: TIMEZONE,
  });
  return ghl(`/calendars/${GHL_CALENDAR_ID}/free-slots?${qs}`);
}

export async function createBooking({
  firstName,
  lastName,
  email,
  phone,
  notes,
  startTime,
  durationMinutes = 60,
}) {
  const contact = await ghl("/contacts/upsert", "POST", {
    firstName,
    lastName: lastName || "",
    email,
    phone,
    locationId: GHL_LOCATION_ID,
    tags: ["website_booking", "kaesthetics"],
  });

  const contactId = contact.contact?.id || contact.id;
  if (!contactId) throw new Error("Could not create contact");

  const start = new Date(startTime);
  const end = new Date(start.getTime() + durationMinutes * 60000);

  const name = `${firstName} ${lastName || ""}`.trim();

  const appointment = await ghl(
    "/calendars/events/appointments",
    "POST",
    {
      calendarId: GHL_CALENDAR_ID,
      locationId: GHL_LOCATION_ID,
      contactId,
      startTime: start.toISOString(),
      endTime: end.toISOString(),
      title: notes ? `${name} — ${notes.split("\n")[0]}` : name,
      notes: notes || "",
      appointmentStatus: "confirmed",
      address: "1826 N Loop 1604 W Access Rd, Suite 31, San Antonio TX 78248",
      selectedTimezone: TIMEZONE,
      toNotify: true,
    },
  );

  return {
    success: true,
    appointmentId: appointment.id || appointment.eventId,
    contactId,
  };
}
