const GHL_API_KEY = import.meta.env.VITE_GHL_API_KEY;
const GHL_LOCATION_ID = import.meta.env.VITE_GHL_LOCATION_ID;
const GHL_API_BASE = "https://services.leadconnectorhq.com";

async function makeGHLRequest(endpoint, method = "GET", body = null) {
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${GHL_API_BASE}${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `GHL API error: ${response.status} - ${data.message || "Unknown error"}`,
    );
  }

  return data;
}

export async function getCalendarMap() {
  const data = await makeGHLRequest(
    `/calendars/?locationId=${GHL_LOCATION_ID}`,
    "GET",
  );

  const map = {};
  if (data.calendars) {
    data.calendars.forEach((cal) => {
      map[cal.name.toLowerCase()] = cal.id;
    });
  }
  return map;
}

export function findCalendarId(calendarMap, serviceName, defaultId) {
  const cleanService = serviceName.toLowerCase().replace(/-/g, " ");
  const serviceTokens = cleanService
    .split(" ")
    .filter((word) => word.length > 3);

  const calendarNames = Object.keys(calendarMap);
  const directMatch = calendarNames.find((calName) =>
    calName.toLowerCase().includes(cleanService),
  );
  if (directMatch) return calendarMap[directMatch];
  const fuzzyMatch = calendarNames.find((calName) => {
    const lowerCal = calName.toLowerCase();
    return serviceTokens.some((token) =>
      lowerCal.includes(token.substring(0, 5)),
    );
  });

  return fuzzyMatch ? calendarMap[fuzzyMatch] : defaultId;
}

export async function getFreeSlots(
  calendarId,
  startDateStr,
  endDateStr,
  timezone = "America/Chicago",
) {
  const startDate = new Date(startDateStr).getTime();
  const endDate = new Date(endDateStr).getTime();

  const params = new URLSearchParams({
    startDate: startDate.toString(),
    endDate: endDate.toString(),
    timezone,
  });

  return makeGHLRequest(`/calendars/${calendarId}/free-slots?${params}`, "GET");
}

function normalizeTimeTo24h(time) {
  if (!time) throw new Error("Time is required");

  const hasMeridian =
    time.toUpperCase().includes("AM") || time.toUpperCase().includes("PM");

  // Already 24hr format (e.g. "14:30")
  if (!hasMeridian) {
    const [h, m] = time.split(":").map(Number);

    if (Number.isNaN(h) || Number.isNaN(m)) {
      throw new Error("Invalid 24hr time format");
    }

    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  }

  // 12hr format (e.g. "12:15 PM")
  const [rawTime, modifier] = time.split(" ");
  let [hours, minutes] = rawTime.split(":").map(Number);

  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    throw new Error("Invalid 12hr time format");
  }

  const mod = modifier.toUpperCase();

  if (mod === "PM" && hours !== 12) hours += 12;
  if (mod === "AM" && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

function buildStartTimeISO(date, time) {
  if (!date || !time) {
    throw new Error("Date and time are required");
  }

  const [year, month, day] = date.split("-").map(Number);
  if ([year, month, day].some(Number.isNaN)) {
    throw new Error("Invalid date format. Expected YYYY-MM-DD");
  }

  const time24 = normalizeTimeTo24h(time);
  const [hour, minute] = time24.split(":").map(Number);

  const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));

  if (isNaN(utcDate.getTime())) {
    throw new Error("Failed to construct valid date");
  }

  return utcDate.toISOString();
}

/**
 * Create a GHL Appointment
 * @param {string} contactId - The GHL Contact ID
 * @param {string} calendarId - The ID found via findCalendarId()
 * @param {object} formData - Includes { service, price, date, time, name }
 */
export async function createGHLAppointment(contactId, calendarId, formData) {
  const manifest = [
    `✨ NEW BOOKING: ${formData.service}`,
    `💰 Investment: ${formData.price}`,
    `📝 Concerns: ${formData.areasOfConcern || "None listed"}`,
    `📅 Schedule: ${formData.date} @ ${formData.time}`,
    `✅ SMS Consent: ${formData.consent ? "Yes" : "No"}`,
  ].join("\n");

  const startTimeISO = buildStartTimeISO(formData.date, formData.time);

  const body = {
    calendarId,
    locationId: GHL_LOCATION_ID,
    contactId,
    startTime: startTimeISO,
    title: `${formData.service.toUpperCase()} - ${formData.name}`,
    appointmentStatus: "confirmed",
    assignedUserId: "jvbohu3C3h7EzdOlIENB",
    toNotify: true,
  };

  await makeGHLRequest(`/contacts/${contactId}/notes`, "POST", {
    body: manifest,
  });

  return makeGHLRequest("/calendars/appointments", "POST", body);
}

