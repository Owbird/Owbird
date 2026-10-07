import React from "react";
import { cn } from "@/lib/utils";

interface TechnicalLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "active" | "accent" | "dim";
  prefix?: string;
}

export function TechnicalLabel({
  children,
  variant = "default",
  prefix,
  className,
  ...props
}: TechnicalLabelProps) {
  const variantStyles = {
    default: "text-zinc-500 border-zinc-800/80 bg-zinc-950/40",
    active: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
    accent: "text-amber-300/90 border-amber-500/30 bg-amber-950/20",
    dim: "text-zinc-600 border-zinc-900 bg-black/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {prefix && <span className="opacity-40">{prefix}:</span>}
      {children}
    </span>
  );
}
