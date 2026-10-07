import React from "react";
import { cn } from "@/lib/utils";

interface CoordinateBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  code?: string;
  status?: string;
  pulse?: boolean;
}

export function CoordinateBadge({
  code = "OBS.07.24",
  status = "ONLINE",
  pulse = true,
  className,
  ...props
}: CoordinateBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-zinc-800/80 bg-zinc-950/80 px-3 py-1 font-mono text-[10px] tracking-widest text-zinc-400 backdrop-blur-md shadow-2xl",
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-1.5 text-zinc-300 font-semibold">
        {pulse && (
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          </span>
        )}
        {status}
      </span>
      <span className="h-2.5 w-[1px] bg-zinc-800" />
      <span className="text-zinc-500">{code}</span>
    </div>
  );
}
