import {
  ExternalLink,
  Github,
} from "lucide-react";

const projects = [
  {
    title: "SNetT Engine",
    description:
      "Core engine powering SNetT, built for secure file packaging, CLI operations, and distributed secure workflows.",
    tags: ["Encryption", "CLI", "Security", "PKG"],
    github: "https://github.com/owbird/snett-engine",
    url: "https://github.com/owbird/snett-engine",
  },
  {
    title: "SNetT Desktop",
    description:
      "Desktop application for secure local file encryption and controlled sharing with optional distributed access layer.",
    tags: ["Desktop App", "Encryption", "Privacy"],
    github: "https://github.com/owbird/SNetT",
    url: "https://github.com/owbird/SNetT",
  },
  {
    title: "ReSysTor",
    description:
      "Remote system management CLI for monitoring and controlling distributed infrastructure environments.",
    tags: ["CLI", "Monitoring", "DevOps", "Go"],
    github: "https://github.com/owbird/resystor",
    url: "https://github.com/owbird/resystor/releases",
  },
  {
    title: "Ram Guard",
    description:
      "Lightweight CLI utility for monitoring and protecting system memory usage in constrained environments.",
    tags: ["CLI", "System Monitoring", "Performance"],
    github: "https://github.com/owbird/ram-guard",
    url: "https://github.com/owbird/ram-guard/releases",
  },
  {
    title: "Vercel Account Manager",
    description:
      "CLI tool for managing multiple Vercel accounts efficiently from a single development environment.",
    tags: ["CLI", "Dev Tools", "Automation"],
    github: "https://github.com/owbird/vercel-account-manager",
    url: "https://github.com/owbird/vercel-account-manager/releases",
  },
  {
    title: "React Utility Belt",
    description:
      "Reusable React utilities package designed to accelerate frontend development workflows.",
    tags: ["React", "NPM Package", "Frontend", "Utilities"],
    github: "https://github.com/owbird/react-utility-belt",
    url: "https://www.npmjs.com/package/react-utility-belt",
  },
  {
    title: "KNUST AIM API",
    description:
      "REST API improving access and integration of KNUST Academic Information Management systems.",
    tags: ["REST API", "Integration", "Backend"],
    github: "https://github.com/owbird/KNUST-AIM-API",
    url: "https://github.com/owbird/KNUST-AIM-API",
  },
  {
    title: "KNUST AIM Desktop",
    description:
      "Desktop client for streamlined access to academic data within the KNUST ecosystem.",
    tags: ["Desktop App", "Integration", "Institutional Tech"],
    github: "https://github.com/owbird/KNUST-AIM-Desktop",
    url: "https://github.com/owbird/KNUST-AIM-Desktop",
  },
  {
    title: "Blue-DOS",
    description:
      "Experimental CLI system environment exploring low-level command execution and operating system behavior.",
    tags: ["CLI", "Systems", "Experimentation"],
    github: "https://github.com/owbird/blue-dos",
    url: "https://github.com/owbird/blue-dos",
  },
  {
    title: "One Dev",
    description:
      "Unified developer workspace focused on simplifying workflows across multiple tools and environments.",
    tags: ["Productivity", "Desktop", "Workflow"],
    github: "https://github.com/owbird/One-Dev",
    url: "https://one-dev.vercel.app",
  },
];

export function Projects() {
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
            const Icon = project.icon;

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
