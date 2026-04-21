import React from 'react';
import HomeHero from '../components/sections/HomeHero';
import HomeWhyChooseUs from '../components/sections/HomeWhyChooseUs';
import HomeTestimonials from '../components/sections/HomeTestimonials';
import HomeShowcase from '../components/sections/HomeShowcase';
import HomeInstagram from '../components/sections/HomeInstagram';
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
          name: "Where is K-Aesthetic Skin located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `${BUSINESS_NAME} is located at ${STREET_ADDRESS}, ${CITY}, ${REGION} ${POSTAL_CODE}.`,
          },
        },
        {
          "@type": "Question",
          name: "How do I book an appointment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can book online from the Booking page, or call/text us to find the best time.",
          },
        },
        {
          "@type": "Question",
          name: "What services do you offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer result-driven skincare treatments designed to promote healthy, radiant skin.",
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
