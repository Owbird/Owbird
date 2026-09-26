import { ArrowUpRight } from "lucide-react";

import { Row, Section } from "@/components/section";
import { TagList } from "@/components/tag";
import papers from "@/content/research-papers.json";

type Paper = {
  title: string
  description: string
  tags: string[]
  year: string
  url?: string
}

export function ResearchPapers({ index }: { index: string }) {
  return (
    <Section
      id="research"
      index={index}
      label="Research"
      title="Papers"
      description="Measurement studies in security, privacy, and attack-surface analysis."
    >
      <div>
        {(papers as Paper[]).map((paper) => (
          <Row key={paper.title} meta={paper.year}>
            {paper.url ? (
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-2"
              >
                <h3 className="max-w-2xl text-xl font-medium leading-snug tracking-tight text-white transition-colors group-hover:text-zinc-300">
                  {paper.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 flex-none translate-y-0.5 text-zinc-700 transition-colors group-hover:text-zinc-400" />
              </a>
            ) : (
              <h3 className="max-w-2xl text-xl font-medium leading-snug tracking-tight text-white">
                {paper.title}
              </h3>
            )}

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              {paper.description}
            </p>

            <TagList tags={paper.tags} />
          </Row>
        ))}
      </div>
    </Section>
  );
}
