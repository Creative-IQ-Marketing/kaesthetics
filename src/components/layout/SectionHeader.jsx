import React from "react";
import ScrollReveal from "../motion/ScrollReveal";

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
  delay = 0,
}) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "left"
        ? "text-left"
        : "text-right ml-auto";

  return (
    <ScrollReveal
      delay={delay}
      className={`mb-12 md:mb-14 max-w-2xl ${alignClass} ${className}`}
    >
      {label &&
        (typeof label === "string" ? (
          <p className="section-label mb-3">{label}</p>
        ) : (
          <div className="mb-3">{label}</div>
        ))}
      {typeof title === "string" ? (
        <h2 className="section-title">{title}</h2>
      ) : (
        <h2 className="section-title">{title}</h2>
      )}
      {subtitle && (
        <p className={`section-subtitle mt-3 ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
