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
      {/* Brutalist Slide Curtains */}
      <motion.div
        className="fixed inset-0 z-[100] pointer-events-none bg-[#FF3366]"
        style={{ transformOrigin: "bottom" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.2 }}
      />
      <motion.div
        className="fixed inset-0 z-[101] pointer-events-none bg-[#00E5FF]"
        style={{ transformOrigin: "bottom" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.1 }}
      />
      <motion.div
        className="fixed inset-0 z-[102] pointer-events-none bg-[#111111]"
        style={{ transformOrigin: "bottom" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0 }}
      />

      {/* Page content - harsh pop-in instead of gentle fade */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "circOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
