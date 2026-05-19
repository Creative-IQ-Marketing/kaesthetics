import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  CheckCircle,
  Leaf,
  Flower,
  Droplet,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";

const MotionDiv = motion.div;

const categories = [
  {
    id: "skin-treatments",
    label: "Skin Treatments",
    icon: <Leaf className="w-4 h-4" />,
  },
  { id: "facials", label: "Facials", icon: <Flower className="w-4 h-4" /> },
  { id: "waxing", label: "Waxing", icon: <Droplet className="w-4 h-4" /> },
];

const servicesData = {
  "skin-treatments": [
    { title: "Nano Infusion", price: "$180" },
    { title: "Dermaplaning", price: "$85" },
    { title: "Microneedling", price: "$530", sub: "(3 Sessions)" },
    { title: "Oil Planing", price: "$95" },
  ],
  facials: [
    { title: "Customized Facial", price: "$125" },
    { title: "Oxygen-Infused Facial", price: "$135" },
    { title: "Astrodome Toning", price: "$185" },
    { title: "Bearded Facial", price: "$130" },
    { title: "Nano Infusion Facial", price: "$180" },
    { title: "Hydroderm + Bohr", price: "$185" },
  ],
  waxing: [
    { title: "Brow Shaping", price: "$25" },
    { title: "Full Face with Brows", price: "$80" },
    { title: "Underarms", price: "$40" },
    { title: "Neckline", price: "$40" },
    { title: "Half Legs", price: "$55" },
    { title: "Full Legs", price: "$75" },
    { title: "Half Arms", price: "$45" },
    { title: "Full Arms", price: "$60" },
    { title: "Lips", price: "$20" },
    { title: "Chin", price: "$25" },
    { title: "Side Burns", price: "$30" },
    { title: "Brow Maintenance", price: "$30" },
    { title: "Brazilian", price: "$80" },
    { title: "French Bikini", price: "$65" },
    { title: "Chest", price: "$60" },
    { title: "Stomach", price: "$30" },
    { title: "Abdomen", price: "$45" },
    { title: "Nostrils", price: "$20" },
    { title: "Nipple Wax", price: "$20" },
    { title: "Men's Back & Shoulder", price: "$75" },
  ],
};

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

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.some((s) => s.title === service.title)
        ? prev.services.filter((s) => s.title !== service.title)
        : [...prev.services, service],
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const parsePriceValue = (raw) => {
    if (!raw) return null;
    const match = String(raw).match(/[\d,.]+/);
    if (!match) return null;
    const value = Number(match[0].replace(/,/g, ""));
    return Number.isFinite(value) ? value : null;
  };

  const totalValue = formData.services.reduce((sum, s) => {
    const v = parsePriceValue(s.price);
    return v == null ? sum : sum + v;
  }, 0);

  const hasAnyPrice = formData.services.some(
    (s) => parsePriceValue(s.price) != null,
  );

  const totalText = hasAnyPrice ? `$${Math.round(totalValue)}` : "—";

  // Generate copy text for the additional information field
  const generateCopyText = () => {
    const lines = [
      "BOOKING SUMMARY",
      "================",
      "",
      "Services Requested:",
      formData.services.map((s) => `• ${s.title} - ${s.price}`).join("\n"),
      "",
      `Total Estimated: ${totalText}`,
      "",
      "Please confirm availability and let me know if you need any adjustments.",
    ];
    return lines.join("\n");
  };

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
    <section className="py-12 bg-white relative">
      <div className="container-custom max-w-full">
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
              {/* Header with Counter Badge */}
              <div className="text-center max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <h2 className="font-serif text-4xl md:text-5xl text-ka-primary">
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
                        className="w-14 h-14 rounded-full bg-ka-accent text-white flex items-center justify-center font-bold text-xl shadow-lg ring-2 ring-ka-accent ring-offset-4"
                      >
                        {formData.services.length}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <p className="text-gray-600 text-base">
                  Select one or more treatments you'd like to book. We'll
                  provide a summary to paste into your booking confirmation.
                </p>
              </div>

              {/* Service Category Buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 border ${
                      activeCategory === cat.id
                        ? "bg-ka-primary text-white border-ka-primary shadow-lg scale-105"
                        : "bg-white text-gray-600 border-gray-200 hover:border-ka-accent hover:text-ka-accent hover:shadow-md"
                    }`}
                  >
                    {cat.icon}
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Services Grid - Horizontal Layout */}
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {servicesData[activeCategory].map((service, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -4,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      }}
                      onClick={() => handleServiceSelect(service)}
                      className={`p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col h-full group ${
                        formData.services.some((s) => s.title === service.title)
                          ? "bg-ka-primary text-white border-ka-primary shadow-xl ring-2 ring-ka-accent ring-offset-2"
                          : "bg-white text-gray-900 border-gray-100 hover:border-ka-accent hover:shadow-lg"
                      }`}
                    >
                      <div className="flex-1">
                        <h4
                          className={`font-serif text-lg leading-tight mb-2 ${
                            formData.services.some(
                              (s) => s.title === service.title,
                            )
                              ? "text-white"
                              : "text-ka-primary"
                          }`}
                        >
                          {service.title}
                        </h4>
                        {service.sub && (
                          <span
                            className={`text-xs block mb-3 ${
                              formData.services.some(
                                (s) => s.title === service.title,
                              )
                                ? "text-gray-300"
                                : "text-gray-500"
                            }`}
                          >
                            {service.sub}
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-lg font-bold ${
                          formData.services.some(
                            (s) => s.title === service.title,
                          )
                            ? "text-ka-accent"
                            : "text-ka-primary"
                        }`}
                      >
                        {service.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Info Box with Selection Counter */}
              <div className="max-w-2xl mx-auto rounded-2xl border border-ka-accent/15 bg-ka-accent/5 p-6">
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">💡</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-ka-primary mb-1">
                      Pro Tip
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Select multiple services if needed. We'll generate a
                      summary you can copy and paste into your booking
                      confirmation.
                    </p>
                    <AnimatePresence>
                      {formData.services.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="flex items-center gap-2 text-sm font-medium text-ka-accent"
                        >
                          <span className="text-lg">✓</span>
                          {formData.services.length} service
                          {formData.services.length !== 1 ? "s" : ""} selected
                          <span className="text-lg">•</span>
                          <span className="font-bold">{totalText}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* CTA Button with Dynamic Text */}
              <div className="flex justify-center">
                <motion.button
                  onClick={nextStep}
                  disabled={formData.services.length === 0}
                  whileHover={
                    formData.services.length > 0 ? { scale: 1.05 } : {}
                  }
                  whileTap={formData.services.length > 0 ? { scale: 0.98 } : {}}
                  className="px-8 py-4 bg-ka-primary text-white font-semibold rounded-full hover:bg-ka-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center gap-2 text-lg"
                >
                  {formData.services.length > 0 ? (
                    <>
                      Continue with {formData.services.length} service
                      {formData.services.length !== 1 ? "s" : ""}
                      <ArrowRight className="w-5 h-5" />
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
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-serif text-4xl md:text-5xl text-ka-primary mb-3">
                  Complete Your Booking
                </h2>
                <p className="text-gray-600 text-base">
                  Select your date and time using the calendar below
                </p>
              </div>

              {/* Two Column Layout: Summary + Instructions on Left, Calendar on Right */}
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Left Column - Summary & Instructions */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Booking Summary Card */}
                  <motion.div
                    ref={summaryRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl bg-ka-primary text-white p-6 shadow-xl"
                  >
                    <div className="mb-4">
                      <span className="text-xs uppercase tracking-wider text-white/70 font-bold block mb-1">
                        Your Selection
                      </span>
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-serif text-xl">
                          {formData.services.length === 1
                            ? "Selected Service"
                            : "Selected Services"}
                        </h3>
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold"
                        >
                          {formData.services.length}
                        </motion.span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-5 pb-5 border-b border-white/20">
                      {formData.services.map((s) => (
                        <div
                          key={s.title}
                          className="flex items-baseline justify-between gap-3"
                        >
                          <p className="font-serif text-base leading-tight">
                            {s.title}
                          </p>
                          <span className="text-ka-accent font-bold text-sm whitespace-nowrap">
                            {s.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-5 pb-5 border-b border-white/20">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs uppercase tracking-wider font-bold text-white/70">
                          Estimated Total
                        </span>
                        <span className="text-2xl font-bold text-ka-accent">
                          {totalText}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={handleCopy}
                      className={`w-full px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                        copied
                          ? "bg-green-500/30 text-green-100"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied to Clipboard!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Summary
                        </>
                      )}
                    </button>
                  </motion.div>

                  {/* Instructions Card */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                      Next Steps
                    </h4>
                    <ol className="space-y-4 text-sm text-gray-700">
                      <li className="flex gap-3">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-ka-accent/20 text-ka-accent flex items-center justify-center text-xs font-bold">
                          1
                        </span>
                        <span>
                          Select your date &amp; time in the calendar →
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-ka-accent/20 text-ka-accent flex items-center justify-center text-xs font-bold">
                          2
                        </span>
                        <span>
                          Paste the summary into "Additional Information"
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-ka-accent/20 text-ka-accent flex items-center justify-center text-xs font-bold">
                          3
                        </span>
                        <span>Complete your contact details &amp; confirm</span>
                      </li>
                    </ol>
                  </div>

                  {/* Help Card */}
                  <div className="rounded-2xl bg-gradient-to-br from-ka-accent/10 to-ka-accent/5 border border-ka-accent/20 p-5">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-ka-accent">Need help?</strong>
                      <br />
                      Call us at{" "}
                      <a
                        href="tel:3614948656"
                        className="text-ka-accent font-bold hover:underline"
                      >
                        361-494-8656
                      </a>
                    </p>
                  </div>

                  {/* Back Button */}
                  <button
                    onClick={prevStep}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
                  >
                    ← Back to Services
                  </button>
                </div>

                {/* Right Column - Calendar */}
                <div className="lg:col-span-2">
                  <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-lg">
                    <iframe
                      src="https://link.creativeiq.marketing/widget/booking/2CY9UJoww9kjPpTUhXOS"
                      style={{
                        width: "100%",
                        border: "none",
                        overflow: "hidden",
                      }}
                      scrolling="no"
                      id="2CY9UJoww9kjPpTUhXOS_1779042681789"
                      title="K-Aesthetic booking calendar"
                      className="min-h-screen w-full"
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Calendar widget provided by K-Aesthetic
                  </p>
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>

      {/* Load GHL embed script */}
      <script
        src="https://link.creativeiq.marketing/js/form_embed.js"
        type="text/javascript"
      ></script>
    </section>
  );
};

export default BookingFormSection;
