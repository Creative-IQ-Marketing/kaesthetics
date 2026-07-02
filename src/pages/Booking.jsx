import React from "react";
import { Clock } from "lucide-react";
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
      <section className="relative z-10 -mt-14 bg-ka-cream pb-4 md:-mt-20">
        <div className="container-custom max-w-4xl">
          <div className="premium-card overflow-hidden">
            <div className="relative h-2 bg-gradient-to-r from-ka-accent via-ka-accent-light to-ka-accent/40" />
            <div className="premium-card-pad">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ka-pink text-ka-accent">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="section-label">Open Hours</p>
                <h2 className="font-serif text-2xl text-ka-primary">When to Visit</h2>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { day: "Mon – Fri", time: "9am – 5pm" },
                { day: "Saturday", time: "9am – 4pm" },
                { day: "Sunday", time: "Closed" },
              ].map((row) => (
                <div key={row.day} className="stat-pill">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-ka-muted">
                    {row.day}
                  </p>
                  <p className="mt-2 font-serif text-xl text-ka-primary">{row.time}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-ka-muted">
              If you don't see an ideal time in the calendar, call us at{" "}
              <a href="tel:3614948656" className="text-ka-accent hover:underline">
                (361) 494-8656
              </a>{" "}
              and we'll help you get booked.
            </p>
            </div>
          </div>
        </div>
      </section>
      <BookingFormSection />
    </div>
  );
};

export default Booking;
