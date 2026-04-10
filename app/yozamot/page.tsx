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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % initiatives.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + initiatives.length) % initiatives.length);

  const getOffset = (index: number) => {
    const n = initiatives.length;
    let offset = index - activeIndex;
    if (offset > n / 2) offset -= n;
    else if (offset < -n / 2) offset += n;
    return offset;
  };

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

      {/* ═══════ HIGH-END CAROUSEL SHOWCASE ═══════ */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-10 overflow-hidden min-h-[90vh] flex flex-col justify-center" style={{ backgroundColor: "#111" }}>
        
        {/* Ambient Blur Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `url(${initiatives[activeIndex].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(40px) grayscale(60%)",
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#111] via-transparent to-[#111] pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/* Header section with Navigation */}
          <div className="mb-12 sm:mb-16 flex flex-col items-center justify-center gap-6 sm:gap-8 border-b border-white/5 pb-8" ref={gridRef}>
            <div className="text-center w-full flex flex-col items-center justify-center">
              <MaskReveal delay={0.1}>
                <span className="text-xs sm:text-sm tracking-[0.15em] block mb-3 text-center" style={{ color: "#E8503A" }}>
                  תוכניות ייחודיות
                </span>
              </MaskReveal>
              <MaskReveal delay={0.2}>
                <h2 className="font-display leading-[1] tracking-tight text-center" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", color: "#FBFBFB" }}>
                  גלו את היוזמות שלנו
                </h2>
              </MaskReveal>
            </div>
            
            <div className="flex gap-4 mx-auto">
              <button 
                onClick={handlePrev} 
                className="px-5 py-2.5 flex items-center justify-center border border-white/20 text-white/50 hover:text-white hover:border-[#E8503A] transition-all duration-300 focus:outline-none hover:bg-[#E8503A]/10 group"
                aria-label="Previous Initiative"
              >
                <span className="text-xl leading-none ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="text-sm font-medium tracking-wide">אחורה</span>
              </button>
              <button 
                onClick={handleNext} 
                className="px-5 py-2.5 flex items-center justify-center border border-white/20 text-white/50 hover:text-white hover:border-[#E8503A] transition-all duration-300 focus:outline-none hover:bg-[#E8503A]/10 group"
                aria-label="Next Initiative"
              >
                <span className="text-sm font-medium tracking-wide">קדימה</span>
                <span className="text-xl leading-none mr-2 sm:mr-3 transition-transform duration-300 group-hover:-translate-x-1">←</span>
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <motion.div 
            className="relative w-full h-[600px] sm:h-[650px] flex items-center justify-center touch-pan-y cursor-grab active:cursor-grabbing" 
            style={{ perspective: "1500px" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, { offset }) => {
              if (offset.x > 50) handleNext();
              else if (offset.x < -50) handlePrev();
            }}
          >
             {initiatives.map((item, index) => {
               const offset = getOffset(index);
               if (Math.abs(offset) > 2) return null;

               const isActive = offset === 0;

               return (
                 <motion.div
                   key={item.title}
                   className="absolute top-0 flex w-[95%] sm:w-[85%] max-w-5xl h-[550px] sm:h-[500px] cursor-pointer"
                   onClick={() => !isActive && setActiveIndex(index)}
                   initial={false}
                   animate={{
                     x: `${offset * -40}%`, 
                     z: -Math.abs(offset) * 150,
                     rotateY: offset * 15, 
                     opacity: Math.abs(offset) >= 2 ? 0 : 1 - Math.abs(offset) * 0.4,
                     scale: isActive ? 1 : 0.85,
                   }}
                   transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                   style={{
                     zIndex: 10 - Math.abs(offset),
                     transformStyle: "preserve-3d",
                   }}
                 >
                   <div 
                     className="w-full h-full relative group transition-all duration-700" 
                     style={{ filter: isActive ? "none" : "grayscale(70%) brightness(0.4)" }}
                   >
                     <div className="w-full h-full flex flex-col sm:block relative">
                        {/* Image Unit */}
                        <div className="w-full sm:w-[65%] h-[250px] sm:h-[500px] sm:absolute sm:left-0 sm:top-0 overflow-hidden relative shadow-2xl z-10 bg-black group-hover:shadow-[0_0_40px_rgba(232,80,58,0.15)] transition-shadow duration-500">
                          <div className="absolute inset-0 bg-[#E8503A]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105 pointer-events-none" />
                          <div className="absolute inset-0 border border-white/10 pointer-events-none z-20" />
                        </div>

                        {/* Content Strip */}
                        <div className="w-[92%] sm:w-[45%] max-w-xl mx-auto sm:mx-0 -mt-16 sm:mt-0 sm:absolute sm:right-[3%] lg:right-[6%] sm:top-1/2 sm:-translate-y-1/2 relative z-20 bg-[#1A1A1A] p-8 sm:p-12 border-t-[3px] border-t-[#E8503A] border border-white/5 shadow-[-20px_30px_60px_rgba(0,0,0,0.8)] flex flex-col noise-bg">
                           {/* Decorative corner */}
                           <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 opacity-50" />
                           
                           <span className="text-xs sm:text-sm font-medium tracking-wide block mb-3 sm:mb-4 text-[#E8503A]">
                             יוזמה // {String(index + 1).padStart(2, "0")}
                           </span>
                           <h3 className="font-display text-3xl sm:text-5xl mb-4 text-[#FBFBFB] leading-[1.05]">
                             {item.title}
                           </h3>
                           
                           {item.subtitle && (
                             <div className="mb-5 sm:mb-6">
                               <span className="text-xs sm:text-sm tracking-wide text-white/80 border border-white/10 px-3 py-1 bg-white/[0.02]">
                                 {item.subtitle}
                               </span>
                             </div>
                           )}
                           
                           <motion.div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-[#E8503A] to-transparent mb-5 sm:mb-8" />
                           
                           <p className="text-sm sm:text-base leading-relaxed text-[#FBFBFB]/70 sm:mb-2 font-light">
                             {item.description}
                           </p>
                        </div>
                     </div>
                   </div>
                 </motion.div>
               );
             })}
          </motion.div>

          {/* Progress Indicators */}
          <div className="mt-16 sm:mt-20 max-w-xs sm:max-w-md mx-auto flex items-center justify-center gap-2 sm:gap-3 px-4">
            {initiatives.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="relative flex-1 h-[2px] overflow-hidden group focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div className="absolute inset-0 bg-white/20 transition-colors group-hover:bg-white/40" />
                {activeIndex === idx && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-0 bg-[#E8503A]"
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                )}
              </button>
            ))}
          </div>
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
