"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Torus,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/* ── Morphing crystalline core ── */
function Core({ accent }: { accent: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.25;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.25;
  });

  return (
    <Icosahedron ref={ref} args={[0.95, 4]}>
      {/* MeshDistortMaterial gives an organic, liquid-metal crystal */}
      <MeshDistortMaterial
        color={accent}
        emissive={accent}
        emissiveIntensity={0.35}
        roughness={0.08}
        metalness={0.95}
        distort={0.38}
        speed={1.6}
      />
    </Icosahedron>
  );
}

/* ── Orbiting metallic gyroscope rings ── */
function Rings({ accent }: { accent: string }) {
  const g1 = useRef<THREE.Mesh>(null);
  const g2 = useRef<THREE.Mesh>(null);
  const g3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (g1.current) g1.current.rotation.z = t * 0.4;
    if (g2.current) {
      g2.current.rotation.x = t * 0.35;
      g2.current.rotation.y = t * 0.2;
    }
    if (g3.current) {
      g3.current.rotation.y = -t * 0.3;
      g3.current.rotation.x = Math.PI / 2.4;
    }
  });

  const ringMat = (glow: number) => (
    <meshStandardMaterial
      color="#0b0f0a"
      emissive={accent}
      emissiveIntensity={glow}
      roughness={0.2}
      metalness={1}
    />
  );

  return (
    <group>
      <Torus ref={g1} args={[1.55, 0.02, 16, 160]} rotation={[Math.PI / 3, 0, 0]}>
        {ringMat(0.9)}
      </Torus>
      <Torus ref={g2} args={[1.9, 0.015, 16, 160]}>
        {ringMat(0.6)}
      </Torus>
      <Torus ref={g3} args={[2.25, 0.012, 16, 180]}>
        {ringMat(0.45)}
      </Torus>
    </group>
  );
}

/* ── Floating geometric crystal shards (intentional geometry, not dots) ── */
function Shards({ accent }: { accent: string }) {
  const shards = useMemo(
    () => [
      { pos: [2.6, 1.4, -1] as const, s: 0.28, speed: 1.2, rot: 2 },
      { pos: [-2.4, -1.2, -0.5] as const, s: 0.36, speed: 0.9, rot: 3 },
      { pos: [2.2, -1.6, 0.5] as const, s: 0.22, speed: 1.5, rot: 5 },
      { pos: [-2.8, 1.0, -1.5] as const, s: 0.3, speed: 1.1, rot: 1 },
      { pos: [0.2, 2.4, -2] as const, s: 0.24, speed: 1.3, rot: 4 },
    ],
    [],
  );

  return (
    <>
      {shards.map((sh, i) => (
        <Float
          key={i}
          speed={sh.speed}
          rotationIntensity={sh.rot}
          floatIntensity={1.4}
        >
          <Icosahedron args={[sh.s, 0]} position={sh.pos}>
            <meshStandardMaterial
              color="#0d120b"
              emissive={accent}
              emissiveIntensity={0.5}
              roughness={0.15}
              metalness={0.9}
              flatShading
            />
          </Icosahedron>
        </Float>
      ))}
    </>
  );
}

/* ── Camera parallax driven by a window pointer listener (canvas stays
   pointer-events:none so the UI beneath keeps working) ── */
function Rig({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  useFrame((state, delta) => {
    const targetX = mouse.current.x * 0.8;
    const targetY = 0.3 + mouse.current.y * 0.45;
    const k = Math.min(delta * 2, 1);
    state.camera.position.x += (targetX - state.camera.position.x) * k;
    state.camera.position.y += (targetY - state.camera.position.y) * k;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene({
  accent = "#a3e635",
  reduced = false,
}: {
  accent?: string;
  reduced?: boolean;
}) {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  return (
    <Canvas
      camera={{ position: [0, 0.3, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={40} color={accent} />
      <pointLight position={[-5, -3, 2]} intensity={25} color="#4ac0ff" />
      <spotLight position={[0, 6, 3]} intensity={30} angle={0.6} penumbra={1} />

      <Suspense fallback={null}>
        {/* pushed to the right so it frames the portrait / right column */}
        <group position={[1.5, 0.1, 0]} scale={1.1}>
          <Core accent={accent} />
          <Rings accent={accent} />
        </group>
        <Shards accent={accent} />
        <Environment preset="city" />
      </Suspense>

      {!reduced && <Rig mouse={mouse} />}

      <EffectComposer>
        <Bloom
          intensity={1.1}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.25} darkness={0.7} />
      </EffectComposer>
    </Canvas>
  );
}
