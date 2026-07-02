import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../layout/SectionHeader";
import ScrollReveal from "../motion/ScrollReveal";
import { serviceCategories, servicesData } from "../../data/services";

const ServicesList = () => {
  const [activeTab, setActiveTab] = useState("skin-treatments");

  return (
    <section className="section-pad bg-ka-cream">
      <div className="container-custom">
        <SectionHeader
          label="Menu"
          title="Select a category"
          subtitle="All treatments are performed by Kassandra with medical-grade products."
          className="!mb-10"
        />

        <ScrollReveal className="mb-12 flex flex-wrap justify-center gap-2">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`tab-pill ${
                activeTab === cat.id ? "tab-pill-active" : "tab-pill-inactive"
              }`}
            >
              <cat.icon className="h-4 w-4" />
              {cat.label}
            </button>
          ))}
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className={`grid gap-4 ${
              activeTab === "waxing"
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : "lg:grid-cols-2"
            }`}
          >
            {servicesData[activeTab].map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="premium-card group"
              >
                <div className="premium-card-pad">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl text-ka-primary transition-colors group-hover:text-ka-accent">
                      {service.title}
                    </h3>
                    <span className="shrink-0 font-serif text-xl text-ka-accent">
                      {service.price}
                    </span>
                  </div>

                  {service.durationMinutes && (
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ka-muted">
                      {service.durationMinutes} min
                    </p>
                  )}

                  {service.description && (
                    <p className="mb-6 text-sm leading-relaxed text-ka-muted">
                      {service.description}
                    </p>
                  )}

                  <Link
                    to="/booking"
                    state={{ serviceName: service.title }}
                    className="link-arrow"
                  >
                    Book now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesList;
