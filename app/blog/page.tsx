import Link from "next/link";

import { formatBlogDate, getAllPosts } from "@/lib/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Blog | Obed Forkuo",
  description: "Owbird Writes",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">
              Blog
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white">
              Owbird Writes
            </h1>
            <p className="mt-5 text-base leading-8 text-zinc-400">
              A personal log of ideas, experiments, and things I’m figuring out,
              as I build, break, and refine systems over time.
            </p>
          </div>

          <div className="space-y-10">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="grid gap-5 border-b border-zinc-900 pb-10 md:grid-cols-[160px_1fr]"
              >
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-600">
                  {formatBlogDate(post.date)}
                </div>

                <div>
                  <Link href={`/blog/${post.slug}`} className="inline-block">
                    <h2 className="text-2xl font-semibold tracking-tight text-white transition-colors hover:text-zinc-300">
                      {post.title}
                    </h2>
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

      <Footer />
    </main>
  );
}
