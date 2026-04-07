"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MaskReveal from "../components/MaskReveal";

/* ───── Data (content preserved exactly) ───── */
const cards = [
  {
    lines: ["מפגשי עבודה", "שגרת עבודה"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["צוות מצוי", "והתערבות"],
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["מעקב ובקרה", "רציפים"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["תצפיות", "ומתן משוב"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["סדנאות הכוונה והובלה", "מנהלת בעלי תפקידים"],
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["העצמת צוות מוביל", "רכזת מדעים", "חקר ויזמות", "רכזות שכבה"],
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["רפלקציה מעצבת", "ומסכמת"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["כיתת מנהלת"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&q=80",
  },
];

const hierarchySteps = [
  { label: "מנהלת" },
  { label: "צוות מוביל" },
  { label: "תפקיד לכל מורה" },
];

/* ───── Clip-path shapes for cards ───── */
const clipShapes = [
  "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
  "polygon(0 0, 100% 0, 100% 100%, 0 88%)",
  "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
  "polygon(8% 0, 100% 0, 100% 100%, 0 100%)",
  "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
  "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
  "polygon(0 0, 100% 0, 100% 100%, 0 90%)",
  "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
];

/* ───── Stagger wrapper ───── */
function StaggerWrap({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {children}
    </motion.div>
  );
}

function FadeUp({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function MivneIrguni() {
  const hierarchyRef = useRef<HTMLDivElement>(null);
  const hierarchyInView = useInView(hierarchyRef, { once: true, margin: "-80px" });

  return (
    <div className="overflow-hidden">
      {/* ═══════ HERO SECTION ═══════ */}
      <section
        className="relative min-h-[55vh] sm:min-h-[50vh] flex items-center justify-center px-6 sm:px-10 py-24 sm:py-28 overflow-hidden"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        {/* Background image shard */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(70%) contrast(1.1)",
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          aria-hidden="true"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.6) 0%, rgba(26,26,26,0.85) 100%)" }}
          aria-hidden="true"
        />

        {/* Corner markers */}
        <motion.div
          className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          aria-hidden="true"
        >
          <div className="w-6 h-[2px] bg-accent mb-1" />
          <div className="w-[2px] h-6 bg-accent" />
        </motion.div>
        <motion.div
          className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-end">
            <div className="w-[2px] h-6 bg-accent mb-1" />
            <div className="w-6 h-[2px] bg-accent" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <MaskReveal delay={0.1} className="mb-4">
            <span
              className="font-syne text-[10px] sm:text-xs tracking-[0.3em] uppercase"
              style={{ color: "#E8503A" }}
            >
              Organizational Structure
            </span>
          </MaskReveal>

          <MaskReveal delay={0.25}>
            <h1
              className="font-display font-normal leading-[0.95] tracking-tight mb-4"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", color: "#FBFBFB" }}
            >
              מבנה ארגוני
            </h1>
          </MaskReveal>

          <MaskReveal delay={0.4} className="mb-8">
            <p
              className="text-lg sm:text-xl lg:text-2xl font-light"
              style={{ color: "rgba(251,251,251,0.5)" }}
            >
              הצוות שמוביל את הדרך
            </p>
          </MaskReveal>

          <motion.hr
            className="divider-accent w-16 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ transformOrigin: "center" }}
          />
        </div>
      </section>

      {/* ═══════ HIERARCHY SECTION ═══════ */}
      <section className="relative py-20 sm:py-28 px-6 sm:px-10 bg-surface noise-bg overflow-hidden">
        <div ref={hierarchyRef} className="mx-auto max-w-2xl">
          <div className="flex flex-col items-center gap-0">
            {hierarchySteps.map((step, index) => {
              const widths = ["180px", "240px", "320px"];
              const mobileWidths = ["150px", "200px", "260px"];
              return (
                <div key={step.label} className="flex flex-col items-center">
                  <motion.div
                    className="relative flex items-center justify-center cursor-default group"
                    style={{
                      width: widths[index],
                      height: index === 0 ? "72px" : index === 1 ? "80px" : "88px",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={hierarchyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
                  >
                    {/* Background shape */}
                    <div
                      className="absolute inset-0 transition-all duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: index === 0 ? "#1A1A1A" : index === 1 ? "#2B2B2B" : "#E8503A",
                        clipPath: "polygon(6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%, 0 50%)",
                      }}
                    />
                    {/* Border overlay */}
                    <div
                      className="absolute inset-[2px]"
                      style={{
                        clipPath: "polygon(6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%, 0 50%)",
                        border: "1px solid rgba(251,251,251,0.1)",
                        background: "transparent",
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className="font-display text-lg sm:text-xl relative z-10"
                      style={{ color: "#FBFBFB" }}
                    >
                      {step.label}
                    </span>
                    {/* Index number */}
                    <span
                      className="absolute top-1 left-3 font-syne text-[9px] tracking-wider"
                      style={{ color: "rgba(251,251,251,0.2)" }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>

                  {/* Connector */}
                  {index < hierarchySteps.length - 1 && (
                    <motion.div
                      className="flex flex-col items-center my-1"
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={hierarchyInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                      transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
                      style={{ transformOrigin: "top" }}
                    >
                      <div
                        className="w-[1px] h-8"
                        style={{ backgroundColor: "rgba(26,26,26,0.2)" }}
                      />
                      <div
                        className="w-2 h-2 rotate-45"
                        style={{ backgroundColor: "#E8503A", marginTop: "-2px" }}
                      />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Responsive width override for mobile */}
        <style>{`
          @media (max-width: 639px) {
            .flex.flex-col.items-center .relative.flex.items-center.justify-center {
              max-width: 80vw;
            }
          }
        `}</style>
      </section>

      {/* ═══════ CARDS SECTION ═══════ */}
      <section
        className="relative py-20 sm:py-28 px-6 sm:px-10 overflow-hidden"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section header */}
          <div className="mb-14 sm:mb-20">
            <MaskReveal delay={0.1}>
              <span
                className="font-syne text-[10px] sm:text-xs tracking-[0.2em] uppercase block mb-4"
                style={{ color: "#E8503A" }}
              >
                Areas of Responsibility
              </span>
            </MaskReveal>
            <MaskReveal delay={0.2}>
              <h2
                className="font-display leading-[1] tracking-tight mb-3"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FBFBFB" }}
              >
                תחומי האחריות
              </h2>
            </MaskReveal>
            <MaskReveal delay={0.3}>
              <p className="text-base sm:text-lg" style={{ color: "rgba(251,251,251,0.45)" }}>
                כל אחד תורם מהמקום שלו
              </p>
            </MaskReveal>
          </div>

          {/* Editorial masonry-like grid */}
          <StaggerWrap className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {cards.map((card, index) => (
              <FadeUp key={index}>
                <div
                  className="relative group cursor-default overflow-hidden"
                  style={{
                    minHeight: index % 3 === 0 ? "320px" : index % 3 === 1 ? "280px" : "300px",
                  }}
                >
                  {/* Clipped image background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      clipPath: clipShapes[index % clipShapes.length],
                      filter: "grayscale(40%) contrast(1.1)",
                    }}
                  />

                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
                    style={{
                      clipPath: clipShapes[index % clipShapes.length],
                      background: "linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.3) 50%, transparent 100%)",
                      opacity: 0.85,
                    }}
                  />

                  {/* Index number */}
                  <span
                    className="absolute top-4 right-5 font-syne text-[3rem] sm:text-[4rem] font-bold leading-none z-10 select-none"
                    style={{ color: "rgba(251,251,251,0.06)" }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Accent line */}
                  <motion.div
                    className="absolute top-4 left-5 w-6 h-[2px] z-10"
                    style={{ transformOrigin: "right", backgroundColor: "#E8503A" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                    {card.lines.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className={`${
                          lineIndex === 0
                            ? "font-display text-lg sm:text-xl mb-1"
                            : "text-sm sm:text-base"
                        } leading-snug`}
                        style={{
                          color: lineIndex === 0 ? "#FBFBFB" : "rgba(251,251,251,0.55)",
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Bottom accent on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10"
                    style={{ transformOrigin: "right" }}
                  />
                </div>
              </FadeUp>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══════ CLOSING QUOTE ═══════ */}
      <section className="relative py-20 sm:py-28 px-6 sm:px-10 bg-surface noise-bg overflow-hidden">
        {/* Watermark */}
        <div
          className="absolute top-0 md:-top-4 left-1/2 -translate-x-1/2 font-display select-none pointer-events-none whitespace-nowrap hidden sm:block"
          style={{ fontSize: "clamp(5rem, 14vw, 12rem)", color: "rgba(26,26,26,0.06)", lineHeight: 1 }}
          aria-hidden="true"
        >
          ביחד
        </div>

        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span
            className="font-syne text-[10px] sm:text-xs tracking-[0.25em] uppercase block mb-6"
            style={{ color: "#E8503A" }}
          >
            Together
          </span>

          <blockquote
            className="font-display leading-[1.15] tracking-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", color: "#1A1A1A" }}
          >
            &ldquo;ביחד אנחנו יוצרים
            <br />
            סביבה חינוכית מצוינת&rdquo;
          </blockquote>

          <motion.hr
            className="divider-accent w-12 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
      </section>
    </div>
  );
}
