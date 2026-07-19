"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface CardTilt3DProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Max tilt angle in degrees. Default 10. */
  intensity?: number;
}

/**
 * Spline-style 3D card tilt using CSS perspective + framer-motion springs.
 * Adds a dynamic specular glare highlight that tracks the cursor.
 * Respects prefers-reduced-motion.
 */
export function CardTilt3D({
  children,
  className,
  style,
  intensity = 10,
}: CardTilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Normalized mouse position: 0 = top-left, 1 = bottom-right
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-intensity, intensity]), {
    stiffness: 200,
    damping: 28,
    mass: 0.5,
  });
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [intensity, -intensity]), {
    stiffness: 200,
    damping: 28,
    mass: 0.5,
  });

  // Specular glare: follows cursor as a radial highlight
  const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"]);
  const glareOpacity = useSpring(0, { stiffness: 200, damping: 25 });
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]: string[]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.09) 0%, transparent 65%)`,
  );

  const handleMove = (e: React.MouseEvent) => {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
    glareOpacity.set(1);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    glareOpacity.set(0);
  };

  if (prefersReduced) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, perspective: "1200px" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {children}

        {/* Specular highlight layer */}
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background: glareBackground,
            opacity: glareOpacity,
            pointerEvents: "none",
            zIndex: 20,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
