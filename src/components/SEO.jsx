import { useEffect } from "react";
import defaultOgImage from "../assets/kalogo.png";

function asAbsoluteUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("/")) return `${window.location.origin}${url}`;
  return `${window.location.origin}/${url}`;
}

export default function SEO({
  title = "K-Aesthetic Skin | San Antonio Skincare Studio & Facial Treatments",
  description = "San Antonio's premier skincare studio. Result-driven facials, chemical peels, dermaplaning, acne treatments, microneedling & anti-aging skin treatments. Book your appointment at (361) 494-8656.",
  keywords = "San Antonio skincare, facial treatments San Antonio, skincare studio San Antonio TX, esthetician San Antonio, K-Aesthetic Skin, acne facial San Antonio, chemical peel San Antonio TX, dermaplaning San Antonio, anti-aging facial San Antonio, microneedling San Antonio, HydraFacial San Antonio, LED light therapy San Antonio, skin rejuvenation San Antonio, glowing skin San Antonio, custom facial San Antonio, deep cleansing facial San Antonio, skin care near me San Antonio, best esthetician San Antonio TX, professional skincare San Antonio, facial near me San Antonio",
  canonical = window.location.origin + window.location.pathname,
  ogImage = defaultOgImage,
  pageType = "website",
}) {
  useEffect(() => {
    document.title = title;

    const absoluteOgImage = asAbsoluteUrl(ogImage);
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: "K-Aesthetic Skin" },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "bingbot",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      // AI Agent crawlers
      { name: "OAI-SearchBot", content: "index, follow" },
      { name: "CCBot", content: "index, follow" },
      { name: "PerplexityBot", content: "index, follow" },
      { name: "ClaudeBot", content: "index, follow" },
      { name: "revisit-after", content: "7 days" },
      { name: "rating", content: "general" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      // Geo / Local SEO
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio, Texas" },
      { name: "geo.position", content: "29.6028;-98.5030" },
      { name: "ICBM", content: "29.6028, -98.5030" },
      // Dublin Core
      { name: "DC.title", content: title },
      { name: "DC.language", content: "en-US" },
      // Page classification
      {
        name: "classification",
        content: "Health & Beauty, Skincare, Aesthetics",
      },
      {
        name: "category",
        content:
          "Skincare Studio, Facial Treatments, Esthetician, San Antonio TX",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "theme-color", content: "#F5EFE6" },
      // Open Graph
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "K-Aesthetic Skin" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: pageType },
      { property: "og:image", content: absoluteOgImage },
      { property: "og:image:secure_url", content: absoluteOgImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { property: "og:url", content: window.location.href },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: absoluteOgImage },
      { name: "twitter:image:alt", content: title },
      { name: "twitter:domain", content: window.location.hostname },
      // Mobile
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "apple-mobile-web-app-title", content: "K-Aesthetic Skin" },
      { name: "format-detection", content: "telephone=no" },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? "name" : "property";
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    });

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    let langLink = document.querySelector(
      'link[rel="alternate"][hreflang="en-US"]',
    );
    if (!langLink) {
      langLink = document.createElement("link");
      langLink.setAttribute("rel", "alternate");
      langLink.setAttribute("hreflang", "en-US");
      document.head.appendChild(langLink);
    }
    langLink.setAttribute("href", window.location.href);
  }, [title, description, keywords, canonical, ogImage, pageType]);

  return null;
}
