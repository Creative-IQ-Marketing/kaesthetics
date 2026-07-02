import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

export function useMouseParallax(strength = 18) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const onMove = (e) => {
      const xp = (e.clientX / window.innerWidth - 0.5) * strength;
      const yp = (e.clientY / window.innerHeight - 0.5) * strength;
      x.set(-xp);
      y.set(-yp);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [strength, x, y]);

  return { x, y };
}
