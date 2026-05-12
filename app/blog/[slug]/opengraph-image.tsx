import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";

import { formatBlogDate, getAllPostSlugs, getPostBySlug } from "@/lib/blog";

export const alt = "Blog post preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type BlogPostImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => ({ slug }));
}

function trimText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

export default async function Image({ params }: BlogPostImageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const description = trimText(post.summary || post.description || "", 180);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, #27272a 0%, #0b0b0c 42%, #050505 100%)",
          color: "#f4f4f5",
          fontFamily: "Arial, sans-serif",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid rgba(255,255,255,0.12)",
            padding: "40px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#a1a1aa",
              }}
            >
              Owbird Writes
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#a1a1aa",
              }}
            >
              {formatBlogDate(post.date)}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "26px",
              maxWidth: "980px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 68,
                lineHeight: 1.04,
                fontWeight: 700,
                letterSpacing: "-0.05em",
              }}
            >
              {trimText(post.title, 90)}
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 28,
                lineHeight: 1.45,
                color: "#d4d4d8",
              }}
            >
              {description}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 22,
              color: "#a1a1aa",
            }}
          >
            <div style={{ display: "flex" }}>owbird.dev</div>
            <div style={{ display: "flex", gap: "12px" }}>
              {post.tags?.slice(0, 3).map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "8px 14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    fontSize: 16,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
