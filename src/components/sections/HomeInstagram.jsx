import React from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import ScrollReveal, { StaggerReveal, StaggerItem } from "../motion/ScrollReveal";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  INSTAGRAM_HIGHLIGHTS,
} from "../../data/instagram";

const HomeInstagram = () => (
  <section className="section-pad bg-white pb-28 md:pb-32">
    <div className="container-custom">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-14">
        <ScrollReveal className="max-w-xl">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="section-label mb-3 inline-flex items-center gap-2 hover:text-ka-primary"
          >
            <Instagram className="h-3.5 w-3.5" />
            @{INSTAGRAM_HANDLE}
          </a>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] text-ka-primary">
            Follow the <em className="text-accent-italic">ritual</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary shrink-0">
            Follow on Instagram
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </ScrollReveal>
      </div>

      <StaggerReveal className="flex gap-4 overflow-x-auto pb-2 snap-x-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4" stagger={0.07}>
        {INSTAGRAM_HIGHLIGHTS.map((item) => (
          <StaggerItem key={item.id} className="snap-card w-[72vw] shrink-0 sm:w-auto">
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
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 image-overlay-bottom" />
              <div className="absolute bottom-0 p-5">
                <p className="font-serif text-lg text-white">{item.title}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/60">
                  {item.subtitle}
                </p>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </div>
  </section>
);

export default HomeInstagram;
