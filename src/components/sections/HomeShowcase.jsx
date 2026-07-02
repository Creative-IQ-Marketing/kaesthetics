import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "../../data/images";
import ScrollReveal from "../motion/ScrollReveal";

const HomeShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const mainY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const sideY = useTransform(scrollYProgress, [0, 1], [-60, 80]);
  const quoteRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);

  return (
    <section ref={ref} className="overflow-hidden bg-ka-cream py-20 md:py-32">
      <div className="container-custom">
        <ScrollReveal className="mb-12 md:mb-16" y={50}>
          <p className="section-label mb-4">The Studio</p>
          <h2 className="section-title max-w-3xl">
            Skincare is a
            <em className="ml-6 italic font-normal text-ka-accent md:ml-12">ritual</em>
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          <motion.div
            style={{ y: mainY }}
            className="perspective-scene md:col-span-7 md:row-span-2"
          >
            <motion.div
              initial={{ opacity: 0, rotateZ: -3, rotateX: 4, y: 80 }}
              whileInView={{ opacity: 1, rotateZ: -2, rotateX: 2, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 50, damping: 17, mass: 1.3 }}
              className="relative overflow-hidden rounded-2xl"
              style={{
                transformPerspective: 1400,
                boxShadow: "-12px 32px 80px rgba(26,20,16,0.2)",
              }}
            >
              <img
                src={images.spaRoom}
                alt="Luxurious treatment room"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover md:min-h-[520px] md:aspect-auto"
              />
              <div className="absolute inset-0 image-overlay-bottom" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                  Our Studio
                </p>
                <p className="mt-2 max-w-sm font-serif text-2xl text-white md:text-4xl">
                  A serene space for your transformation
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: sideY }} className="md:col-span-5 md:-mt-8">
            <motion.div
              initial={{ opacity: 0, rotateZ: 3, y: 60 }}
              whileInView={{ opacity: 1, rotateZ: 2, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 55, damping: 18, delay: 0.1 }}
              className="overflow-hidden rounded-2xl shadow-elevated"
              style={{ transformPerspective: 1200 }}
            >
              <img
                src={images.relaxation}
                alt="Relaxing spa"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            style={{ rotateZ: quoteRotate }}
            className="md:col-span-5 md:col-start-8 md:-mt-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 18, delay: 0.15 }}
              className="rounded-2xl bg-white p-8 shadow-card md:p-10"
            >
              <p className="font-serif text-2xl leading-snug text-ka-primary md:text-3xl">
                "Great skin starts with understanding yours."
              </p>
              <p className="mt-4 text-sm text-ka-muted">— Kassandra</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Gallery — horizontal scroll mobile, offset grid desktop */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 snap-x-mandatory md:mt-12 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {images.gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateZ: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: i % 2 ? 1 : -1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 55, damping: 18 }}
              className={`snap-card shrink-0 overflow-hidden rounded-xl shadow-card md:shrink ${
                i % 2 === 1 ? "md:mt-8" : ""
              }`}
              style={{ width: "min(70vw, 100%)" }}
              whileHover={{ y: -6, rotateZ: 0 }}
            >
              <img
                src={src}
                alt={`Treatment ${i + 1}`}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeShowcase;
