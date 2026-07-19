"use client";

import { useEffect, useRef, useState } from "react";

/**
 * IntersectionObserver performance gate.
 * Returns a ref to attach to the element and whether it's currently visible.
 * Use this to halt expensive rendering (3D canvases, animations) when off-screen.
 */
export function useIntersection<T extends Element>(
  options: IntersectionObserverInit = {},
) {
  const ref = useRef<T>(null);
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasEverIntersected, setHasEverIntersected] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      // Fallback: always consider visible if IO not supported
      setIntersecting(true);
      setHasEverIntersected(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) setHasEverIntersected(true);
      },
      { rootMargin: "100px", threshold: 0, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isIntersecting, hasEverIntersected };
}
