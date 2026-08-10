import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { images } from "../../data/images";

/**
 * Full-bleed studio band — image as the section, not a card inset.
 * Parallax stays transform-only for scroll performance.
 */
const HomePromo = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-8%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.08, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [40, -20]);

  return (
    <section ref={ref} className="relative min-h-[58vh] overflow-hidden md:min-h-[64vh]">
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img
          src={images.spaRoom}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ka-ink/80 via-ka-ink/45 to-ka-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ka-ink/50 via-transparent to-ka-ink/15" />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="container-custom relative z-10 flex min-h-[58vh] flex-col justify-end py-14 md:min-h-[64vh] md:py-20"
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 55, damping: 18 }}
          className="max-w-xl"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
            The studio
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] text-white text-balance">
            Skincare that
            <br />
            <em className="font-normal italic text-ka-accent-light">loves you back</em>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            A calm private suite in San Antonio — every facial tailored, never one-size-fits-all.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link to="/booking" className="btn-hero-solid group !px-7 !py-3.5 !text-[11px]">
              Book your visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <div className="flex gap-8 text-white/80">
              <div>
                <p className="font-serif text-2xl text-ka-accent-light">80+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/45">Clients</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-ka-accent-light">5.0</p>
                <p className="text-[10px] uppercase tracking-widest text-white/45">Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomePromo;
