"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Animated aurora mesh background with floating bio particles.
 * Purely decorative — sits behind content.
 */
export function AuroraBackground({ className = "" }: { className?: string }) {
  // Stable random particles
  const particles = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        size: 3 + (i % 4) * 2,
        left: (i * 53) % 100,
        top: (i * 37 + 11) % 100,
        delay: (i % 5) * 0.6,
        duration: 4 + (i % 4),
        opacity: 0.2 + (i % 3) * 0.15,
      })),
    []
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Aurora blobs */}
      <motion.div
        className="absolute -top-32 -start-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 end-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 start-1/4 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
        animate={{
          x: [0, 25, -30, 0],
          y: [0, -15, 25, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          color: "currentColor",
        }}
      />

      {/* Floating bio particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 2}px rgba(20, 184, 166, 0.6)`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 10, -10, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
