import React from "react";
import { Terminal, Shield, Cpu, Network } from "lucide-react";
import { TechnicalLabel } from "@/components/ui/technical-label";

export function AboutSection({ index = "004" }: { index?: string }) {
  return (
    <section id="builder" className="relative w-full border-t border-zinc-900 bg-[#050608] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header Telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-900/80 pb-6">
          <div className="flex items-center gap-3">
            <TechnicalLabel variant="active" prefix="SECTOR">
              {index} / IDENTITY
            </TechnicalLabel>
            <TechnicalLabel variant="dim">THE BUILDER</TechnicalLabel>
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            PROFILE // OBED FORKUO
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-white sm:text-5xl">
                Building secure infrastructure &amp; high-performance tools.
              </h2>

              <p className="mt-8 text-base leading-relaxed text-zinc-300 md:text-lg">
                I am a software engineer and systems researcher focused on security infrastructure, developer tools, and program analysis. My work spans attack-surface measurement, distributed file encryption platforms, and CLI engines built in Go and Rust.
              </p>

              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Driven by curiosity, technical depth, and a commitment to emerging tech ecosystems, I design software systems that prioritize security, transparency, and computational elegance.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="rounded-sm border border-zinc-800/80 bg-zinc-950/60 p-4">
                <div className="text-emerald-400 font-semibold mb-1">// FOCUS 01</div>
                <div className="text-zinc-200">Systems &amp; Network Security</div>
              </div>

              <div className="rounded-sm border border-zinc-800/80 bg-zinc-950/60 p-4">
                <div className="text-sky-400 font-semibold mb-1">// FOCUS 02</div>
                <div className="text-zinc-200">Developer Tooling &amp; CLIs</div>
              </div>
            </div>
          </div>

          {/* System Capabilities Matrix */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-md border border-zinc-800/80 bg-zinc-950/80 p-6 backdrop-blur-md">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-900 pb-3 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-emerald-400" />
                <span>CORE STACK &amp; CAPABILITIES</span>
              </div>

              <div className="mt-6 flex flex-col gap-4 font-mono text-xs">
                <div>
                  <div className="text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-amber-400" />
                    LANGUAGES &amp; RUNTIMES
                  </div>
                  <div className="text-zinc-200">Go · Rust · TypeScript · Python · C/C++</div>
                </div>

                <div className="border-t border-zinc-900 pt-4">
                  <div className="text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5 text-emerald-400" />
                    SECURITY &amp; SYSTEMS
                  </div>
                  <div className="text-zinc-200">Attack Surface Recon · Fuzzing · Cryptographic Key Management · PKG</div>
                </div>

                <div className="border-t border-zinc-900 pt-4">
                  <div className="text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <Network className="h-3.5 w-3.5 text-sky-400" />
                    INFRASTRUCTURE
                  </div>
                  <div className="text-zinc-200">Docker · Vercel · Linux Systems Admin · Distributed Workflows</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
