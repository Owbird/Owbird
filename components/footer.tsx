export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-background">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-600 text-[11px] font-mono uppercase tracking-widest">
          © {currentYear} Obed Forkuo
        </p>
        <p className="text-zinc-700 text-[10px] font-mono uppercase tracking-widest">
          Software Engineer
        </p>
      </div>
    </footer>
  )
}
