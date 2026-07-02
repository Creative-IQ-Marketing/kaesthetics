import React from "react";
import { Calendar, UserCheck, HandHeart, Smile } from "lucide-react";
import SectionHeader from "../layout/SectionHeader";
import ScrollReveal, { StaggerReveal, StaggerItem } from "../motion/ScrollReveal";

const steps = [
  { icon: Calendar, title: "Book", description: "Choose your service and preferred time online." },
  { icon: UserCheck, title: "Consult", description: "Get a skin analysis during your first visit." },
  { icon: HandHeart, title: "Treat", description: "Relax while we take care of your skin." },
  { icon: Smile, title: "Glow", description: "Enjoy your radiant, refreshed results." },
];

const ServicesHowItWorks = () => (
  <section className="section-pad border-t border-ka-sand bg-white">
    <div className="container-custom">
      <SectionHeader
        label="Process"
        title={
          <>
            How it <em className="text-accent-italic">works</em>
          </>
        }
        subtitle="From booking to glowing skin — a seamless, personalized experience every visit."
        className="!mb-12"
      />

      <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
        {steps.map((step, index) => (
          <StaggerItem key={step.title}>
            <div className="group h-full rounded-2xl border border-ka-sand bg-ka-cream/50 p-6 text-center transition-all hover:border-ka-accent/30 hover:bg-white hover:shadow-card">
              <div className="relative mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-ka-sand bg-white transition-all group-hover:border-ka-accent group-hover:bg-ka-accent group-hover:text-white">
                <step.icon className="h-5 w-5" />
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ka-primary text-[9px] font-bold text-white">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-serif text-xl text-ka-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ka-muted">{step.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </div>
  </section>
);

export default ServicesHowItWorks;
