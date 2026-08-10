/**
 * Image asset guide — generated + curated sources.
 *
 * Current production map lives in src/data/images.js (unique slot per placement).
 * New photos: drop PNG/JPG into src/assets/generated/, add a slot in
 * scripts/optimize-images.mjs, run `npm run optimize-images`, then wire in images.js.
 *
 * Home LCP hero is public/hero.webp (+ /hero/srcset) — do not replace casually.
 * Tip: warm honey / soft rose grade, soft light, no competitor logos or watermarks.
 */

export const assetSlots = [
  {
    id: "hero",
    saveAs: "src/assets/hero.png",
    aspect: "Wide landscape (16:9+)",
    pinterest: [
      "glowing skin close up aesthetic warm",
      "luxury facial spa editorial photography",
      "dewy skin beauty portrait soft light",
    ],
    priority: "Have — replace with Kassandra/studio shot when available",
  },
  {
    id: "nav-services",
    saveAs: "src/assets/nav/services.jpg",
    aspect: "Square 1:1",
    pinterest: [
      "facial treatment spa hands aesthetic",
      "esthetician facial massage close up",
    ],
  },
  {
    id: "nav-booking",
    saveAs: "src/assets/nav/booking.jpg",
    aspect: "Square 1:1",
    pinterest: [
      "skincare products flat lay beige aesthetic",
      "luxury serum bottles minimal spa",
    ],
  },
  {
    id: "nav-studio",
    saveAs: "src/assets/nav/studio.jpg",
    aspect: "Square 1:1",
    pinterest: [
      "esthetician spa treatment room beige",
      "minimalist beauty studio interior warm",
    ],
  },
  {
    id: "nav-contact",
    saveAs: "src/assets/nav/contact.jpg",
    aspect: "Square 1:1",
    pinterest: [
      "woman glowing skin natural makeup close up",
      "radiant skin portrait soft window light",
    ],
  },
  {
    id: "category-facials",
    saveAs: "src/assets/categories/facials.jpg",
    aspect: "Portrait 4:5",
    pinterest: [
      "luxury facial spa woman relaxing",
      "hydrafacial aesthetic photography",
      "glowing facial treatment editorial",
    ],
  },
  {
    id: "category-skin-treatments",
    saveAs: "src/assets/categories/skin-treatments.jpg",
    aspect: "Portrait 4:5",
    pinterest: [
      "microneedling facial aesthetic", // or nano infusion
      "skin treatment serum dropper face",
      "medical aesthetic skin procedure soft",
    ],
  },
  {
    id: "category-dermaplaning",
    saveAs: "src/assets/categories/dermaplaning.jpg",
    aspect: "Portrait 4:5",
    pinterest: [
      "dermaplaning facial treatment",
      "esthetician blade facial exfoliation",
    ],
  },
  {
    id: "category-led",
    saveAs: "src/assets/categories/led-therapy.jpg",
    aspect: "Portrait 4:5",
    pinterest: [
      "LED light therapy facial mask spa",
      "red light therapy face aesthetic",
      "astrodome facial led treatment",
    ],
  },
  {
    id: "category-waxing",
    saveAs: "src/assets/categories/waxing.jpg",
    aspect: "Portrait 4:5",
    pinterest: [
      "brow waxing aesthetic spa",
      "eyebrow shaping beauty salon minimal",
    ],
  },
  {
    id: "featured-customized-facial",
    saveAs: "src/assets/featured/customized-facial.jpg",
    aspect: "Portrait 4:5",
    pinterest: ["custom facial spa glowing skin", "facial massage luxury aesthetic"],
  },
  {
    id: "featured-dermaplaning",
    saveAs: "src/assets/featured/dermaplaning.jpg",
    aspect: "Portrait 4:5",
    pinterest: ["dermaplaning before after glowing", "smooth skin facial aesthetic"],
  },
  {
    id: "featured-nano-infusion",
    saveAs: "src/assets/featured/nano-infusion.jpg",
    aspect: "Portrait 4:5",
    pinterest: [
      "nano infusion facial",
      "serum infusion skin treatment aesthetic",
      "korean skin infusion facial",
    ],
  },
  {
    id: "featured-astrodome",
    saveAs: "src/assets/featured/astrodome.jpg",
    aspect: "Portrait 4:5",
    pinterest: ["LED dome facial spa", "oxygen facial treatment aesthetic"],
  },
  {
    id: "promo-studio",
    saveAs: "src/assets/promo/studio.jpg",
    aspect: "Portrait or 4:3",
    pinterest: [
      "luxury skincare products marble aesthetic",
      "spa interior beige minimal high end",
    ],
  },
  {
    id: "about-kassandra",
    saveAs: "src/assets/about/kassandra.jpg",
    aspect: "Portrait 4:5",
    pinterest: [
      "female esthetician portrait professional warm",
      "skincare expert salon owner aesthetic",
    ],
    notes: "BEST: real photo of Kassandra at the studio",
  },
  {
    id: "about-portrait",
    saveAs: "src/assets/about/client-glow.jpg",
    aspect: "Square 1:1",
    pinterest: [
      "glowing skin close up natural light",
      "dewy skin macro beauty photography",
    ],
  },
  {
    id: "book-cta",
    saveAs: "src/assets/cta/booking.jpg",
    aspect: "Wide landscape",
    pinterest: [
      "spa treatment room warm lighting wide",
      "luxury facial bed aesthetic interior",
    ],
  },
  {
    id: "instagram-treatments",
    saveAs: "src/assets/instagram/treatments.jpg",
    aspect: "Portrait 4:5",
    pinterest: ["facial treatment reel aesthetic", "spa day skincare routine"],
  },
  {
    id: "instagram-tips",
    saveAs: "src/assets/instagram/tips.jpg",
    aspect: "Portrait 4:5",
    pinterest: ["skincare routine flat lay beige", "morning skincare aesthetic"],
  },
  {
    id: "instagram-results",
    saveAs: "src/assets/instagram/results.jpg",
    aspect: "Portrait 4:5",
    pinterest: ["glowing skin no makeup aesthetic", "clear skin portrait soft"],
  },
  {
    id: "instagram-offers",
    saveAs: "src/assets/instagram/offers.jpg",
    aspect: "Portrait 4:5",
    pinterest: [
      "self care spa aesthetic woman",
      "beauty studio invitation aesthetic",
    ],
  },
  {
    id: "services-page-hero",
    saveAs: "src/assets/pages/services-hero.jpg",
    aspect: "Ultra-wide",
    pinterest: ["facial spa wide shot editorial", "beauty clinic interior cinematic"],
  },
  {
    id: "booking-page-hero",
    saveAs: "src/assets/pages/booking-hero.jpg",
    aspect: "Ultra-wide",
    pinterest: ["calm spa waiting room aesthetic", "wellness lounge beige minimal"],
  },
  {
    id: "contact-page-hero",
    saveAs: "src/assets/pages/contact-hero.jpg",
    aspect: "Ultra-wide",
    pinterest: ["esthetician studio reception warm", "beauty salon entrance minimal"],
  },
];

/** Extra shots that elevate the whole site */
export const bonusShots = [
  "Treatment in progress (hands + face, no identifiable client without consent)",
  "Product shelf / serum bottles at the studio",
  "Before/after style glowing skin (with client permission)",
  "Studio exterior or suite door (San Antonio location)",
  "Kassandra performing Korean Skin Infusion / nano treatment",
  "Flat lay: gua sha, rollers, towels — beige tones",
];
