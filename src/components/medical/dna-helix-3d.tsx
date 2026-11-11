"use client";

import { motion } from "framer-motion";

/**
 * Real 3D rotating DNA helix using CSS 3D transforms.
 * Each base pair is positioned in 3D space and rotated around the Y axis.
 */
const PAIR_COUNT = 12;
const PAIR_SPACING = 30; // px
const HELIX_RADIUS = 48; // px

type Pair = {
  angle: number;
  y: number;
  isAT: boolean;
};

const pairs: Pair[] = Array.from({ length: PAIR_COUNT }).map((_, i) => ({
  angle: (i / PAIR_COUNT) * Math.PI * 4, // 2 full turns
  y: i * PAIR_SPACING - (PAIR_COUNT * PAIR_SPACING) / 2 + PAIR_SPACING,
  isAT: i % 2 === 0,
}));

export function DnaHelix3D({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: "900px", transformStyle: "preserve-3d" }}
    >
      {/* Soft glow background */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-60">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/40 to-purple-500/20" />
      </div>

      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Vertical axis */}
        <div
          className="absolute w-[2px] bg-gradient-to-b from-transparent via-primary/40 to-transparent"
          style={{
            height: PAIR_COUNT * PAIR_SPACING,
            transform: "translateZ(0)",
          }}
        />

        {/* Base pairs */}
        {pairs.map((p, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              transformStyle: "preserve-3d",
              transform: `translate(-50%, -50%) translateY(${p.y}px) rotateY(${(p.angle * 180) / Math.PI}deg)`,
            }}
          >
            {/* Strand 1 (right) */}
            <div
              className="absolute rounded-full"
              style={{
                width: 14,
                height: 14,
                backgroundColor: "rgb(20, 184, 166)",
                boxShadow: "0 0 14px rgba(20,184,166,0.7), inset 0 -3px 4px rgba(0,0,0,0.3)",
                transform: `translateX(${HELIX_RADIUS}px)`,
              }}
            />
            {/* Strand 2 (left) */}
            <div
              className="absolute rounded-full"
              style={{
                width: 14,
                height: 14,
                backgroundColor: "rgb(168, 85, 247)",
                boxShadow: "0 0 14px rgba(168,85,247,0.7), inset 0 -3px 4px rgba(0,0,0,0.3)",
                transform: `translateX(${-HELIX_RADIUS}px)`,
              }}
            />
            {/* Base pair connection */}
            <div
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
              style={{
                width: HELIX_RADIUS * 2,
                height: 3,
                background: p.isAT
                  ? "linear-gradient(90deg, rgb(20,184,166), rgb(239,68,68), rgb(168,85,247))"
                  : "linear-gradient(90deg, rgb(20,184,166), rgb(34,197,94), rgb(168,85,247))",
                opacity: 0.7,
                borderRadius: 2,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating particles around helix */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute rounded-full bg-primary/40"
          style={{
            width: 4 + (i % 3),
            height: 4 + (i % 3),
            top: `${15 + i * 9}%`,
            left: i % 2 === 0 ? `${8 + i * 2}%` : `${80 - i * 2}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}
