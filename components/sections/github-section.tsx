"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight, GitCommit, GitBranch, Terminal } from "lucide-react";
import { TechnicalLabel } from "@/components/ui/technical-label";

const ObservatoryCanvas = dynamic(
  () => import("@/components/3d/observatory-canvas").then((mod) => mod.ObservatoryCanvas),
  { ssr: false }
);

const GitHubMatrixEnvironment = dynamic(
  () => import("@/components/3d/github-environment").then((mod) => mod.GitHubMatrixEnvironment),
  { ssr: false }
);

const ObservatoryLighting = dynamic(
  () => import("@/components/3d/observatory-lighting").then((mod) => mod.ObservatoryLighting),
  { ssr: false }
);

export function GitHubSection() {
  return (
    <section className="relative w-full border-t border-zinc-900 bg-[#050608] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-900/80 pb-6">
          <div className="flex items-center gap-3">
            <TechnicalLabel variant="active" prefix="SYSTEM">
              DEVELOPMENT MATRIX
            </TechnicalLabel>
            <TechnicalLabel variant="dim">GH // OWBIRD</TechnicalLabel>
          </div>

          <a
            href="https://github.com/owbird"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 transition-colors hover:text-white"
          >
            OPEN GITHUB PROFILE
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
          {/* Left 3D Computational Matrix Canvas */}
          <div className="lg:col-span-7">
            <div className="relative h-[320px] w-full overflow-hidden rounded-md border border-zinc-800/60 bg-zinc-950/60 backdrop-blur-md">
              <div className="absolute top-3 left-3 z-10 font-mono text-[10px] tracking-widest text-zinc-500">
                // SPATIAL REPOSITORY MATRIX & COMMIT DENSITY
              </div>

              <ObservatoryCanvas className="absolute inset-0 h-full w-full pointer-events-auto" cameraPos={[0, 2.5, 4.5]}>
                <ObservatoryLighting />
                <GitHubMatrixEnvironment />
              </ObservatoryCanvas>
            </div>
          </div>

          {/* Right Editorial Telemetry & Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6 font-mono">
            <div className="rounded-md border border-zinc-800/80 bg-zinc-950/80 p-6 backdrop-blur-md">
              <div className="text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-900 pb-3 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-emerald-400" />
                <span>SYSTEM DEVELOPMENT TELEMETRY</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-sm border border-zinc-900 bg-black/40 p-3">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase text-zinc-500">
                    <GitBranch className="h-3 w-3 text-emerald-400" />
                    REPOSITORIES
                  </div>
                  <div className="mt-1 text-2xl font-light text-white">35+</div>
                </div>

                <div className="rounded-sm border border-zinc-900 bg-black/40 p-3">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase text-zinc-500">
                    <GitCommit className="h-3 w-3 text-sky-400" />
                    COMMITS
                  </div>
                  <div className="mt-1 text-2xl font-light text-white">1,400+</div>
                </div>
              </div>

              <p className="mt-6 text-xs text-zinc-400 leading-relaxed font-sans">
                Active core systems research, Go CLI developer tooling, security scanners, distributed encryption nodes, and educational infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
