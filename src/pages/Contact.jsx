import React from 'react';
import ContactHero from '../components/sections/ContactHero';
import ContactFormSection from '../components/sections/ContactFormSection';
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import {
  BUSINESS_NAME,
  CITY,
  DEFAULT_KEYWORDS,
  EMAIL,
  PHONE_E164,
  REGION,
  STREET_ADDRESS,
  getBaseUrl,
} from "../seo/config";

export default function Contact() {
  const baseUrl = getBaseUrl();
  const canonical = `${baseUrl}/contact`;
  const title = `Contact | ${BUSINESS_NAME}`;
  const description = `Contact ${BUSINESS_NAME} in ${CITY}, ${REGION}. Call or text ${PHONE_E164}, email ${EMAIL}, or send a message online.`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${canonical}#contactpage`,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": `${baseUrl}#website` },
      about: { "@id": `${baseUrl}#business` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: "Contact", item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "@id": `${canonical}#contactpoint`,
      contactType: "Customer Service",
      telephone: PHONE_E164,
      email: EMAIL,
      areaServed: `${CITY}, ${REGION}`,
      availableLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": `${canonical}#place`,
      name: BUSINESS_NAME,
      address: {
        "@type": "PostalAddress",
        streetAddress: STREET_ADDRESS,
        addressLocality: CITY,
        addressRegion: REGION,
      },
    },
  ];

  return (
    <div>
      <SEO
        title={title}
        description={description}
        keywords={DEFAULT_KEYWORDS}
        canonical={canonical}
        pageType="website"
      />
      <StructuredData schemas={schemas} />
      <ContactHero />
      <ContactFormSection />
    </div>
  );
}
