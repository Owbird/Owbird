"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  asChild?: boolean;
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-zinc-100 text-zinc-950 hover:bg-white border-zinc-200/50 shadow-[0_0_25px_rgba(255,255,255,0.15)]",
    secondary:
      "bg-zinc-900/90 text-zinc-200 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/90 hover:text-white",
    outline:
      "border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white bg-zinc-950/40 backdrop-blur-md",
    ghost: "text-zinc-400 hover:text-white hover:bg-zinc-900/40 border-transparent",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-sm border px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
