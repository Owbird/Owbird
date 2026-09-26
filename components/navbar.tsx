import Link from "next/link";

const isProduction = process.env.NODE_ENV === "production";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#research", label: "Research", devOnly: true },
  { href: "/blog", label: "Writing" },
];

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-mono text-[13px] font-medium uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-70"
        >
          Owbird
        </Link>

        <div className="flex items-center gap-7">
          {links.map((link) =>
            link.devOnly && isProduction ? null : (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
