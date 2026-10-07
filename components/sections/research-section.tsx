"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Network, BookOpen, Atom } from "lucide-react";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { TagList } from "@/components/tag";
import papersData from "@/content/research-papers.json";

const ObservatoryCanvas = dynamic(
  () => import("@/components/3d/observatory-canvas").then((mod) => mod.ObservatoryCanvas),
  { ssr: false }
);

const ResearchConstellation = dynamic(
  () => import("@/components/3d/research-constellation").then((mod) => mod.ResearchConstellation),
  { ssr: false }
);

const ObservatoryLighting = dynamic(
  () => import("@/components/3d/observatory-lighting").then((mod) => mod.ObservatoryLighting),
  { ssr: false }
);

export function ResearchPapersSection({ index = "002" }: { index?: string }) {
  const papers = papersData;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activePaper = papers[selectedIndex];

  return (
    <section id="research" className="relative min-h-screen w-full border-t border-zinc-900 bg-[#050608] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-900/80 pb-6">
          <div className="flex items-center gap-3">
            <TechnicalLabel variant="active" prefix="SECTOR">
              {index} / RESEARCH
            </TechnicalLabel>
            <TechnicalLabel variant="dim">KNOWLEDGE CONSTELLATION</TechnicalLabel>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
            <Atom className="h-4 w-4 text-emerald-400" />
            <span>MEASUREMENT & ATTACK-SURFACE ANALYSIS</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: 3D Constellation Knowledge Graph Canvas */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative h-[400px] w-full overflow-hidden rounded-md border border-zinc-800/60 bg-zinc-950/60 backdrop-blur-md">
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-500">
                <Network className="h-3.5 w-3.5 text-sky-400 animate-spin" />
                3D KNOWLEDGE GRAPH · INTERACTIVE NODES
              </div>

              {/* 3D Canvas rendering research constellation */}
              <ObservatoryCanvas className="absolute inset-0 h-full w-full pointer-events-auto" cameraPos={[0, 0, 4.8]}>
                <ObservatoryLighting />
                <ResearchConstellation
                  papers={papers}
                  selectedIndex={selectedIndex}
                  onSelectPaper={setSelectedIndex}
                />
              </ObservatoryCanvas>
            </div>

            {/* Node selection list */}
            <div className="flex flex-col gap-2">
              {papers.map((paper, idx) => (
                <button
                  key={paper.title}
                  onClick={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between rounded-sm border px-4 py-3 font-mono text-xs text-left transition-all ${
                    idx === selectedIndex
                      ? "border-sky-500/50 bg-sky-950/20 text-sky-200"
                      : "border-zinc-800/80 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  <span className="truncate max-w-xs font-sans text-sm font-medium">{paper.title}</span>
                  <span className="text-[10px] text-zinc-500 tracking-widest">{paper.year}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Research Node Inspector */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-md border border-zinc-800/80 bg-zinc-950/80 p-6 backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePaper.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-400">
                      <BookOpen className="h-4 w-4" />
                      <span>RESEARCH PUBLICATION</span>
                    </div>
                    <span className="font-mono text-xs text-zinc-500">
                      YEAR // {activePaper.year}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-6">
                    <h3 className="text-xl font-light text-white leading-snug tracking-tight">
                      {activePaper.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                      {activePaper.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-6">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      RESEARCH DOMAINS
                    </div>
                    <TagList tags={activePaper.tags} />
                  </div>
                </div>

                {/* Paper link action */}
                <div className="mt-8 border-t border-zinc-900 pt-6">
                  {activePaper.url ? (
                    <a
                      href={activePaper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-sky-500/40 bg-sky-950/30 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-sky-300 transition-colors hover:bg-sky-900/40 hover:text-white"
                    >
                      READ PAPER ENTRY
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
                      PUBLICATION ARCHIVE PENDING
                    </span>
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
