import React from "react";
import PageHero from "../layout/PageHero";
import { images } from "../../data/images";

const ServicesHero = () => (
  <PageHero
    image={images.servicesHero}
    imagePosition="center 35%"
    imageAlt="Professional facial treatments at K-Aesthetic Skin"
    label="Expert Care"
    title="Our Treatments"
    subtitle="Personalized skincare designed to reveal your natural glow — relaxation and results in equal measure."
    ctaTo="/booking"
    ctaLabel="Book a Treatment"
    minHeight="min-h-[58vh]"
  />
);

export default ServicesHero;
