"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ShardShape = "diagonal-right" | "diagonal-left" | "trapezoid" | "parallelogram" | "wedge";

const clipPaths: Record<ShardShape, string> = {
  "diagonal-right": "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  "diagonal-left": "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
  "trapezoid": "polygon(5% 0, 95% 0, 100% 100%, 0 100%)",
  "parallelogram": "polygon(8% 0, 100% 0, 92% 100%, 0 100%)",
  "wedge": "polygon(0 0, 100% 8%, 100% 92%, 0 100%)",
};

interface GeometricShardProps {
  src: string;
  alt: string;
  shape?: ShardShape;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "scale";
  overlayColor?: string;
  grayscale?: number;
}

export default function GeometricShard({
  src,
  alt,
  shape = "diagonal-right",
  className = "",
  delay = 0,
  direction = "left",
  overlayColor = "rgba(26, 26, 26, 0.15)",
  grayscale = 30,
}: GeometricShardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const entryVariants = {
    left: { initial: { x: -80, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: 80, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    up: { initial: { y: 60, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    scale: { initial: { scale: 0.85, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden group ${className}`}
      style={{ clipPath: clipPaths[shape] }}
      initial={entryVariants[direction].initial}
      animate={isInView ? entryVariants[direction].animate : entryVariants[direction].initial}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `url(${src})`,
          filter: `grayscale(${grayscale}%) contrast(1.1)`,
        }}
      />

      {/* Color overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
        style={{ backgroundColor: overlayColor }}
      />

      {/* Accessible hidden image */}
      <span className="sr-only">{alt}</span>
    </motion.div>
  );
}
