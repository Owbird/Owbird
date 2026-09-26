import { ArrowUpRight } from "lucide-react";

import { Row, Section } from "@/components/section";
import { TagList } from "@/components/tag";
import projects from "@/content/projects.json";

type Project = {
  title: string
  description: string
  tags: string[]
  github: string
  url: string
}

export function Projects({ index }: { index: string }) {
  return (
    <Section
      id="work"
      index={index}
      label="Work"
      title="Engineering Projects"
      description="Systems, security, and infrastructure artifacts."
      className="border-t-0"
      action={
        <a
          href="https://github.com/owbird"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
        >
          All repositories
          <ArrowUpRight className="h-3.5 w-3.5 text-zinc-700 transition-colors group-hover:text-zinc-400" />
        </a>
      }
    >
      <div>
        {(projects as Project[]).map((project, index) => (
          <Row
            key={project.title}
            meta={String(index + 1).padStart(2, "0")}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline gap-2"
            >
              <h3 className="text-xl font-medium tracking-tight text-white transition-colors group-hover:text-zinc-300">
                {project.title}
              </h3>
              <ArrowUpRight className="h-4 w-4 flex-none translate-y-0.5 text-zinc-700 transition-colors group-hover:text-zinc-400" />
            </a>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
              {project.description}
            </p>

            <TagList tags={project.tags} />
          </Row>
        ))}
      </div>
    </Section>
  );
}
