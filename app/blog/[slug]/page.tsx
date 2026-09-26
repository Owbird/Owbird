import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/footer";
import { MdxContent } from "@/components/mdx-content";
import { Navbar } from "@/components/navbar";
import { TagList } from "@/components/tag";
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

      <article className="px-6 pb-28 pt-44">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-12 inline-flex font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
          >
            ← Back to blog
          </Link>

          <header className="border-b border-zinc-900 pb-12">
            <p className="label">{formatBlogDate(post.date)}</p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tighter text-white md:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              {post.summary || post.description}
            </p>

            <TagList tags={post.tags} />
          </header>

          <div className="pt-10">
            <MdxContent source={post.body} />
          </div>

          {relatedPosts.length ? (
            <section className="mt-24 border-t border-zinc-900 pt-12">
              <p className="label">Also worth reading</p>

              <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-zinc-900 bg-zinc-900 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="group bg-background p-6 transition-colors hover:bg-zinc-950"
                  >
                    <p className="label text-zinc-700">
                      {formatBlogDate(relatedPost.date)}
                    </p>

                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="mt-4 inline-flex items-start gap-2"
                    >
                      <h3 className="text-lg font-medium leading-snug tracking-tight text-white transition-colors group-hover:text-zinc-300">
                        {relatedPost.title}
                      </h3>
                      <ArrowUpRight className="mt-1 h-4 w-4 flex-none text-zinc-700 transition-colors group-hover:text-zinc-400" />
                    </Link>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {relatedPost.summary || relatedPost.description}
                    </p>
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
