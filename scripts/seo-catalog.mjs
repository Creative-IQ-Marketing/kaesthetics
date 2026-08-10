export const SITE_URL = "https://k-aesthetic.skin";
export const SITE_NAME = "K-Aesthetic Skin";
export const LEGAL_NAME = "K-Aesthetic Skin";
export const OG_IMAGE = `${SITE_URL}/kalogo.png`;
export const LOGO = `${SITE_URL}/kalogo.png`;
export const PHONE = "(361) 494-8656";
export const PHONE_TEL = "+13614948656";
export const EMAIL = "Kaestheticsatx@gmail.com";
export const ORG_TYPE = "HealthAndBeautyBusiness";
export const AREA_SERVED = "San Antonio, Texas";

const DEFAULT_KEYWORDS =
  "San Antonio skincare, facial treatments San Antonio, skincare studio San Antonio TX, esthetician San Antonio, K-Aesthetic Skin, acne facial San Antonio, chemical peel San Antonio TX, dermaplaning San Antonio, anti-aging facial San Antonio, HydraFacial San Antonio, LED light therapy San Antonio, skin rejuvenation San Antonio, custom facial San Antonio";

function crumbs(...parts) {
  return parts.map(([label, href]) => ({ label, href }));
}

export function toCanonical(path) {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const SEO_PAGES = [
  {
    path: "/",
    title: "K-Aesthetic Skin | Facial Treatments & Skincare in San Antonio, TX",
    description:
      "San Antonio's premier skincare studio. Result-driven facials, chemical peels, dermaplaning, acne treatments & anti-aging skin treatments. Book your appointment at (361) 494-8656.",
    keywords: DEFAULT_KEYWORDS,
    pageType: "website",
    priority: "1.0",
    changefreq: "weekly",
    schemaType: "WebPage",
    ogImageAlt: "K-Aesthetic Skin skincare studio in San Antonio",
  },
  {
    path: "/services",
    title: "Services | K-Aesthetic Skin",
    description:
      "Explore K-Aesthetic Skin services in San Antonio, TX: facials, skin treatments, and waxing. Book online for result-driven skincare.",
    keywords: DEFAULT_KEYWORDS,
    pageType: "website",
    priority: "0.9",
    changefreq: "weekly",
    breadcrumbs: crumbs(["Services", "/services"]),
    schemaType: "Service",
    ogImageAlt: "Facial, skincare, and waxing services at K-Aesthetic Skin",
  },
  {
    path: "/booking",
    title: "Book an Appointment | K-Aesthetic Skin",
    description:
      "Book your skincare appointment with K-Aesthetic Skin in San Antonio, TX. Choose a service and request a time online, or call/text us for help.",
    keywords: DEFAULT_KEYWORDS,
    pageType: "website",
    priority: "0.9",
    changefreq: "weekly",
    breadcrumbs: crumbs(["Booking", "/booking"]),
    schemaType: "ContactPage",
    ogImageAlt: "Book a skincare appointment at K-Aesthetic Skin",
  },
  {
    path: "/contact",
    title: "Contact | K-Aesthetic Skin",
    description:
      "Contact K-Aesthetic Skin in San Antonio, TX. Call or text +1-361-494-8656, email Kaestheticsatx@gmail.com, or send a message online.",
    keywords: DEFAULT_KEYWORDS,
    pageType: "website",
    priority: "0.8",
    changefreq: "monthly",
    breadcrumbs: crumbs(["Contact", "/contact"]),
    schemaType: "ContactPage",
    ogImageAlt: "Contact K-Aesthetic Skin in San Antonio",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | K-Aesthetic Skin",
    description:
      "Privacy Policy for K-Aesthetic Skin. Learn how we collect, use, and protect your information. Contact us at Kaestheticsatx@gmail.com with questions.",
    keywords:
      "K-Aesthetic Skin privacy policy, skincare studio privacy, personal information",
    pageType: "website",
    priority: "0.3",
    changefreq: "yearly",
    breadcrumbs: crumbs(["Privacy Policy", "/privacy-policy"]),
    schemaType: "WebPage",
    ogImageAlt: "K-Aesthetic Skin privacy policy",
    sitemap: false,
  },
  {
    path: "/terms-conditions",
    title: "Terms of Use | K-Aesthetic Skin",
    description:
      "Terms of Use for K-Aesthetic Skin. Review appointment, cancellation, and service terms. Contact Kaestheticsatx@gmail.com with questions.",
    keywords:
      "K-Aesthetic Skin terms of use, appointment policy, cancellation policy",
    pageType: "website",
    priority: "0.3",
    changefreq: "yearly",
    breadcrumbs: crumbs(["Terms of Use", "/terms-conditions"]),
    schemaType: "WebPage",
    ogImageAlt: "K-Aesthetic Skin terms of use",
    sitemap: false,
  },
];

export const IMAGE_SITEMAP = [
  {
    path: "/",
    images: [
      { loc: OG_IMAGE, title: "K-Aesthetic Skin" },
      {
        loc: `${SITE_URL}/hero/hero-960.webp`,
        title: "K-Aesthetic Skin facial treatments in San Antonio",
      },
    ],
  },
];
