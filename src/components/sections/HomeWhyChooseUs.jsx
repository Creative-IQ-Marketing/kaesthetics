import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "../../data/images";
import ScrollReveal from "../motion/ScrollReveal";

const features = [
  {
    n: "01",
    title: "17 Years of Mastery",
    desc: "Led by Kassandra — devoted to your skin's long-term health and radiance.",
  },
  {
    n: "02",
    title: "Advanced Technology",
    desc: "Astrodome LED, nano-infusion & oxygen facials for real, visible results.",
  },
  {
    n: "03",
    title: "Personalized Protocols",
    desc: "Every facial tailored — never a one-size-fits-all approach.",
  },
];

const HomeWhyChooseUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const col1Y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section ref={ref} className="overflow-hidden bg-ka-blush py-20 md:py-32">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <ScrollReveal className="lg:col-span-4 lg:pt-12" y={50} rotateZ={-1}>
            <p className="section-label mb-4">Why K-Aesthetic</p>
            <h2 className="section-title">
              Expertise
              <br />
              <em className="italic font-normal">meets elegance</em>
            </h2>
          </ScrollReveal>

          <div className="space-y-0 lg:col-span-4">
            {features.map((f, i) => (
              <ScrollReveal key={f.n} y={60} delay={i * 0.1} rotateZ={i % 2 ? 1 : -1}>
                <div className="border-b border-ka-primary/10 py-8 first:pt-0">
                  <span className="font-serif text-4xl text-ka-accent/50">{f.n}</span>
                  <h3 className="mt-2 font-serif text-xl text-ka-primary">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ka-muted">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Parallax image columns */}
          <div className="relative hidden lg:col-span-4 lg:block">
            <motion.div style={{ y: col1Y }} className="absolute left-0 top-0 w-[55%]">
              <motion.img
                src={images.facial}
                alt=""
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-elevated"
                style={{ rotateZ: -4, transformPerspective: 1200 }}
                whileHover={{ rotateZ: -2, scale: 1.03 }}
              />
            </motion.div>
            <motion.div style={{ y: col2Y }} className="absolute right-0 top-24 w-[50%]">
              <motion.img
                src={images.glowingSkin}
                alt=""
                className="aspect-square w-full rounded-2xl object-cover shadow-elevated"
                style={{ rotateZ: 3, transformPerspective: 1200 }}
                whileHover={{ rotateZ: 1.5, scale: 1.03 }}
              />
            </motion.div>
            <motion.img
              src={images.products}
              alt=""
              style={{ y: col1Y }}
              className="absolute bottom-0 left-1/4 w-[40%] rounded-xl object-cover shadow-soft"
            />
          </div>

          {/* Mobile image strip */}
          <div className="flex gap-3 overflow-x-auto pb-2 lg:hidden snap-x-mandatory">
            {[images.facial, images.glowingSkin, images.products].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                initial={{ opacity: 0, x: 40, rotateZ: i % 2 ? 3 : -3 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="snap-card h-48 w-36 shrink-0 rounded-xl object-cover shadow-card"
                style={{ rotateZ: i % 2 ? 2 : -2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;
