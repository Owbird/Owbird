"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

interface ObservatoryCanvasProps {
  children: React.ReactNode;
  className?: string;
  cameraPos?: [number, number, number];
}

export function ObservatoryCanvas({
  children,
  className = "fixed inset-0 pointer-events-auto z-0",
  cameraPos = [0, 0, 5],
}: ObservatoryCanvasProps) {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const isSupported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setHasWebGL(isSupported);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className={`${className} bg-[#050608] flex items-center justify-center text-zinc-600 font-mono text-xs uppercase tracking-widest`}>
        [ OBSERVATORY 2.5D CANVAS FALLBACK ACTIVE ]
      </div>
    );
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ position: cameraPos, fov: 45, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
