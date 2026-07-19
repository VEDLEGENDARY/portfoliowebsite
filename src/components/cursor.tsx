"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Dual-layer custom cursor:
 *  - Dot: stiff spring that snaps to pointer instantly
 *  - Ring: loose spring that lags behind, expands when hovering [data-cursor-grow] elements
 *
 * Hides on touch devices and when the user prefers reduced motion.
 */
export function Cursor() {
  const prefersReduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isTouchRef = useRef(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot: near-instant response
  const dotX = useSpring(mouseX, { stiffness: 900, damping: 40, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 40, mass: 0.3 });

  // Ring: trailing lag
  const ringX = useSpring(mouseX, { stiffness: 130, damping: 20, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 130, damping: 20, mass: 0.6 });
  const ringScale = useSpring(1, { stiffness: 260, damping: 22 });

  useEffect(() => {
    if (prefersReduced) return;

    // Touch detection — skip cursor for touch-primary devices
    const onTouch = () => {
      isTouchRef.current = true;
    };
    window.addEventListener("touchstart", onTouch, { once: true });

    const onMove = (e: MouseEvent) => {
      if (isTouchRef.current) return;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnterGrow = () => {
      ringScale.set(2.6);
      setIsHovering(true);
    };
    const onLeaveGrow = () => {
      ringScale.set(1);
      setIsHovering(false);
    };

    window.addEventListener("mousemove", onMove);

    // Dynamically attach grow listeners as elements mount
    function attachGrow() {
      document
        .querySelectorAll<HTMLElement>("[data-cursor-grow]:not([data-cursor-bound])")
        .forEach((el) => {
          el.dataset.cursorBound = "1";
          el.addEventListener("mouseenter", onEnterGrow);
          el.addEventListener("mouseleave", onLeaveGrow);
        });
    }
    attachGrow();

    const mutObs = new MutationObserver(attachGrow);
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      mutObs.disconnect();
    };
  }, [prefersReduced]);

  if (prefersReduced || !visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          width: 8,
          height: 8,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "var(--color-accent)",
        }}
      />
      {/* Ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          width: 38,
          height: 38,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
          border: "1.5px solid rgba(185,255,102,0.45)",
          backgroundColor: isHovering ? "rgba(185,255,102,0.06)" : "transparent",
          transition: "background-color 0.2s ease",
        }}
      />
    </>
  );
}
