"use client";

import React, { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type ResearchPaper = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  url?: string;
};

interface ConstellationProps {
  papers: ResearchPaper[];
  selectedIndex: number;
  onSelectPaper: (index: number) => void;
}

export function ResearchConstellation({
  papers,
  selectedIndex,
  onSelectPaper,
}: ConstellationProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Define spatial positions for paper nodes and concept hubs
  const { nodePositions, edges } = useMemo(() => {
    const nodePos: [number, number, number][] = [];
    const edgeList: [number, number][] = [];

    // Paper nodes in spatial arrangement
    papers.forEach((_, idx) => {
      const angle = (idx / papers.length) * Math.PI * 2;
      const radius = 2.2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * (radius * 0.7);
      const z = (idx % 2 === 0 ? 0.6 : -0.6);
      nodePos.push([x, y, z]);
    });

    // Central Knowledge Hub node (Index: papers.length)
    const hubIndex = papers.length;
    nodePos.push([0, 0, 0]);

    // Connect each paper to central hub
    papers.forEach((_, idx) => {
      edgeList.push([idx, hubIndex]);
    });

    // Connect adjacent papers
    for (let i = 0; i < papers.length; i++) {
      const next = (i + 1) % papers.length;
      edgeList.push([i, next]);
    }

    return { nodePositions: nodePos, edges: edgeList };
  }, [papers]);

  // Construct buffer line geometry for glowing constellation edges
  const lineGeometry = useMemo(() => {
    const points: number[] = [];
    edges.forEach(([start, end]) => {
      const p1 = nodePositions[start];
      const p2 = nodePositions[end];
      points.push(...p1, ...p2);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3)
    );
    return geo;
  }, [nodePositions, edges]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Constellation Edge Lines */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Nodes */}
      {nodePositions.map((pos, idx) => {
        const isPaper = idx < papers.length;
        const isSelected = idx === selectedIndex;
        const isHovered = idx === hoveredNode;

        return (
          <group
            key={`node-${idx}`}
            position={pos}
            onClick={(e) => {
              e.stopPropagation();
              if (isPaper) onSelectPaper(idx);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredNode(idx);
              if (isPaper) document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              setHoveredNode(null);
              document.body.style.cursor = "auto";
            }}
          >
            {/* Glowing Node Sphere */}
            <mesh>
              <sphereGeometry args={[isSelected ? 0.22 : isHovered ? 0.18 : 0.12, 16, 16]} />
              <meshStandardMaterial
                color={
                  isSelected
                    ? "#10b981"
                    : isHovered
                    ? "#38bdf8"
                    : isPaper
                    ? "#cbd5e1"
                    : "#f59e0b"
                }
                emissive={isSelected ? "#059669" : "#0284c7"}
                emissiveIntensity={isSelected ? 1.2 : 0.4}
              />
            </mesh>

            {/* Orbit Ring for Selected Node */}
            {isSelected && (
              <mesh rotation={[Math.PI / 4, 0, 0]}>
                <torusGeometry args={[0.35, 0.012, 16, 32]} />
                <meshBasicMaterial color="#10b981" />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}
