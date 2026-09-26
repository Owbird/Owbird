import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm border border-zinc-800/80 bg-zinc-900/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
      {children}
    </span>
  );
}

export function TagList({ tags }: { tags?: string[] }) {
  if (!tags?.length) {
    return null;
  }

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}
