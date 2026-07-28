"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface CardTilt3DProps {
  children: React.ReactNode;
  /** Visual classes for the card (e.g., border, background, rounded corners, padding) */
  className?: string;
  /** Layout classes for the outer wrapper (e.g., w-full, h-full) */
  containerClassName?: string;
  style?: React.CSSProperties;
  /** Max tilt angle in degrees. Default 10. */
  intensity?: number;
  /** Scale up the card on hover. Default true. */
  scaleOnHover?: boolean;
}

export function CardTilt3D({
  children,
  className = "",
  containerClassName = "",
  style,
  intensity = 10,
  scaleOnHover = true,
}: CardTilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth rotational physics
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [intensity, -intensity]),
    { stiffness: 300, damping: 25, mass: 0.5 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-intensity, intensity]),
    { stiffness: 300, damping: 25, mass: 0.5 }
  );

  const scale = useSpring(1, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => {
    if (prefersReduced) return;
    if (scaleOnHover) scale.set(1.03);
  };

  const handleMouseLeave = () => {
    if (prefersReduced) return;
    mouseX.set(0.5);
    mouseY.set(0.5);
    if (scaleOnHover) scale.set(1);
  };

  if (prefersReduced) {
    return (
      <div className={`${className} ${containerClassName}`} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${containerClassName}`}
      style={{
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`relative w-full h-full ${className}`}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          willChange: "transform",
          ...style,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}