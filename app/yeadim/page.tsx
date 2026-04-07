"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MaskReveal from "../components/MaskReveal";

const goals = [
  {
    number: 1,
    title: "עידוד מצוינות ומיצוי הפוטנציאל האישי של כל תלמיד תוך מתן מענה לשונות",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80",
  },
  {
    number: 2,
    title: "תגבור לימודי והשלמת פערים בשילוב מיומנויות של הוראה דיפרנציאלית - מודל הפל״א",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop&q=80",
  },
  {
    number: 3,
    title: "הקניית כלים ומיומנויות מבוססות חדשנות, חקר ויזמות תוך ביסוס התהליך בחדר המורים והכיתה",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop&q=80",
  },
  {
    number: 4,
    title: "הטמעת כלי תקשוב שונים בתהליך הלמידה, הוראה וביסוס הטכנו-פדגוגיה תוך שימוש בכלים דיגיטליים מגוונים. AI, יצירת ספר דיגיטלי, פאדלט, שימוש בכלי להתקדמות קריאה בטימס וכתיבת סיפורים באנגלית בעזרת STORYWIZARD.AI.IL ועוד...",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&q=80",
  },
  {
    number: 5,
    title: "גיבוש, התמקצעות והעצמת הצוות החינוכי",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80",
  },
  {
    number: 6,
    title: "ביסוס וקידום אקלים חברתי, ערכי, תורני תוך ביסוס תחושת השייכות והמגוונות",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&q=80",
  },
];

function GoalCard({ goal, index }: { goal: typeof goals[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch ${isEven ? "" : "direction-alternate"}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Image side */}
      <div className={`relative h-[220px] sm:h-[280px] lg:h-auto overflow-hidden group ${isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5 lg:order-2"}`}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(${goal.image})`,
            filter: "grayscale(30%) contrast(1.05)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.1) 0%, rgba(26,26,26,0.5) 100%)" }} />

        {/* Giant number overlay */}
        <span
          className="absolute bottom-4 right-6 sm:bottom-6 sm:right-8 font-syne text-[5rem] sm:text-[7rem] font-bold leading-none select-none"
          style={{ color: "rgba(251,251,251,0.1)" }}
          aria-hidden="true"
        >
          {String(goal.number).padStart(2, "0")}
        </span>
      </div>

      {/* Content side */}
      <div
        className={`${isEven ? "lg:col-span-7 lg:order-2" : "lg:col-span-7 lg:order-1"} p-8 sm:p-10 lg:p-14 flex flex-col justify-center`}
        style={{ backgroundColor: "#1A1A1A" }}
      >
        {/* Goal label */}
        <motion.div
          className="inline-flex items-center gap-3 mb-6 self-start"
          initial={{ opacity: 0, x: 10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="w-8 h-[2px] bg-accent" />
          <span className="font-display text-xs sm:text-sm tracking-wide" style={{ color: "#E8503A" }}>
            יעד {String(goal.number).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Goal text */}
        <motion.p
          className="font-display text-xl sm:text-2xl lg:text-[1.7rem] leading-[1.5] mb-6"
          style={{ color: "#FBFBFB" }}
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {goal.title}
        </motion.p>

        {/* Bottom accent */}
        <motion.div
          className="w-12 h-[2px] bg-accent"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          style={{ transformOrigin: "right" }}
        />
      </div>
    </motion.div>
  );
}

export default function Yeadim() {
  return (
    <div className="overflow-hidden">
      {/* ═══════ HERO ═══════ */}
      <section
        className="relative min-h-[55vh] sm:min-h-[50vh] flex items-center justify-center px-6 sm:px-10 py-24 sm:py-28 overflow-hidden"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop&q=80)",
            backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(70%) contrast(1.1)",
          }}
          initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }} aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.5) 0%, rgba(26,26,26,0.85) 100%)" }} aria-hidden="true" />

        <motion.div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} aria-hidden="true">
          <div className="w-6 h-[2px] bg-accent mb-1" /><div className="w-[2px] h-6 bg-accent" />
        </motion.div>
        <motion.div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} aria-hidden="true">
          <div className="flex flex-col items-end"><div className="w-[2px] h-6 bg-accent mb-1" /><div className="w-6 h-[2px] bg-accent" /></div>
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <MaskReveal delay={0.1} className="mb-4">
            <span className="font-syne text-[10px] sm:text-xs tracking-[0.3em] uppercase" style={{ color: "#E8503A" }}>
              Annual Goals — תשפ״ו
            </span>
          </MaskReveal>
          <MaskReveal delay={0.25}>
            <h1 className="font-display font-normal leading-[0.95] tracking-tight mb-4" style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)", color: "#FBFBFB" }}>
              יעדי בית הספר
            </h1>
          </MaskReveal>
          <MaskReveal delay={0.4} className="mb-8">
            <p className="text-lg sm:text-xl font-light" style={{ color: "rgba(251,251,251,0.5)" }}>
              בית חינוך תורני מדעי טכנולוגי הקריה
            </p>
          </MaskReveal>
          <motion.hr className="divider-accent w-16 mx-auto" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.6 }} style={{ transformOrigin: "center" }} />
        </div>
      </section>

      {/* ═══════ GOALS ═══════ */}
      <section className="relative bg-surface noise-bg overflow-hidden">
        {/* Section intro */}
        <div className="py-14 sm:py-20 px-6 sm:px-10 text-center">
          <div className="mx-auto max-w-3xl">
            <MaskReveal delay={0.1}>
              <span className="font-syne text-[10px] sm:text-xs tracking-[0.2em] uppercase block mb-4" style={{ color: "#E8503A" }}>
                6 Core Goals
              </span>
            </MaskReveal>
            <MaskReveal delay={0.2}>
              <h2 className="font-display leading-[1.05] tracking-tight" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", color: "#1A1A1A" }}>
                ששה יעדים מרכזיים שמנחים
                <br className="hidden sm:block" />
                את הדרך שלנו השנה
              </h2>
            </MaskReveal>
          </div>
        </div>

        {/* Goals list — alternating editorial strips */}
        <div className="flex flex-col">
          {goals.map((goal, index) => (
            <GoalCard key={goal.number} goal={goal} index={index} />
          ))}
        </div>
      </section>

      {/* ═══════ CLOSING QUOTE ═══════ */}
      <section className="relative py-20 sm:py-28 px-6 sm:px-10 overflow-hidden" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display select-none pointer-events-none whitespace-nowrap hidden sm:block" style={{ fontSize: "clamp(5rem, 14vw, 12rem)", color: "rgba(251,251,251,0.02)", lineHeight: 1 }} aria-hidden="true">
          שואפים
        </div>

        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="font-syne text-[10px] sm:text-xs tracking-[0.25em] uppercase block mb-6" style={{ color: "#E8503A" }}>
            Aspire Higher
          </span>
          <blockquote className="font-display leading-[1.15] tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", color: "#FBFBFB" }}>
            &ldquo;שואפים גבוה
            <br />
            מגיעים רחוק&rdquo;
          </blockquote>
          <p className="text-base sm:text-lg mb-8" style={{ color: "rgba(251,251,251,0.45)" }}>
            יחד נממש את כל היעדים שלנו
          </p>
          <motion.hr className="divider-accent w-12 mx-auto" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} style={{ transformOrigin: "center" }} />
        </motion.div>
      </section>
    </div>
  );
}
