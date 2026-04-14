"use client";

import { motion, useReducedMotion, useAnimate } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Editorial Ink-Wipe Page Transition
 *
 * Design rationale:
 * - Single dark panel (#1A1A1A) slides out top → bottom (origin: top)
 * - Thin accent rule (#E8503A) trails behind, adds editorial snap
 * - On homepage: waits for hero-video canplay (max 600ms) before wipe lifts
 *   → prevents panel lifting onto black/unloaded video frame
 * - Content fades + 6px drift up — no scale (scale = zoom glitch source)
 * - prefers-reduced-motion: skips panel, instant fade only
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const isHome = pathname === "/";

  const [panelScope, animatePanel] = useAnimate();
  const [accentScope, animateAccent] = useAnimate();
  const [contentScope, animateContent] = useAnimate();

  const wipeEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

  useEffect(() => {
    if (reducedMotion) {
      // Instant — just fade content in
      animateContent(contentScope.current, { opacity: 1, y: 0 }, { duration: 0.2 });
      return;
    }

    const runTransition = () => {
      // Panel wipes out
      animatePanel(panelScope.current, { scaleY: 0 }, { duration: 0.42, ease: wipeEase });
      // Accent trails 380ms later
      animateAccent(
        accentScope.current,
        { scaleY: 0, opacity: 0 },
        { duration: 0.18, ease: wipeEase, delay: 0.38 }
      );
      // Content drifts in after panel clears
      animateContent(
        contentScope.current,
        { opacity: 1, y: 0 },
        {
          duration: 0.3,
          delay: 0.36,
          ease: [0.33, 1, 0.68, 1],
        }
      );
    };

    if (!isHome) {
      // Non-home: no video — fire immediately
      runTransition();
      return;
    }

    // Homepage: gate on hero-video canplay, cap at 600ms
    const video = document.querySelector<HTMLVideoElement>("video[src='/hero-video.mp4']");

    if (!video || video.readyState >= 3) {
      // Already ready (readyState 3 = HAVE_FUTURE_DATA, 4 = HAVE_ENOUGH_DATA)
      runTransition();
      return;
    }

    const timeout = setTimeout(runTransition, 600);

    const onReady = () => {
      clearTimeout(timeout);
      runTransition();
    };

    video.addEventListener("canplay", onReady, { once: true });
    return () => {
      clearTimeout(timeout);
      video.removeEventListener("canplay", onReady);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div key={pathname}>
      {!reducedMotion && (
        <>
          {/* Primary ink panel */}
          <div
            ref={panelScope}
            aria-hidden="true"
            className="fixed inset-0 z-[102] pointer-events-none"
            style={{ backgroundColor: "#1A1A1A", transformOrigin: "top", scaleY: 1 } as React.CSSProperties}
          />
          {/* Accent rule */}
          <div
            ref={accentScope}
            aria-hidden="true"
            className="fixed inset-x-0 top-0 z-[101] pointer-events-none"
            style={{
              height: "4px",
              backgroundColor: "#E8503A",
              transformOrigin: "top",
              scaleY: 1,
              opacity: 1,
            } as React.CSSProperties}
          />
        </>
      )}

      {/* Content — starts hidden, driven by useAnimate */}
      <div
        ref={contentScope}
        style={{ opacity: reducedMotion ? 1 : 0, transform: reducedMotion ? "none" : "translateY(6px)" }}
      >
        {children}
      </div>
    </div>
  );
}
