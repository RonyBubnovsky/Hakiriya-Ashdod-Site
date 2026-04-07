"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface MaskRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  once?: boolean;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
}

const directionMap = {
  up: { y: "110%" },
  down: { y: "-110%" },
  left: { x: "110%" },
  right: { x: "-110%" },
};

const directionReset = {
  up: { y: "0%" },
  down: { y: "0%" },
  left: { x: "0%" },
  right: { x: "0%" },
};

export default function MaskReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
  as = "div",
}: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{ lineHeight: "inherit" }}
    >
      <MotionTag
        initial={directionMap[direction]}
        animate={isInView ? directionReset[direction] : directionMap[direction]}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ willChange: "transform" }}
      >
        {children}
      </MotionTag>
    </div>
  );
}
