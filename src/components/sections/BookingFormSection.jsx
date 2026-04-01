import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  CheckCircle,
  Sparkles,
  Flower,
  Droplet,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const categories = [
  {
    id: "skin-treatments",
    label: "Skin Treatments",
    icon: <Sparkles className="w-4 h-4" />,
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
  const GHL_BOOKING_URL = import.meta.env.VITE_GHL_BOOKING_URL || "";
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState("skin-treatments");
  const [formData, setFormData] = useState({
    service: "",
    price: "",
  });

  useEffect(() => {
    if (location.state?.serviceName) {
      const serviceName = location.state.serviceName;
      let foundCategory = "skin-treatments";
      let foundPrice = "";

      Object.entries(servicesData).forEach(([cat, services]) => {
        const service = services.find((s) => s.title === serviceName);
        if (service) {
          foundCategory = cat;
          foundPrice = service.price;
        }
      });

      setActiveCategory(foundCategory);
      setFormData((prev) => ({
        ...prev,
        service: serviceName,
        price: foundPrice,
      }));
    }
  }, [location.state]);

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      service: service.title,
      price: service.price,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <section className="py-20 bg-white relative">
      <div className="container-custom max-w-4xl">
        <div className="bg-[#FBFBFB] rounded-3xl shadow-2xl overflow-hidden border border-white/50 relative">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ka-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-3 min-h-[600px]">
            {/* Sidebar / Progress */}
            <div className="bg-ka-primary text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

              <div>
                <h3 className="font-serif text-2xl mb-8">Your Journey</h3>
                <div className="space-y-6">
                  {[1, 2].map((s) => (
                    <div
                      key={s}
                      className={`flex items-center gap-4 ${step >= s ? "opacity-100" : "opacity-40"} transition-opacity duration-300`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${step >= s ? "bg-white text-ka-primary border-white" : "border-white/30 text-white"}`}
                      >
                        {step > s ? <CheckCircle className="w-4 h-4" /> : s}
                      </div>
                      <span className="text-sm font-medium tracking-wide uppercase">
                        {s === 1 ? "Choose Treatment" : "Secure Booking"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {formData.service && (
                <div className="mt-12 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <span className="text-ka-accent text-xs uppercase tracking-wider font-bold block mb-1">
                    Selected Service
                  </span>
                  <p className="font-serif text-lg">{formData.service}</p>
                </div>
              )}
            </div>

            {/* Form Area */}
            <div className="md:col-span-2 p-8 md:p-12 relative">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col"
                  >
                    <h2 className="font-serif text-3xl text-ka-primary mb-8">
                      Choose Your Treatment
                    </h2>

                    <div className="space-y-8 flex-grow">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
                          Select Service Category
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {categories.map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => setActiveCategory(cat.id)}
                              className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 border ${
                                activeCategory === cat.id
                                  ? "bg-ka-primary text-white border-ka-primary shadow-md"
                                  : "bg-white text-gray-500 border-gray-200 hover:border-ka-accent hover:text-ka-accent"
                              }`}
                            >
                              {cat.icon}
                              {cat.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
                          Choose Treatment
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                          {servicesData[activeCategory].map(
                            (service, index) => (
                              <div
                                key={index}
                                onClick={() => handleServiceSelect(service)}
                                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex justify-between items-center group ${
                                  formData.service === service.title
                                    ? "bg-ka-primary text-white border-ka-primary shadow-lg ring-2 ring-ka-accent ring-offset-2"
                                    : "bg-white border-gray-100 hover:border-ka-accent/50 hover:shadow-md"
                                }`}
                              >
                                <div>
                                  <h4
                                    className={`font-serif text-lg ${formData.service === service.title ? "text-white" : "text-ka-primary"}`}
                                  >
                                    {service.title}
                                  </h4>
                                  {service.sub && (
                                    <span
                                      className={`text-xs block ${formData.service === service.title ? "text-gray-300" : "text-gray-400"}`}
                                    >
                                      {service.sub}
                                    </span>
                                  )}
                                </div>
                                <span
                                  className={`text-sm font-bold ${formData.service === service.title ? "text-ka-accent" : "text-ka-primary"}`}
                                >
                                  {service.price}
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-ka-accent/15 bg-ka-accent/5 p-5">
                        <span className="text-xs uppercase tracking-[0.2em] text-ka-accent font-semibold block mb-2">
                          Booking
                        </span>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Select your treatment here, then continue to the live
                          calendar to choose your date and time.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={nextStep}
                      disabled={!formData.service}
                      className="mt-8 w-full bg-ka-primary text-white py-4 rounded-full font-medium hover:bg-ka-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue to Secure Booking
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col"
                  >
                    <h2 className="font-serif text-3xl text-ka-primary mb-8">
                      Complete Your Booking
                    </h2>

                    <div className="space-y-6 flex-grow">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-ka-primary text-white p-5">
                          <span className="text-xs uppercase tracking-[0.2em] text-white/60 block mb-2">
                            Selected Service
                          </span>
                          <p className="font-serif text-2xl">{formData.service}</p>
                          <p className="text-ka-accent font-semibold mt-2">
                            {formData.price}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 p-5">
                          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 block mb-2">
                            Next Step
                          </span>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Open the calendar below and search for your service.
                            If you do not see it, choose <strong>Other</strong>{" "}
                            and enter <strong>{formData.service}</strong> with a
                            short description in the additional notes field on
                            the form.
                          </p>
                        </div>
                      </div>

                      {GHL_BOOKING_URL ? (
                        <div className="space-y-4">
                          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                            <iframe
                              src={GHL_BOOKING_URL}
                              title="K-Aesthetic secure booking calendar"
                              className="w-full h-[700px]"
                            />
                          </div>
                          <p className="text-sm text-gray-500">
                            If the calendar does not load here, open it directly
                            or call us and we will help you book.
                          </p>
                        </div>
                      ) : (
                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                          <p className="text-sm text-amber-800 leading-relaxed">
                            The booking calendar is not available right now.
                            Please call us to schedule your appointment.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <button
                        onClick={prevStep}
                        className="px-8 py-4 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Back
                      </button>
                      <a
                        href={GHL_BOOKING_URL || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-grow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-colors ${
                          GHL_BOOKING_URL
                            ? "bg-ka-primary text-white hover:bg-ka-accent"
                            : "bg-gray-200 text-gray-500 pointer-events-none"
                        }`}
                      >
                        Open Secure Calendar
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href="tel:3614948656"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
                      >
                        Call to Book
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="mt-6 rounded-2xl bg-[#FBF6F0] border border-ka-accent/15 p-5">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Need help choosing a time? Call us and we’ll get you
                        booked.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
