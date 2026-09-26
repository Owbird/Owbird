import { ArrowUpRight } from "lucide-react";

import { name } from "@/lib/utils";

const links = [
  { href: "https://github.com/owbird", label: "GitHub" },
  { href: "https://linkedin.com/in/obed-forkuo", label: "LinkedIn" },
  { href: "mailto:me@owbird.dev", label: "Email" },
];

export function Hero() {
  return (
    <section className="px-6 pb-28 pt-44">
      <div className="mx-auto max-w-4xl">
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tighter text-white md:text-7xl">
          {name}
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
          Software engineer and systems researcher.
        </p>

        <p className="mt-4 max-w-xl text-base leading-8 text-zinc-500">
          Designing secure infrastructure, developer tooling, and distributed
          platforms for emerging markets.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-700 transition-colors group-hover:text-zinc-400" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
