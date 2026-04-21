import React from "react";
import ServicesHero from "../components/sections/ServicesHero";
import ServicesHowItWorks from "../components/sections/ServicesHowItWorks";
import ServicesList, { servicesData } from "../components/sections/ServicesList";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import {
  BUSINESS_NAME,
  CITY,
  DEFAULT_KEYWORDS,
  EMAIL,
  PHONE_E164,
  REGION,
  getBaseUrl,
} from "../seo/config";

export default function Services() {
  const baseUrl = getBaseUrl();
  const canonical = `${baseUrl}/services`;
  const title = `Services | ${BUSINESS_NAME}`;
  const description = `Explore ${BUSINESS_NAME} services in ${CITY}, ${REGION}: facials, skin treatments, and waxing. Book online for result-driven skincare.`;

  const flattenedServices = Object.values(servicesData)
    .flat()
    .filter(Boolean)
    .map((service) => ({
      name: service.title,
      description: service.description || "",
    }));

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
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
        { "@type": "ListItem", position: 2, name: "Services", item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${canonical}#services`,
      name: `${BUSINESS_NAME} Services`,
      itemListElement: flattenedServices.slice(0, 50).map((svc, index) => ({
        "@type": "Service",
        position: index + 1,
        name: svc.name,
        description: svc.description || undefined,
        provider: {
          "@type": "HealthAndBeautyBusiness",
          name: BUSINESS_NAME,
          telephone: PHONE_E164,
          email: EMAIL,
        },
      })),
    },
  ];

  return (
    <div className="overflow-hidden">
      <SEO
        title={title}
        description={description}
        keywords={DEFAULT_KEYWORDS}
        canonical={canonical}
        pageType="website"
      />
      <StructuredData schemas={schemas} />
      <ServicesHero />
      <ServicesHowItWorks />
      <ServicesList />
    </div>
  );
}
