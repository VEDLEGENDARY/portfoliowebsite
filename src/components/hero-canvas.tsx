"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

const HeroScene = dynamic(
  () => import("@/components/hero-scene").then((m) => m.HeroScene),
  { ssr: false },
);

export function HeroCanvas() {
  const { theme } = useTheme();
  const reduce = useReducedMotion() ?? false;

  // Lime in the dark, deep green in the light theme — matches the CSS tokens.
  const accent = theme === "light" ? "#4e8c00" : "#b9ff66";

  return (
    <div className="absolute inset-0" aria-hidden>
      <HeroScene accent={accent} reduced={reduce} />
    </div>
  );
}
