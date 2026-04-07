"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import MaskReveal from "../components/MaskReveal";

/* Each initiative gets a unique geometric shape */
const initiatives = [
  {
    title: "מודל הפל״א",
    subtitle: null,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=500&fit=crop&q=80",
    description: "מודל חינוכי ייחודי המשלב פדגוגיה, למידה ואקטיביות לקידום כל תלמיד.",
    shape: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)", // Hexagon
  },
  {
    title: "בוקר של חלום",
    subtitle: "Safe School",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=500&fit=crop&q=80",
    description: "תוכנית ליצירת סביבה בטוחה ומוגנת לכל תלמיד מרגע הכניסה לבית הספר.",
    shape: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)", // Octagon
  },
  {
    title: "סייבר",
    subtitle: "ג-ד / ה-ו",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=500&fit=crop&q=80",
    description: "תוכנית להקניית מיומנויות דיגיטליות ואבטחת מידע לתלמידים בשכבות ג-ו.",
    shape: "polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)", // Shield
  },
  {
    title: "נושאים ייחודיים",
    subtitle: "השקפה",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=500&fit=crop&q=80",
    description: "לימוד ודיון בנושאים ערכיים והשקפתיים המעצבים את זהות התלמיד.",
    shape: "polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)", // Chamfered
  },
  {
    title: "מנטורים צעירים",
    subtitle: null,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=500&fit=crop&q=80",
    description: "תלמידים בוגרים מלווים ומנחים תלמידים צעירים יותר בדרכם.",
    shape: "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)", // Parallelogram
  },
  {
    title: "יזמים צעירים",
    subtitle: "חקר ויזמות",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=500&fit=crop&q=80",
    description: "חקר, פיתוח ויזמות — התלמידים יוצרים פתרונות אמיתיים לאתגרים אמיתיים.",
    shape: "polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)", // Pentagon
  },
  {
    title: "מגמות לבחירה",
    subtitle: null,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=500&fit=crop&q=80",
    description: "מגוון מגמות העשרה לבחירת התלמיד לפי תחומי עניין אישיים.",
    shape: "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%)", // Notched
  },
];

