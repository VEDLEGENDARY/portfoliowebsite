"use client";

import { type ReactNode } from "react";

/**
 * Inline accent highlight for emphasis words.
 * Uses the shared --color-accent token so it respects dark / light mode.
 */
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        color: "var(--color-accent)",
        textDecorationLine: "underline",
        textDecorationStyle: "dotted",
        textDecorationColor: "var(--color-accent-dim)",
        textUnderlineOffset: "4px",
      }}
    >
      {children}
    </span>
  );
}
