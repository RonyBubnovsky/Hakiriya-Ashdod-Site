"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const brutalColors = ["bg-[#FF3366]", "bg-[#00E5FF]", "bg-[#FFD700]", "bg-[#CCFF00]"];

function GoalCard({ goal, index }: { goal: typeof goals[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const isEven = index % 2 === 0;
  const color = brutalColors[index % brutalColors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} border-b-8 border-black group`}
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 relative h-64 md:h-auto border-b-8 md:border-b-0 md:border-x-8 border-black overflow-hidden object-cover">
         <div className={`absolute inset-0 ${color} mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none`}></div>
         <img src={goal.image} alt={"יעד " + goal.number} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
         
         <div className="absolute top-4 left-4 z-20 bg-black text-white font-brutal font-black text-5xl px-4 py-2 border-4 border-white shadow-[4px_4px_0px_0px_#fff]">
           0{goal.number}
         </div>
      </div>

      {/* Content Side */}
      <div className={`w-full md:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center ${color} transition-colors duration-500`}>
         <div className="bg-white border-4 border-black text-black font-brutal font-black px-4 py-2 text-xl inline-block w-fit mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">
           יעד מרכזי
         </div>
         
         <p className="font-brutal font-black text-2xl sm:text-3xl md:text-4xl leading-snug text-black">
           {goal.title}
         </p>
         
         <div className="mt-8 w-24 h-4 bg-black border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"></div>
      </div>
    </motion.div>
  );
}

export default function Yeadim() {
  return (
    <div className="relative min-h-screen bg-[#F4F4F0] text-[#111111] overflow-x-hidden font-sans" dir="rtl">
      {/* Import specific bold fonts for anti-slop aesthetic */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;900&display=swap');
        .font-brutal { font-family: 'Rubik', sans-serif; }
      `}} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 sm:px-12 flex flex-col items-center justify-center text-center border-b-8 border-black bg-grid">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
            className="mb-8 w-24 h-24 md:w-32 md:h-32"
        >
           <img src="/school-logo.jpg" alt="לוגו בית חינוך הקריה" className="w-full h-full object-contain mix-blend-multiply" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-brutal font-bold tracking-[0.2em] uppercase text-[#FF3366] mb-4">
          Annual Goals - תשפ״ו
        </motion.p>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-brutal font-black text-6xl sm:text-7xl lg:text-[8rem] leading-[0.85] tracking-tight uppercase max-w-5xl text-black"
        >
          יעדי בית הספר
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="font-brutal text-2xl md:text-4xl mt-8 leading-relaxed font-bold bg-[#CCFF00] px-4 py-2 border-4 border-black inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black"
        >
          בית חינוך תורני מדעי טכנולוגי הקריה
        </motion.p>
      </section>

      {/* GOALS GRID SECTION */}
      <section className="relative bg-[#F4F4F0]">
        <div className="py-20 px-6 sm:px-12 text-center border-b-8 border-black">
           <span className="font-brutal font-black text-2xl tracking-widest text-[#FF3366] bg-black px-4 py-1 border-4 border-black inline-block mb-4 shadow-[4px_4px_0px_0px_#FF3366] uppercase">
             CORE GOALS
           </span>
           <h2 className="font-brutal font-black text-4xl sm:text-6xl text-black leading-tight max-w-4xl mx-auto">
             שישה יעדים מרכזיים שמנחים<br/>את הדרך שלנו השנה
           </h2>
        </div>

        {/* Goals list — Brutal Zigzag layout */}
        <div className="flex flex-col border-b-8 border-black">
          {goals.map((goal, index) => (
            <GoalCard key={goal.number} goal={goal} index={index} />
          ))}
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="py-32 px-6 bg-[#111] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] flex justify-center items-center opacity-[0.05] pointer-events-none">
          <span className="font-brutal font-black text-[25vw] leading-none text-white select-none whitespace-nowrap">ASPIRE</span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto bg-[#FFD700] border-8 border-black p-12 md:p-20 shadow-[16px_16px_0px_0px_#fff]"
        >
           <span className="font-brutal font-black text-xl tracking-widest uppercase text-white bg-black px-4 py-2 border-2 border-white mb-8 inline-block shadow-[4px_4px_0px_0px_#00E5FF]">
             ASPIRE HIGHER
           </span>
           
           <blockquote className="font-brutal font-black text-6xl sm:text-8xl leading-tight mb-8 text-black">
             "שואפים גבוה<br/>מגיעים רחוק"
           </blockquote>
           
           <div className="w-full h-4 bg-black mb-8 border-2 border-white"></div>
           
           <p className="font-brutal font-bold text-2xl sm:text-4xl text-black tracking-wide">
             יחד <span className="text-white bg-black px-2 border-2 border-black inline-block shadow-[2px_2px_0px_0px_#FF3366]">נממש</span> את כל היעדים שלנו
           </p>
        </motion.div>
      </section>
    </div>
  );
}
