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
    <div>
      <SEO
        title={title}
        description={description}
        keywords={DEFAULT_KEYWORDS}
        canonical={canonical}
        pageType="website"
      />
      <StructuredData schemas={schemas} />
      <BookingHero />
      <section className="bg-white">
        <div className="container-custom max-w-4xl">
          <div className="px-4 sm:px-0">
            <div className="rounded-3xl border border-gray-100 bg-[#FBFBFB] shadow-lg overflow-hidden -mt-10 sm:-mt-14 relative z-10">
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-ka-accent/10 flex items-center justify-center text-ka-accent">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                      Open Hours
                    </p>
                    <h2 className="font-serif text-2xl text-ka-primary">
                      When to Visit
                    </h2>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-white border border-gray-100 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                      Mon – Fri
                    </p>
                    <p className="font-serif text-xl text-ka-primary">9am – 6pm</p>
                  </div>
                  <div className="rounded-2xl bg-white border border-gray-100 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                      Saturday
                    </p>
                    <p className="font-serif text-xl text-ka-primary">
                      10am – 4pm
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white border border-gray-100 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                      Sunday
                    </p>
                    <p className="font-serif text-xl text-ka-primary">Closed</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white border border-gray-100 p-5">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    If you don’t see an ideal time in the calendar, call us and
                    we’ll help you get booked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingFormSection />
    </div>
  );
};

export default Booking;
