"use client";

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  url: string;
};

interface ProjectFieldProps {
  projects: ProjectItem[];
  selectedIndex: number;
  onSelectProject: (index: number) => void;
}

// Map tags/nature to geometric shapes
function getProjectCategory(tags: string[]) {
  const tagStr = tags.join(" ").toLowerCase();
  if (tagStr.includes("security") || tagStr.includes("fuzzing") || tagStr.includes("recon")) {
    return "security";
  }
  if (tagStr.includes("cli") || tagStr.includes("go") || tagStr.includes("devops")) {
    return "cli";
  }
  if (tagStr.includes("desktop") || tagStr.includes("encryption")) {
    return "desktop";
  }
  return "web";
}

function Project3DNode({
  project,
  index,
  isSelected,
  position,
  onSelect,
}: {
  project: ProjectItem;
  index: number;
  isSelected: boolean;
  position: [number, number, number];
  onSelect: () => void;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const category = getProjectCategory(project.tags);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const speed = isSelected ? 1.2 : hovered ? 0.8 : 0.2;
    meshRef.current.rotation.y += delta * speed;
    meshRef.current.rotation.x += delta * (speed * 0.5);

    // Subtle floating bob
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.getElapsedTime() * 1.5 + index) * 0.12;
  });

  const getGeometry = () => {
    switch (category) {
      case "security":
        return <octahedronGeometry args={[0.5, 0]} />;
      case "cli":
        return <boxGeometry args={[0.6, 0.6, 0.6]} />;
      case "desktop":
        return <dodecahedronGeometry args={[0.48, 0]} />;
      default:
        return <icosahedronGeometry args={[0.5, 0]} />;
    }
  };

  const getColor = () => {
    if (isSelected) return "#10b981"; // Active emerald
    if (hovered) return "#38bdf8"; // Sky blue hover
    switch (category) {
      case "security":
        return "#f59e0b"; // Amber
      case "cli":
        return "#94a3b8"; // Steel slate
      case "desktop":
        return "#a855f7"; // Purple
      default:
        return "#64748b"; // Muted zinc
    }
  };

  return (
    <group
      ref={meshRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      {/* Central Spatial Geometry */}
      <mesh>
        {getGeometry()}
        <meshStandardMaterial
          color={getColor()}
          metalness={0.8}
          roughness={0.2}
          wireframe={!isSelected && !hovered}
        />
      </mesh>

      {/* Glowing Inner Core */}
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial
          color={isSelected ? "#34d399" : getColor()}
          wireframe
        />
      </mesh>

      {/* Orbital Highlight Ring on Hover/Select */}
      {(isSelected || hovered) && (
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[0.85, 0.015, 16, 32]} />
          <meshBasicMaterial color={isSelected ? "#10b981" : "#38bdf8"} />
        </mesh>
      )}
    </group>
  );
}

export function ProjectSpatialField({
  projects,
  selectedIndex,
  onSelectProject,
}: ProjectFieldProps) {
  // Compute positions in 3D grid layout
  const positions: [number, number, number][] = projects.map((_, i) => {
    const cols = 4;
    const row = Math.floor(i / cols);
    const col = i % cols;
    const x = (col - (cols - 1) / 2) * 2.2;
    const y = (1 - row) * 2.0;
    const z = (row % 2 === 0 ? 0 : -0.5) - (i === selectedIndex ? -0.8 : 0);
    return [x, y, z];
  });

  return (
    <group position={[0, 0, 0]}>
      {projects.map((proj, idx) => (
        <Project3DNode
          key={proj.title}
          project={proj}
          index={idx}
          isSelected={idx === selectedIndex}
          position={positions[idx]}
          onSelect={() => onSelectProject(idx)}
        />
      ))}
    </group>
  );
}
