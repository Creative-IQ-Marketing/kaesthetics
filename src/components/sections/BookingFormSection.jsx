import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import { serviceCategories, servicesData } from "../../data/services";
import BookingCalendar from "../BookingCalendar";
import ScrollReveal from "../motion/ScrollReveal";
import { EMAIL, PHONE_DISPLAY } from "../../seo/config";

const MotionDiv = motion.div;

const categories = serviceCategories.map(({ id, label, icon: Icon }) => ({
  id,
  label,
  icon: <Icon className="h-4 w-4" />,
}));

function parsePriceValue(raw) {
  if (!raw) return null;
  const match = String(raw).match(/[\d,.]+/);
  if (!match) return null;
  const value = Number(match[0].replace(/,/g, ""));
  return Number.isFinite(value) ? value : null;
}

function getTotalDurationMinutes(services) {
  return services.reduce((sum, s) => sum + (s.durationMinutes || 0), 0);
}

function formatDuration(minutes) {
  if (!minutes) return null;
  if (minutes < 60) return `${minutes} minutes`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} hr ${m} min` : `${h} hour${h > 1 ? "s" : ""}`;
}

const BookingFormSection = () => {
  const location = useLocation();
  const summaryRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const initialSelection = (() => {
    const serviceName = location.state?.serviceName;
    if (!serviceName) {
      return { category: "skin-treatments", services: [] };
    }

    let foundCategory = "skin-treatments";
    let foundService = null;

    Object.entries(servicesData).forEach(([cat, services]) => {
      const service = services.find((s) => s.title === serviceName);
      if (service) {
        foundCategory = cat;
        foundService = service;
      }
    });

    return {
      category: foundCategory,
      services: foundService ? [foundService] : [],
    };
  })();

  const [step, setStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState(
    initialSelection.category,
  );
  const [formData, setFormData] = useState({
    services: initialSelection.services,
  });
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.some((s) => s.title === service.title)
        ? prev.services.filter((s) => s.title !== service.title)
        : [...prev.services, service],
    }));
  };

  const nextStep = () => {
    setBookingComplete(false);
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setBookingComplete(false);
    setStep((prev) => prev - 1);
  };

  const totalValue = formData.services.reduce((sum, s) => {
    const v = parsePriceValue(s.price);
    return v == null ? sum : sum + v;
  }, 0);

  const hasAnyPrice = formData.services.some(
    (s) => parsePriceValue(s.price) != null,
  );

  const totalText = hasAnyPrice ? `$${Math.round(totalValue)}` : "—";
  const totalDuration = getTotalDurationMinutes(formData.services);
  const durationText = formatDuration(totalDuration);

  const generateCopyText = () => {
    const lines = [
      "BOOKING SUMMARY",
      "================",
      "",
      "Services Requested:",
      ...formData.services.map((s) => {
        const dur = s.durationMinutes ? ` (${s.durationMinutes} min)` : "";
        return `• ${s.title} - ${s.price}${dur}`;
      }),
      "",
      `Total Estimated: ${totalText}`,
    ];

    if (durationText) {
      lines.push(`Total Appointment Duration: ${durationText}`);
      lines.push(
        "(Please ensure the calendar blocks this full duration — not 30 min.)",
      );
    }

    lines.push(
      "",
      "Please confirm availability and let me know if you need any adjustments.",
    );

    return lines.join("\n");
  };

  const servicesSummary = formData.services
    .map((s) => s.title)
    .join(", ");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateCopyText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="section-pad bg-ka-cream">
      <div className="container-custom max-w-full">
        <ScrollReveal className="mb-12 flex justify-center">
          <div className="flex items-center gap-3">
            {[
              { n: 1, label: "Choose service" },
              { n: 2, label: "Book time" },
            ].map((s, i) => (
              <React.Fragment key={s.n}>
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                      step >= s.n
                        ? "bg-ka-primary text-white"
                        : "border border-ka-sand bg-white text-ka-muted"
                    }`}
                  >
                    {step > s.n ? <Check className="h-4 w-4" /> : s.n}
                  </span>
                  <span
                    className={`hidden text-[10px] font-semibold uppercase tracking-[0.16em] sm:block ${
                      step >= s.n ? "text-ka-primary" : "text-ka-muted"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i === 0 && <span className="h-px w-8 bg-ka-sand sm:w-12" />}
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <MotionDiv
              key="step1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="mx-auto max-w-2xl text-center">
                <div className="mb-4 flex items-center justify-center gap-4">
                  <h2 className="font-serif text-4xl text-ka-primary md:text-5xl">
                    Choose Your Service
                  </h2>
                  <AnimatePresence>
                    {formData.services.length > 0 && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-ka-accent text-xl font-bold text-white shadow-lg ring-2 ring-ka-accent ring-offset-4"
                      >
                        {formData.services.length}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <p className="text-base text-ka-muted">
                  Select one or more treatments. We&apos;ll generate a summary
                  to paste into the booking form.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                  className={`tab-pill ${
                    activeCategory === cat.id ? "tab-pill-active" : "tab-pill-inactive"
                  }`}
                  >
                    {cat.icon}
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {servicesData[activeCategory].map((service) => {
                    const selected = formData.services.some(
                      (s) => s.title === service.title,
                    );
                    return (
                      <motion.button
                        key={service.title}
                        type="button"
                        whileHover={{
                          y: -4,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        }}
                        onClick={() => handleServiceSelect(service)}
                        className={`group flex h-full cursor-pointer flex-col rounded-3xl border p-5 text-left transition-all duration-300 ${
                          selected
                            ? "border-ka-primary bg-ka-primary text-white shadow-soft"
                            : "border-ka-sand bg-white text-ka-primary hover:border-ka-accent hover:shadow-card"
                        }`}
                      >
                        <div className="flex-1">
                          <h4
                            className={`mb-2 font-serif text-lg leading-tight ${
                              selected ? "text-white" : "text-ka-primary"
                            }`}
                          >
                            {service.title}
                          </h4>
                          {service.sub && (
                            <span
                              className={`mb-3 block text-xs ${
                                selected ? "text-white/60" : "text-ka-muted"
                              }`}
                            >
                              {service.sub}
                            </span>
                          )}
                          {service.durationMinutes && (
                            <span
                              className={`text-xs ${
                                selected ? "text-white/70" : "text-ka-muted/70"
                              }`}
                            >
                              ~{service.durationMinutes} min
                            </span>
                          )}
                        </div>
                        <span
                          className={`text-lg font-bold ${
                            selected ? "text-ka-accent" : "text-ka-primary"
                          }`}
                        >
                          {service.price}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="mx-auto max-w-2xl rounded-2xl border border-ka-accent/15 bg-ka-accent/5 p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div className="flex-1">
                    <h4 className="mb-1 font-semibold text-ka-primary">
                      Pro Tip
                    </h4>
                    <p className="mb-3 text-sm text-ka-muted">
                      Booking multiple services? Copy the summary so the full
                      appointment length is noted — e.g. dermaplaning + facial
                      needs more than 30 minutes.
                    </p>
                    <AnimatePresence>
                      {formData.services.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="flex flex-wrap items-center gap-2 text-sm font-medium text-ka-accent"
                        >
                          <span className="text-lg">✓</span>
                          {formData.services.length} service
                          {formData.services.length !== 1 ? "s" : ""} selected
                          <span className="text-lg">•</span>
                          <span className="font-bold">{totalText}</span>
                          {durationText && (
                            <>
                              <span className="text-lg">•</span>
                              <span>{durationText}</span>
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.button
                  type="button"
                  onClick={nextStep}
                  disabled={formData.services.length === 0}
                  whileHover={
                    formData.services.length > 0 ? { scale: 1.05 } : {}
                  }
                  whileTap={formData.services.length > 0 ? { scale: 0.98 } : {}}
                  className="btn-primary gap-2 px-8 py-4 text-base disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {formData.services.length > 0 ? (
                    <>
                      Continue with {formData.services.length} service
                      {formData.services.length !== 1 ? "s" : ""}
                      <ArrowRight className="h-5 w-5" />
                    </>
                  ) : (
                    "Select a Service to Continue"
                  )}
                </motion.button>
              </div>
            </MotionDiv>
          )}

          {step === 2 && (
            <MotionDiv
              key="step2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-3 font-serif text-4xl text-ka-primary md:text-5xl">
                  Complete Your Booking
                </h2>
                <p className="text-base text-ka-muted">
                  Pick a date &amp; time, then paste your summary into
                  &ldquo;Additional Information&rdquo;
                </p>
              </div>

              <div className="grid items-start gap-8 lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-1">
                  <motion.div
                    ref={summaryRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl bg-ka-primary p-6 text-white shadow-xl"
                  >
                    <div className="mb-4">
                      <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/70">
                        Your Selection
                      </span>
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-serif text-xl">
                          {formData.services.length === 1
                            ? "Selected Service"
                            : "Selected Services"}
                        </h3>
                        <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-bold">
                          {formData.services.length}
                        </span>
                      </div>
                    </div>

                    <div className="mb-5 space-y-3 border-b border-white/20 pb-5">
                      {formData.services.map((s) => (
                        <div
                          key={s.title}
                          className="flex items-baseline justify-between gap-3"
                        >
                          <p className="font-serif text-base leading-tight">
                            {s.title}
                            {s.durationMinutes ? (
                              <span className="ml-1 text-xs text-white/50">
                                ({s.durationMinutes}m)
                              </span>
                            ) : null}
                          </p>
                          <span className="whitespace-nowrap text-sm font-bold text-ka-accent">
                            {s.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-5 space-y-2 border-b border-white/20 pb-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                          Estimated Total
                        </span>
                        <span className="text-2xl font-bold text-ka-accent">
                          {totalText}
                        </span>
                      </div>
                      {durationText && (
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                            Duration Needed
                          </span>
                          <span className="text-lg font-bold text-white">
                            {durationText}
                          </span>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition-all duration-300 ${
                        copied
                          ? "bg-green-500/30 text-green-100"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copied to Clipboard!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy Summary
                        </>
                      )}
                    </button>
                  </motion.div>

                  <div className="premium-card premium-card-pad">
                    <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-ka-muted">
                      Next Steps
                    </h4>
                    <ol className="space-y-4 text-sm text-ka-muted">
                      <li className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ka-accent/20 text-xs font-bold text-ka-accent">
                          1
                        </span>
                        <span>Select date &amp; time in the calendar →</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ka-accent/20 text-xs font-bold text-ka-accent">
                          2
                        </span>
                        <span>
                          Paste summary into &ldquo;Additional
                          Information&rdquo;
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ka-accent/20 text-xs font-bold text-ka-accent">
                          3
                        </span>
                        <span>Fill contact details &amp; confirm</span>
                      </li>
                    </ol>
                  </div>

                  <div className="rounded-2xl border border-ka-accent/20 bg-gradient-to-br from-ka-accent/10 to-ka-accent/5 p-5">
                    <p className="text-sm leading-relaxed text-ka-muted">
                      <strong className="text-ka-accent">After you book</strong>
                      <br />
                      You should receive a confirmation by email. Check spam if
                      nothing arrives in a few minutes, or call{" "}
                      <a
                        href="tel:3614948656"
                        className="font-bold text-ka-accent hover:underline"
                      >
                        {PHONE_DISPLAY}
                      </a>
                      .
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <p className="text-sm leading-relaxed text-ka-muted">
                      <strong className="text-ka-primary">Form stuck?</strong>
                      <br />
                      Scroll inside the calendar panel to reach all fields.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary w-full"
                  >
                    ← Back to Services
                  </button>
                </div>

                <div className="overflow-visible lg:col-span-2">
                  {bookingComplete ? (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="premium-card premium-card-pad text-center"
                    >
                      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-serif text-3xl text-ka-primary">
                        You&apos;re Booked!
                      </h3>
                      <p className="mx-auto mt-4 max-w-md text-ka-muted">
                        Your appointment is saved. A confirmation email should
                        arrive shortly — please check your inbox and spam
                        folder.
                      </p>
                      <p className="mx-auto mt-4 max-w-md text-sm text-ka-muted">
                        Questions? Call or text{" "}
                        <a
                          href="tel:3614948656"
                          className="font-semibold text-ka-accent hover:underline"
                        >
                          {PHONE_DISPLAY}
                        </a>{" "}
                        or email{" "}
                        <a
                          href={`mailto:${EMAIL}`}
                          className="font-semibold text-ka-accent hover:underline"
                        >
                          {EMAIL}
                        </a>
                        .
                      </p>
                      <button
                        type="button"
                        onClick={() => setBookingComplete(false)}
                        className="btn-secondary mt-8"
                      >
                        Book another appointment
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="premium-card overflow-visible">
                        <BookingCalendar
                          servicesSummary={servicesSummary}
                          onBookingComplete={() => setBookingComplete(true)}
                        />
                      </div>
                      <p className="mt-3 text-center text-xs text-ka-muted">
                        Secure online scheduling · scroll within the calendar if
                        fields are below the fold
                      </p>
                    </>
                  )}
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BookingFormSection;
