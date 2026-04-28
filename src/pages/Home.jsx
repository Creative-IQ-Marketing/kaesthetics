import React from "react";
import HomeHero from "../components/sections/HomeHero";
import HomeWhyChooseUs from "../components/sections/HomeWhyChooseUs";
import HomeTestimonials from "../components/sections/HomeTestimonials";
import HomeShowcase from "../components/sections/HomeShowcase";
import HomeInstagram from "../components/sections/HomeInstagram";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import {
  BUSINESS_NAME,
  CITY,
  COUNTRY,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  EMAIL,
  PHONE_E164,
  POSTAL_CODE,
  PRICE_RANGE,
  REGION,
  SAME_AS,
  STREET_ADDRESS,
  getBaseUrl,
} from "../seo/config";

export default function Home() {
  const baseUrl = getBaseUrl();
  const title = `${BUSINESS_NAME} | Facial Treatments & Skincare in ${CITY}, ${REGION}`;
  const canonical = `${baseUrl}/`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      name: BUSINESS_NAME,
      url: baseUrl,
      description: DEFAULT_DESCRIPTION,
    },
    {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "@id": `${baseUrl}#business`,
      name: BUSINESS_NAME,
      url: baseUrl,
      telephone: PHONE_E164,
      email: EMAIL,
      priceRange: PRICE_RANGE,
      address: {
        "@type": "PostalAddress",
        streetAddress: STREET_ADDRESS,
        addressLocality: CITY,
        addressRegion: REGION,
        postalCode: POSTAL_CODE,
        addressCountry: COUNTRY,
      },
      areaServed: [{ "@type": "City", name: CITY }],
      sameAs: SAME_AS,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description: DEFAULT_DESCRIPTION,
      isPartOf: { "@id": `${baseUrl}#website` },
      about: { "@id": `${baseUrl}#business` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: canonical,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What skincare treatments does K-Aesthetic Skin offer in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `${BUSINESS_NAME} in San Antonio offers result-driven skincare treatments including custom facials, chemical peels, dermaplaning, acne facials, anti-aging facials, microneedling, LED light therapy, and skin rejuvenation. Book at ${PHONE_E164} or online.`,
          },
        },
        {
          "@type": "Question",
          name: "Where is K-Aesthetic Skin located in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `${BUSINESS_NAME} is located at ${STREET_ADDRESS}, ${CITY}, ${REGION} ${POSTAL_CODE}. Call us at ${PHONE_E164} to book your appointment.`,
          },
        },
        {
          "@type": "Question",
          name: "What is dermaplaning and is it right for my skin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dermaplaning is a non-invasive exfoliation treatment that gently removes dead skin cells and peach fuzz, leaving skin smoother and brighter. It helps skincare products absorb more effectively and is suitable for most skin types. K-Aesthetic Skin offers professional dermaplaning in San Antonio, TX.",
          },
        },
        {
          "@type": "Question",
          name: "How do I treat acne with professional facials in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "K-Aesthetic Skin offers professional acne facials in San Antonio designed to deep-cleanse pores, reduce inflammation, and clear breakouts using medical-grade products. Book an acne facial consultation at (361) 494-8656.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I get a professional facial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most estheticians recommend getting a professional facial every 4–6 weeks to align with your skin's natural cell turnover. K-Aesthetic Skin creates personalized skincare plans to match your specific skin goals and concerns.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book an appointment at K-Aesthetic Skin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can book an appointment at K-Aesthetic Skin online through the Booking page at k-aesthetic.skin/booking, or call/text (361) 494-8656. We serve clients throughout San Antonio, TX.",
          },
        },
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      <SEO
        title={title}
        description={DEFAULT_DESCRIPTION}
        keywords={DEFAULT_KEYWORDS}
        canonical={canonical}
        pageType="website"
      />
      <StructuredData schemas={schemas} />
      <HomeHero />
      <HomeWhyChooseUs />
      <HomeShowcase />
      <HomeTestimonials />
      <HomeInstagram />
    </div>
  );
}
