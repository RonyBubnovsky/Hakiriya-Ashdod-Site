"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const initiatives = [
  {
    title: "מודל הפל״א",
    subtitle: null,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=500&fit=crop&q=80",
    description: "מודל חינוכי ייחודי המשלב פדגוגיה, למידה ואקטיביות לקידום כל תלמיד.",
  },
  {
    title: "בוקר של חלום",
    subtitle: "Safe School",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=500&fit=crop&q=80",
    description: "תוכנית ליצירת סביבה בטוחה ומוגנת לכל תלמיד מרגע הכניסה לבית הספר.",
  },
  {
    title: "סייבר",
    subtitle: "ג-ד / ה-ו",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=500&fit=crop&q=80",
    description: "תוכנית להקניית מיומנויות דיגיטליות ואבטחת מידע לתלמידים בשכבות ג-ו.",
  },
  {
    title: "נושאים ייחודיים",
    subtitle: "השקפה",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=500&fit=crop&q=80",
    description: "לימוד ודיון בנושאים ערכיים והשקפתיים המעצבים את זהות התלמיד.",
  },
  {
    title: "מנטורים צעירים",
    subtitle: null,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=500&fit=crop&q=80",
    description: "תלמידים בוגרים מלווים ומנחים תלמידים צעירים יותר בדרכם.",
  },
  {
    title: "יזמים צעירים",
    subtitle: "חקר ויזמות",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=500&fit=crop&q=80",
    description: "חקר, פיתוח ויזמות - התלמידים יוצרים פתרונות אמיתיים לאתגרים אמיתיים.",
  },
  {
    title: "מגמות לבחירה",
    subtitle: null,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=500&fit=crop&q=80",
    description: "מגוון מגמות העשרה לבחירת התלמיד לפי תחומי עניין אישיים.",
  },
];

const brutalColors = ["bg-[#FF3366]", "bg-[#00E5FF]", "bg-[#FFD700]", "bg-[#CCFF00]"];
const brutalShadows = ["shadow-[16px_16px_0px_0px_#FF3366]", "shadow-[16px_16px_0px_0px_#00E5FF]", "shadow-[16px_16px_0px_0px_#FFD700]", "shadow-[16px_16px_0px_0px_#CCFF00]"];

