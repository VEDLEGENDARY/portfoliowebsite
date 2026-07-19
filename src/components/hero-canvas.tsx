"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const HeroScene = dynamic(() => import("@/components/hero-scene"), {
  ssr: false,
});

export function HeroCanvas() {
  const { resolvedTheme } = useTheme();
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const accent = resolvedTheme === "light" ? "#4d7c0f" : "#a3e635";

  return (
    <div className="h-full w-full">
      <HeroScene accent={accent} reduced={reduced} />
    </div>
  );
}
