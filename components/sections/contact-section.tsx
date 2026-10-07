"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight, Mail, Send, Rocket } from "lucide-react";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { MagneticButton } from "@/components/ui/magnetic-button";

const ObservatoryCanvas = dynamic(
  () => import("@/components/3d/observatory-canvas").then((mod) => mod.ObservatoryCanvas),
  { ssr: false }
);

const OwbirdArtifact = dynamic(
  () => import("@/components/3d/owbird-artifact").then((mod) => mod.OwbirdArtifact),
  { ssr: false }
);

const ObservatoryLighting = dynamic(
  () => import("@/components/3d/observatory-lighting").then((mod) => mod.ObservatoryLighting),
  { ssr: false }
);

export function ContactSection({ index = "005" }: { index?: string }) {
  const [isFlightActive, setIsFlightActive] = useState(false);

  const handleFlightTrigger = () => {
    setIsFlightActive(true);
  };

  return (
    <section id="contact" className="relative min-h-[80vh] w-full border-t border-zinc-900 bg-[#050608] px-6 py-28 overflow-hidden">
      {/* 3D Canvas rendering final Owbird Flight state */}
      <div className="absolute inset-0 h-full w-full pointer-events-auto opacity-70">
        <ObservatoryCanvas cameraPos={[0, 0, 4.5]}>
          <ObservatoryLighting />
          <OwbirdArtifact
            isExplored={isFlightActive}
            onSelect={handleFlightTrigger}
            scale={1.4}
          />
        </ObservatoryCanvas>
      </div>

      <div className="pointer-events-none absolute inset-0 observatory-vignette opacity-90" />

      <div className="relative z-10 mx-auto max-w-6xl pointer-events-none">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-900/80 pb-6">
          <div className="flex items-center gap-3">
            <TechnicalLabel variant="active" prefix="SECTOR">
              {index} / DEPARTURE
            </TechnicalLabel>
            <TechnicalLabel variant="accent">OBSERVATORY PORTAL</TechnicalLabel>
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            SYSTEM ONLINE · READY FOR TRANSMISSION
          </div>
        </div>

        <div className="my-16 max-w-3xl">
          <h2 className="text-4xl font-light tracking-tight text-white sm:text-6xl md:text-7xl">
            LET'S BUILD SOMETHING.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300 max-w-2xl">
            Whether you want to collaborate on security research, discuss distributed infrastructure, or build high-impact developer tooling, reach out.
          </p>

          <div className="mt-10 pointer-events-auto flex flex-wrap items-center gap-6">
            <a href="mailto:me@owbird.dev">
              <MagneticButton variant="primary">
                <Mail className="h-4 w-4" />
                <span>INITIATE CONTACT</span>
              </MagneticButton>
            </a>

            <button
              onClick={handleFlightTrigger}
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              <span>ACTIVATE ARTIFACT FLIGHT</span>
            </button>
          </div>
        </div>

        {/* Contact Links */}
        <div className="mt-12 border-t border-zinc-900/80 pt-8 flex flex-wrap items-center justify-between gap-6 pointer-events-auto font-mono text-xs uppercase tracking-widest text-zinc-400">
          <div className="flex flex-wrap items-center gap-8">
            <a
              href="mailto:me@owbird.dev"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              EMAIL // ME@OWBIRD.DEV
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600" />
            </a>
            <a
              href="https://github.com/owbird"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              GITHUB // OWBIRD
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600" />
            </a>
            <a
              href="https://linkedin.com/in/obed-forkuo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              LINKEDIN // OBED-FORKUO
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600" />
            </a>
          </div>

          <div className="text-zinc-600">
            © {new Date().getFullYear()} OWBIRD · ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </section>
  );
}
