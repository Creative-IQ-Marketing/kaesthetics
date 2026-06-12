import React from "react";

/**
 * Renders a third-party Instagram feed widget (SnapWidget, Elfsight, Behold, etc.)
 * when INSTAGRAM_FEED_EMBED_SRC is set in src/data/instagram.js.
 */
export default function InstagramFeedWidget({ src, className = "" }) {
  if (!src) return null;

  return (
    <div className={`overflow-hidden rounded-2xl ${className}`}>
      <iframe
        src={src}
        title="Instagram feed"
        className="w-full border-0"
        style={{ minHeight: 420 }}
        loading="lazy"
        allowTransparency
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
