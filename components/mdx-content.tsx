type ParagraphNode = {
  type: "paragraph";
  content: string;
};

type HeadingNode = {
  type: "heading";
  level: 1 | 2 | 3;
  content: string;
};

type ListNode = {
  type: "list";
  items: string[];
};

type QuoteNode = {
  type: "quote";
  items: string[];
};

type CodeNode = {
  type: "code";
  language: string;
  content: string;
};

type ImageNode = {
  type: "image";
  alt: string;
  src: string;
};

type ContentNode =
  | ParagraphNode
  | HeadingNode
  | ListNode
  | QuoteNode
  | CodeNode
  | ImageNode;

function renderInline(content: string) {
  const segments = content
    .split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g)
    .filter(Boolean);

  return segments.map((segment, index) => {
    if (segment.startsWith("**") && segment.endsWith("**")) {
      return <strong key={`${segment}-${index}`}>{segment.slice(2, -2)}</strong>;
    }

    if (segment.startsWith("`") && segment.endsWith("`")) {
      return (
        <code
          key={`${segment}-${index}`}
          className="rounded bg-white/5 px-1.5 py-0.5 text-[0.95em] text-zinc-200"
        >
          {segment.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (linkMatch) {
      const [, label, href] = linkMatch;

      return (
        <a
          key={`${href}-${index}`}
          href={href}
          className="text-white underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-300"
        >
          {label}
        </a>
      );
    }

    return <span key={`${segment}-${index}`}>{segment}</span>;
  });
}

function parseContent(source: string): ContentNode[] {
  const lines = source.split("\n");
  const nodes: ContentNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trimEnd();

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const block: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].startsWith("```")) {
        block.push(lines[index]);
        index += 1;
      }

      nodes.push({
        type: "code",
        language,
        content: block.join("\n"),
      });
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      nodes.push({
        type: "heading",
        level: 3,
        content: line.slice(4).trim(),
      });
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      nodes.push({
        type: "heading",
        level: 2,
        content: line.slice(3).trim(),
      });
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      nodes.push({
        type: "heading",
        level: 1,
        content: line.slice(2).trim(),
      });
      index += 1;
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];

      while (index < lines.length) {
        const candidate = lines[index].trim();

        if (!candidate.startsWith("- ") && !candidate.startsWith("* ")) {
          break;
        }

        items.push(candidate.slice(2).trim());
        index += 1;
      }

      nodes.push({ type: "list", items });
      continue;
    }

    if (line.startsWith("> ")) {
      const items: string[] = [];

      while (index < lines.length) {
        const candidate = lines[index].trim();

        if (!candidate.startsWith("> ")) {
          break;
        }

        items.push(candidate.slice(2).trim());
        index += 1;
      }

      nodes.push({ type: "quote", items });
      continue;
    }

    const imageMatch = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);

    if (imageMatch) {
      const [, alt, src] = imageMatch;

      nodes.push({
        type: "image",
        alt,
        src,
      });
      index += 1;
      continue;
    }

    const paragraph: string[] = [line.trim()];
    index += 1;

    while (index < lines.length) {
      const candidate = lines[index].trim();

      if (
        !candidate ||
        candidate.startsWith("#") ||
        candidate.startsWith("- ") ||
        candidate.startsWith("* ") ||
        candidate.startsWith("> ") ||
        candidate.startsWith("```")
      ) {
        break;
      }

      paragraph.push(candidate);
      index += 1;
    }

    nodes.push({
      type: "paragraph",
      content: paragraph.join(" "),
    });
  }

  return nodes;
}

export function MdxContent({ source }: { source: string }) {
  const nodes = parseContent(source);

  return (
    <div className="space-y-6 text-base leading-8 text-zinc-300">
      {nodes.map((node, index) => {
        if (node.type === "heading") {
          if (node.level === 1) {
            return (
              <h1
                key={`${node.content}-${index}`}
                className="text-3xl font-semibold tracking-tight text-white"
              >
                {node.content}
              </h1>
            );
          }

          if (node.level === 2) {
            return (
              <h2
                key={`${node.content}-${index}`}
                className="pt-6 text-2xl font-semibold tracking-tight text-white"
              >
                {node.content}
              </h2>
            );
          }

          return (
            <h3
              key={`${node.content}-${index}`}
              className="pt-4 text-xl font-semibold tracking-tight text-white"
            >
              {node.content}
            </h3>
          );
        }

        if (node.type === "list") {
          return (
            <ul key={`list-${index}`} className="space-y-3 pl-6 text-zinc-300">
              {node.items.map((item) => (
                <li key={item} className="list-disc">
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          );
        }

        if (node.type === "quote") {
          return (
            <blockquote
              key={`quote-${index}`}
              className="border-l border-zinc-700 pl-5 text-zinc-400"
            >
              {node.items.map((item, quoteIndex) => (
                <p key={`${item}-${quoteIndex}`}>{renderInline(item)}</p>
              ))}
            </blockquote>
          );
        }

        if (node.type === "code") {
          return (
            <div key={`code-${index}`} className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
              {node.language ? (
                <div className="border-b border-zinc-800 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  {node.language}
                </div>
              ) : null}
              <pre className="p-4 text-sm leading-7 text-zinc-200">
                <code>{node.content}</code>
              </pre>
            </div>
          );
        }

        if (node.type === "image") {
          return (
            <figure key={`image-${index}`} className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
              <img
                src={node.src}
                alt={node.alt}
                className="h-auto w-full object-cover"
              />
            </figure>
          );
        }

        return (
          <p key={`paragraph-${index}`} className="text-zinc-300">
            {renderInline(node.content)}
          </p>
        );
      })}
    </div>
  );
}
