import React from "react";

/**
 * Stable image rendering — explicit dimensions prevent layout shift.
 * Use `fill` for full-bleed backgrounds (heroes, overlays).
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  imgClassName = "",
  priority = false,
  objectPosition,
  wrapperClassName = "",
  fill = false,
}) {
  const imgProps = {
    src,
    alt,
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : "auto",
    decoding: "async",
    className: fill
      ? `absolute inset-0 h-full w-full object-cover ${className} ${imgClassName}`
      : `h-full w-full object-cover ${className} ${imgClassName}`,
    style: objectPosition ? { objectPosition } : undefined,
  };

  if (fill) {
    return (
      <div className={`relative ${wrapperClassName}`}>
        <img {...imgProps} />
      </div>
    );
  }

  const ratio = width && height ? `${width} / ${height}` : undefined;

  return (
    <div
      className={`relative overflow-hidden ${wrapperClassName}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <img {...imgProps} width={width} height={height} />
    </div>
  );
}
