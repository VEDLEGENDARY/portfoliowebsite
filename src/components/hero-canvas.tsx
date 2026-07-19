"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ─────────────────────────────────────────────
   Scroll-mapped camera path only.
   Camera pulls back and shifts as the user scrolls.
───────────────────────────────────────────── */
function ScrollCamera() {
  const { camera } = useThree();
  const scrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    const progress = Math.min(scrollRef.current / (window.innerHeight || 800), 1);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, progress * 0.9, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -progress * 0.65, 0.04);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 5 + progress * 2.2, 0.04);
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, progress * 0.06, 0.04);
  });

  return null;
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 58 }}
      dpr={[1, 1.5]}
      frameloop="always"
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      <ScrollCamera />
    </Canvas>
  );
}
