import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import ScrollReveal, { StaggerReveal, StaggerItem } from "../motion/ScrollReveal";
import { images } from "../../data/images";

const HomeServices = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-pad surface-grain bg-ka-cream">
      <div className="container-custom">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-10">
          <ScrollReveal className="max-w-xl">
            <p className="section-label mb-2">Treatments</p>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] text-ka-primary text-balance">
              Signature <em className="text-accent-italic">treatments</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <Link to="/services" className="link-arrow shrink-0">
              Full menu
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </ScrollReveal>
        </div>

        <StaggerReveal
          className="flex gap-4 overflow-x-auto pb-2 snap-x-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 xl:grid-cols-4"
          stagger={0.06}
        >
          {images.featured.map((item) => (
            <StaggerItem key={item.slug} className="snap-card w-[78vw] shrink-0 sm:w-auto">
              <TreatmentCard item={item} reduceMotion={reduceMotion} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

function TreatmentCard({ item, reduceMotion }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-ka-ink shadow-card">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${reduceMotion ? "" : "group-hover:scale-[1.06]"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ka-ink via-ka-ink/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col p-5">
          <h3 className="font-serif text-xl text-white">{item.title}</h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/65">{item.description}</p>
          <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3.5">
            <span className="font-serif text-lg text-ka-accent-light">{item.price}</span>
            <Link
              to="/booking"
              state={{ serviceName: item.slug }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-ka-primary"
              aria-label={`Book ${item.title}`}
            >
              <Calendar className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default HomeServices;
