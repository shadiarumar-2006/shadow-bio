"use client";

import { useRef, useState, type ReactNode, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees */
  max?: number;
  /** Perspective in px */
  perspective?: number;
  /** Scale on hover */
  scale?: number;
  /** Glow color override */
  glowColor?: string;
};

/**
 * 3D tilt card that follows the mouse.
 * Inner content can use the .tilt-inner class to apply translateZ.
 */
export function TiltCard({
  children,
  className = "",
  max = 12,
  perspective = 800,
  scale = 1.02,
  glowColor,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 200, damping: 18 });
  const sy = useSpring(my, { stiffness: 200, damping: 18 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [max, -max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-max, max]);

  // Glow position transforms (top-level, not inside JSX)
  const glowX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const color = glowColor || "rgba(20, 184, 166, 0.35)";

  // Build the background gradient template at the top level (Hooks rules)
  const glowBg = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, ${color}, transparent 60%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  const handleLeave = () => {
    setHovering(false);
    mx.set(0);
    my.set(0);
  };

  const innerStyle = useMemo(
    () => ({
      rotateX,
      rotateY,
      transformStyle: "preserve-3d" as const,
    }),
    [rotateX, rotateY]
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleLeave}
      style={{
        perspective,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <motion.div
        style={innerStyle}
        animate={{ scale: hovering ? scale : 1 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="relative h-full w-full"
      >
        {/* Glow overlay */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          style={{
            opacity: hovering ? 1 : 0,
            background: glowBg,
          }}
        />
        {children}
      </motion.div>
    </motion.div>
  );
}
