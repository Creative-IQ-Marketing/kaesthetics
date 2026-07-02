import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const line = {
  hidden: { opacity: 0, y: "110%", rotateX: 40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 60, damping: 16 },
  },
};

export default function TextReveal({ lines, className = "", as: Tag = "h1" }) {
  return (
    <Tag className={className} style={{ perspective: 1200 }}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="block"
      >
        {lines.map((text, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span variants={line} className="block" style={{ transformOrigin: "bottom" }}>
              {text}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
