import type { ComponentPropsWithoutRef } from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      {...props}
      className="text-3xl font-semibold tracking-tight text-white"
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      {...props}
      className="pt-6 text-2xl font-semibold tracking-tight text-white"
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      {...props}
      className="pt-4 text-xl font-semibold tracking-tight text-white"
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p {...props} className="text-zinc-300" />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      {...props}
      className="text-white underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-300"
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul {...props} className="list-disc space-y-3 pl-6 text-zinc-300" />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol {...props} className="list-decimal space-y-3 pl-6 text-zinc-300" />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      {...props}
      className="border-l border-zinc-700 pl-5 text-zinc-400"
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      {...props}
      className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-sm leading-7 text-zinc-200"
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => {
    const isInline = typeof props.className !== "string";

    if (isInline) {
      return (
        <code
          {...props}
          className="rounded bg-white/5 px-1.5 py-0.5 text-[0.95em] text-zinc-200"
        />
      );
    }

    return <code {...props} />;
  },
  img: (props: ComponentPropsWithoutRef<"img">) => (
    <img
      {...props}
      alt={props.alt ?? ""}
      className="h-auto w-full rounded-lg border border-zinc-800 bg-zinc-950 object-cover"
    />
  ),
};

export async function MdxContent({ source }: { source: string }) {
  return (
    <div className="space-y-6 text-base leading-8 text-zinc-300">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [rehypeKatex],
          },
        }}
      />
    </div>
  );
}
