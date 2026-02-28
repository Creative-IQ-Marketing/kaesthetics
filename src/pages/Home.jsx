import React from 'react';
import HomeHero from '../components/sections/HomeHero';
import HomeWhyChooseUs from '../components/sections/HomeWhyChooseUs';
import HomeTestimonials from '../components/sections/HomeTestimonials';
import HomeShowcase from '../components/sections/HomeShowcase';
import HomeInstagram from '../components/sections/HomeInstagram';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HomeHero />
      <HomeWhyChooseUs />
      <HomeShowcase />
      <HomeTestimonials />
      <HomeInstagram />
    </div>
  );
}