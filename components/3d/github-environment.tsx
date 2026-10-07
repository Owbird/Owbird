"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function GitHubMatrixEnvironment() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate spatial blocks representing repositories/commits
  const blocks = useMemo(() => {
    const items = [];
    for (let i = 0; i < 24; i++) {
      const col = i % 6;
      const row = Math.floor(i / 6);
      const height = 0.3 + Math.random() * 1.2;
      const x = (col - 2.5) * 1.1;
      const z = (row - 1.5) * 1.1;
      const activityLevel = Math.random();
      items.push({ x, z, height, activityLevel, id: i });
    }
    return items;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Base Grid Wireframe */}
      <gridHelper args={[10, 20, "#3b4252", "#1e222d"]} />

      {/* Computational Repository Towers */}
      {blocks.map((b) => (
        <group key={`tower-${b.id}`} position={[b.x, b.height / 2, b.z]}>
          <mesh>
            <boxGeometry args={[0.7, b.height, 0.7]} />
            <meshStandardMaterial
              color={b.activityLevel > 0.7 ? "#10b981" : b.activityLevel > 0.4 ? "#38bdf8" : "#334155"}
              wireframe={b.activityLevel < 0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Emissive Activity Top Light */}
          <mesh position={[0, b.height / 2 + 0.02, 0]}>
            <boxGeometry args={[0.72, 0.04, 0.72]} />
            <meshStandardMaterial
              color={b.activityLevel > 0.7 ? "#34d399" : "#38bdf8"}
              emissive={b.activityLevel > 0.7 ? "#059669" : "#0284c7"}
              emissiveIntensity={1.0}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}
