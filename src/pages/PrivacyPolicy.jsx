import React from "react";
import LegalPage from "../components/layout/LegalPage";
import {
  BUSINESS_NAME,
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
    <LegalPage title="Privacy Policy" description={description} canonical={canonical} schemas={schemas}>
      <p className="text-sm text-ka-muted">Last updated: {new Date().toLocaleDateString()}</p>
      <p>
        At K-Aesthetic Skin, we are committed to protecting your privacy and ensuring
        the security of your personal information.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address, phone
        number, and booking details when you schedule an appointment or contact us.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        Your information is used to process bookings, communicate about appointments,
        and improve our services. We do not sell your personal data to third parties.
      </p>
      <h2>Contact Us</h2>
      <p>
        Questions? Email us at{" "}
        <a href="mailto:Kaestheticsatx@gmail.com">Kaestheticsatx@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
