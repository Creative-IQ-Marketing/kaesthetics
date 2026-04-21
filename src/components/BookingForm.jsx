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
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-green-600"
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
        <h3 className="text-2xl font-bold mb-2">
          You're on your way to glowing!
        </h3>
        <p className="text-gray-500">
          We received your info and will reach out shortly to confirm your
          appointment. Check your inbox for a{" "}
          <span className="font-semibold text-pink-500">10% off</span> coupon on
          your next facial.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Offer banner */}
      <div className="bg-pink-500 text-white text-center py-3 px-4 text-sm font-semibold tracking-wide">
        ✨ Claim 10% Off Your Next Facial — Fill Out Below
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(361) 000-0000"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
          />
        </div>

        {/* Areas of Concern */}
        <div>
          <label
            htmlFor="areasOfConcern"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Areas of Concern
          </label>
          <textarea
            id="areasOfConcern"
            name="areasOfConcern"
            rows="3"
            value={formData.areasOfConcern}
            onChange={handleChange}
            placeholder="e.g. acne, fine lines, uneven tone..."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all resize-none"
          />
        </div>

        {/* SMS Consent */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 accent-pink-500 cursor-pointer"
          />
          <label
            htmlFor="consent"
            className="text-xs text-gray-500 leading-relaxed cursor-pointer"
          >
            I Consent to Receive SMS Notifications, Alerts &amp; Occasional
            Marketing Communication from K-Aesthetic Skin. Message frequency
            varies. Message &amp; data rates may apply. Text HELP to
            361-494-8656 for assistance. You can reply STOP to unsubscribe.{" "}
            <a
              href="/terms--conditions"
              className="underline hover:text-pink-500"
            >
              Terms &amp; Conditions
            </a>
            {" / "}
            <a href="/privacy-policy" className="underline hover:text-pink-500">
              Privacy Policy
            </a>
          </label>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2">
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Claim My 10% Off & Book Now"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
