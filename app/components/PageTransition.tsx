"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Editorial Ink-Wipe Page Transition
 *
 * Design rationale:
 * - Single dark panel (#1A1A1A) slides out top → bottom (origin: top)
 * - Thin accent rule (#E8503A) trails 40ms behind, adds editorial snap
 * - Content drifts up 6px + fades — no scale jitter
 * - Total visible transition: ~440ms (within UX 150-300ms micro guideline wall)
 * - prefers-reduced-motion: skips panel, instant fade only
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  // Sharp editorial easing — fast start, snappy exit
  const wipeEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

  return (
    <div key={pathname}>
      {!reducedMotion && (
        <>
          {/* Primary ink panel — brand dark */}
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-[102] pointer-events-none"
            style={{
              backgroundColor: "#1A1A1A",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.42, ease: wipeEase, delay: 0 }}
          />

          {/* Accent rule — 4px stripe, trails primary, editorial snap */}
          <motion.div
            aria-hidden="true"
            className="fixed inset-x-0 top-0 z-[101] pointer-events-none"
            style={{
              height: "4px",
              backgroundColor: "#E8503A",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 1, opacity: 1 }}
            animate={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: wipeEase, delay: 0.38 }}
          />
        </>
      )}

      {/* Page content — opacity + subtle upward drift, no scale */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.28, delay: reducedMotion ? 0 : 0.36, ease: "easeOut" },
          y: { duration: 0.32, delay: reducedMotion ? 0 : 0.36, ease: [0.33, 1, 0.68, 1] },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