export default function Yozamot() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const detailRef = useRef<HTMLDivElement>(null);

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
            backgroundImage: "url(https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&h=600&fit=crop&q=80)",
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

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <MaskReveal delay={0.1} className="mb-4">
            <span className="font-syne text-[10px] sm:text-xs tracking-[0.3em] uppercase" style={{ color: "#E8503A" }}>
              Programs & Initiatives
            </span>
          </MaskReveal>
          <MaskReveal delay={0.25}>
            <h1 className="font-display font-normal leading-[0.95] tracking-tight mb-4" style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)", color: "#FBFBFB" }}>
              יוזמות ותוכניות ייחודיות
            </h1>
          </MaskReveal>
          <MaskReveal delay={0.4} className="mb-8">
            <p className="text-lg sm:text-xl font-light" style={{ color: "rgba(251,251,251,0.5)" }}>
              חדשנות ויצירתיות בחינוך
            </p>
          </MaskReveal>
          <motion.hr className="divider-accent w-16 mx-auto" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.6 }} style={{ transformOrigin: "center" }} />
        </div>
      </section>

      {/* ═══════ GEOMETRIC SHAPES SHOWCASE ═══════ */}
      <section className="relative py-20 sm:py-28 px-6 sm:px-10 overflow-hidden" style={{ backgroundColor: "#111" }}>
        {/* Line decorations */}
        <div className="absolute top-16 right-[8%] w-[1px] h-28 hidden lg:block" style={{ backgroundColor: "rgba(232,80,58,0.08)" }} aria-hidden="true" />
        <div className="absolute bottom-20 left-[10%] w-20 h-[1px] hidden lg:block" style={{ backgroundColor: "rgba(232,80,58,0.08)" }} aria-hidden="true" />
        <div className="absolute top-[40%] left-[4%] w-4 h-4 rotate-45 hidden lg:block" style={{ border: "1px solid rgba(232,80,58,0.1)" }} aria-hidden="true" />

        <div ref={gridRef} className="mx-auto max-w-6xl relative z-10">
          <div className="mb-12 sm:mb-16 text-center">
            <MaskReveal delay={0.1}>
              <span className="font-syne text-[10px] sm:text-xs tracking-[0.2em] uppercase block mb-4" style={{ color: "#E8503A" }}>
                Explore Our Programs
              </span>
            </MaskReveal>
            <MaskReveal delay={0.2}>
              <h2 className="font-display leading-[1] tracking-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#FBFBFB" }}>
                בחרו יוזמה לגילוי
              </h2>
            </MaskReveal>
          </div>

          {/* Geometric shapes grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 justify-items-center">
            {initiatives.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative cursor-pointer group"
                onClick={() => {
                  const next = activeIndex === index ? null : index;
                  setActiveIndex(next);
                  if (next !== null) {
                    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
                  }
                }}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.06, transition: { duration: 0.25 } }}
              >
                {/* The geometric shape */}
                <div
                  className="relative w-[150px] h-[170px] sm:w-[180px] sm:h-[200px] lg:w-[210px] lg:h-[230px] overflow-hidden transition-all duration-500"
                  style={{ clipPath: item.shape }}
                >
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      filter: activeIndex === index ? "grayscale(0%) brightness(0.55)" : "grayscale(45%) brightness(0.4)",
                    }}
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: activeIndex === index
                        ? "linear-gradient(to top, rgba(232,80,58,0.4) 0%, rgba(26,26,26,0.3) 100%)"
                        : "linear-gradient(to top, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.2) 100%)",
                    }}
                  />

                  {/* Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                    <p className="font-display text-base sm:text-lg lg:text-xl leading-tight mb-1" style={{ color: "#FBFBFB" }}>
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <p className="font-syne text-[9px] sm:text-[10px] tracking-wider uppercase" style={{ color: "rgba(232,80,58,0.9)" }}>
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Active ring glow */}
                  {activeIndex === index && (
                    <motion.div
                      className="absolute inset-0"
                      style={{ boxShadow: "inset 0 0 30px rgba(232,80,58,0.25)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Label below shape */}
                <div className="mt-3 text-center">
                  <motion.div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 transition-all duration-300"
                    style={{
                      backgroundColor: activeIndex === index ? "rgba(232,80,58,0.15)" : "rgba(251,251,251,0.04)",
                      border: `1px solid ${activeIndex === index ? "rgba(232,80,58,0.35)" : "rgba(251,251,251,0.08)"}`,
                    }}
                  >
                    <span
                      className="font-display text-xs sm:text-sm"
                      style={{ color: activeIndex === index ? "#E8503A" : "rgba(251,251,251,0.5)" }}
                    >
                      {activeIndex === index ? "סגור" : "גלו עוד"}
                    </span>
                    <motion.span
                      className="text-sm"
                      style={{ color: activeIndex === index ? "#E8503A" : "rgba(251,251,251,0.3)" }}
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      +
                    </motion.span>
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* ── Detail panel (opens below the grid) ── */}
          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div
                ref={detailRef}
                key={activeIndex}
                className="mt-10 sm:mt-14 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-0 overflow-hidden"
                  style={{ backgroundColor: "#1A1A1A" }}
                >
                  {/* Image side */}
                  <motion.div
                    className="relative h-[200px] sm:h-[280px]"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                  >
                    <img
                      src={initiatives[activeIndex].image}
                      alt={initiatives[activeIndex].title}
                      className="w-full h-full object-cover"
                      style={{ filter: "grayscale(20%) contrast(1.05)" }}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(26,26,26,0.6) 0%, transparent 50%)" }} />
                  </motion.div>

                  {/* Text side */}
                  <div className="p-8 sm:p-10 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <span className="font-syne text-[10px] tracking-[0.2em] uppercase block mb-3" style={{ color: "#E8503A" }}>
                        {String((activeIndex ?? 0) + 1).padStart(2, "0")} / {String(initiatives.length).padStart(2, "0")}
                      </span>

                      <h3 className="font-display text-2xl sm:text-3xl mb-2" style={{ color: "#FBFBFB" }}>
                        {initiatives[activeIndex].title}
                      </h3>

                      {initiatives[activeIndex].subtitle && (
                        <p className="font-syne text-xs tracking-wider uppercase mb-4" style={{ color: "rgba(232,80,58,0.7)" }}>
                          {initiatives[activeIndex].subtitle}
                        </p>
                      )}

                      <motion.div
                        className="w-10 h-[2px] bg-accent mb-5"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.35, duration: 0.3 }}
                        style={{ transformOrigin: "right" }}
                      />

                      <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(251,251,251,0.6)" }}>
                        {initiatives[activeIndex].description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════ CLOSING QUOTE ═══════ */}
      <section className="relative py-20 sm:py-28 px-6 sm:px-10 bg-surface noise-bg overflow-hidden">
        <div className="absolute top-0 md:-top-4 left-1/2 -translate-x-1/2 font-display select-none pointer-events-none whitespace-nowrap hidden sm:block" style={{ fontSize: "clamp(5rem, 14vw, 12rem)", color: "rgba(26,26,26,0.06)", lineHeight: 1 }} aria-hidden="true">
          חדשנות
        </div>
        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="font-syne text-[10px] sm:text-xs tracking-[0.25em] uppercase block mb-6" style={{ color: "#E8503A" }}>
            Innovation
          </span>
          <blockquote className="font-display leading-[1.15] tracking-tight mb-8" style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", color: "#1A1A1A" }}>
            &ldquo;מלמדים חדשנות
            <br />
            מטפחים מנהיגות&rdquo;
          </blockquote>
          <motion.hr className="divider-accent w-12 mx-auto" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} style={{ transformOrigin: "center" }} />
        </motion.div>
      </section>
    </div>
  );
}