/**
 * Validates appointment data structure before committing
 * @throws {Error} If appointment data is invalid
 */
function validateAppointmentData(formData) {
  if (!formData.calendarId) {
    throw new Error("Calendar ID is required for appointment");
  }
  if (!formData.timeISO) {
    throw new Error("Appointment time (ISO format) is required");
  }
  if (!formData.service || !formData.name) {
    throw new Error("Service and name are required for appointment");
  }

  // Validate ISO datetime format
  const dt = new Date(formData.timeISO);
  if (isNaN(dt.getTime())) {
    throw new Error("Invalid appointment datetime format");
  }

  // Ensure appointment is in the future
  if (dt < new Date()) {
    throw new Error("Appointment time must be in the future");
  }
}

/**
 * Compensating transaction: Cleanup contact if appointment creation fails
 * @param {string} contactId - Contact to delete
 * @returns {Promise<boolean>} - True if cleanup succeeded
 */
async function deleteContact(contactId) {
  try {
    await makeGHLRequest(`/contacts/${contactId}`, "DELETE");
    return true;
  } catch (error) {
    console.error("Cleanup failed: Could not delete contact", {
      contactId,
      error,
    });
    return false;
  }
}

/**
 * Atomic booking transaction: Contact + Appointment
 * Uses Saga pattern with compensating transactions
 * If appointment creation fails, contact is deleted (rollback)
 *
 * @param {object} formData - Form submission data
 * @returns {Promise<{success, contact, contactId, appointmentId}>}
 * @throws {Error} If transaction fails after exhausting retries
 */
export async function submitToGHL(formData) {
  try {
    if (formData.calendarId && formData.timeISO) {
      validateAppointmentData(formData);
    }
  } catch (validationError) {
    throw new Error(`Booking validation failed: ${validationError.message}`);
  }

  let contactId = null;
  let appointmentId = null;

  try {
    const tags = ["website_form", "kaesthetics", "booking"];
    if (formData.consent) tags.push("sms_consent_given");
    if (formData.calendarId) tags.push("_appointment_pending");

    const customFields = [
      { key: "areas_of_concern", field_value: formData.areasOfConcern || "" },
      { key: "service", field_value: formData.service || "" },
    ];
    if (formData.price)
      customFields.push({ key: "service_price", field_value: formData.price });
    if (formData.date)
      customFields.push({
        key: "appointment_date",
        field_value: formData.date,
      });
    if (formData.time)
      customFields.push({
        key: "appointment_time",
        field_value: formData.time,
      });
    if (formData.timeISO)
      customFields.push({
        key: "appointment_datetime_iso",
        field_value: formData.timeISO,
      });

    const contactResponse = await makeGHLRequest("/contacts/upsert", "POST", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      locationId: GHL_LOCATION_ID,
      tags,
      customFields,
    });

    contactId = contactResponse.contact?.id || contactResponse.id;
    if (!contactId) {
      throw new Error("No contact ID in response");
    }

    if (formData.calendarId && formData.timeISO) {
      try {
        const appointmentResponse = await createGHLAppointment(
          contactId,
          formData.calendarId,
          formData,
        );
        appointmentId = appointmentResponse.id || appointmentResponse.eventId;

        await makeGHLRequest(`/contacts/${contactId}`, "PATCH", {
          tags: ["_appointment_confirmed"],
          locationId: GHL_LOCATION_ID,
        });
      } catch (appointmentError) {
        console.error("Appointment creation failed, rolling back contact", {
          contactId,
          error: appointmentError.message,
        });

        const cleanupSuccess = await deleteContact(contactId);

        throw new Error(
          `Booking failed: ${appointmentError.message}${
            cleanupSuccess
              ? " (rollback successful)"
              : " (rollback FAILED - manual cleanup required)"
          }`,
        );
      }
    }

    return {
      success: true,
      contact: contactResponse.contact || contactResponse,
      contactId,
      appointmentId,
    };
  } catch (error) {
    if (
      contactId &&
      error.message.includes("rollback FAILED") &&
      formData.calendarId
    ) {
      console.error("ATOMIC TRANSACTION FAILED - Manual cleanup required", {
        contactId,
        formData: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        timestamp: new Date().toISOString(),
      });
    }

    throw error;
  }
}
