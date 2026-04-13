"use client";

import { motion } from "framer-motion";

/* ───── Data (content preserved exactly) ───── */
const cards = [
  { lines: ["מפגשי עבודה", "שגרת עבודה"], image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80" },
  { lines: ["צוות מצוי", "והתערבות"], image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop&q=80" },
  { lines: ["מעקב ובקרה", "רציפים"], image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80" },
  { lines: ["תצפיות", "ומתן משוב"], image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop&q=80" },
  { lines: ["סדנאות הכוונה והובלה", "מנהלת בעלי תפקידים"], image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&q=80" },
  { lines: ["העצמת צוות מוביל", "רכזת מדעים", "חקר ויזמות", "רכזות שכבה"], image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop&q=80" },
  { lines: ["רפלקציה מעצבת", "ומסכמת"], image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop&q=80" },
  { lines: ["כיתת מנהלת"], image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&q=80" },
];

const hierarchySteps = [
  { label: "מנהלת" },
  { label: "צוות מוביל" },
  { label: "תפקיד לכל מורה" },
];

const colors = ["bg-[#FF3366]", "bg-[#00E5FF]", "bg-[#FFD700]", "bg-[#CCFF00]"];

export default function MivneIrguni() {
  return (
    <div className="relative min-h-screen bg-[#F4F4F0] text-[#111111] overflow-x-hidden font-sans" dir="rtl">
      {/* Import specific bold fonts for anti-slop aesthetic */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;900&display=swap');
        .font-brutal { font-family: 'Rubik', sans-serif; }
      `}} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 sm:px-12 flex flex-col items-center justify-center text-center">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
            className="mb-8 w-24 h-24 md:w-32 md:h-32"
        >
           <img src="/school-logo.jpg" alt="לוגו בית חינוך הקריה" className="w-full h-full object-contain mix-blend-multiply" />
        </motion.div>
        
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-brutal font-bold tracking-[0.2em] uppercase text-[#FF3366] mb-4">
          Organizational Structure
        </motion.p>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-brutal font-black text-6xl sm:text-7xl lg:text-[8rem] leading-[0.85] tracking-tight uppercase"
        >
          מבנה ארגוני
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="font-brutal font-light text-xl md:text-3xl max-w-2xl mt-8 leading-relaxed"
        >
          הצוות שמוביל את הדרך
        </motion.p>
      </section>

      {/* Hierarchy Section */}
      <section className="py-24 px-6 bg-[#111] text-white relative border-y-8 border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 relative z-10">
          {hierarchySteps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-12 md:gap-4 flex-1 w-full relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className={`w-full md:w-full min-h-[160px] flex items-center justify-center border-4 border-black ${colors[idx % colors.length]} text-black font-brutal font-black text-4xl sm:text-5xl text-center p-6 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.9)] transform hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] transition-all`}
              >
                {step.label}
              </motion.div>
              
              {/* Connector line (arrow) */}
              {idx < hierarchySteps.length - 1 && (
                <div className="hidden md:flex text-6xl text-white/50 font-brutal items-center justify-center w-16">
                  ←
                </div>
              )}
              {idx < hierarchySteps.length - 1 && (
                <div className="flex md:hidden text-6xl text-white/50 font-brutal items-center justify-center h-16">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-[#F4F4F0]">
        <div className="max-w-[1600px] mx-auto">
           <div className="mb-20 text-right">
             <p className="font-brutal font-bold tracking-[0.1em] text-[#FF3366] uppercase mb-4">Areas of Responsibility</p>
             <h2 className="font-brutal font-black text-6xl md:text-8xl mb-6">תחומי האחריות</h2>
             <p className="font-brutal font-light text-2xl md:text-4xl text-black/60">כל אחד תורם מהמקום שלו</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
             {cards.map((card, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-5%" }}
                 transition={{ delay: (idx % 4) * 0.1 }}
                 className="relative group bg-white border-4 border-black flex flex-col h-full"
               >
                 <div className="h-64 sm:h-72 w-full relative overflow-hidden border-b-4 border-black">
                   <div className={`absolute inset-0 ${colors[idx % colors.length]} mix-blend-color opacity-80 group-hover:opacity-0 transition-opacity duration-500 z-10`} />
                   <img src={card.image} alt={card.lines[0]} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                   <div className="absolute top-4 right-4 bg-black text-white font-mono font-bold text-2xl px-4 py-2 z-20">
                     0{idx + 1}
                   </div>
                 </div>
                 <div className={`p-6 md:p-8 flex-grow flex flex-col justify-center ${colors[idx % colors.length]} transition-colors duration-300`}>
                   {card.lines.map((line, ldx) => (
                     <p key={ldx} className={`font-brutal ${ldx === 0 ? 'font-black text-2xl sm:text-3xl uppercase mb-3' : 'font-medium text-xl leading-snug text-black/80'}`}>
                       {line}
                     </p>
                   ))}
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-40 px-6 text-center border-t-8 border-black bg-[#FF3366] overflow-hidden relative">
        {/* Giant background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]">
           <span className="font-brutal font-black text-[20vw] whitespace-nowrap text-white">
             TOGETHER
           </span>
        </div>
        
        <motion.div
           initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
           whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative z-10 max-w-5xl mx-auto"
        >
          <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center font-serif text-6xl italic mx-auto mb-10 shadow-[8px_8px_0px_0px_#fff]">"</div>
          <blockquote className="font-brutal font-black text-6xl sm:text-8xl md:text-9xl leading-[0.9] text-black">
            ביחד אנחנו יוצרים<br/>סביבה חינוכית <span className="text-white relative inline-block"><span className="relative z-10">מצוינת</span><span className="absolute bottom-2 right-0 w-full h-4 bg-black z-0 -rotate-2"></span></span>
          </blockquote>
        </motion.div>
      </section>
    </div>
  );
}
