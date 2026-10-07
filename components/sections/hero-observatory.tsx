"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { name } from "@/lib/utils";

// Dynamic loading of 3D canvas with fallback to avoid SSR mismatch
const ObservatoryCanvas = dynamic(
  () => import("@/components/3d/observatory-canvas").then((mod) => mod.ObservatoryCanvas),
  { ssr: false }
);

const OwbirdArtifact = dynamic(
  () => import("@/components/3d/owbird-artifact").then((mod) => mod.OwbirdArtifact),
  { ssr: false }
);

const AtmosphericParticles = dynamic(
  () => import("@/components/3d/particles").then((mod) => mod.AtmosphericParticles),
  { ssr: false }
);

const ObservatoryLighting = dynamic(
  () => import("@/components/3d/observatory-lighting").then((mod) => mod.ObservatoryLighting),
  { ssr: false }
);

export function HeroObservatory() {
  const [isExplored, setIsExplored] = useState(false);

  const handleEnter = () => {
    setIsExplored(true);
    const workElem = document.getElementById("work");
    if (workElem) {
      workElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050608] pt-24">
      {/* 3D Observatory Background World */}
      <div className="absolute inset-0 h-full w-full pointer-events-auto">
        <ObservatoryCanvas cameraPos={[0, 0, 4.8]}>
          <ObservatoryLighting />
          <AtmosphericParticles count={160} speed={0.25} />
          <OwbirdArtifact
            isExplored={isExplored}
            onSelect={handleEnter}
            scale={1.2}
          />
        </ObservatoryCanvas>
      </div>

      {/* Subtle Grid and Radial Vignette Overlays */}
      <div className="pointer-events-none absolute inset-0 observatory-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 observatory-vignette opacity-80" />

      {/* Hero Editorial HUD Overlay */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-between px-6 py-12 pointer-events-none">
        {/* Top Telemetry Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4 pt-4"
        >
          <div className="flex items-center gap-3">
            <TechnicalLabel variant="active" prefix="STATUS">
              OBSERVATORY ONLINE
            </TechnicalLabel>
            <TechnicalLabel variant="dim" prefix="SECTOR">
              00 / CORE
            </TechnicalLabel>
          </div>

          <div className="hidden font-mono text-[10px] tracking-widest text-zinc-500 md:block">
            LAT 05°36'N · LONG 00°11'W [ACC-GH]
          </div>
        </motion.div>

        {/* Central Identity Composition */}
        <div className="my-auto max-w-2xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-emerald-400/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              BUILDER · RESEARCHER · ENGINEER
            </div>

            <h1 className="text-5xl font-light tracking-tight text-white sm:text-7xl md:text-8xl">
              {name}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-zinc-300 md:text-xl">
              Designing secure infrastructure, developer tooling, and distributed
              platforms for emerging markets.
            </p>

            <p className="mt-3 font-mono text-xs text-zinc-500 leading-relaxed max-w-lg">
              [THE DIGITAL OBSERVATORY] · A computational world exploring systems security, program analysis, and high-performance infrastructure artifacts.
            </p>

            {/* Interactive Enter Action */}
            <div className="mt-10 pointer-events-auto flex items-center gap-6">
              <MagneticButton onClick={handleEnter} variant="primary">
                <span>ENTER OBSERVATORY</span>
                <ArrowDown className="h-3.5 w-3.5 text-zinc-950 transition-transform group-hover:translate-y-0.5" />
              </MagneticButton>

              <div className="hidden font-mono text-[10px] uppercase tracking-widest text-zinc-500 sm:block">
                CLICK ARTIFACT OR SCROLL TO NAVIGATE
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metadata Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-end justify-between gap-6 border-t border-zinc-900/80 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
        >
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/owbird"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto hover:text-white transition-colors"
            >
              GH // OWBIRD
            </a>
            <a
              href="https://linkedin.com/in/obed-forkuo"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto hover:text-white transition-colors"
            >
              IN // OBED-FORKUO
            </a>
            <a
              href="mailto:me@owbird.dev"
              className="pointer-events-auto hover:text-white transition-colors"
            >
              MAIL // ME@OWBIRD.DEV
            </a>
          </div>

          <div className="flex items-center gap-2 text-zinc-600">
            <span>SYS.VER 3.0</span>
            <span>·</span>
            <span>PROCEED BELOW</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
