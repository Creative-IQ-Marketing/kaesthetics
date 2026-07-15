import React from "react";
import { Link } from "react-router-dom";
import SEO from "../SEO";
import StructuredData from "../StructuredData";
import ScrollReveal from "../motion/ScrollReveal";
import { DEFAULT_KEYWORDS, BUSINESS_NAME } from "../../seo/config";

export default function LegalPage({ title, description, canonical, schemas, children }) {
  const pageTitle = `${title} | ${BUSINESS_NAME}`;

  return (
    <div className="min-h-screen bg-ka-cream pt-28 pb-24 lg:pt-32">
      <SEO
        title={pageTitle}
        description={description}
        keywords={DEFAULT_KEYWORDS}
        canonical={canonical}
        pageType="website"
      />
      <StructuredData schemas={schemas} />
      <div className="container-custom max-w-3xl">
        <ScrollReveal>
          <Link
            to="/"
            className="mb-8 inline-block text-[11px] font-semibold uppercase tracking-widest text-ka-muted hover:text-ka-accent"
          >
            ← Back to home
          </Link>
          <h1 className="font-serif text-4xl text-ka-primary md:text-5xl">{title}</h1>
          <div className="prose-premium mt-10">{children}</div>
        </ScrollReveal>
      </div>
    </div>
  );
}
