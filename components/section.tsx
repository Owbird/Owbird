import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string
  index: string
  label: string
  title: string
  description?: string
  action?: ReactNode
  className?: string
  children: ReactNode
}

export function Section({
  id,
  index,
  label,
  title,
  description,
  action,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("border-t border-zinc-900 px-6 py-28", className)}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label">
              {index} <span className="text-zinc-800">/</span> {label}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {title}
            </h2>

            {description ? (
              <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
                {description}
              </p>
            ) : null}
          </div>

          {action}
        </div>

        {children}
      </div>
    </section>
  );
}

/** One row of a section list: mono meta column on the left, content on the right. */
export function Row({
  meta,
  children,
}: {
  meta: ReactNode
  children: ReactNode
}) {
  return (
    <article className="grid gap-x-8 gap-y-3 border-b border-zinc-900 py-8 first:pt-0 last:border-0 md:grid-cols-[5rem_1fr]">
      <div className="label pt-1 text-zinc-700">{meta}</div>
      <div>{children}</div>
    </article>
  );
}
