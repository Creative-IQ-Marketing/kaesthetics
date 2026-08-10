import heroLocal from "../assets/optimized/hero.webp";

import facialSteam from "../assets/optimized/facial-steam.webp";
import dermaplaningShot from "../assets/optimized/dermaplaning.webp";
import guaShaFacial from "../assets/optimized/gua-sha.webp";
import glowingSkin from "../assets/optimized/glowing-skin.webp";
import driedFlowers from "../assets/optimized/dried-flowers.webp";
import peonyFace from "../assets/optimized/peony-face.webp";

import servicesHero from "../assets/optimized/services-hero.webp";
import bookingHero from "../assets/optimized/booking-hero.webp";
import contactHero from "../assets/optimized/contact-hero.webp";
import bookCta from "../assets/optimized/book-cta.webp";
import spaRoom from "../assets/optimized/spa-room.webp";
import productsFlatlay from "../assets/optimized/products-flatlay.webp";
import aboutAccent from "../assets/optimized/about-accent.webp";
import featuredFacial from "../assets/optimized/featured-facial.webp";
import featuredNano from "../assets/optimized/featured-nano.webp";
import featuredLed from "../assets/optimized/featured-led.webp";
import promoGlow from "../assets/optimized/promo-glow.webp";
import navServices from "../assets/optimized/nav-services.webp";
import navBooking from "../assets/optimized/nav-booking.webp";
import navStudio from "../assets/optimized/nav-studio.webp";
import navContact from "../assets/optimized/nav-contact.webp";

import { servicesData } from "./services";

function servicePrice(title) {
  for (const list of Object.values(servicesData)) {
    const svc = list.find((s) => s.title === title);
    if (svc?.price) return svc.price;
  }
  return null;
}

const featuredMeta = [
  {
    title: "Customized Facial",
    rating: 5,
    reviews: 48,
    image: featuredFacial,
    slug: "Customized Facial",
    description: "A fully customized ritual tailored to your skin — the studio's signature experience.",
  },
  {
    title: "Dermaplaning",
    rating: 5,
    reviews: 62,
    image: dermaplaningShot,
    slug: "Dermaplaning",
    description: "Gentle blade exfoliation for instantly smoother, brighter skin.",
  },
  {
    title: "Nano Infusion",
    rating: 5,
    reviews: 31,
    image: featuredNano,
    slug: "Nano Infusion",
    description: "Micro-pathway infusion for lighter, brighter, tighter-looking skin.",
  },
  {
    title: "Astrodome Toning",
    rating: 5,
    reviews: 27,
    image: featuredLed,
    slug: "Astrodome Toning",
    description: "LED dome therapy to calm, tone, and rejuvenate your complexion.",
  },
];

/**
 * Unique asset per visual slot — no cross-section repeats.
 * Home LCP hero stays on public/hero.webp (+ srcset); heroLocal is for OG/meta only.
 */
export const images = {
  hero: heroLocal,

  servicesHero,
  bookingHero,
  contactHero,

  about: peonyFace,
  aboutAccent,
  promo: promoGlow,
  bookCta,
  spaRoom,

  facial: guaShaFacial,
  glowingSkin,
  products: productsFlatlay,
  gallery: [guaShaFacial, facialSteam, productsFlatlay, glowingSkin],
  relaxation: driedFlowers,

  nav: {
    services: navServices,
    booking: navBooking,
    studio: navStudio,
    contact: navContact,
  },

  featured: featuredMeta.map((item) => ({
    ...item,
    price: servicePrice(item.title),
  })),

  categories: [
    { id: "facials", label: "Facials", count: "8 treatments", path: "/services" },
    { id: "skin-treatments", label: "Skin Treatments", count: "6 treatments", path: "/services" },
    {
      id: "dermaplaning",
      label: "Dermaplaning",
      count: "From $85",
      path: "/booking",
      service: "Dermaplaning",
    },
    {
      id: "led",
      label: "LED Therapy",
      count: "Astrodome",
      path: "/booking",
      service: "Astrodome Toning",
    },
    { id: "waxing", label: "Waxing", count: "20+ services", path: "/services" },
  ],
};
