import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { formatBlogDate, getAllPosts } from "@/lib/blog";

export async function BlogSection() {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="border-t border-zinc-900 bg-background px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Blog
            </h2>
            <p className="font-medium text-zinc-500">
              A personal log of ideas, experiments, and things I’m figuring out.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            <span>Browse all posts</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="space-y-8">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="grid gap-4 border-b border-zinc-900 pb-8 md:grid-cols-[140px_1fr]"
            >
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-600">
                {formatBlogDate(post.date)}
              </div>

              <div>
                <Link href={`/blog/${post.slug}`} className="group inline-block">
                  <h3 className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-zinc-300">
                    {post.title}
                    <ArrowUpRight className="h-4 w-4 text-zinc-700 transition-colors group-hover:text-zinc-400" />
                  </h3>
                </Link>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                  {post.summary || post.description}
                </p>

                {post.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
