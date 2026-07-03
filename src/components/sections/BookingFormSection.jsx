import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Clock,
  MapPin,
} from "lucide-react";
import { serviceCategories, servicesData } from "../../data/services";
import SlotPicker from "../booking/SlotPicker";
import ContactForm from "../booking/ContactForm";
import { createBooking } from "../../services/bookingApi";
import { STUDIO_ADDRESS } from "../../config/booking";
import { EMAIL, PHONE_DISPLAY } from "../../seo/config";

const STEPS = [
  { n: 1, label: "Service" },
  { n: 2, label: "Date & Time" },
  { n: 3, label: "Details" },
];

const categories = serviceCategories.map(({ id, label, icon: Icon }) => ({
  id,
  label,
  icon: <Icon className="h-4 w-4" />,
}));

function priceNum(raw) {
  const m = String(raw || "").match(/[\d,.]+/);
  return m ? Number(m[0].replace(/,/g, "")) : 0;
}

function fmtDuration(mins) {
  if (!mins) return null;
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

function fmtSlot(iso) {
  return new Date(iso).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

const fade = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

const BookingFormSection = () => {
  const location = useLocation();

  const initial = (() => {
    const name = location.state?.serviceName;
    if (!name) return { cat: "skin-treatments", svcs: [] };
    let cat = "skin-treatments";
    let svc = null;
    Object.entries(servicesData).forEach(([c, list]) => {
      const found = list.find((s) => s.title === name);
      if (found) { cat = c; svc = found; }
    });
    return { cat, svcs: svc ? [svc] : [] };
  })();

  const [step, setStep] = useState(1);
  const [activeCat, setActiveCat] = useState(initial.cat);
  const [selected, setSelected] = useState(initial.svcs);
  const [slot, setSlot] = useState(null);
  const [status, setStatus] = useState("idle");
  const [bookError, setBookError] = useState(null);

  const toggle = (svc) =>
    setSelected((prev) =>
      prev.some((s) => s.title === svc.title)
        ? prev.filter((s) => s.title !== svc.title)
        : [...prev, svc],
    );

  const total = selected.reduce((s, v) => s + priceNum(v.price), 0);
  const totalMins = selected.reduce((s, v) => s + (v.durationMinutes || 0), 0);

  const handleBook = async (contact) => {
    setStatus("loading");
    setBookError(null);
    try {
      const serviceList = selected
        .map((s) => `${s.title} (${s.price})`)
        .join(", ");
      const noteLines = selected
        .map((s) => `• ${s.title} – ${s.price}`)
        .join("\n");
      await createBooking({
        ...contact,
        startTime: slot,
        durationMinutes: totalMins || 60,
        notes: `${serviceList}\n\n${noteLines}\nTotal: $${total}`,
      });
      setStatus("done");
    } catch (err) {
      setBookError(err.message || "Something went wrong.");
      setStatus("idle");
    }
  };

  /* ── Confirmation ── */
  if (status === "done") {
    return (
      <section className="section-pad bg-ka-cream">
        <motion.div
          {...fade}
          className="mx-auto max-w-md text-center"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <Check className="h-7 w-7 text-green-600" />
          </div>
          <h3 className="font-serif text-3xl text-ka-primary">
            You're Booked!
          </h3>
          <p className="mt-3 text-sm text-ka-muted">
            Confirmation is on its way to your email. Check spam if you
            don't see it.
          </p>
          <div className="mx-auto mt-5 flex max-w-xs items-start gap-2.5 rounded-xl border border-ka-sand bg-white p-3.5 text-left text-sm text-ka-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ka-accent" />
            <span>{STUDIO_ADDRESS}</span>
          </div>
          <p className="mt-5 text-sm text-ka-muted">
            Questions?{" "}
            <a href="tel:3614948656" className="font-semibold text-ka-accent hover:underline">
              {PHONE_DISPLAY}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${EMAIL}`} className="font-semibold text-ka-accent hover:underline">
              {EMAIL}
            </a>
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setSelected([]);
              setSlot(null);
              setStep(1);
            }}
            className="btn-secondary mt-6"
          >
            Book another
          </button>
        </motion.div>
      </section>
    );
  }

  /* ── Main flow ── */
  return (
    <section className="section-pad bg-ka-cream">
      <div className="container-custom max-w-3xl">
        {/* Stepper */}
        <div className="mb-10 flex items-center justify-center gap-3">
          {STEPS.map((s, i) => (
            <div key={s.n} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition ${
                    step > s.n
                      ? "bg-green-500 text-white"
                      : step === s.n
                        ? "bg-ka-primary text-white"
                        : "border border-ka-sand text-ka-muted"
                  }`}
                >
                  {step > s.n ? <Check className="h-3.5 w-3.5" /> : s.n}
                </span>
                <span
                  className={`hidden text-[10px] font-semibold uppercase tracking-widest sm:block ${
                    step >= s.n ? "text-ka-primary" : "text-ka-muted"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < 2 && <span className="h-px w-6 bg-ka-sand sm:w-10" />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* ── Step 1: Service ── */}
          {step === 1 && (
            <motion.div key="s1" {...fade} className="space-y-6">
              <div className="text-center">
                <h2 className="font-serif text-3xl text-ka-primary">
                  Choose Your Treatment
                </h2>
                <p className="mt-1.5 text-sm text-ka-muted">
                  Select one or more services
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveCat(c.id)}
                    className={`tab-pill ${activeCat === c.id ? "tab-pill-active" : "tab-pill-inactive"}`}
                  >
                    {c.icon}
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {servicesData[activeCat].map((svc) => {
                  const on = selected.some((s) => s.title === svc.title);
                  return (
                    <button
                      key={svc.title}
                      type="button"
                      onClick={() => toggle(svc)}
                      className={`flex flex-col rounded-xl border p-3.5 text-left transition-all ${
                        on
                          ? "border-ka-primary bg-ka-primary text-white shadow-soft"
                          : "border-ka-sand bg-white text-ka-primary hover:border-ka-accent"
                      }`}
                    >
                      <span className={`font-serif text-sm leading-snug ${on ? "text-white" : ""}`}>
                        {svc.title}
                      </span>
                      {svc.durationMinutes && (
                        <span className={`mt-0.5 text-[11px] ${on ? "text-white/60" : "text-ka-muted"}`}>
                          ~{svc.durationMinutes} min
                        </span>
                      )}
                      <span className={`mt-auto pt-2 text-sm font-bold ${on ? "text-ka-accent-light" : "text-ka-primary"}`}>
                        {svc.price}
                      </span>
                    </button>
                  );
                })}
              </div>

              {selected.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-3"
                >
                  <p className="flex items-center gap-2 text-sm font-medium text-ka-primary">
                    <span>
                      {selected.length} service{selected.length > 1 ? "s" : ""}
                    </span>
                    <span className="text-ka-sand">·</span>
                    <span className="font-bold">${total}</span>
                    {totalMins > 0 && (
                      <>
                        <span className="text-ka-sand">·</span>
                        <Clock className="h-3.5 w-3.5" />
                        <span>{fmtDuration(totalMins)}</span>
                      </>
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-primary gap-2 px-8 py-3"
                  >
                    Pick a time <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ── Step 2: Date & Time ── */}
          {step === 2 && (
            <motion.div key="s2" {...fade} className="mx-auto max-w-xl space-y-6">
              <div className="text-center">
                <h2 className="font-serif text-3xl text-ka-primary">
                  Pick a Date & Time
                </h2>
                <p className="mt-1.5 text-sm text-ka-muted">
                  {selected.map((s) => s.title).join(", ")}
                </p>
              </div>

              <SlotPicker selectedSlot={slot} onSelect={setSlot} />

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-secondary gap-2"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!slot}
                  className="btn-primary gap-2 px-8 py-3 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Step 3: Details ── */}
          {step === 3 && (
            <motion.div key="s3" {...fade} className="mx-auto max-w-md space-y-6">
              <div className="text-center">
                <h2 className="font-serif text-3xl text-ka-primary">
                  Your Details
                </h2>
              </div>

              {/* Summary */}
              <div className="rounded-xl border border-ka-sand bg-white p-4">
                <div className="space-y-1.5">
                  {selected.map((s) => (
                    <div key={s.title} className="flex justify-between text-sm">
                      <span className="text-ka-primary">{s.title}</span>
                      <span className="font-bold text-ka-primary">{s.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-ka-sand pt-3 text-sm">
                  <span className="flex items-center gap-1.5 text-ka-muted">
                    <Clock className="h-3.5 w-3.5" />
                    {slot && fmtSlot(slot)}
                  </span>
                  <span className="font-bold text-ka-primary">${total}</span>
                </div>
              </div>

              {bookError && (
                <p className="rounded-xl border border-red-200 bg-red-50 p-3 text-center text-sm text-red-600">
                  {bookError}
                </p>
              )}

              <ContactForm onSubmit={handleBook} loading={status === "loading"} />

              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-secondary mx-auto flex gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Change time
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BookingFormSection;
