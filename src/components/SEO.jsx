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
  title = "K-Aesthetic Skin | San Antonio Skincare Studio",
  description = "Result-driven skincare treatments designed to promote healthy, radiant skin in San Antonio, TX. Book your appointment with K-Aesthetic Skin.",
  keywords = "San Antonio skincare, facial treatments San Antonio, acne treatment, anti-aging facial, chemical peel, skin studio San Antonio, esthetician San Antonio, K-Aesthetic Skin",
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
      { name: "OAI-SearchBot", content: "index, follow" },
      { name: "CCBot", content: "index, follow" },
      { name: "PerplexityBot", content: "index, follow" },
      { name: "ClaudeBot", content: "index, follow" },
      { name: "revisit-after", content: "7 days" },
      { name: "rating", content: "general" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "theme-color", content: "#F5EFE6" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "K-Aesthetic Skin" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: pageType },
      { property: "og:image", content: absoluteOgImage },
      { property: "og:image:secure_url", content: absoluteOgImage },
      { property: "og:image:alt", content: title },
      { property: "og:url", content: window.location.href },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: absoluteOgImage },
      { name: "twitter:domain", content: window.location.hostname },
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
      'link[rel="alternate"][hreflang="en"]',
    );
    if (!langLink) {
      langLink = document.createElement("link");
      langLink.setAttribute("rel", "alternate");
      langLink.setAttribute("hreflang", "en");
      document.head.appendChild(langLink);
    }
    langLink.setAttribute("href", window.location.href);
  }, [title, description, keywords, canonical, ogImage, pageType]);

  return null;
}
