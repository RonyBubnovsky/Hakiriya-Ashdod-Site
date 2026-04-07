"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import MaskReveal from "../components/MaskReveal";

export default function TfisaHinukhit() {
  const [proverbRevealed, setProverbRevealed] = useState(false);
  const [goal1Revealed, setGoal1Revealed] = useState(false);
  const [goal2Revealed, setGoal2Revealed] = useState(false);
  const goalsRef = useRef<HTMLDivElement>(null);
  const goalsInView = useInView(goalsRef, { once: true, margin: "-60px" });

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
            backgroundImage: "url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop&q=80)",
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
        <motion.div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} aria-hidden="true">
          <div className="w-6 h-[2px] bg-accent mb-1" />
          <div className="w-[2px] h-6 bg-accent" />
        </motion.div>
        <motion.div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }} aria-hidden="true">
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
            <h1 className="font-display font-normal leading-[0.95] tracking-tight mb-4" style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", color: "#FBFBFB" }}>
              מצוינות עם נשמה
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

      {/* ═══════ INTERACTIVE PROVERB REVEAL ═══════ */}
      <section className="relative py-20 sm:py-32 px-6 sm:px-10 bg-surface noise-bg overflow-hidden">
        {/* Background photo shards — subtle */}
        <motion.div
          className="absolute top-0 left-0 w-[30%] h-[50%] hidden lg:block"
          style={{
            clipPath: "polygon(0 0, 90% 0, 60% 100%, 0 80%)",
            backgroundImage: "url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(80%)",
            opacity: 0.04,
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[25%] h-[45%] hidden lg:block"
          style={{
            clipPath: "polygon(20% 0, 100% 10%, 100% 100%, 0 100%)",
            backgroundImage: "url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(80%)",
            opacity: 0.04,
          }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-4xl relative z-10">
          <AnimatePresence mode="wait">
            {!proverbRevealed ? (
              /* ── The invitation card ── */
              <motion.div
                key="invite"
                className="relative cursor-pointer group"
                onClick={() => setProverbRevealed(true)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div
                  className="relative overflow-hidden py-16 sm:py-24 px-8 sm:px-14 text-center transition-all duration-500"
                  style={{ backgroundColor: "#1A1A1A" }}
                >
                  {/* Background image peek */}
                  <div
                    className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-700"
                    style={{
                      backgroundImage: "url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop&q=80)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "grayscale(60%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Animated border frame */}
                  <div className="absolute inset-3 sm:inset-5 border border-white/[0.06] group-hover:border-accent/20 transition-colors duration-500" aria-hidden="true" />

                  {/* Corner accents that appear on hover */}
                  <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                    <div className="w-full h-[1px] bg-accent" />
                    <div className="w-[1px] h-full bg-accent" />
                  </div>
                  <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                    <div className="w-full h-[1px] bg-accent absolute bottom-0" />
                    <div className="w-[1px] h-full bg-accent absolute left-0" />
                  </div>

                  <div className="relative z-10">
                    <span className="font-syne text-[10px] sm:text-xs tracking-[0.3em] uppercase block mb-6" style={{ color: "#E8503A" }}>
                      Discover
                    </span>

                    <p className="font-display text-2xl sm:text-3xl lg:text-4xl mb-4 leading-snug" style={{ color: "#FBFBFB" }}>
                      גלו את התפיסה החינוכית
                      <br />
                      של בית הספר שלנו
                    </p>

                    <p className="text-sm sm:text-base mb-8" style={{ color: "rgba(251,251,251,0.4)" }}>
                      לחצו לגילוי הפסוק המנחה ומשמעותו
                    </p>

                    {/* Animated click indicator */}
                    <motion.div
                      className="inline-flex items-center gap-3 px-6 py-3 border group-hover:border-accent/40 transition-colors duration-300"
                      style={{ borderColor: "rgba(251,251,251,0.15)" }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="font-syne text-xs tracking-wider uppercase" style={{ color: "rgba(251,251,251,0.6)" }}>
                        לחצו כאן
                      </span>
                      <motion.span
                        className="text-accent text-lg"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ←
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ── The revealed content ── */
              <motion.div
                key="revealed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center"
              >
                <motion.span
                  className="font-syne text-[10px] sm:text-xs tracking-[0.3em] uppercase block mb-6"
                  style={{ color: "#E8503A" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  Guiding Verse
                </motion.span>

                <motion.blockquote
                  className="font-display leading-[1.1] tracking-tight mb-10"
                  style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", color: "#1A1A1A" }}
                  initial={{ opacity: 0, y: 25, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <span className="text-accent">&ldquo;</span>
                  חנוך לנער על פי דרכו
                  <br />
                  גם כי יזקין לא יסור ממנה
                  <span className="text-accent">&rdquo;</span>
                </motion.blockquote>

                <motion.div
                  className="w-16 h-[3px] bg-accent mx-auto mb-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={{ transformOrigin: "center" }}
                />

                <motion.p
                  className="text-base sm:text-lg lg:text-xl leading-[2] max-w-2xl mx-auto"
                  style={{ color: "#555555" }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  התפיסה החינוכית הבית ספרית נובעת מהפסוק הנ&quot;ל, אשר מבטא שתיים
                  מבין המטרות העיקריות של בית ספרינו. מתוך מטרות העל הללו נגזרות
                  מטרות נוספות אשר יפורטו בהמשך.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════ INTERACTIVE GOALS ═══════ */}
      <section
        ref={goalsRef}
        className="relative py-20 sm:py-28 px-6 sm:px-10 overflow-hidden"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        {/* Background shard */}
        <div
          className="absolute top-0 right-0 w-[35%] h-[60%] hidden lg:block"
          style={{
            clipPath: "polygon(40% 0, 100% 0, 100% 80%, 20% 100%)",
            backgroundImage: "url(https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(80%)",
            opacity: 0.04,
          }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-5xl relative z-10">
          {/* Section header */}
          <div className="mb-14 sm:mb-20 text-center">
            <MaskReveal delay={0.1}>
              <span className="font-syne text-[10px] sm:text-xs tracking-[0.2em] uppercase block mb-4" style={{ color: "#E8503A" }}>
                Core Goals
              </span>
            </MaskReveal>
            <MaskReveal delay={0.2}>
              <h2 className="font-display leading-[1] tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FBFBFB" }}>
                מטרות העל
              </h2>
            </MaskReveal>
          </div>

          {/* Goals grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {/* Goal 1 */}
            <motion.div
              className="relative group cursor-pointer"
              onClick={() => setGoal1Revealed(!goal1Revealed)}
              initial={{ opacity: 0, y: 30 }}
              animate={goalsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative overflow-hidden" style={{ backgroundColor: goal1Revealed ? "#222" : "#252525" }}>
                {/* Background image */}
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(60%)",
                    opacity: goal1Revealed ? 0.08 : 0.05,
                  }}
                  aria-hidden="true"
                />

                {/* Index */}
                <span className="absolute bottom-4 right-5 font-syne text-[5rem] sm:text-[6rem] font-bold leading-none select-none" style={{ color: "rgba(251,251,251,0.04)" }} aria-hidden="true">01</span>

                <div className="relative z-10 p-7 sm:p-10">
                  {/* Header — always visible */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="inline-block px-3 py-1 mb-4" style={{ backgroundColor: "rgba(232,80,58,0.12)", border: "1px solid rgba(232,80,58,0.2)" }}>
                        <span className="font-display text-sm sm:text-base" style={{ color: "#E8503A" }}>מטרה אחת</span>
                      </div>
                      <p className="font-display text-xl sm:text-2xl" style={{ color: "#FBFBFB" }}>
                        נלמדת מהמילים:{" "}
                        <span style={{ color: "#E8503A" }}>&quot;חנוך לנער על פי דרכו&quot;</span>
                      </p>
                    </div>
                    <motion.div
                      className="mt-2 flex-shrink-0 w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300"
                      animate={{ rotate: goal1Revealed ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white/40 text-lg leading-none">+</span>
                    </motion.div>
                  </div>

                  {!goal1Revealed && (
                    <motion.div
                      className="flex items-center gap-3 mt-5 px-5 py-3 border border-accent/20 group-hover:border-accent/50 transition-colors duration-300 w-fit"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="font-display text-base sm:text-lg" style={{ color: "rgba(251,251,251,0.7)" }}>
                        לחצו לגילוי המשמעות המלאה
                      </span>
                      <motion.span
                        className="text-accent text-xl"
                        animate={{ x: [0, -5, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      >
                        ←
                      </motion.span>
                    </motion.div>
                  )}

                  {/* Revealed content */}
                  <AnimatePresence>
                    {goal1Revealed && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="w-10 h-[2px] bg-accent my-6"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          style={{ transformOrigin: "right" }}
                        />
                        <motion.p
                          className="text-sm sm:text-base leading-[2]"
                          style={{ color: "rgba(251,251,251,0.6)" }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          המשמעות הנובעת מכך הינה לאפשר לתלמיד להתקדם בהתאם ליכולתו
                          האישית ולממש את הפוטנציאל הטמון בו, זאת באמצעות גיוון דרכי
                          ההוראה, הקניית כלים ומיומנויות שונות שיאפשרו לו להצליח בכל
                          תחומי הידע השונים. כמו כן לפתח יכולת זו עד כי הילד ילמד להיות
                          לומד עצמאי בעל מכוונות עצמאית ללמידה.
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ transformOrigin: "right" }} />
              </div>
            </motion.div>

            {/* Goal 2 */}
            <motion.div
              className="relative group cursor-pointer"
              onClick={() => setGoal2Revealed(!goal2Revealed)}
              initial={{ opacity: 0, y: 30 }}
              animate={goalsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative overflow-hidden" style={{ backgroundColor: goal2Revealed ? "#222" : "#252525" }}>
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(60%)",
                    opacity: goal2Revealed ? 0.08 : 0.05,
                  }}
                  aria-hidden="true"
                />

                <span className="absolute bottom-4 right-5 font-syne text-[5rem] sm:text-[6rem] font-bold leading-none select-none" style={{ color: "rgba(251,251,251,0.04)" }} aria-hidden="true">02</span>

                <div className="relative z-10 p-7 sm:p-10">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="inline-block px-3 py-1 mb-4" style={{ backgroundColor: "rgba(251,251,251,0.04)", border: "1px solid rgba(251,251,251,0.1)" }}>
                        <span className="font-display text-sm sm:text-base" style={{ color: "rgba(251,251,251,0.7)" }}>מטרה שנייה</span>
                      </div>
                      <p className="font-display text-xl sm:text-2xl" style={{ color: "#FBFBFB" }}>
                        נלמדת מהמילה:{" "}
                        <span style={{ color: "rgba(251,251,251,0.5)" }}>&quot;חנוך לנער...&quot;</span>
                      </p>
                    </div>
                    <motion.div
                      className="mt-2 flex-shrink-0 w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300"
                      animate={{ rotate: goal2Revealed ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white/40 text-lg leading-none">+</span>
                    </motion.div>
                  </div>

                  {!goal2Revealed && (
                    <motion.div
                      className="flex items-center gap-3 mt-5 px-5 py-3 border border-white/10 group-hover:border-white/25 transition-colors duration-300 w-fit"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="font-display text-base sm:text-lg" style={{ color: "rgba(251,251,251,0.6)" }}>
                        לחצו לגילוי המשמעות המלאה
                      </span>
                      <motion.span
                        className="text-lg" style={{ color: "rgba(251,251,251,0.4)" }}
                        animate={{ x: [0, -5, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      >
                        ←
                      </motion.span>
                    </motion.div>
                  )}

                  <AnimatePresence>
                    {goal2Revealed && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="w-10 h-[2px] my-6"
                          style={{ transformOrigin: "right", backgroundColor: "rgba(251,251,251,0.15)" }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                        />
                        <motion.p
                          className="text-sm sm:text-base leading-[2]"
                          style={{ color: "rgba(251,251,251,0.6)" }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          משמעות המילה חינוך הינה קביעת עליונות של ערכים מסוימים בליבו של
                          הילד להלכה ומעשה. כלומר להקנות לתלמיד ערכים והרגלים אשר יעצבו
                          את אישיותו, יובילו אותו להיות אזרח טוב האוהב את עמו וארצו
                          ומקפיד לנהל אורח חיים על פי רוח ההלכה והמצוות.
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ transformOrigin: "right", backgroundColor: "rgba(251,251,251,0.15)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CLOSING QUOTE ═══════ */}
      <section className="relative py-20 sm:py-28 px-6 sm:px-10 bg-surface noise-bg overflow-hidden">
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
          <blockquote className="font-display leading-[1.15] tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", color: "#1A1A1A" }}>
            &ldquo;כל ילד הוא עולם ומלואו&rdquo;
          </blockquote>
          <p className="text-base sm:text-lg mb-8" style={{ color: "#555555" }}>
            אנו מאמינים בכל תלמיד ובפוטנציאל הייחודי שלו
          </p>
          <motion.hr className="divider-accent w-12 mx-auto" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} style={{ transformOrigin: "center" }} />
        </motion.div>
      </section>
    </div>
  );
}
