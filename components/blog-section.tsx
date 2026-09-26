import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Row, Section } from "@/components/section";
import { TagList } from "@/components/tag";
import { formatBlogDate, getAllPosts } from "@/lib/blog";

export async function BlogSection({ index }: { index: string }) {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <Section
      id="blog"
      index={index}
      label="Writing"
      title="Blog"
      description="A personal log of ideas, experiments, and things I’m figuring out."
      action={
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
        >
          Browse all posts
          <ArrowUpRight className="h-3.5 w-3.5 text-zinc-700 transition-colors group-hover:text-zinc-400" />
        </Link>
      }
    >
      <div>
        {featuredPosts.map((post) => (
          <Row key={post.slug} meta={formatBlogDate(post.date)}>
            <Link
              href={`/blog/${post.slug}`}
              className="group inline-flex items-baseline gap-2"
            >
              <h3 className="text-xl font-medium tracking-tight text-white transition-colors group-hover:text-zinc-300">
                {post.title}
              </h3>
              <ArrowUpRight className="h-4 w-4 flex-none translate-y-0.5 text-zinc-700 transition-colors group-hover:text-zinc-400" />
            </Link>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
              {post.summary || post.description}
            </p>

            <TagList tags={post.tags} />
          </Row>
        ))}
      </div>
    </Section>
  );
}
