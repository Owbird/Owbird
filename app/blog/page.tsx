import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { formatBlogDate, getAllPosts } from "@/lib/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Row } from "@/components/section";
import { TagList } from "@/components/tag";
import { name } from "@/lib/utils";

const siteUrl = "https://owbird.dev";

export const metadata = {
  title: `Blog | ${name}`,
  description: "Owbird Writes",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/blog`,
    title: `Blog | ${name}`,
    description: "Owbird Writes",
    siteName: name,
    images: [
      {
        url: `${siteUrl}/blog/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Owbird Writes blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${name}`,
    description: "Owbird Writes",
    images: [`${siteUrl}/blog/opengraph-image`],
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="px-6 pb-28 pt-44">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 max-w-2xl">
            <p className="label">Writing</p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tighter text-white md:text-6xl">
              Owbird Writes
            </h1>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              A personal log of ideas, experiments, and things I’m figuring out,
              as I build, break, and refine systems over time.
            </p>
          </div>

          <div>
            {posts.map((post) => (
              <Row key={post.slug} meta={formatBlogDate(post.date)}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group inline-flex items-baseline gap-2"
                >
                  <h2 className="text-xl font-medium tracking-tight text-white transition-colors group-hover:text-zinc-300">
                    {post.title}
                  </h2>
                  <ArrowUpRight className="h-4 w-4 flex-none translate-y-0.5 text-zinc-700 transition-colors group-hover:text-zinc-400" />
                </Link>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                  {post.summary || post.description}
                </p>

                <TagList tags={post.tags} />
              </Row>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
