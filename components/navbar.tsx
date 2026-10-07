"use client";

import Link from "next/link";
import { CoordinateBadge } from "@/components/ui/coordinate-badge";

const isProduction = process.env.NODE_ENV === "production";

const links = [
  { href: "/#work", label: "01 / WORK" },
  { href: "/#research", label: "02 / RESEARCH", devOnly: true },
  { href: "/#writing", label: "03 / TRANSMISSIONS" },
  { href: "/#builder", label: "04 / BUILDER" },
];

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900/60 bg-[#050608]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-[13px] font-bold uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-80"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 group-hover:animate-ping" />
            OWBIRD
          </Link>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-zinc-600 sm:inline-block">
            // OBSERVATORY
          </span>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <CoordinateBadge code="SYS.ACTIVE" status="OBSERVATORY ONLINE" />
        </div>

        <div className="flex items-center gap-6">
          {links.map((link) =>
            link.devOnly && isProduction ? null : (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-emerald-400"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
