import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { serviceCategories, servicesData } from "../../data/services";

const MotionDiv = motion.div;

const ServicesList = () => {
  const [activeTab, setActiveTab] = useState("skin-treatments");

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-500 text-sm tracking-widest uppercase font-medium border ${
                activeTab === cat.id
                  ? "bg-ka-primary text-white border-ka-primary shadow-lg scale-105"
                  : "bg-transparent text-gray-500 border-gray-200 hover:border-ka-accent hover:text-ka-accent"
              }`}
            >
              <cat.icon className="w-5 h-5" />
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
