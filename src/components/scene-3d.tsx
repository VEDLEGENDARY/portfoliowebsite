"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as THREE from "three";

/* ── Read a CSS custom property as a hex/rgb string, live-updating on theme change ── */
function useCssColor(varName: string, fallback: string) {
  const [color, setColor] = useState(fallback);

  useEffect(() => {
    const read = () => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
      if (value) setColor(value);
    };
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, [varName]);

  return color;
}

/* ── Central distorted crystal: solid core + accent wireframe shell ── */
function Crystal({ accent }: { accent: string }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const shellRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.18;
      coreRef.current.rotation.x += delta * 0.06;
    }
    if (shellRef.current) {
      shellRef.current.rotation.y -= delta * 0.12;
      shellRef.current.rotation.z += delta * 0.05;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.03;
      shellRef.current.scale.setScalar(1.28 * pulse);
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
      {/* solid distorted core */}
      <Icosahedron ref={coreRef} args={[1.35, 6]}>
        <MeshDistortMaterial
          color="#141414"
          emissive={accent}
          emissiveIntensity={0.75}
          roughness={0.35}
          metalness={0.4}
          distort={0.4}
          speed={1.6}
        />
      </Icosahedron>

      {/* accent wireframe shell */}
      <Icosahedron ref={shellRef} args={[1.35, 2]}>
        <meshBasicMaterial
          color={accent}
          wireframe
          transparent
          opacity={0.32}
        />
      </Icosahedron>

      {/* soft additive halo — fakes a bloom bleed around the core */}
      <sprite scale={[4.4, 4.4, 1]}>
        <spriteMaterial
          map={useGlowTexture(accent)}
          transparent
          opacity={0.34}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>
    </Float>
  );
}

/* ── Radial-gradient texture used for the additive glow sprite ── */
function useGlowTexture(color: string) {
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    );
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.25, color);
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, [color]);
}

/* ── Orbiting particle field ── */
function ParticleField({ accent, count = 900 }: { accent: string; count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // spherical shell distribution for a galaxy-like swirl
      const r = 3.2 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={accent}
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/* ── Group that follows the pointer for a parallax tilt ── */
function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.4,
      0.04,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.3,
      0.04,
    );
  });

  return (
    <group ref={group} position={[0.8, 0, 0]}>
      {children}
    </group>
  );
}

export function Scene3D() {
  const accent = useCssColor("--color-accent", "#b9ff66");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
      onCreated={({ gl }) => {
        // Allow the context to recover instead of staying blank after a loss
        const canvas = gl.domElement;
        canvas.addEventListener(
          "webglcontextlost",
          (e) => e.preventDefault(),
          false,
        );
      }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 5, 6]} intensity={90} color={accent} />
      <pointLight position={[-6, -4, -3]} intensity={40} color="#ffffff" />
      <pointLight position={[0, 0, 4]} intensity={20} color={accent} />

      <ParallaxRig>
        <Crystal accent={accent} />
        <ParticleField accent={accent} count={reduced ? 350 : 800} />
      </ParallaxRig>
    </Canvas>
  );
}
