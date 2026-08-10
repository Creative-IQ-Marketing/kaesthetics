import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ScrollReveal, { StaggerReveal, StaggerItem } from "../motion/ScrollReveal";
import OptimizedImage from "../OptimizedImage";
import { images } from "../../data/images";

const HomeAbout = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const mainY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [36, -36]);
  const accentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-20, 28]);

  return (
    <section ref={ref} className="section-pad surface-grain overflow-hidden bg-ka-blush">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3">
              <motion.div style={{ y: mainY }} className="col-span-2">
                <OptimizedImage
                  src={images.about}
                  alt="Kassandra — licensed esthetician"
                  width={5}
                  height={4}
                  wrapperClassName="rounded-2xl shadow-soft"
                  imgClassName={reduceMotion ? "" : "transition-transform duration-700 hover:scale-[1.02]"}
                />
              </motion.div>
              <motion.div style={{ y: accentY }}>
                <OptimizedImage
                  src={images.aboutAccent}
                  alt="Luxury studio atmosphere"
                  width={1}
                  height={1}
                  wrapperClassName="rounded-2xl"
                />
              </motion.div>
              <motion.div
                style={{ y: accentY }}
                className="flex flex-col justify-center rounded-2xl bg-white/80 p-5 shadow-card backdrop-blur-sm"
              >
                <p className="font-serif text-3xl text-ka-accent">17+</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-ka-muted">
                  Years experience
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ScrollReveal direction="right">
              <p className="section-label mb-2">Meet Kassandra</p>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] text-ka-primary text-balance">
                Your trusted
                <br />
                <em className="text-accent-italic">skin expert</em>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ka-muted">
                Nearly two decades as San Antonio&apos;s go-to esthetician. Every
                facial is customized to your unique skin goals.
              </p>
            </ScrollReveal>

            <StaggerReveal className="mt-7 grid gap-2.5 sm:grid-cols-2" stagger={0.05} delay={0.08}>
              {[
                "Licensed & certified",
                "Medical-grade protocols",
                "LED · Nano · Dermaplaning",
                "Private San Antonio suite",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 rounded-xl border border-ka-sand/80 bg-white/70 px-4 py-3 text-sm text-ka-muted backdrop-blur-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ka-accent" />
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <ScrollReveal delay={0.15}>
              <Link to="/contact" className="btn-secondary mt-7">
                Get in touch
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Compact image ribbon — visual breath without another full section */}
        <div className="mt-10 flex gap-3 overflow-x-auto pb-1 snap-x-mandatory md:mt-12 md:grid md:grid-cols-4 md:overflow-visible">
          {[images.gallery[0], images.gallery[1], images.gallery[2], images.relaxation].map(
            (src, i) => (
              <motion.div
                key={i}
                initial={reduceMotion ? false : { opacity: 0, y: 28, rotateZ: i % 2 ? 1.5 : -1.5 }}
                whileInView={{ opacity: 1, y: 0, rotateZ: i % 2 ? 0.6 : -0.6 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 55, damping: 18 }}
                whileHover={reduceMotion ? undefined : { y: -4, rotateZ: 0 }}
                className="snap-card w-[42vw] shrink-0 overflow-hidden rounded-xl shadow-card md:w-auto"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
