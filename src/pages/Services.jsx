import React from "react";
import ServicesHero from "../components/sections/ServicesHero";
import ServicesHowItWorks from "../components/sections/ServicesHowItWorks";
import ServicesList from "../components/sections/ServicesList";

export default function Services() {
  return (
    <div className="overflow-hidden">
      <ServicesHero />
      <ServicesHowItWorks />
      <ServicesList />
    </div>
  );
}
