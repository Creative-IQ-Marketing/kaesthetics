import React from "react";
import BookingHero from "../components/sections/BookingHero";
import BookingFormSection from "../components/sections/BookingFormSection";
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

const Booking = () => {
  const baseUrl = getBaseUrl();
  const canonical = `${baseUrl}/booking`;
  const title = `Book an Appointment | ${BUSINESS_NAME}`;
  const description = `Book your skincare appointment with ${BUSINESS_NAME} in ${CITY}, ${REGION}. Choose a service and request a time online, or call/text us for help.`;

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
        { "@type": "ListItem", position: 2, name: "Booking", item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${canonical}#howto`,
      name: `How to book with ${BUSINESS_NAME}`,
      description: `Steps to request an appointment with ${BUSINESS_NAME} at ${STREET_ADDRESS} in ${CITY}.`,
      step: [
        {
          "@type": "HowToStep",
          name: "Choose your service",
          text: "Select the skincare treatment or service you'd like to book.",
        },
        {
          "@type": "HowToStep",
          name: "Share your details",
          text: "Enter your name, email, and phone number so we can confirm your appointment.",
        },
        {
          "@type": "HowToStep",
          name: "Confirm your time",
          text: "We’ll reach out shortly to confirm the best appointment time for you.",
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
          name: "How soon will you confirm my booking request?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We’ll reach out shortly to confirm your appointment details and time.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book by phone instead?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes. Call or text us at ${PHONE_E164} and we’ll help you get booked.`,
          },
        },
        {
          "@type": "Question",
          name: "What information do you need to book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your name, email, phone number, and a quick note about your skincare concerns are helpful.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "@id": `${canonical}#contactpoint`,
      contactType: "Customer Service",
      telephone: PHONE_E164,
      email: EMAIL,
      availableLanguage: "en",
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
      <BookingHero />
      <section className="relative z-10 -mt-10 bg-ka-cream pb-2 md:-mt-16">
        <div className="container-custom max-w-2xl">
          <div className="flex items-center justify-center gap-6 rounded-xl border border-ka-sand bg-white/80 px-6 py-4 text-sm backdrop-blur-sm sm:gap-8">
            {[
              { day: "Mon – Fri", time: "9 – 5" },
              { day: "Sat", time: "9 – 4" },
              { day: "Sun", time: "Closed" },
            ].map((row, i, arr) => (
              <div key={row.day} className="flex items-center gap-6 sm:gap-8">
                <div className="text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-ka-muted">
                    {row.day}
                  </p>
                  <p className="mt-0.5 font-serif text-base text-ka-primary">
                    {row.time}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <span className="h-8 w-px bg-ka-sand" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <BookingFormSection />
    </div>
  );
};

export default Booking;
