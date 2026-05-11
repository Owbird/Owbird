import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string
  description: string
  tags: string[]
  github: string
  url: string
}


export const dynamic = "force-dynamic";

export async function Projects() {
  const req = await fetch(
    "https://port8888.server.owbird.dev/projects.json",
  );

  const projects = await req.json() as Project[];

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
            Engineering Projects
          </h2>
          <p className="text-zinc-500 font-medium">
            Systems, security, and infrastructure artifacts.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => {
            return (
              <article
                key={project.title}
                className="group relative grid md:grid-cols-[1fr_2fr] gap-8 pb-12 border-b border-zinc-900 last:border-0"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
                    >
                      <Github className="h-3.5 w-3.5" />
                      SOURCE
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.tags.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-mono text-zinc-500 bg-zinc-900/50 px-2 py-0.5 rounded border border-zinc-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 pt-12 border-t border-zinc-900">
          <a
            href="https://github.com/owbird"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
          >
            <span>Complete technical history on GitHub</span>
            <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
