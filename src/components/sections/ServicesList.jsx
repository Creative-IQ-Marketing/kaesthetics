import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Flower, Droplet, ArrowRight } from "lucide-react";

const MotionDiv = motion.div;

export const categories = [
  {
    id: "skin-treatments",
    label: "Skin Treatments",
    icon: <Leaf className="w-5 h-5" />,
  },
  { id: "facials", label: "Facials", icon: <Flower className="w-5 h-5" /> },
  { id: "waxing", label: "Waxing", icon: <Droplet className="w-5 h-5" /> },
];

export const servicesData = {
  "skin-treatments": [
    {
      title: "Nano Infusion",
      price: "$180",
      description:
        "A non-invasive treatment that creates micro pathways infusing active ingredients to pass through the layer of dead epidermal cells enhancing the skin's capability for nutrient absorption. Skin is lighter, brighter, and tighter.",
    },
    {
      title: "Dermaplaning",
      price: "$85",
      description:
        "Gentle exfoliation technique that removes dead skin cells and peach fuzz to reveal a smoother, brighter complexion. Completed with a soothing finishing mask.",
    },
    {
      title: "Microneedling",
      price: "$530",
      sub: "(3 Sessions)",
      description:
        "Minimally invasive procedure that strengthens natural collagen and elastin production. Reduces scarring, smooths fine lines, and gives a healthier glow overall.",
    },
    {
      title: "Oil Planing",
      price: "$95",
      description:
        "Perfect for dry or sensitive skin. Uses a nourishing facial oil as a buffer while gently exfoliating with a sterile blade—removing dead skin cells and peach fuzz with added hydration.",
    },
  ],
  facials: [
    {
      title: "Customized Facial",
      price: "$125",
      description:
        "Tailored to your skin care needs and concerns. Addresses a variety of needs ranging from pre-mature aging to acne flare-ups, to dull lifeless complexion.",
    },
    {
      title: "Oxygen-Infused Facial",
      price: "$135",
      description:
        "Delivers a boost of hydration and nutrients using concentrated oxygen and targeted serums. Revitalizes dull, tired skin, leaving it plump, refreshed, and glowing.",
    },
    {
      title: "Astrodome Toning",
      price: "$185",
      description:
        "Utilizes pulsed light, near-infrared energy, and an oxygen mist to actively regenerate skin cells. Deeply cleanses pores while purifying and renewing the outer skin layer.",
    },
    {
      title: "Bearded Facial",
      price: "$130",
      description:
        "Concludes with high-frequency comb or steam therapy to kill bacteria deep within hair follicles. Includes lightweight moisturizer and protective beard balm.",
    },
    {
      title: "Nano Infusion Facial",
      price: "$180",
      description:
        "Uses a nano-needle device to create tiny channels for specialized serums to soak in deeper. gentle, needle-free way to get an immediate plump and glow.",
    },
    {
      title: "Hydroderm + Bohr",
      price: "$185",
      description:
        "Starts with Hydroderm deep-clean, then Bohr step uses bubbling reaction to 'wake up' skin with oxygen. Finishes with deep serum infusion.",
    },
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

const ServicesList = () => {
  const [activeTab, setActiveTab] = useState("skin-treatments");

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-500 text-sm tracking-widest uppercase font-medium border ${
                activeTab === cat.id
                  ? "bg-ka-primary text-white border-ka-primary shadow-lg scale-105"
                  : "bg-transparent text-gray-500 border-gray-200 hover:border-ka-accent hover:text-ka-accent"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <MotionDiv
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-8 ${
              activeTab === "waxing"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 lg:grid-cols-2"
            }`}
          >
            {servicesData[activeTab].map((service, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-[#FBFBFB] p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-ka-accent/20 ${
                  activeTab === "waxing" ? "text-center" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl text-ka-primary group-hover:text-ka-accent transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-right">
                    <span className="block font-serif text-xl font-medium text-ka-primary">
                      {service.price}
                    </span>
                    {service.sub && (
                      <span className="text-xs text-gray-400 block">
                        {service.sub}
                      </span>
                    )}
                  </div>
                </div>

                {service.description && (
                  <p className="text-gray-500 leading-relaxed mb-8 group-hover:text-gray-600 transition-colors">
                    {service.description}
                  </p>
                )}

                <div
                  className={`flex ${activeTab === "waxing" ? "justify-center" : "justify-start"}`}
                >
                  <Link
                    to="/booking"
                    state={{ serviceName: service.title }}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ka-primary group-hover:text-ka-accent transition-colors border-b border-transparent group-hover:border-ka-accent pb-1"
                  >
                    Book Now{" "}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesList;
