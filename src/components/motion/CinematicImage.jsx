import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const tiltVariants = {
  left: {
    rotateZ: -4,
    rotateX: 3,
    shadow: "-10px 28px 70px rgba(26,20,16,0.35)",
  },
  right: {
    rotateZ: 3.5,
    rotateX: 2,
    shadow: "10px 28px 70px rgba(26,20,16,0.35)",
  },
  center: {
    rotateZ: -1.5,
    rotateX: 1.5,
    shadow: "0 28px 70px rgba(26,20,16,0.3)",
  },
};

export default function CinematicImage({
  src,
  alt,
  className = "",
  tilt = "left",
  parallax = true,
  aspect = "aspect-[4/5]",
}) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? [60, -60] : [0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);
  const t = tiltVariants[tilt] || tiltVariants.left;

  return (
    <motion.div
      ref={ref}
      className={`cinematic-wrap ${className}`}
      initial={{ opacity: 0, y: 100, rotateZ: t.rotateZ * 1.5, rotateX: t.rotateX * 1.5 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateZ: t.rotateZ,
        rotateX: t.rotateX,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 50, damping: 17, mass: 1.3 }}
      whileHover={{
        rotateZ: t.rotateZ * 0.4,
        rotateX: t.rotateX * 0.5,
        scale: 1.02,
      }}
      style={{
        transformPerspective: 1400,
        transformStyle: "preserve-3d",
        boxShadow: t.shadow,
      }}
    >
      <motion.div style={{ y, scale }} className={`overflow-hidden rounded-[1.25rem] ${aspect}`}>
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </motion.div>
    </motion.div>
  );
}
