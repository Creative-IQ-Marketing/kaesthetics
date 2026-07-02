import React from "react";
import { motion } from "framer-motion";

export default function Marquee({ items, speed = 28, className = "" }) {
  const doubled = [...items, ...items];

  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <motion.div
        className="marquee-track flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-serif text-[clamp(1.5rem,4vw,2.75rem)] italic text-ka-primary/20"
          >
            {item}
            <span className="mx-10 text-ka-accent/40">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
