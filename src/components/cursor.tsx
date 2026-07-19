"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Number of arc slices around the ring. Each slice independently checks
// the background beneath it and picks its own color.
const SEGMENTS = 12;

// Radius (in local SVG units) the ring is drawn at. Hover/press sizing is
// done by scaling this whole ring via CSS transform rather than
// recomputing the arc geometry every frame.
const BASE_RADIUS = 7;

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
 * Also returns false if the color is heavily green (lime accent area),
 * so those spots switch to black too.
 */
function isBackgroundDark(rgbString: string): boolean {
  // Default to dark background
  if (!rgbString || rgbString === "transparent" || rgbString === "rgba(0, 0, 0, 0)")
    return true;

  const match = rgbString.match(/\d+/g);
  if (!match || match.length < 3) return true;

  const [r, g, b] = match.map(Number);
  const luminance = getColorLuminance(rgbString);

  // If it's bright (white areas, light text), use black
  if (luminance > 0.6) return false;

  // If it's a bright green (lime accent #b9ff66), detect and use black
  if (g > 200 && r > 150 && b < 150) return false;

  // Otherwise it's a dark area, keep the accent color
  return true;
}

// Precompute each segment's start/end/mid angle once.
const SEGMENT_ANGLES = Array.from({ length: SEGMENTS }, (_, i) => {
  const start = (i / SEGMENTS) * Math.PI * 2;
  const end = ((i + 1) / SEGMENTS) * Math.PI * 2;
  const mid = (start + end) / 2;
  return { start, end, mid };
});

function arcPath(radius: number, start: number, end: number) {
  const sx = radius * Math.cos(start);
  const sy = radius * Math.sin(start);
  const ex = radius * Math.cos(end);
  const ey = radius * Math.sin(end);
  // Every segment here spans less than 180°, so large-arc-flag is always 0.
  return `M ${sx.toFixed(2)} ${sy.toFixed(2)} A ${radius} ${radius} 0 0 1 ${ex.toFixed(2)} ${ey.toFixed(2)}`;
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
  const [isDarkBg, setIsDarkBg] = useState(true); // drives the hover fill wash
  const [segmentDark, setSegmentDark] = useState<boolean[]>(
    Array(SEGMENTS).fill(true)
  );

  // Refs mirror hovering/pressed so the mousemove handler always reads the
  // latest value without the effect needing to re-run on every state change.
  const hoveringRef = useRef(hovering);
  const pressedRef = useRef(pressed);

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
      const isHover = Boolean(target?.closest(interactiveSel));
      hoveringRef.current = isHover;
      setHovering(isHover);

      // Center sample: drives the subtle fill wash in the middle of the ring.
      const centerEl = document.elementFromPoint(e.clientX, e.clientY);
      if (centerEl) {
        setIsDarkBg(
          isBackgroundDark(window.getComputedStyle(centerEl).backgroundColor)
        );
      }

      // Per-segment samples: drives the ring's stroke color around its
      // circumference, so only the arcs actually sitting over white/green
      // flip to black instead of the whole ring switching at once.
      const diameter = hoveringRef.current ? 28 : 14;
      const radius = (pressedRef.current ? diameter * 0.7 : diameter) / 2;

      const next = SEGMENT_ANGLES.map(({ mid }) => {
        const px = e.clientX + radius * Math.cos(mid);
        const py = e.clientY + radius * Math.sin(mid);
        const el = document.elementFromPoint(px, py);
        if (!el) return true;
        return isBackgroundDark(window.getComputedStyle(el).backgroundColor);
      });
      setSegmentDark(next);
    };
    const down = () => {
      pressedRef.current = true;
      setPressed(true);
    };
    const up = () => {
      pressedRef.current = false;
      setPressed(false);
    };
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
  const displaySize = pressed ? size * 0.7 : size;
  const scale = displaySize / (BASE_RADIUS * 2);
  const pad = 4; // room for stroke overflow past the radius
  const viewSize = (BASE_RADIUS + pad) * 2;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <motion.svg
          width={viewSize}
          height={viewSize}
          viewBox={`${-(BASE_RADIUS + pad)} ${-(BASE_RADIUS + pad)} ${viewSize} ${viewSize}`}
          animate={{ scale }}
          transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.4 }}
        >
          <circle
            r={BASE_RADIUS}
            fill={
              hovering
                ? isDarkBg
                  ? "var(--color-accent-subtle)"
                  : "rgba(0, 0, 0, 0.08)"
                : "transparent"
            }
          />
          {SEGMENT_ANGLES.map(({ start, end }, i) => (
            <path
              key={i}
              d={arcPath(BASE_RADIUS, start, end)}
              fill="none"
              stroke={segmentDark[i] ? "var(--color-accent)" : "#000"}
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </motion.svg>
      </div>
    </motion.div>
  );
}