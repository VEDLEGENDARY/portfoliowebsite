"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef } from "react";

type LenisCtx = { lenis: Lenis | null };
const LenisContext = createContext<LenisCtx>({ lenis: null });

export function useLenis() {
  return useContext(LenisContext).lenis;
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
      wheelMultiplier: 1.1,
    });

    lenisRef.current = lenis;

    // Disable CSS smooth-scroll so Lenis owns it
    document.documentElement.style.scrollBehavior = "auto";

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}
