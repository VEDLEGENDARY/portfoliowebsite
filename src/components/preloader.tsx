"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const words = ["AI Systems", "Computer Vision", "Fintech APIs", "Ved Patel"];

export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const reduce = useReducedMotion();

  // Lock scroll while loading
  useEffect(() => {
    const el = document.documentElement;
    el.classList.add("is-loading");
    return () => el.classList.remove("is-loading");
  }, []);

  // Count 0 → 100 with slight easing feel
  useEffect(() => {
    if (reduce) {
      setCount(100);
      const t = setTimeout(() => setDone(true), 350);
      return () => clearTimeout(t);
    }
    let raf: number;
    const start = performance.now();
    const duration = 2000;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 320);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  // Cycle words as the counter climbs
  useEffect(() => {
    if (reduce) {
      setWordIndex(words.length - 1);
      return;
    }
    const idx = Math.min(
      words.length - 1,
      Math.floor((count / 100) * words.length)
    );
    setWordIndex(idx);
  }, [count, reduce]);

  useEffect(() => {
    if (done) {
      document.documentElement.classList.remove("is-loading");
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--color-background)" }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          aria-hidden
        >
          {/* faint grid */}
          <div className="vp-grid-bg pointer-events-none absolute inset-0 opacity-40" />

          {/* accent glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[120px]"
            style={{ backgroundColor: "var(--color-accent)" }}
          />

          {/* monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-black"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-accent-text)",
            }}
          >
            VP
          </motion.div>

          {/* cycling word */}
          <div className="relative h-9 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-2xl font-extrabold tracking-tight"
                style={{ color: "var(--color-foreground)" }}
              >
                {words[wordIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* progress bar */}
          <div
            className="relative mt-8 h-px w-56 overflow-hidden sm:w-72"
            style={{ backgroundColor: "var(--color-border)" }}
          >
            <motion.div
              className="absolute inset-y-0 left-0"
              style={{ backgroundColor: "var(--color-accent)", width: `${count}%` }}
            />
          </div>

          {/* counter */}
          <p
            className="mt-4 font-display text-xs font-bold tabular-nums tracking-[0.35em]"
            style={{ color: "var(--color-muted)" }}
          >
            {String(count).padStart(3, "0")}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
