"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** How strongly the element is pulled toward the cursor (0–1). Default 0.36. */
  strength?: number;
}

/**
 * Wraps any element with a magnetic hover effect — the content glides
 * toward the cursor and springs back on leave.
 *
 * Attach [data-cursor-grow] on the inner element to expand the custom cursor ring.
 * Disabled automatically when the user prefers reduced motion.
 */
export function MagneticButton({
  children,
  className,
  style,
  strength = 0.36,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xS = useSpring(x, { stiffness: 280, damping: 18, mass: 0.45 });
  const yS = useSpring(y, { stiffness: 280, damping: 18, mass: 0.45 });

  const handleMove = (e: React.MouseEvent) => {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (prefersReduced) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, x: xS, y: yS, display: "inline-flex" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}
