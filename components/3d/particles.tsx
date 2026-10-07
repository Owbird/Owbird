"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface AtmosphericParticlesProps {
  count?: number;
  speed?: number;
}

export function AtmosphericParticles({
  count = 120,
  speed = 0.2,
}: AtmosphericParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sca = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      sca[i] = Math.random() * 0.8 + 0.2;
    }

    return [pos, sca];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03 * speed;
    pointsRef.current.rotation.x += delta * 0.01 * speed;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-scale"
          args={[scales, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#a0aec0"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
