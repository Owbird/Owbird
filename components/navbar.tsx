import Link from "next/link";
import { name } from "@/lib/utils";
export function Navbar() {
  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-900 bg-background/90 backdrop-blur-sm transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-sm font-bold tracking-tighter text-white uppercase">
          <Link href="/">{name}</Link>
        </div>

        <div className="flex gap-8">
          <Link
            href="/#projects"
            className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
