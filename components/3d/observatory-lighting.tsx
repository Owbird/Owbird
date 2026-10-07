"use client";

import React from "react";

export function ObservatoryLighting() {
  return (
    <>
      {/* Deep ambient dark base */}
      <ambientLight intensity={0.25} color="#10141f" />

      {/* Main directional key light (cool silver) */}
      <directionalLight
        position={[8, 12, 10]}
        intensity={1.2}
        color="#e2e8f0"
        castShadow
      />

      {/* Rim light (emerald core accent) */}
      <pointLight
        position={[-6, -4, -6]}
        intensity={1.5}
        color="#10b981"
        distance={20}
      />

      {/* Warm metallic accent light */}
      <spotLight
        position={[0, 8, 5]}
        intensity={0.8}
        angle={0.6}
        penumbra={0.8}
        color="#f59e0b"
      />
    </>
  );
}
