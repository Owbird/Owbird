import { Github, Linkedin, Mail, Globe } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 border-b border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-white">
            Obed Forkuo
          </h1>
        </header>

        <div className="space-y-6 max-w-2xl">
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            A Software Engineer.
          </p>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <a
            href="https://github.com/owbird"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors p-1"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/obed-forkuo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors p-1"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://owbird.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors p-1"
            title="Website"
          >
            <Globe className="h-5 w-5" />
          </a>
          <a
            href="mailto:fork.obed@gmail.com"
            className="text-zinc-500 hover:text-white transition-colors p-1"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
