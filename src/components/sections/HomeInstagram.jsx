import React from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal, { StaggerReveal, StaggerItem } from "../motion/ScrollReveal";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  INSTAGRAM_HIGHLIGHTS,
} from "../../data/instagram";

const HomeInstagram = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-pad-tight surface-grain bg-ka-cream pb-24 md:pb-28">
      <div className="container-custom">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-8">
          <ScrollReveal className="max-w-xl">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="section-label mb-2 inline-flex items-center gap-2 hover:text-ka-primary"
            >
              <Instagram className="h-3.5 w-3.5" />
              @{INSTAGRAM_HANDLE}
            </a>
            <h2 className="font-serif text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.05] text-ka-primary">
              Follow the <em className="text-accent-italic">ritual</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow shrink-0"
            >
              Instagram
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </ScrollReveal>
        </div>

        <StaggerReveal
          className="flex gap-3 overflow-x-auto pb-1 snap-x-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
          stagger={0.05}
        >
          {INSTAGRAM_HIGHLIGHTS.map((item) => (
            <StaggerItem key={item.id} className="snap-card w-[68vw] shrink-0 sm:w-auto">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl bg-ka-pink"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className={`aspect-[4/5] w-full object-cover transition-transform duration-700 ${reduceMotion ? "" : "group-hover:scale-105"}`}
                />
                <div className="absolute inset-0 image-overlay-bottom" />
                <div className="absolute bottom-0 p-4">
                  <p className="font-serif text-base text-white">{item.title}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/55">
                    {item.subtitle}
                  </p>
                </div>
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
                />
              </a>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default HomeInstagram;
