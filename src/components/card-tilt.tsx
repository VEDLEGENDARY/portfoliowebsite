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
  /** Scale up the card on hover. Default true. */
  scaleOnHover?: boolean;
}

export function CardTilt3D({
  children,
  className,
  style,
  intensity = 10,
  scaleOnHover = true,
}: CardTilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-intensity, intensity]), {
    stiffness: 320,
    damping: 22,
    mass: 0.4,
  });
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [intensity, -intensity]), {
    stiffness: 320,
    damping: 22,
    mass: 0.4,
  });

  const scale = useSpring(1, { stiffness: 300, damping: 20, mass: 0.4 });

  // Specular glare: circular radial gradient propagating from cursor position
  const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"]);
  const glareOpacity = useSpring(0, { stiffness: 250, damping: 20 });
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]: string[]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 28%, rgba(255,255,255,0.03) 55%, transparent 100%)`,
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

  const handleEnter = () => {
    if (prefersReduced) return;
    if (scaleOnHover) scale.set(1.03);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    glareOpacity.set(0);
    if (scaleOnHover) scale.set(1);
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
      style={{ ...style, perspective: "800px" }}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="card-tilt-inner"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          position: "relative",
          width: "100%",
          height: "100%",
          /* Critical: keep corners clipped during tilt */
          borderRadius: "inherit",
          overflow: "hidden",
          border: "2px solid rgba(255, 255, 255, 0.18)",
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
