"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // High damping relative to stiffness = critically damped: smooth trailing
  // follow with no overshoot past the target position.
  const springCfg = { stiffness: 500, damping: 45, mass: 0.35 };
  const sx = useSpring(x, springCfg);
  const sy = useSpring(y, springCfg);

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const interactiveSel =
      "a, button, [role='button'], input, textarea, select, label, summary";

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      
      const target = e.target as Element | null;
      setHovering(Boolean(target?.closest(interactiveSel)));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reduced dimensions: 8px default dot, expands to 16px on hover
  const size = hovering ? 16 : 8;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <motion.span
        className="block -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          borderWidth: 1.5, // Slightly thinner border to balance the smaller diameter
          borderStyle: "solid",
          borderColor: "#000000",
          backgroundColor: "var(--color-accent)",
        }}
        animate={{
          width: pressed ? size * 0.7 : size,
          height: pressed ? size * 0.7 : size,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.4 }}
      />
    </motion.div>
  );
}