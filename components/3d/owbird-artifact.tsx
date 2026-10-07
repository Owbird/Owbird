"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface OwbirdArtifactProps {
  isExplored?: boolean;
  onSelect?: () => void;
  scale?: number;
}

export function OwbirdArtifact({
  isExplored = false,
  onSelect,
  scale = 1,
}: OwbirdArtifactProps) {
  const groupRef = useRef<THREE.Group>(null);
  const wingsLeftRef = useRef<THREE.Group>(null);
  const wingsRightRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  // Target rotation for mouse tracking
  const targetRotation = useRef({ x: 0, y: 0 });

  // Generate wing rib curves and neural nodes
  const wingRibs = useMemo(() => {
    const ribs = [];
    for (let i = 0; i < 5; i++) {
      const radius = 0.8 + i * 0.35;
      const tubeRadius = 0.02 - i * 0.003;
      const arcLength = Math.PI * (0.65 - i * 0.08);
      ribs.push({ radius, tubeRadius, arcLength, index: i });
    }
    return ribs;
  }, []);

  // Neural node coordinates
  const nodes = useMemo(() => {
    return [
      [0, 1.4, 0],
      [0, -1.4, 0],
      [1.2, 0.8, 0.3],
      [-1.2, 0.8, -0.3],
      [1.6, 0.1, -0.2],
      [-1.6, 0.1, 0.2],
      [0.9, -0.9, 0.4],
      [-0.9, -0.9, -0.4],
    ] as [number, number, number][];
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Mouse tracking lerp
    const pointerX = state.pointer.x * 0.4;
    const pointerY = state.pointer.y * 0.3;

    targetRotation.current.x = THREE.MathUtils.lerp(
      targetRotation.current.x,
      -pointerY,
      delta * 3
    );
    targetRotation.current.y = THREE.MathUtils.lerp(
      targetRotation.current.y,
      pointerX + state.clock.getElapsedTime() * 0.15,
      delta * 3
    );

    groupRef.current.rotation.x = targetRotation.current.x;
    groupRef.current.rotation.y = targetRotation.current.y;

    // Core pulsing emissive animation
    if (coreRef.current) {
      const pulse = Math.sin(state.clock.getElapsedTime() * 2) * 0.15 + 0.85;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    // Outer ring slow counter-rotation
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
      ringRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }

    // Wing expansion on explored state
    const wingAngle = isExplored ? 0.4 : 0;
    if (wingsLeftRef.current) {
      wingsLeftRef.current.rotation.z = THREE.MathUtils.lerp(
        wingsLeftRef.current.rotation.z,
        wingAngle,
        delta * 2
      );
    }
    if (wingsRightRef.current) {
      wingsRightRef.current.rotation.z = THREE.MathUtils.lerp(
        wingsRightRef.current.rotation.z,
        -wingAngle,
        delta * 2
      );
    }
  });

  return (
    <group
      ref={groupRef}
      scale={[scale, scale, scale]}
      onClick={onSelect}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
      }}
    >
      {/* 1. Internal Glowing Neural Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.55, 2]} />
        <meshPhysicalMaterial
          color="#10b981"
          emissive="#059669"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
          clearcoat={0.5}
        />
      </mesh>

      {/* Core Wireframe Shell */}
      <mesh>
        <dodecahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* 2. Left Wing Assembly (Mechanical / Neural Arcs) */}
      <group ref={wingsLeftRef} position={[-0.2, 0, 0]}>
        {wingRibs.map((rib) => (
          <mesh
            key={`left-rib-${rib.index}`}
            position={[-0.3 * rib.index, 0.1 * rib.index, 0]}
            rotation={[0, 0.3, 0.2 + rib.index * 0.15]}
          >
            <torusGeometry args={[rib.radius, rib.tubeRadius, 16, 64, rib.arcLength]} />
            <meshStandardMaterial
              color="#cbd5e1"
              metalness={0.9}
              roughness={0.15}
            />
          </mesh>
        ))}
      </group>

      {/* 3. Right Wing Assembly */}
      <group ref={wingsRightRef} position={[0.2, 0, 0]}>
        {wingRibs.map((rib) => (
          <mesh
            key={`right-rib-${rib.index}`}
            position={[0.3 * rib.index, 0.1 * rib.index, 0]}
            rotation={[0, -0.3, -0.2 - rib.index * 0.15]}
          >
            <torusGeometry args={[rib.radius, rib.tubeRadius, 16, 64, rib.arcLength]} />
            <meshStandardMaterial
              color="#cbd5e1"
              metalness={0.9}
              roughness={0.15}
            />
          </mesh>
        ))}
      </group>

      {/* 4. Outer Observatory Ring / Data Orbit */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#d97706"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Secondary Orbital Ring */}
      <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[1.8, 0.012, 16, 80]} />
        <meshStandardMaterial
          color="#94a3b8"
          metalness={0.85}
          roughness={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* 5. Neural Node Dots */}
      {nodes.map((pos, idx) => (
        <mesh key={`node-${idx}`} position={pos}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial
            color="#34d399"
            emissive="#10b981"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}
