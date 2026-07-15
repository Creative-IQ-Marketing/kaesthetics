import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroHeader from "../layout/HeroHeader";
import { images } from "../../data/images";

const heroNavCards = [
  { tag: "Services", title: "Curated treatments", image: images.nav.services, to: "/services" },
  { tag: "Booking", title: "Reserve your glow", image: images.nav.booking, to: "/booking" },
  { tag: "Studio", title: "Meet Kassandra", image: images.nav.studio, to: "/contact" },
  { tag: "Contact", title: "Get in touch", image: images.nav.contact, to: "/contact" },
];

const HomeHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden pb-28 md:pb-36"
    >
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img
          src="/hero.webp"
          srcSet="/hero/hero-640.webp 640w, /hero/hero-960.webp 960w, /hero/hero-1280.webp 1280w"
          sizes="100vw"
          alt="Dewy glowing skin — K-Aesthetic Skin San Antonio"
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[62%_center] sm:object-[58%_center] lg:object-[55%_center]"
        />
        <div className="hero-overlay-editorial" />
      </motion.div>

      <HeroHeader light />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-wide relative z-10 flex min-h-[100svh] flex-col px-5 pt-28 sm:px-8 lg:px-12 lg:pt-32"
      >
        <div className="flex flex-1 flex-col justify-center lg:max-w-[52%]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55"
          >
            San Antonio · Licensed Skin Expert
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 18, delay: 0.15 }}
            className="font-serif text-[clamp(2.75rem,7.5vw,5.25rem)] leading-[1.02] text-white"
          >
            A calm ritual
            <br />
            for your skin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-md text-base leading-relaxed text-white/70 md:text-lg"
          >
            Result-driven facials & skin rejuvenation by Kassandra — 17 years
            of expertise, tailored to you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/booking" className="btn-hero-solid !px-8 !py-3.5 !text-[11px]">
              Book Your Visit
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 transition-all hover:bg-white/10"
            >
              View Treatments
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1400px] gap-3 overflow-x-auto pb-2 snap-x-mandatory md:grid md:grid-cols-4 md:overflow-visible">
            {heroNavCards.map((card, i) => (
              <motion.div
                key={card.tag}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50, damping: 18, delay: 0.5 + i * 0.08 }}
                className="snap-card w-[72vw] shrink-0 md:w-auto"
              >
                <Link to={card.to} className="hero-nav-card group">
                  <div className="hero-nav-card-image">
                    <img
                      src={card.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="hero-nav-card-text">
                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-ka-muted">
                      {card.tag}
                    </span>
                    <span className="mt-0.5 font-serif text-base leading-tight text-ka-primary md:text-lg">
                      {card.title}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
