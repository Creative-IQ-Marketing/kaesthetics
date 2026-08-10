import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { images } from "../../data/images";

const HomeBookCTA = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-10%", "10%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.12, 1]);

  return (
    <section ref={ref} className="section-pad-tight bg-ka-cream">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem]">
          <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
            <img
              src={images.bookCta}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-ka-ink via-ka-ink/88 to-ka-primary/70" />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 55, damping: 18 }}
            className="relative grid gap-8 px-7 py-12 md:grid-cols-2 md:items-center md:gap-10 md:px-12 md:py-16"
          >
            <div className="text-left">
              <p className="section-label mb-3 text-ka-accent-light">Ready to glow?</p>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.35rem)] leading-[1.05] text-white text-balance">
                Your best skin
                <br />
                <em className="font-normal italic text-ka-accent-light">awaits</em>
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60 md:text-base">
                Book online in minutes or call the studio directly.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row md:flex-col md:items-end">
              <Link to="/booking" className="btn-hero-solid group !px-8 !py-3.5 !text-[11px]">
                Book online
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:3614948656"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 transition-all hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                (361) 494-8656
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeBookCTA;
