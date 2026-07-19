"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SEGMENTS = 16;
const ACCENT_COLOR = "var(--color-accent)";
const DARK_COLOR = "#000";

/**
 * Parse RGB color string and return luminance (0 = black, 1 = white).
 * Uses relative luminance formula from WCAG.
 */
function getColorLuminance(rgbString: string): number {
  const match = rgbString.match(/\d+/g);
  if (!match || match.length < 3) return 0.5;
  const [r, g, b] = match.slice(0, 3).map((v) => {
    const val = parseInt(v) / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function isTransparent(rgbString: string): boolean {
  if (!rgbString || rgbString === "transparent") return true;
  const nums = rgbString.match(/[\d.]+/g);
  if (!nums) return true;
  // rgba(...) with alpha 0
  if (nums.length === 4 && parseFloat(nums[3]) === 0) return true;
  return false;
}

/**
 * Walk up the DOM from an element until a non-transparent background
 * is found. This fixes the "doesn't work on text" bug: text nodes are
 * almost always transparent themselves, so we need whatever is behind them.
 */
function getEffectiveBackgroundColor(el: Element | null): string {
  let node: Element | null = el;
  while (node) {
    const bg = window.getComputedStyle(node).backgroundColor;
    if (!isTransparent(bg)) return bg;
    node = node.parentElement;
  }
  return "rgb(255, 255, 255)"; // nothing found, assume page default (white)
}

/** Does this surface color require a dark/black cursor segment to stay visible? */
function isLightSurface(rgbString: string): boolean {
  const match = rgbString.match(/\d+/g);
  if (!match || match.length < 3) return false;
  const [r, g, b] = match.map(Number);
  const luminance = getColorLuminance(rgbString);

  // bright/white areas -> light surface, needs black cursor
  if (luminance > 0.6) return true;

  // lime accent (#b9ff66-ish): high G, moderate R, low B -> also light surface
  if (g > 200 && r > 150 && b < 150) return true;

  return false;
}

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springCfg = { stiffness: 500, damping: 45, mass: 0.35 };
  const sx = useSpring(x, springCfg);
  const sy = useSpring(y, springCfg);

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  // one entry per ring segment: true = light surface under that segment
  const [segmentIsLight, setSegmentIsLight] = useState<boolean[]>(() =>
    Array(SEGMENTS).fill(false)
  );

  const hoveringRef = useRef(hovering);
  const pressedRef = useRef(pressed);
  const rafRef = useRef<number>();

  useEffect(() => {
    hoveringRef.current = hovering;
  }, [hovering]);

  useEffect(() => {
    pressedRef.current = pressed;
  }, [pressed]);

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

    // Every frame: sample the background color at N points around the
    // ring's circumference, using the ring's actual spring-smoothed
    // position (not the raw mouse position), so each segment can be
    // colored based on what it's literally sitting on top of.
    const sample = () => {
      const cx = sx.get();
      const cy = sy.get();
      const baseSize = hoveringRef.current ? 28 : 14;
      const currentSize = pressedRef.current ? baseSize * 0.7 : baseSize;
      const radius = currentSize / 2;

      const next: boolean[] = new Array(SEGMENTS);
      for (let i = 0; i < SEGMENTS; i++) {
        const angle = (i / SEGMENTS) * Math.PI * 2;
        const px = cx + Math.cos(angle) * radius;
        const py = cy + Math.sin(angle) * radius;
        const el = document.elementFromPoint(px, py);
        const bg = getEffectiveBackgroundColor(el);
        next[i] = isLightSurface(bg);
      }
      setSegmentIsLight(next);

      rafRef.current = requestAnimationFrame(sample);
    };
    rafRef.current = requestAnimationFrame(sample);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const size = hovering ? 28 : 14;
  const displaySize = pressed ? size * 0.7 : size;
  const strokeWidth = 2;
  const radius = displaySize / 2 - strokeWidth / 2;
  const anyLight = segmentIsLight.some(Boolean);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{ width: displaySize, height: displaySize }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.4 }}
        style={{
          backgroundColor: hovering
            ? anyLight
              ? "rgba(0, 0, 0, 0.08)"
              : "var(--color-accent-subtle)"
            : "transparent",
        }}
      >
        <svg
          width={displaySize}
          height={displaySize}
          viewBox={`0 0 ${displaySize} ${displaySize}`}
        >
          {segmentIsLight.map((isLight, i) => {
            const cx = displaySize / 2;
            const cy = displaySize / 2;
            const toRad = (deg: number) => (deg * Math.PI) / 180;
            const angleStart = (i / SEGMENTS) * 360;
            const angleEnd = ((i + 1) / SEGMENTS) * 360 + 0.5; // slight overlap, avoids seams
            const x1 = cx + radius * Math.cos(toRad(angleStart));
            const y1 = cy + radius * Math.sin(toRad(angleStart));
            const x2 = cx + radius * Math.cos(toRad(angleEnd));
            const y2 = cy + radius * Math.sin(toRad(angleEnd));
            return (
              <path
                key={i}
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
                stroke={isLight ? DARK_COLOR : ACCENT_COLOR}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </motion.div>
    </motion.div>
  );
}