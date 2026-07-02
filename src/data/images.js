import heroLocal from "../assets/optimized/hero.webp";

import facialSteam from "../assets/optimized/facial-steam.webp";
import dermaplaningShot from "../assets/optimized/dermaplaning.webp";
import guaShaFacial from "../assets/optimized/gua-sha.webp";
import glowingSkin from "../assets/optimized/glowing-skin.webp";
import driedFlowers from "../assets/optimized/dried-flowers.webp";
import peonyFace from "../assets/optimized/peony-face.webp";
import silkFabric from "../assets/optimized/silk-fabric.webp";
import facialMist from "../assets/optimized/facial-mist.webp";
import silkRibbon from "../assets/optimized/silk-ribbon.webp";

/**
 * Each slot is assigned once per page context to avoid visual repetition.
 * Homepage treatments = featured only. Services page = text menu. Booking = silkRibbon hero.
 */
export const images = {
  hero: heroLocal,

  servicesHero: peonyFace,
  bookingHero: silkRibbon,
  contactHero: driedFlowers,

  about: peonyFace,
  aboutAccent: silkFabric,
  promo: glowingSkin,
  bookCta: driedFlowers,
  spaRoom: silkFabric,

  facial: guaShaFacial,
  glowingSkin,
  products: silkFabric,
  gallery: [guaShaFacial, dermaplaningShot, facialSteam, glowingSkin],
  relaxation: driedFlowers,

  nav: {
    services: facialMist,
    booking: silkRibbon,
    studio: peonyFace,
    contact: driedFlowers,
  },

  featured: [
    {
      title: "Customized Facial",
      price: "$125",
      rating: 5,
      reviews: 48,
      image: guaShaFacial,
      slug: "Customized Facial",
      description: "A fully customized ritual tailored to your skin — the studio's signature experience.",
    },
    {
      title: "Dermaplaning",
      price: "$85",
      rating: 5,
      reviews: 62,
      image: dermaplaningShot,
      slug: "Dermaplaning",
      description: "Gentle blade exfoliation for instantly smoother, brighter skin.",
    },
    {
      title: "Nano Infusion",
      price: "$180",
      rating: 5,
      reviews: 31,
      image: facialMist,
      slug: "Nano Infusion",
      description: "Micro-pathway infusion for lighter, brighter, tighter-looking skin.",
    },
    {
      title: "Astrodome Toning",
      price: "$185",
      rating: 5,
      reviews: 27,
      image: facialSteam,
      slug: "Astrodome Toning",
      description: "LED dome therapy to calm, tone, and rejuvenate your complexion.",
    },
  ],

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
