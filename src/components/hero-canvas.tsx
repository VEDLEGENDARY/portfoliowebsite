"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ─────────────────────────────────────────────
   Scroll-mapped camera path.
   As the user scrolls through the hero section
   the camera pulls back, shifts, and rotates.
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

/* ─────────────────────────────────────────────
   Slowly rotating parent group of wireframe
   geometric shapes that float independently.
───────────────────────────────────────────── */
function GeometryField() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.055;
    groupRef.current.rotation.x = Math.sin(t * 0.035) * 0.12;
  });

  return (
    <group ref={groupRef}>
      {/* Primary focal icosahedron — accent green */}
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.9}>
        <mesh position={[1.6, 0.4, -0.8]}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshStandardMaterial
            color="#b9ff66"
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>
      </Float>

      {/* Torus — accent, mid-depth */}
      <Float speed={0.75} rotationIntensity={0.7} floatIntensity={1.1}>
        <mesh position={[-2.0, -0.7, -1.6]} rotation={[0.6, 0.3, 0.1]}>
          <torusGeometry args={[0.75, 0.2, 14, 40]} />
          <meshStandardMaterial
            color="#b9ff66"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>
      </Float>

      {/* Octahedron — white, deep */}
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.7}>
        <mesh position={[0.2, 2.0, -3.2]}>
          <octahedronGeometry args={[0.65]} />
          <meshStandardMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.09}
          />
        </mesh>
      </Float>

      {/* Tetrahedron — accent, near */}
      <Float speed={0.55} rotationIntensity={0.6} floatIntensity={1.0}>
        <mesh position={[-0.5, -1.6, -1.2]}>
          <tetrahedronGeometry args={[0.55]} />
          <meshStandardMaterial
            color="#b9ff66"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>

      {/* Small secondary icosahedron — white, far */}
      <Float speed={1.0} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[-1.2, 1.4, -2.8]}>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.07}
          />
        </mesh>
      </Float>

      {/* Torus knot — deep, subtle */}
      <Float speed={0.4} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[2.4, -1.8, -3.5]}>
          <torusKnotGeometry args={[0.5, 0.14, 80, 12]} />
          <meshStandardMaterial
            color="#b9ff66"
            wireframe
            transparent
            opacity={0.07}
          />
        </mesh>
      </Float>
    </group>
  );
}

/* ─────────────────────────────────────────────
   Exported canvas — always used via next/dynamic
   so R3F never runs on the server.
───────────────────────────────────────────── */
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
      <ambientLight intensity={0.3} />
      <pointLight position={[8, 8, 4]} intensity={1.2} color="#b9ff66" />
      <pointLight position={[-8, -6, -4]} intensity={0.5} color="#ffffff" />
      <GeometryField />
      <ScrollCamera />
    </Canvas>
  );
}
