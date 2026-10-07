"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight, Terminal, Shield, Cpu, Layers } from "lucide-react";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { TagList } from "@/components/tag";
import projectsData from "@/content/projects.json";

const ObservatoryCanvas = dynamic(
  () => import("@/components/3d/observatory-canvas").then((mod) => mod.ObservatoryCanvas),
  { ssr: false }
);

const ProjectSpatialField = dynamic(
  () => import("@/components/3d/project-field").then((mod) => mod.ProjectSpatialField),
  { ssr: false }
);

const ObservatoryLighting = dynamic(
  () => import("@/components/3d/observatory-lighting").then((mod) => mod.ObservatoryLighting),
  { ssr: false }
);

export function ProjectsSection({ index = "001" }: { index?: string }) {
  const projects = projectsData;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeProject = projects[selectedIndex];

  const getCategoryIcon = (tags: string[]) => {
    const str = tags.join(" ").toLowerCase();
    if (str.includes("security") || str.includes("fuzzing") || str.includes("recon")) {
      return <Shield className="h-4 w-4 text-amber-400" />;
    }
    if (str.includes("cli") || str.includes("go")) {
      return <Terminal className="h-4 w-4 text-emerald-400" />;
    }
    if (str.includes("desktop") || str.includes("encryption")) {
      return <Cpu className="h-4 w-4 text-purple-400" />;
    }
    return <Layers className="h-4 w-4 text-sky-400" />;
  };

  return (
    <section id="work" className="relative min-h-screen w-full border-t border-zinc-900 bg-[#050608] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-900/80 pb-6">
          <div className="flex items-center gap-3">
            <TechnicalLabel variant="active" prefix="SECTOR">
              {index} / PROJECTS
            </TechnicalLabel>
            <TechnicalLabel variant="dim">SPATIAL ARTIFACT FIELD</TechnicalLabel>
          </div>

          <a
            href="https://github.com/owbird"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
          >
            ALL REPOSITORIES
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 transition-colors group-hover:text-zinc-300" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: 3D Spatial Artifact Canvas & Artifact Selector */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative h-[380px] w-full overflow-hidden rounded-md border border-zinc-800/60 bg-zinc-950/60 backdrop-blur-md">
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                INTERACTIVE 3D FIELD · SELECT AN ARTIFACT
              </div>

              {/* 3D Canvas rendering spatial project field */}
              <ObservatoryCanvas className="absolute inset-0 h-full w-full pointer-events-auto" cameraPos={[0, 0, 5.2]}>
                <ObservatoryLighting />
                <ProjectSpatialField
                  projects={projects}
                  selectedIndex={selectedIndex}
                  onSelectProject={setSelectedIndex}
                />
              </ObservatoryCanvas>
            </div>

            {/* Selector list underneath */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {projects.map((proj, idx) => (
                <button
                  key={proj.title}
                  onClick={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between rounded-sm border px-3 py-2 font-mono text-[11px] uppercase transition-all ${
                    idx === selectedIndex
                      ? "border-emerald-500/50 bg-emerald-950/20 text-emerald-300"
                      : "border-zinc-800/80 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  <span className="truncate">{proj.title}</span>
                  <span className="text-[9px] text-zinc-600">{(idx + 1).toString().padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Artifact Telemetry Inspector */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-md border border-zinc-800/80 bg-zinc-950/80 p-6 backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
                      {getCategoryIcon(activeProject.tags)}
                      <span>ARTIFACT TELEMETRY</span>
                    </div>
                    <span className="font-mono text-xs text-zinc-600">
                      ID // {(selectedIndex + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-light text-white tracking-tight">
                      {activeProject.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-6">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      TECHNOLOGY STACK
                    </div>
                    <TagList tags={activeProject.tags} />
                  </div>
                </div>

                {/* Actions & Links */}
                <div className="mt-8 border-t border-zinc-900 pt-6 flex items-center gap-4">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-emerald-500/40 bg-emerald-950/30 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-emerald-300 transition-colors hover:bg-emerald-900/40 hover:text-white"
                  >
                    INSPECT SOURCE
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                  {activeProject.url && activeProject.url !== activeProject.github && (
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                    >
                      LIVE DEPLOYMENT
                      <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
