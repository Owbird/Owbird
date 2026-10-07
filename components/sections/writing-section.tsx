import Link from "next/link";
import { ArrowUpRight, Radio, Signal } from "lucide-react";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { TagList } from "@/components/tag";
import { formatBlogDate, getAllPosts } from "@/lib/blog";

export async function WritingSection({ index = "003" }: { index?: string }) {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 4);

  return (
    <section id="writing" className="relative min-h-screen w-full border-t border-zinc-900 bg-[#050608] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header Telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-900/80 pb-6">
          <div className="flex items-center gap-3">
            <TechnicalLabel variant="active" prefix="SECTOR">
              {index} / TRANSMISSIONS
            </TechnicalLabel>
            <TechnicalLabel variant="dim">WRITING & LOGS</TechnicalLabel>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
          >
            ALL TRANSMISSIONS
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 transition-colors group-hover:text-zinc-300" />
          </Link>
        </div>

        {/* Transmissions List */}
        <div className="mt-12 flex flex-col gap-6">
          {featuredPosts.map((post, idx) => (
            <div
              key={post.slug}
              className="group relative rounded-md border border-zinc-800/80 bg-zinc-950/60 p-6 transition-all hover:border-emerald-500/40 hover:bg-zinc-900/60 backdrop-blur-md"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  {/* Signal header */}
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Radio className="h-3 w-3 animate-pulse" />
                      SIGNAL // {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span>·</span>
                    <span>{formatBlogDate(post.date)}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="mt-3 block group-hover:text-emerald-300">
                    <h3 className="text-xl font-light text-white transition-colors group-hover:text-emerald-300">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-300 max-w-3xl">
                    {post.summary || post.description}
                  </p>

                  <div className="mt-4">
                    <TagList tags={post.tags} />
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex-none">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 rounded-sm border border-zinc-800 bg-zinc-900/80 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-300 transition-colors group-hover:border-emerald-500/40 group-hover:bg-emerald-950/30 group-hover:text-emerald-300"
                  >
                    READ TRANSMISSION
                    <Signal className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
