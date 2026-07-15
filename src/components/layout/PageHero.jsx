import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroHeader from "./HeroHeader";
import OptimizedImage from "../OptimizedImage";

export default function PageHero({
  image,
  imageAlt = "",
  imagePosition = "65% center",
  label,
  title,
  subtitle,
  cta,
  ctaTo = "/booking",
  ctaLabel = "Book Now",
  minHeight = "min-h-[52vh]",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className={`relative w-full overflow-hidden ${minHeight}`}>
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <OptimizedImage
          src={image}
          alt={imageAlt}
          fill
          priority
          objectPosition={imagePosition}
          wrapperClassName="h-full w-full"
        />
        <div className="hero-overlay-premium" />
      </motion.div>

      <HeroHeader light />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-wide relative z-10 flex h-full min-h-[inherit] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20 lg:pt-36"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 55, damping: 18 }}
          className="max-w-2xl"
        >
          {label && (
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
              {label}
            </p>
          )}
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
              {subtitle}
            </p>
          )}
          {cta !== false && (
            <Link to={ctaTo} className="btn-hero-solid mt-8">
              {ctaLabel}
            </Link>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
