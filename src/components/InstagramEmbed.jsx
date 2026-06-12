import React, { useEffect, useRef } from "react";

/**
 * @typedef {{ url: string; caption?: string }} InstagramPost
 */

let embedScriptPromise = null;

function loadInstagramEmbedScript() {
  if (embedScriptPromise) return embedScriptPromise;

  embedScriptPromise = new Promise((resolve, reject) => {
    if (window.instgrm) {
      resolve();
      return;
    }

    const existing = document.querySelector('script[src*="instagram.com/embed.js"]');
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.body.appendChild(script);
  });

  return embedScriptPromise;
}

export default function InstagramEmbed({ url, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    loadInstagramEmbedScript()
      .then(() => {
        if (!cancelled && window.instgrm?.Embeds) {
          window.instgrm.Embeds.process(containerRef.current);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div ref={containerRef} className={`instagram-embed overflow-hidden rounded-2xl ${className}`}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "16px",
          margin: 0,
          maxWidth: "100%",
          minWidth: "260px",
          padding: 0,
          width: "100%",
        }}
      />
    </div>
  );
}
