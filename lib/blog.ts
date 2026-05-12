import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

export type BlogPostFrontmatter = {
  title: string;
  date: string;
  tags?: string[];
  draft?: boolean;
  summary?: string;
  description?: string;
};

export type BlogPost = BlogPostFrontmatter & {
  slug: string;
  body: string;
};

function assertFrontmatter(
  slug: string,
  data: Partial<BlogPostFrontmatter>,
): BlogPostFrontmatter {
  if (!data.title || !data.date) {
    throw new Error(`Post "${slug}" is missing required frontmatter.`);
  }

  return {
    title: data.title,
    date: data.date,
    tags: data.tags ?? [],
    draft: data.draft ?? false,
    summary: data.summary ?? data.description ?? "",
    description: data.description ?? data.summary ?? "",
  };
}

async function readPostFile(slug: string) {
  const filePath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    body: content,
    ...assertFrontmatter(slug, data),
  } satisfies BlogPost;
}

export async function getAllPostSlugs() {
  try {
    const entries = await fs.readdir(BLOG_DIRECTORY, { withFileTypes: true });

    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map((entry) => entry.name.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getAllPosts() {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => readPostFile(slug)));

  return posts
    .filter((post) => !post.draft)
    .sort((left, right) => right.date.localeCompare(left.date));
}

export async function getPostBySlug(slug: string) {
  try {
    const post = await readPostFile(slug);

    if (post.draft) {
      return null;
    }

    return post;
  } catch {
    return null;
  }
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
