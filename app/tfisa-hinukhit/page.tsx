"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MaskReveal from "../components/MaskReveal";

export default function TfisaHinukhit() {
  const proverbRef = useRef<HTMLDivElement>(null);
  const proverbInView = useInView(proverbRef, { once: true, margin: "-80px" });
  const goalsRef = useRef<HTMLDivElement>(null);
  const goalsInView = useInView(goalsRef, { once: true, margin: "-60px" });

  return (
    <div className="overflow-hidden">
      {/* ═══════ HERO ═══════ */}
      <section
        className="relative min-h-[55vh] sm:min-h-[50vh] flex items-center justify-center px-6 sm:px-10 py-24 sm:py-28 overflow-hidden"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        {/* Background photo */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(70%) contrast(1.1)",
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.5) 0%, rgba(26,26,26,0.85) 100%)" }}
          aria-hidden="true"
        />

        {/* Corner markers */}
        <motion.div
          className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          aria-hidden="true"
        >
          <div className="w-6 h-[2px] bg-accent mb-1" />
          <div className="w-[2px] h-6 bg-accent" />
        </motion.div>
        <motion.div
          className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-end">
            <div className="w-[2px] h-6 bg-accent mb-1" />
            <div className="w-6 h-[2px] bg-accent" />
          </div>
        </motion.div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <MaskReveal delay={0.1} className="mb-4">
            <span className="font-syne text-[10px] sm:text-xs tracking-[0.3em] uppercase" style={{ color: "#E8503A" }}>
              Educational Philosophy
            </span>
          </MaskReveal>
          <MaskReveal delay={0.25}>
            <h1
              className="font-display font-normal leading-[0.95] tracking-tight mb-4"
              style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", color: "#FBFBFB" }}
            >
              מצוינות עם נשמה
            </h1>
          </MaskReveal>
          <MaskReveal delay={0.4} className="mb-8">
            <p className="text-lg sm:text-xl font-light" style={{ color: "rgba(251,251,251,0.5)" }}>
              בית חינוך תורני מדעי טכנולוגי הקריה
            </p>
          </MaskReveal>
          <motion.hr
            className="divider-accent w-16 mx-auto"
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ transformOrigin: "center" }}
          />
        </div>
      </section>

      <section ref={proverbRef} className="relative py-24 sm:py-36 px-6 sm:px-10 bg-surface noise-bg overflow-hidden">
        {/* Giant watermark behind the quote */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display select-none pointer-events-none whitespace-nowrap hidden sm:block"
          style={{ fontSize: "clamp(6rem, 18vw, 16rem)", color: "rgba(26,26,26,0.03)", lineHeight: 1 }}
          aria-hidden="true"
        >
          חנוך לנער
        </div>

        {/* Vertical accent line decoration */}
        <motion.div
          className="absolute top-12 right-[10%] w-[1px] h-[30%] hidden lg:block"
          style={{ transformOrigin: "top", backgroundColor: "rgba(232,80,58,0.15)" }}
          initial={{ scaleY: 0 }}
          animate={proverbInView ? { scaleY: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <MaskReveal delay={0.1} className="mb-6">
            <span className="font-syne text-[10px] sm:text-xs tracking-[0.3em] uppercase" style={{ color: "#E8503A" }}>
              Guiding Verse
            </span>
          </MaskReveal>

          {/* The main quote — dramatic and huge */}
          <motion.blockquote
            className="font-display leading-[1.1] tracking-tight mb-10"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", color: "#1A1A1A" }}
            initial={{ opacity: 0, y: 25 }}
            animate={proverbInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-accent">&ldquo;</span>
            חנוך לנער על פי דרכו
            <br />
            גם כי יזקין לא יסור ממנה
            <span className="text-accent">&rdquo;</span>
          </motion.blockquote>

          {/* Accent divider */}
          <motion.div
            className="w-16 h-[3px] bg-accent mx-auto mb-10"
            initial={{ scaleX: 0 }}
            animate={proverbInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ transformOrigin: "center" }}
          />

          {/* Explanation text */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl leading-[2] max-w-2xl mx-auto"
            style={{ color: "#555555" }}
            initial={{ opacity: 0, y: 15 }}
            animate={proverbInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            התפיסה החינוכית הבית ספרית נובעת מהפסוק הנ&quot;ל, אשר מבטא שתיים
            מבין המטרות העיקריות של בית ספרינו. מתוך מטרות העל הללו נגזרות
            מטרות נוספות אשר יפורטו בהמשך.
          </motion.p>
        </div>
      </section>

      {/* ═══════ GOALS SECTION ═══════ */}
      <section
        className="relative py-20 sm:py-28 px-6 sm:px-10 overflow-hidden"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div ref={goalsRef} className="mx-auto max-w-5xl relative z-10">
          {/* Section header */}
          <div className="mb-14 sm:mb-20 text-center">
            <MaskReveal delay={0.1}>
              <span className="font-syne text-[10px] sm:text-xs tracking-[0.2em] uppercase block mb-4" style={{ color: "#E8503A" }}>
                Core Goals
              </span>
            </MaskReveal>
            <MaskReveal delay={0.2}>
              <h2
                className="font-display leading-[1] tracking-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FBFBFB" }}
              >
                מטרות העל
              </h2>
            </MaskReveal>
          </div>

          {/* Goal 1 */}
          <motion.div
            className="relative mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={goalsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Goal number */}
            <span
              className="font-syne text-[6rem] sm:text-[9rem] font-bold leading-none absolute -top-8 left-0 sm:left-4 select-none"
              style={{ color: "rgba(251,251,251,0.06)" }}
              aria-hidden="true"
            >
              01
            </span>

            <div className="relative border-r-[3px] pr-6 sm:pr-10" style={{ borderColor: "#E8503A" }}>
              {/* Goal label */}
              <div
                className="inline-block px-4 py-1.5 mb-5"
                style={{ backgroundColor: "rgba(232,80,58,0.1)", border: "1px solid rgba(232,80,58,0.2)" }}
              >
                <span className="font-display text-base sm:text-lg" style={{ color: "#E8503A" }}>
                  מטרה אחת
                </span>
              </div>

              <p className="font-display text-xl sm:text-2xl mb-4" style={{ color: "#FBFBFB" }}>
                נלמדת מהמילים:{" "}
                <span style={{ color: "#E8503A" }}>&quot;חנוך לנער על פי דרכו&quot;</span>
              </p>

              <p className="text-sm sm:text-base leading-[2]" style={{ color: "rgba(251,251,251,0.6)" }}>
                המשמעות הנובעת מכך הינה לאפשר לתלמיד להתקדם בהתאם ליכולתו
                האישית ולממש את הפוטנציאל הטמון בו, זאת באמצעות גיוון דרכי
                ההוראה, הקניית כלים ומיומנויות שונות שיאפשרו לו להצליח בכל
                תחומי הידע השונים. כמו כן לפתח יכולת זו עד כי הילד ילמד להיות
                לומד עצמאי בעל מכוונות עצמאית ללמידה.
              </p>
            </div>
          </motion.div>

          {/* Thin separator */}
          <motion.div
            className="w-full h-[1px] mb-12 sm:mb-16"
            style={{ transformOrigin: "right", backgroundColor: "rgba(251,251,251,0.06)" }}
            initial={{ scaleX: 0 }}
            animate={goalsInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          />

          {/* Goal 2 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={goalsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span
              className="font-syne text-[6rem] sm:text-[9rem] font-bold leading-none absolute -top-8 left-0 sm:left-4 select-none"
              style={{ color: "rgba(251,251,251,0.06)" }}
              aria-hidden="true"
            >
              02
            </span>

            <div className="relative border-r-[3px] pr-6 sm:pr-10" style={{ borderColor: "rgba(251,251,251,0.15)" }}>
              <div
                className="inline-block px-4 py-1.5 mb-5"
                style={{ backgroundColor: "rgba(251,251,251,0.04)", border: "1px solid rgba(251,251,251,0.1)" }}
              >
                <span className="font-display text-base sm:text-lg" style={{ color: "rgba(251,251,251,0.7)" }}>
                  מטרה שנייה
                </span>
              </div>

              <p className="font-display text-xl sm:text-2xl mb-4" style={{ color: "#FBFBFB" }}>
                נלמדת מהמילה:{" "}
                <span style={{ color: "rgba(251,251,251,0.5)" }}>&quot;חנוך לנער...&quot;</span>
              </p>

              <p className="text-sm sm:text-base leading-[2]" style={{ color: "rgba(251,251,251,0.6)" }}>
                משמעות המילה חינוך הינה קביעת עליונות של ערכים מסוימים בליבו של
                הילד להלכה ומעשה. כלומר להקנות לתלמיד ערכים והרגלים אשר יעצבו
                את אישיותו, יובילו אותו להיות אזרח טוב האוהב את עמו וארצו
                ומקפיד לנהל אורח חיים על פי רוח ההלכה והמצוות.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CLOSING QUOTE ═══════ */}
      <section className="relative py-20 sm:py-28 px-6 sm:px-10 bg-surface noise-bg overflow-hidden">
        {/* Watermark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display select-none pointer-events-none whitespace-nowrap hidden sm:block"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)", color: "rgba(26,26,26,0.03)", lineHeight: 1 }}
          aria-hidden="true"
        >
          כל ילד
        </div>

        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="font-syne text-[10px] sm:text-xs tracking-[0.25em] uppercase block mb-6" style={{ color: "#E8503A" }}>
            Every Child
          </span>

          <blockquote
            className="font-display leading-[1.15] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", color: "#1A1A1A" }}
          >
            &ldquo;כל ילד הוא עולם ומלואו&rdquo;
          </blockquote>

          <p className="text-base sm:text-lg mb-8" style={{ color: "#555555" }}>
            אנו מאמינים בכל תלמיד ובפוטנציאל הייחודי שלו
          </p>

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
