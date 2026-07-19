"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Grid,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/* ── The glowing "digital core": a slowly morphing icosahedron ── */
function Core({ accent }: { accent: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.15;
      mesh.current.rotation.y += delta * 0.22;
    }
    if (glow.current) {
      const t = state.clock.elapsedTime;
      const s = 1.28 + Math.sin(t * 1.4) * 0.04;
      glow.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      {/* Outer emissive shell — the glow */}
      <mesh ref={glow}>
        <icosahedronGeometry args={[1, 3]} />
        <meshBasicMaterial
          color={accent}
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Morphing metallic core */}
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color="#0c0c0c"
          emissive={accent}
          emissiveIntensity={0.42}
          roughness={0.15}
          metalness={0.95}
          distort={0.32}
          speed={1.6}
        />
      </mesh>

      {/* Wireframe overlay for a technical read */}
      <mesh scale={1.015}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color={accent} wireframe transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

/* ── Orbiting gyroscope rings around the core ── */
function Rings({ accent }: { accent: string }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.z += delta * 0.12;
      group.current.rotation.x += delta * 0.05;
    }
  });

  const ringProps = {
    metalness: 1,
    roughness: 0.2,
    emissive: new THREE.Color(accent),
    emissiveIntensity: 0.3,
    color: "#161616",
  };

  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.9, 0.018, 16, 128]} />
        <meshStandardMaterial {...ringProps} />
      </mesh>
      <mesh rotation={[Math.PI / 2.6, Math.PI / 5, 0]}>
        <torusGeometry args={[2.25, 0.014, 16, 128]} />
        <meshStandardMaterial {...ringProps} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, -Math.PI / 4, 0]}>
        <torusGeometry args={[2.55, 0.01, 16, 128]} />
        <meshStandardMaterial {...ringProps} />
      </mesh>
    </group>
  );
}

/* ── A few intentional glass crystal shards floating in orbit ── */
function Shards({ accent }: { accent: string }) {
  const shards = useMemo(
    () => [
      { pos: [2.6, 1.1, -0.5], scale: 0.32, speed: 2.4 },
      { pos: [-2.7, -0.8, 0.3], scale: 0.24, speed: 3.1 },
      { pos: [1.9, -1.6, 0.8], scale: 0.2, speed: 2.0 },
      { pos: [-2.1, 1.5, -0.9], scale: 0.28, speed: 2.7 },
    ],
    [],
  );

  return (
    <>
      {shards.map((s, i) => (
        <Float
          key={i}
          speed={s.speed}
          rotationIntensity={2}
          floatIntensity={1.5}
        >
          <mesh position={s.pos as [number, number, number]} scale={s.scale}>
            <octahedronGeometry args={[1, 0]} />
            <MeshTransmissionMaterial
              thickness={0.4}
              roughness={0.05}
              transmission={1}
              ior={1.5}
              chromaticAberration={0.4}
              backside
              color={accent}
              emissive={accent}
              emissiveIntensity={0.15}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

/* ── Camera parallax that follows the pointer (fed from a window listener so
   the canvas can stay pointer-events:none and keep the UI clickable) ── */
function Rig({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  useFrame((state, delta) => {
    const targetX = mouse.current.x * 0.9;
    const targetY = 0.4 + mouse.current.y * 0.5;
    const k = Math.min(delta * 2, 1);
    state.camera.position.x += (targetX - state.camera.position.x) * k;
    state.camera.position.y += (targetY - state.camera.position.y) * k;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export function HeroScene({
  accent = "#b9ff66",
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
      camera={{ position: [0, 0.4, 6], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 5, 3]} intensity={1.4} color="#ffffff" />
        <pointLight position={[-4, -2, -3]} intensity={2} color={accent} />
        <pointLight position={[0, 0, 2]} intensity={1.2} color={accent} />

        <Float
          speed={reduced ? 0 : 1.2}
          rotationIntensity={reduced ? 0 : 0.4}
          floatIntensity={reduced ? 0 : 0.6}
        >
          <group scale={1.05} position={[1.15, 0.15, 0]}>
            <Core accent={accent} />
            <Rings accent={accent} />
          </group>
        </Float>

        {!reduced && <Shards accent={accent} />}

        {/* Reflective receding grid floor */}
        <Grid
          position={[0, -2.6, 0]}
          args={[30, 30]}
          cellSize={0.6}
          cellThickness={0.6}
          cellColor={accent}
          sectionSize={3}
          sectionThickness={1.1}
          sectionColor={accent}
          fadeDistance={26}
          fadeStrength={4}
          followCamera={false}
          infiniteGrid
        />

        <Environment preset="night" />

        {!reduced && <Rig mouse={mouse} />}

        <EffectComposer>
          <Bloom
            intensity={0.9}
            luminanceThreshold={0.18}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          <Vignette eskil={false} offset={0.25} darkness={0.85} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
