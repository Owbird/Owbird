"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom subtle cursor on pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.dataset.cursorHover === "true"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer subtle ring */}
      <motion.div
        className="fixed rounded-full border border-zinc-500/30"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 14),
          y: mousePosition.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0)",
          borderColor: isHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed rounded-full bg-white/80"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          width: 4,
          height: 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 40 }}
      />
    </div>
  );
}
