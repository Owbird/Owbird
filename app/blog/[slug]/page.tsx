import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/footer";
import { MdxContent } from "@/components/mdx-content";
import { Navbar } from "@/components/navbar";
import {
  formatBlogDate,
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { name } from "@/lib/utils";

const siteUrl = "https://owbird.dev";

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

  const path = `/blog/${slug}`;
  const url = `${siteUrl}${path}`;
  const description = post.description || post.summary;

  return {
    title: `${post.title} | Owbird Writes`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: `${post.title} | Owbird Writes`,
      description,
      siteName: name,
      publishedTime: new Date(post.date).toISOString(),
      authors: [name],
      tags: post.tags,
      images: [
        {
          url: `${url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Owbird Writes`,
      description,
      images: [`${url}/opengraph-image`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const relatedPosts = await getRelatedPosts(slug, 2);

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

          {relatedPosts.length ? (
            <section className="mt-20 border-t border-zinc-900 pt-10">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                    You may also like
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    Other posts
                  </h2>
                </div>

                <p className="max-w-xl text-sm leading-6 text-zinc-500">
                  A couple of related reads, picked from the rest of the blog.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="group rounded-2xl border border-zinc-900 bg-zinc-950/60 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/40"
                  >
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-600">
                      {formatBlogDate(relatedPost.date)}
                    </p>

                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="mt-3 inline-flex items-start gap-2"
                    >
                      <h3 className="text-lg font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-zinc-300">
                        {relatedPost.title}
                      </h3>
                      <ArrowUpRight className="mt-0.5 h-4 w-4 flex-none text-zinc-700 transition-colors group-hover:text-zinc-400" />
                    </Link>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {relatedPost.summary || relatedPost.description}
                    </p>

                    {relatedPost.tags?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {relatedPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>

      <Footer />
    </main>
  );
}
