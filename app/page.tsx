"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MaskReveal from "./components/MaskReveal";
import GeometricShard from "./components/GeometricShard";

/* ───── Data (content preserved exactly) ───── */
const values = [
  {
    title: "מצוינות",
    text: "שאיפה מתמדת להישגים גבוהים ולצמיחה אישית",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
    shape: "diagonal-right" as const,
    direction: "left" as const,
  },
  {
    title: "נשמה",
    text: "חינוך מלב אל לב, עם חמימות ואכפתיות",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop&q=80",
    shape: "wedge" as const,
    direction: "right" as const,
  },
  {
    title: "קהילתיות",
    text: "שותפות בין תלמידים, מורים והורים",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80",
    shape: "parallelogram" as const,
    direction: "up" as const,
  },
  {
    title: "יצירתיות",
    text: "עידוד חשיבה יוצרת וביטוי אישי",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop&q=80",
    shape: "trapezoid" as const,
    direction: "scale" as const,
  },
];

/* ───── Stagger utility ───── */
function StaggerChildren({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {children}
    </motion.div>
  );
}

function FadeChild({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════ */
export default function Home() {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const welcomeInView = useInView(welcomeRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="overflow-hidden">
      {/* ═══════ HERO SECTION ═══════ */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center px-4 sm:px-10 py-20 sm:py-28 overflow-hidden"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        {/* ── Background photo shards (geometric broken shapes) ── */}

        {/* Shard 1 — top-left diagonal */}
        <motion.div
          className="absolute top-0 left-0 w-[40%] sm:w-[35%] h-[35%] sm:h-[50%]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 80%)",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(60%) contrast(1.1)",
          }}
          initial={{ opacity: 0, x: -60, scale: 1.1 }}
          animate={{ opacity: 0.2, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ opacity: 0.4, scale: 1.03, transition: { duration: 0.15 } }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(232, 80, 58, 0.12)" }}
          />
        </motion.div>

        {/* Shard 2 — top-right wedge */}
        <motion.div
          className="absolute top-0 right-0 w-[35%] sm:w-[30%] h-[32%] sm:h-[45%]"
          style={{
            clipPath: "polygon(30% 0, 100% 0, 100% 85%, 0 100%)",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(70%) contrast(1.05)",
          }}
          initial={{ opacity: 0, x: 60, scale: 1.1 }}
          animate={{ opacity: 0.18, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ opacity: 0.35, scale: 1.03, transition: { duration: 0.15 } }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(26, 26, 26, 0.3)" }}
          />
        </motion.div>

        {/* Shard 3 — bottom-left trapezoid */}
        <motion.div
          className="absolute bottom-0 left-0 w-[32%] sm:w-[28%] h-[28%] sm:h-[40%]"
          style={{
            clipPath: "polygon(0 20%, 100% 0, 85% 100%, 0 100%)",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(65%) contrast(1.1)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.16, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ opacity: 0.32, scale: 1.04, transition: { duration: 0.15 } }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(196, 163, 90, 0.1)" }}
          />
        </motion.div>

        {/* Shard 4 — bottom-right parallelogram */}
        <motion.div
          className="absolute bottom-0 right-0 w-[33%] sm:w-[32%] h-[25%] sm:h-[38%]"
          style={{
            clipPath: "polygon(15% 0, 100% 15%, 100% 100%, 0 100%)",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(55%) contrast(1.15)",
          }}
          initial={{ opacity: 0, y: 50, x: 30 }}
          animate={{ opacity: 0.15, y: 0, x: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ opacity: 0.32, scale: 1.03, transition: { duration: 0.15 } }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(232, 80, 58, 0.08)" }}
          />
        </motion.div>

        {/* ── Geometric decoration lines ── */}

        {/* Diagonal line — top-right to center */}
        <motion.div
          className="absolute top-[12%] right-[15%] w-[1px] h-[20%] hidden sm:block"
          style={{
            transformOrigin: "top",
            backgroundColor: "#E8503A",
            opacity: 0.25,
            transform: "rotate(-25deg)",
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          aria-hidden="true"
        />

        {/* Horizontal thin line — left side */}
        <motion.div
          className="absolute top-[50%] left-0 h-[1px] w-[12%] sm:w-[18%] hidden sm:block"
          style={{ transformOrigin: "left", backgroundColor: "rgba(251,251,251,0.08)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          aria-hidden="true"
        />

        {/* Corner accent markers */}
        <motion.div
          className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          aria-hidden="true"
        >
          <div className="w-8 h-[2px] bg-accent mb-[6px]" />
          <div className="w-[2px] h-8 bg-accent" />
        </motion.div>
        <motion.div
          className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-end">
            <div className="w-[2px] h-8 bg-accent mb-[6px]" />
            <div className="w-8 h-[2px] bg-accent" />
          </div>
        </motion.div>

        {/* ── Main centered composition ── */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Latin accent label */}
          <MaskReveal delay={0.1} className="mb-6 sm:mb-8">
            <span
              className="font-syne text-[10px] sm:text-xs tracking-[0.3em] uppercase"
              style={{ color: "#E8503A" }}
            >
              Beit Hinuch HaKirya — Ashdod
            </span>
          </MaskReveal>

          {/* ── LARGE School Logo with hover effects ── */}
          <motion.div
            className="relative mb-10 sm:mb-14 group cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Rotating outer ring on hover */}
            <motion.div
              className="absolute -inset-4 sm:-inset-5 border border-accent/20 transition-all duration-700 group-hover:border-accent/50 group-hover:rotate-[3deg]"
              style={{ borderRadius: "2px" }}
              aria-hidden="true"
            />
            {/* Opposite rotating frame */}
            <motion.div
              className="absolute -inset-2 sm:-inset-3 border transition-all duration-700 group-hover:rotate-[-2deg]"
              style={{ borderColor: "rgba(251,251,251,0.06)", borderRadius: "2px" }}
              aria-hidden="true"
            />
            {/* Accent corner dots */}
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

            {/* Logo container */}
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 flex items-center justify-center bg-white/[0.03] backdrop-blur-sm overflow-hidden">
              {/* Inner glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(circle at center, rgba(232,80,58,0.06) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <motion.img
                src="/school-logo.jpg"
                alt="לוגו בית חינוך הקריה"
                className="w-[75%] h-[75%] object-contain relative z-10"
                style={{ filter: "brightness(1.15) contrast(1.05)" }}
                whileHover={{ rotate: 1, scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Main title */}
          <MaskReveal delay={0.4} className="mb-2">
            <h1
              className="font-display font-normal leading-[0.9] tracking-tight"
              style={{
                fontSize: "clamp(3rem, 9vw, 7.5rem)",
                color: "#FBFBFB",
              }}
            >
              בית חינוך
            </h1>
          </MaskReveal>
          <MaskReveal delay={0.55} className="mb-8 sm:mb-10">
            <span
              className="font-display font-normal leading-[0.9] tracking-tight relative inline-block"
              style={{
                fontSize: "clamp(3rem, 9vw, 7.5rem)",
                color: "#FBFBFB",
              }}
            >
              הקריה
              {/* Accent underline */}
              <motion.span
                className="absolute -bottom-2 sm:-bottom-3 right-0 h-[3px]"
                style={{ backgroundColor: "#E8503A" }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 1.3,
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            </span>
          </MaskReveal>

          {/* Thin vertical rule */}
          <motion.div
            className="w-[1px] h-8 sm:h-12 mb-6 sm:mb-8"
            style={{ transformOrigin: "top", backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          />

          {/* Subtitle */}
          <MaskReveal delay={0.75}>
            <p
              className="text-lg sm:text-xl lg:text-2xl font-light tracking-wide"
              style={{ color: "rgba(251, 251, 251, 0.55)" }}
            >
              חינוך למצוינות עם נשמה
            </p>
          </MaskReveal>
        </div>
      </section>

      {/* ═══════ WELCOME SECTION ═══════ */}
      <section
        className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        {/* Background watermark — hidden on mobile to prevent overflow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display select-none pointer-events-none whitespace-nowrap hidden sm:block"
          style={{
            fontSize: "clamp(6rem, 15vw, 14rem)",
            color: "rgba(251, 251, 251, 0.03)",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          ברוכים הבאים
        </div>

        <div
          ref={welcomeRef}
          className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10"
        >
          {/* Heading side */}
          <div>
            <MaskReveal delay={0.1}>
              <span
                className="font-syne text-xs tracking-[0.2em] uppercase block mb-4"
                style={{ color: "#E8503A" }}
              >
                Welcome
              </span>
            </MaskReveal>
            <MaskReveal delay={0.2}>
              <h2 className="font-display text-fluid-section text-text-inverse mb-6">
                ברוכים הבאים
              </h2>
            </MaskReveal>
            <motion.hr
              className="divider-accent w-16 mb-0"
              initial={{ scaleX: 0 }}
              animate={welcomeInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ transformOrigin: "right" }}
            />
          </div>

          {/* Body text side */}
          <div>
            <MaskReveal delay={0.35}>
              <p
                className="text-fluid-body leading-[2]"
                style={{ color: "rgba(251, 251, 251, 0.75)" }}
              >
                בית חינוך הקריה הוא בית ספר יסודי בלב העיר אשדוד, המחנך לערכים
                של{" "}
                <strong style={{ color: "#FBFBFB" }}>מצוינות</strong>,{" "}
                <strong style={{ color: "#FBFBFB" }}>יצירתיות</strong> ו
                <strong style={{ color: "#FBFBFB" }}>אכפתיות</strong>. אנו
                מאמינים שכל ילד וילדה הם עולם ומלואו, ושואפים להעניק לכל תלמיד
                את הכלים להצליח ולצמוח.
              </p>
            </MaskReveal>
          </div>
        </div>
      </section>

      {/* ═══════ VALUES SECTION ═══════ */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-surface noise-bg">
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section header */}
          <div className="mb-16 lg:mb-20">
            <MaskReveal delay={0.1}>
              <span
                className="font-syne text-xs tracking-[0.2em] uppercase block mb-4"
                style={{ color: "#E8503A" }}
              >
                Our Values
              </span>
            </MaskReveal>
            <MaskReveal delay={0.2}>
              <h2 className="font-display text-fluid-section text-text-primary mb-4">
                הערכים שלנו
              </h2>
            </MaskReveal>
            <MaskReveal delay={0.3}>
              <p className="text-fluid-body text-text-secondary max-w-lg">
                הערכים המנחים אותנו בדרך לחינוך מיטבי
              </p>
            </MaskReveal>
          </div>

          {/* Asymmetric geometric grid */}
          <StaggerChildren className="values-grid-editorial">
            {values.map((value, index) => (
              <FadeChild key={value.title}>
                <div className="value-tile w-full h-full group">
                  {/* Clipped image background */}
                  <GeometricShard
                    src={value.image}
                    alt={value.title}
                    shape={value.shape}
                    className="absolute inset-0 w-full h-full"
                    delay={index * 0.15}
                    direction={value.direction}
                    overlayColor="rgba(26, 26, 26, 0.2)"
                    grayscale={25}
                  />

                  {/* Content overlay */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8">
                    {/* Index number */}
                    <span
                      className="font-syne text-[5rem] sm:text-[6rem] font-bold leading-none absolute top-4 right-6 select-none"
                      style={{ color: "rgba(251, 251, 251, 0.08)" }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Value title */}
                    <h3
                      className="font-display text-fluid-value text-text-inverse mb-2 relative"
                    >
                      {value.title}
                      <motion.span
                        className="absolute -bottom-1 right-0 h-[2px] bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: "40%" }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          duration: 0.6,
                        }}
                      />
                    </h3>

                    {/* Value description */}
                    <p
                      className="text-sm sm:text-base max-w-xs"
                      style={{ color: "rgba(251, 251, 251, 0.7)" }}
                    >
                      {value.text}
                    </p>
                  </div>
                </div>
              </FadeChild>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </div>
  );
}
