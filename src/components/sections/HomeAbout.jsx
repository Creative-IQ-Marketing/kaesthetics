import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal, { StaggerReveal, StaggerItem } from "../motion/ScrollReveal";
import OptimizedImage from "../OptimizedImage";
import { images } from "../../data/images";

const HomeAbout = () => (
  <section className="section-pad bg-ka-cream">
    <div className="container-custom">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal direction="left">
          <div className="grid grid-cols-2 gap-3">
            <OptimizedImage
              src={images.about}
              alt="Kassandra — licensed esthetician"
              width={5}
              height={4}
              wrapperClassName="col-span-2 rounded-2xl shadow-soft"
            />
            <OptimizedImage
              src={images.aboutAccent}
              alt="Luxury studio atmosphere"
              width={1}
              height={1}
              wrapperClassName="rounded-2xl"
            />
            <div className="flex flex-col justify-center rounded-2xl bg-white p-5 shadow-card">
              <p className="font-serif text-3xl text-ka-accent">17+</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-ka-muted">
                Years Experience
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal direction="right">
            <p className="section-label mb-3">Meet Kassandra</p>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] text-ka-primary">
              Your trusted
              <br />
              <em className="text-accent-italic">skin expert</em>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ka-muted">
              Nearly two decades as San Antonio&apos;s go-to esthetician. Every
              facial is customized to your unique skin goals.
            </p>
          </ScrollReveal>

          <StaggerReveal className="mt-8 grid gap-3 sm:grid-cols-2" stagger={0.06} delay={0.1}>
            {[
              "Licensed & certified esthetician",
              "Medical-grade products & technology",
              "Astrodome LED · Nano Infusion · Dermaplaning",
              "Private studio in San Antonio",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 rounded-xl border border-ka-sand bg-white px-4 py-3.5 text-sm text-ka-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ka-accent" />
                  {item}
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.2}>
            <Link to="/contact" className="btn-secondary mt-8">
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default HomeAbout;
