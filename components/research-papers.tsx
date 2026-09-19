import { FileText } from "lucide-react";
import papers from "@/content/research-papers.json";

type Paper = {
  title: string
  description: string
  tags: string[]
  year: string
  url: string
}

export function ResearchPapers() {
  return (
    <section id="research" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
            Research Papers
          </h2>
          <p className="text-zinc-500 font-medium">
            Publications and technical write-ups.
          </p>
        </div>

        <div className="space-y-12">
          {(papers as Paper[]).map((paper) => {
            return (
              <article
                key={paper.title}
                className="group relative grid md:grid-cols-[1fr_2fr] gap-8 pb-12 border-b border-zinc-900 last:border-0"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500">{paper.year}</p>
                  <div className="flex gap-4 pt-2">
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      READ PAPER
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {paper.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {paper.tags.map((item) => (
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
      </div>
    </section>
  );
}
