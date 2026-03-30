import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { MdxContent } from "@/components/mdx-content";
import { Navbar } from "@/components/navbar";
import { formatBlogDate, getAllPostSlugs, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Obed Forkuo`,
    description: post.description || post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-10 inline-flex text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
          >
            Back to blog
          </Link>

          <header className="border-b border-zinc-900 pb-10">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              {formatBlogDate(post.date)}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              {post.summary || post.description}
            </p>

            {post.tags?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
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
          </header>

          <div className="pt-10">
            <MdxContent source={post.body} />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
