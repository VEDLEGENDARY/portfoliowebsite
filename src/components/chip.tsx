import type { CSSProperties, ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  /** Extra Tailwind / className overrides */
  className?: string;
  /**
   * Optional accent color. When set, the chip renders as a solid-tinted status
   * pill (used for "Live", "#1 National", "Production", etc.) instead of the
   * default neutral tag.
   */
  color?: string;
  /** Show a small leading dot (useful for status chips) */
  dot?: boolean;
}

/**
 * Shared pill/tag component.
 * - Default: neutral tag with green hover (styled in globals.css `.chip`).
 * - With `color`: a highlighted status pill tinted to that color.
 */
export function Chip({ children, className = "", color, dot }: ChipProps) {
  if (color) {
    const style: CSSProperties = {
      color,
      backgroundColor: `${color}1f`,
      border: `1px solid ${color}55`,
    };
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide ${className}`}
        style={style}
      >
        {dot && (
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: color }}
          />
        )}
        {children}
      </span>
    );
  }
  return <span className={`chip ${className}`}>{children}</span>;
}