export default function Yozamot() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % initiatives.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? initiatives.length - 1 : prev - 1));

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
          Programs & Initiatives
        </motion.p>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-brutal font-black text-6xl sm:text-7xl lg:text-[8rem] leading-[0.9] tracking-tight max-w-5xl text-black"
        >
          יוזמות ותוכניות <br/> <span className="bg-black text-white px-4 leading-[1.2] inline-block shadow-[8px_8px_0px_0px_#00E5FF]">ייחודיות</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="font-brutal text-2xl md:text-3xl mt-12 font-bold text-black"
        >
          חדשנות ויצירתיות בחינוך
        </motion.p>
      </section>

      {/* BENTO GRID SECTION */}
      <section className="relative bg-[#111] py-24 px-6 sm:px-12 border-b-8 border-black">
        <div className="max-w-[1600px] mx-auto">
           <div className="mb-20 text-center text-white">
             <span className="font-brutal font-black text-xl tracking-widest text-black bg-[#CCFF00] px-4 py-1 border-4 border-[#CCFF00] inline-block mb-6 uppercase">
               DISCOVER
             </span>
             <h2 className="font-brutal font-black text-5xl md:text-7xl">
               גלו את היוזמות שלנו
             </h2>
           </div>

           {/* Brutalist Carousel */}
           <div className="relative w-full max-w-6xl mx-auto mt-12 overflow-hidden px-4 py-4">
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentIndex}
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -50 }}
                 transition={{ duration: 0.3 }}
                 drag="x"
                 dragConstraints={{ left: 0, right: 0 }}
                 dragElastic={0.2}
                 onDragEnd={(e, { offset }) => {
                   if (offset.x > 50) nextSlide();
                   else if (offset.x < -50) prevSlide();
                 }}
                 className={`relative bg-white flex flex-col md:flex-row min-h-[500px] border-8 border-black cursor-grab active:cursor-grabbing ${brutalShadows[currentIndex % brutalShadows.length]}`}
               >
                 {/* Image Block */}
                 <div className="relative w-full md:w-1/2 md:min-h-[400px] md:border-l-8 border-black overflow-hidden group pointer-events-none md:pointer-events-auto">
                   <div className={`absolute inset-0 ${brutalColors[currentIndex % brutalColors.length]} mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity z-10 duration-500 pointer-events-none`}></div>
                   <img src={initiatives[currentIndex].image} alt={initiatives[currentIndex].title} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute top-6 right-6 bg-black text-white font-brutal font-black text-4xl px-4 py-2 z-20 border-4 border-white">
                     {String(currentIndex + 1).padStart(2, '0')}
                   </div>
                 </div>

                 {/* Content Block */}
                 <div className={`w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center ${brutalColors[currentIndex % brutalColors.length]} text-black`}>
                    {initiatives[currentIndex].subtitle && (
                      <span className="font-brutal font-black text-lg tracking-widest uppercase bg-white border-4 border-black px-4 py-2 mb-8 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] self-start">
                        {initiatives[currentIndex].subtitle}
                      </span>
                    )}
                    
                    <h3 className="font-brutal font-black text-5xl sm:text-6xl mb-8 leading-[1.1]">
                      {initiatives[currentIndex].title}
                    </h3>
                    
                    <div className="w-24 h-3 bg-black mb-10 border-2 border-white shadow-[2px_2px_0px_0px_white]"></div>
                    
                    <p className="font-brutal font-bold text-2xl leading-[1.6]">
                      {initiatives[currentIndex].description}
                    </p>
                 </div>
               </motion.div>
             </AnimatePresence>

             {/* Carousel Controls */}
             <div className="flex justify-center items-center gap-4 sm:gap-6 mt-16 pb-8">
               <button onClick={prevSlide} className="w-16 h-16 sm:w-24 sm:h-24 bg-black text-white border-4 sm:border-8 border-black hover:bg-white hover:text-black font-brutal font-black text-3xl sm:text-5xl flex justify-center items-center pb-1 sm:pb-2 shadow-[4px_4px_0px_0px_#00E5FF] sm:shadow-[8px_8px_0px_0px_#00E5FF] active:translate-y-2 active:shadow-none transition-all shrink-0">
                 &rarr;
               </button>
               <div className="bg-white px-4 sm:px-8 py-2 sm:py-3 border-4 border-black font-brutal font-black text-2xl sm:text-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black min-w-[100px] sm:min-w-[120px] text-center whitespace-nowrap flex items-center justify-center shrink-0">
                 {currentIndex + 1} / {initiatives.length}
               </div>
               <button onClick={nextSlide} className="w-16 h-16 sm:w-24 sm:h-24 bg-black text-white border-4 sm:border-8 border-black hover:bg-white hover:text-black font-brutal font-black text-3xl sm:text-5xl flex justify-center items-center pb-1 sm:pb-2 shadow-[4px_4px_0px_0px_#FF3366] sm:shadow-[8px_8px_0px_0px_#FF3366] active:translate-y-2 active:shadow-none transition-all shrink-0">
                 &larr;
               </button>
             </div>
           </div>
        </div>
      </section>

      {/* CLOSING / INNOVATION */}
      <section className="py-32 px-6 bg-[#00E5FF] text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.2] mix-blend-overlay pointer-events-none">
          <span className="font-brutal font-black text-[12vw] sm:text-[14vw] lg:text-[15vw] leading-none text-white select-none whitespace-nowrap w-full text-center">INNOVATION</span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto bg-black border-8 border-white p-12 md:p-20 shadow-[16px_16px_0px_0px_#FF3366]"
        >
           <span className="font-brutal font-black text-xl tracking-widest uppercase text-black bg-[#CCFF00] px-4 py-2 border-2 border-black mb-8 inline-block shadow-[4px_4px_0px_0px_#FFD700]">
             INNOVATION
           </span>
           
           <blockquote className="font-brutal font-black text-5xl sm:text-7xl leading-tight mb-8 text-white">
             "מלמדים חדשנות<br/>מטפחים מנהיגות"
           </blockquote>
        </motion.div>
      </section>
    </div>
  );
}
