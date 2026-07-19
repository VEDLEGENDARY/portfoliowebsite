"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Parse RGB color string and return luminance (0 = black, 1 = white).
 * Uses relative luminance formula from WCAG.
 */
function getColorLuminance(rgbString: string): number {
  const match = rgbString.match(/\d+/g);
  if (!match || match.length < 3) return 0.5; // default to mid-gray
  const [r, g, b] = match.map((v) => {
    const val = parseInt(v) / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Check if background is dark (contrast threshold for light text).
 * Also returns true if the color is heavily green (lime accent area).
 */
function isBackgroundDark(rgbString: string): boolean {
  // Default to dark background
  if (!rgbString || rgbString === "transparent" || rgbString === "rgba(0, 0, 0, 0)")
    return true;

  const match = rgbString.match(/\d+/g);
  if (!match || match.length < 3) return true;

  const [r, g, b] = match.map(Number);
  const luminance = getColorLuminance(rgbString);

  // If it's bright (white areas, light text), return false (use black cursor)
  if (luminance > 0.6) return false;

  // If it's a bright green (lime accent #b9ff66), detect and use black cursor
  // Lime has high G, moderate R, low B
  if (g > 200 && r > 150 && b < 150) return false;

  // Otherwise it's a dark area, use accent color cursor
  return true;
}

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
  const [isDarkBg, setIsDarkBg] = useState(true);

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

      // Sample background color under cursor to detect light/green areas
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const bgColor = window.getComputedStyle(el).backgroundColor;
        const isDark = isBackgroundDark(bgColor);
        setIsDarkBg(isDark);
      }
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

  const size = hovering ? 28 : 14;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <motion.span
        className="block -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: isDarkBg ? "var(--color-accent)" : "#000000",
          backgroundColor: hovering
            ? isDarkBg
              ? "var(--color-accent-subtle)"
              : "rgba(0, 0, 0, 0.08)"
            : "transparent",
          mixBlendMode: isDarkBg ? "normal" : "difference",
          filter: isDarkBg ? "none" : "invert(1) grayscale(1) brightness(0)",
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