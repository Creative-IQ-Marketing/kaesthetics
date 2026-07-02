import LegalPage from "../components/layout/LegalPage";
import {
  BUSINESS_NAME,
  EMAIL,
  getBaseUrl,
} from "../seo/config";

export default function TermsConditions() {
  const baseUrl = getBaseUrl();
  const canonical = `${baseUrl}/terms-conditions`;
  const title = `Terms of Use | ${BUSINESS_NAME}`;
  const description = `Terms of Use for ${BUSINESS_NAME}. Review appointment, cancellation, and service terms. Contact ${EMAIL} with questions.`;

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
        { "@type": "ListItem", position: 2, name: "Terms of Use", item: canonical },
      ],
    },
  ];

  return (
    <LegalPage title="Terms of Use" description={description} canonical={canonical} schemas={schemas}>
      <p className="text-sm text-ka-muted">Last updated: {new Date().toLocaleDateString()}</p>
      <p>
        Welcome to K-Aesthetic Skin. By using our website and services, you agree to these terms.
      </p>
      <h2>Appointment Policy</h2>
      <p>Please arrive on time. Late arrivals may result in a shortened treatment or rescheduling.</p>
      <h2>Cancellation Policy</h2>
      <p>We require at least 24 hours notice for cancellations. Late cancellations may incur a fee.</p>
      <h2>Service Changes</h2>
      <p>Prices and services are subject to change. We reserve the right to refuse service at any time.</p>
      <h2>Contact</h2>
      <p>
        Questions? Email us at{" "}
        <a href="mailto:Kaestheticsatx@gmail.com">Kaestheticsatx@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
