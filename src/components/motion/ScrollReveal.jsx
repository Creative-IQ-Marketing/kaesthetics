import React from "react";
import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 70, damping: 20, mass: 0.95 };

const directionOffset = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: -36, y: 16 },
  right: { x: 36, y: 16 },
  scale: { x: 0, y: 16, scale: 0.96 },
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  y,
  x,
  once = true,
}) {
  const base = directionOffset[direction] || directionOffset.up;
  const initialY = y ?? base.y;
  const initialX = x ?? base.x;
  const initialScale = base.scale ?? 1;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY, x: initialX, scale: initialScale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({ children, className = "", stagger = 0.08, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", direction = "up" }) {
  const base = directionOffset[direction] || directionOffset.up;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: base.y, x: base.x, scale: base.scale ?? 1 },
        show: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: spring,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
