import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  /** Extra Tailwind / className overrides */
  className?: string;
}

/**
 * Shared pill/tag component.
 * Hover: green text + subtle green bg/border.
 * All styling lives in globals.css `.chip` so it respects both dark and light
 * theme tokens without inline JS.
 */
export function Chip({ children, className = "" }: ChipProps) {
  return <span className={`chip ${className}`}>{children}</span>;
}
