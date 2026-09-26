import { name } from "@/lib/utils"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-900 px-6 py-14">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600">
          © {currentYear} {name}
        </p>

        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-700">
          Software engineer &amp; systems researcher
        </p>
      </div>
    </footer>
  )
}
