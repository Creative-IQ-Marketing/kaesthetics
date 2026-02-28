import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle,
  Sparkles,
  Flower,
  Droplet,
  ChevronRight,
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
    { title: "Nano Infusion", price: "$150" },
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
  const [step, setStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState("skin-treatments");
  const [formData, setFormData] = useState({
    service: "",
    price: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  // Pre-fill service if passed from another page
  useEffect(() => {
    if (location.state?.serviceName) {
      const serviceName = location.state.serviceName;
      // Find the category and price for this service
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      service: service.title,
      price: service.price,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setStep(4); // Success step
    }, 1500);
    nextStep(); // Go to loading/processing
  };

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
                  {[1, 2, 3].map((s) => (
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
                        {s === 1
                          ? "Service & Time"
                          : s === 2
                            ? "Your Details"
                            : "Confirmation"}
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
                      {/* Category Tabs */}
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

                      {/* Service Selection */}
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

                      <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                        <div>
                          <label className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                            Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-ka-accent focus:border-transparent outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                            Time
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <select
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-ka-accent focus:border-transparent outline-none transition-all"
                            >
                              <option value="">Select time...</option>
                              <option value="09:00">09:00 AM</option>
                              <option value="10:00">10:00 AM</option>
                              <option value="11:00">11:00 AM</option>
                              <option value="13:00">01:00 PM</option>
                              <option value="14:00">02:00 PM</option>
                              <option value="15:00">03:00 PM</option>
                              <option value="16:00">04:00 PM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={nextStep}
                      disabled={
                        !formData.service || !formData.date || !formData.time
                      }
                      className="mt-8 w-full bg-ka-primary text-white py-4 rounded-full font-medium hover:bg-ka-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue to Details
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
                      Your Details
                    </h2>

                    <div className="space-y-6 flex-grow">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jane Doe"
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-ka-accent focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane@example.com"
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-ka-accent focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-ka-accent focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={prevStep}
                        className="px-8 py-4 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={
                          !formData.name || !formData.email || !formData.phone
                        }
                        className="flex-grow bg-ka-primary text-white py-4 rounded-full font-medium hover:bg-ka-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 border-4 border-ka-accent border-t-transparent rounded-full animate-spin mb-6" />
                    <p className="text-gray-500 font-medium">
                      Processing your request...
                    </p>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                      <Sparkles className="w-12 h-12 text-green-600" />
                    </div>
                    <h2 className="font-serif text-3xl text-ka-primary mb-4">
                      Booking Confirmed!
                    </h2>
                    <p className="text-gray-600 max-w-md mb-8">
                      Thank you, {formData.name}. Your appointment for{" "}
                      <strong>{formData.service}</strong> on{" "}
                      <strong>{formData.date}</strong> at{" "}
                      <strong>{formData.time}</strong> has been scheduled.
                    </p>
                    <button
                      onClick={() => (window.location.href = "/")}
                      className="px-8 py-3 bg-ka-primary text-white rounded-full hover:bg-ka-accent transition-colors"
                    >
                      Return Home
                    </button>
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
