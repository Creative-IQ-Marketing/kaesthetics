import React, { useRef } from "react";
import { Star } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { images } from "../../data/images";

const featured = {
  text: "Absolutely amazing and knowledgeable. The best in San Antonio hands down. I don't trust anyone else with my face than Kassandra.",
  author: "Joan T.",
};

const support = [
  { text: "I followed her to two different locations and will continue to.", author: "Bertha S." },
  { text: "My skin has never looked better — professional, relaxing, real results.", author: "Maria R." },
];

/**
 * Compact proof band: one cinematic quote over image + two short lines.
 * Replaces the tall 3-card testimonial stack.
 */
const HomeTestimonials = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-6%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src={images.promo}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-110 object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-ka-ink/70" />
      </motion.div>

      <div className="container-custom relative z-10 py-14 md:py-16 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 55, damping: 18 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/50">
            Client love
          </p>
          <div className="mb-5 flex justify-center gap-0.5">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="h-3.5 w-3.5 fill-ka-accent-light text-ka-accent-light" />
            ))}
          </div>
          <blockquote className="font-serif text-[clamp(1.35rem,3.2vw,2.15rem)] leading-snug text-white text-balance">
            &ldquo;{featured.text}&rdquo;
          </blockquote>
          <p className="mt-5 text-sm font-medium tracking-wide text-white/55">— {featured.author}</p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
          {support.map((item, i) => (
            <motion.p
              key={item.author}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.06, type: "spring", stiffness: 60, damping: 18 }}
              className="text-sm leading-relaxed text-white/65"
            >
              <span className="font-serif italic text-white/90">&ldquo;{item.text}&rdquo;</span>
              <span className="mt-2 block text-[11px] uppercase tracking-[0.16em] text-white/40">
                {item.author}
              </span>
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
