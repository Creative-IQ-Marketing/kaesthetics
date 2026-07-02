import { useState } from "react";
import { submitToGHL } from "../services/ghl";
import { trackEvent } from "../services/analytics";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    areasOfConcern: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    trackEvent("form_submit_attempt", {
      form_name: "booking_form",
      sms_consent: formData.consent ? "yes" : "no",
      has_areas_of_concern: formData.areasOfConcern ? "yes" : "no",
    });

    try {
      await submitToGHL(formData);
      setIsSubmitted(true);
      trackEvent("form_submit_success", {
        form_name: "booking_form",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        areasOfConcern: "",
        consent: false,
      });
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
      trackEvent("form_submit_error", {
        form_name: "booking_form",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="premium-card premium-card-pad flex flex-col items-center justify-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ka-pink text-ka-accent">
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-ka-primary">You're on your way to glowing!</h3>
        <p className="mt-2 text-sm text-ka-muted">
          We received your info and will reach out shortly to confirm your
          appointment. Check your inbox for a{" "}
          <span className="font-semibold text-ka-accent">10% off</span> coupon on
          your next facial.
        </p>
      </div>
    );
  }

  return (
    <div className="premium-card overflow-hidden">
      <div className="bg-ka-primary px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
        Claim 10% Off Your Next Facial
      </div>

      <form onSubmit={handleSubmit} className="premium-card-pad space-y-5">
        <div>
          <label htmlFor="name" className="form-label">
            Full Name <span className="text-ka-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email <span className="text-ka-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            Phone <span className="text-ka-accent">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(361) 000-0000"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="areasOfConcern" className="form-label">
            Areas of Concern
          </label>
          <textarea
            id="areasOfConcern"
            name="areasOfConcern"
            rows="3"
            value={formData.areasOfConcern}
            onChange={handleChange}
            placeholder="e.g. acne, fine lines, uneven tone..."
            className="form-input resize-none"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 cursor-pointer accent-ka-accent"
          />
          <label htmlFor="consent" className="cursor-pointer text-xs leading-relaxed text-ka-muted">
            I Consent to Receive SMS Notifications, Alerts &amp; Occasional
            Marketing Communication from K-Aesthetic Skin. Message frequency
            varies. Message &amp; data rates may apply. Text HELP to
            361-494-8656 for assistance. You can reply STOP to unsubscribe.{" "}
            <a href="/terms-conditions" className="text-ka-accent hover:underline">
              Terms &amp; Conditions
            </a>
            {" / "}
            <a href="/privacy-policy" className="text-ka-accent hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        {error && (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
          {isSubmitting ? "Sending..." : "Claim My 10% Off & Book Now"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
