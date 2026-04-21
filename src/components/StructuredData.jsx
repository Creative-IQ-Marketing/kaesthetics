import { useEffect } from "react";

function stableSchemaKey(schema, index) {
  const type = schema && schema["@type"] ? String(schema["@type"]) : "Unknown";
  const id = schema && schema["@id"] ? String(schema["@id"]) : "";
  return id ? `${type}:${id}` : `${type}:${index}`;
}

export default function StructuredData({ schemas = [] }) {
  const schemaArray = Array.isArray(schemas) ? schemas.filter(Boolean) : [schemas].filter(Boolean);
  const schemaSignature = JSON.stringify(schemaArray);

  useEffect(() => {
    const keys = new Set();
    const owner = "kaesthetics";

    schemaArray.forEach((schema, index) => {
      const key = stableSchemaKey(schema, index);
      keys.add(key);

      let script = document.querySelector(
        `script[data-schema-owner="${owner}"][data-schema-key="${key}"]`,
      );
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-schema-owner", owner);
        script.setAttribute("data-schema-key", key);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    });

    const existing = Array.from(
      document.querySelectorAll(
        `script[type="application/ld+json"][data-schema-owner="${owner}"][data-schema-key]`,
      ),
    );
    existing.forEach((script) => {
      const key = script.getAttribute("data-schema-key");
      if (key && !keys.has(key)) {
        script.remove();
      }
    });
  }, [schemaSignature]);

  return null;
}
