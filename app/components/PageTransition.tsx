"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <div key={pathname}>
      {/* Curtain overlay — slides up to reveal page */}
      <motion.div
        className="fixed inset-0 z-[100] pointer-events-none"
        style={{ transformOrigin: "top", backgroundColor: "#1A1A1A" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
      />

      {/* Accent line sweep */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[101] pointer-events-none"
        style={{ transformOrigin: "right", backgroundColor: "#E8503A" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 0.8, ease: "easeInOut", times: [0, 0.5, 1] }}
      />

      {/* Page content with fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
