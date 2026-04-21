import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import {
  BUSINESS_NAME,
  DEFAULT_KEYWORDS,
  EMAIL,
  getBaseUrl,
} from "../seo/config";

export default function PrivacyPolicy() {
  const baseUrl = getBaseUrl();
  const canonical = `${baseUrl}/privacy-policy`;
  const title = `Privacy Policy | ${BUSINESS_NAME}`;
  const description = `Privacy Policy for ${BUSINESS_NAME}. Learn how we collect, use, and protect your information. Contact us at ${EMAIL} with questions.`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": `${baseUrl}#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: canonical },
      ],
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-[#F5EFE6] min-h-screen">
      <SEO
        title={title}
        description={description}
        keywords={DEFAULT_KEYWORDS}
        canonical={canonical}
        pageType="website"
      />
      <StructuredData schemas={schemas} />
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-ka-primary mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg text-gray-600">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              At K-Aesthetic Skin, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
            </p>
            <h3>1. Information We Collect</h3>
            <p>
              We may collect personal information such as your name, email address, phone number, and booking details when you schedule an appointment or contact us.
            </p>
            <h3>2. How We Use Your Information</h3>
            <p>
              Your information is used to process bookings, communicate with you about your appointments, and improve our services. We do not sell or share your personal data with third parties for marketing purposes.
            </p>
            <h3>3. Contact Us</h3>
            <p>
              If you have any questions about our privacy practices, please contact us at Kaestheticsatx@gmail.com.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
