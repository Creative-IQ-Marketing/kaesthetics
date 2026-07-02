import React from "react";
import { Star, Quote } from "lucide-react";
import ScrollReveal, { StaggerReveal, StaggerItem } from "../motion/ScrollReveal";

const testimonials = [
  {
    text: "Absolutely amazing and knowledgeable. The best in San Antonio hands down. I don't trust anyone else with my face than Kassandra.",
    author: "Joan T.",
    featured: true,
  },
  {
    text: "I followed her to two different locations and will continue to because of her professional skill.",
    author: "Bertha S.",
  },
  {
    text: "My skin has never looked better. Professional, relaxing, and the results speak for themselves.",
    author: "Maria R.",
  },
];

const HomeTestimonials = () => (
  <section className="section-pad overflow-hidden bg-ka-pink-soft">
    <div className="container-custom">
      <ScrollReveal className="mb-14 max-w-xl">
        <p className="section-label mb-3">Testimonials</p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] text-ka-primary">
          What our <em className="text-accent-italic">clients</em> say
        </h2>
      </ScrollReveal>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x-mandatory lg:hidden">
        {testimonials.map((item, i) => (
          <ScrollReveal key={item.author} delay={i * 0.08} className="snap-card w-[88vw] shrink-0">
            <TestimonialCard item={item} />
          </ScrollReveal>
        ))}
      </div>

      <div className="hidden gap-5 lg:grid lg:grid-cols-12">
        <ScrollReveal direction="left" className="lg:col-span-7">
          <TestimonialCard item={testimonials[0]} featured />
        </ScrollReveal>
        <StaggerReveal className="flex flex-col gap-5 lg:col-span-5" stagger={0.12}>
          {testimonials.slice(1).map((item) => (
            <StaggerItem key={item.author} direction="right">
              <TestimonialCard item={item} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </div>
  </section>
);

function TestimonialCard({ item, featured = false }) {
  return (
    <div
      className={`premium-card premium-card-pad h-full transition-transform duration-500 hover:-translate-y-1 ${featured ? "lg:min-h-[320px] lg:flex lg:flex-col lg:justify-between" : ""}`}
    >
      <div>
        <Quote className={`mb-4 text-ka-accent/35 ${featured ? "h-8 w-8" : "h-6 w-6"}`} />
        <div className="mb-4 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star key={j} className="h-3.5 w-3.5 fill-ka-accent text-ka-accent" />
          ))}
        </div>
        <p
          className={`font-serif italic leading-relaxed text-ka-primary ${featured ? "text-xl md:text-2xl" : "text-lg"}`}
        >
          &ldquo;{item.text}&rdquo;
        </p>
      </div>
      <p className="mt-6 border-t border-ka-sand pt-4 text-sm font-medium text-ka-muted">
        — {item.author}
      </p>
    </div>
  );
}

export default HomeTestimonials;
