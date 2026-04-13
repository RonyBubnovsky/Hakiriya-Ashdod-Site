"use client";

import { motion } from "framer-motion";

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

export default function Yozamot() {
  return (
    <div className="relative min-h-screen bg-[#F4F4F0] text-[#111111] overflow-x-hidden font-sans" dir="rtl">
      {/* Import specific bold fonts for anti-slop aesthetic */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;900&display=swap');
        .font-brutal { font-family: 'Rubik', sans-serif; }
      `}} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 sm:px-12 flex flex-col items-center justify-center text-center border-b-8 border-black bg-white">
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

           {/* Masonry / Bento Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {initiatives.map((item, idx) => {
                // Different layout spans for bento rigid effect
                let gridClass = "lg:col-span-1 border-8 border-black shadow-[12px_12px_0px_0px_#00E5FF]";
                if (idx === 0) gridClass = "md:col-span-2 lg:col-span-2 border-8 border-black shadow-[12px_12px_0px_0px_#FF3366]";
                if (idx === 4) gridClass = "md:col-span-2 lg:col-span-2 border-8 border-black shadow-[12px_12px_0px_0px_#FFD700]";

                const color = brutalColors[idx % brutalColors.length];

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ delay: (idx % 3) * 0.1 }}
                    className={`relative bg-white group flex flex-col h-full overflow-hidden transform transition-transform hover:-translate-y-2 ${gridClass}`}
                  >
                    {/* Image Block */}
                    <div className="relative h-64 sm:h-72 lg:h-80 w-full border-b-8 border-black overflow-hidden object-cover">
                       <div className={`absolute inset-0 ${color} mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity z-10 duration-500 pointer-events-none`}></div>
                       <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                       <div className="absolute top-4 right-4 bg-black text-white font-brutal font-black text-2xl px-4 py-2 z-20 border-2 border-white">
                         {String(idx + 1).padStart(2, '0')}
                       </div>
                    </div>

                    {/* Content Block */}
                    <div className={`p-8 md:p-10 flex-grow flex flex-col ${color} transition-colors duration-500 text-black`}>
                       {item.subtitle && (
                         <span className="font-brutal font-bold text-sm tracking-widest uppercase bg-white border-2 border-black px-3 py-1 mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] self-start">
                           {item.subtitle}
                         </span>
                       )}
                       
                       <h3 className="font-brutal font-black text-3xl sm:text-4xl mb-6">
                         {item.title}
                       </h3>
                       
                       <div className="w-16 h-2 bg-black mb-6"></div>
                       
                       <p className="font-brutal font-medium text-lg md:text-xl leading-relaxed">
                         {item.description}
                       </p>
                    </div>
                  </motion.div>
                );
              })}
           </div>
        </div>
      </section>

      {/* CLOSING / INNOVATION */}
      <section className="py-32 px-6 bg-[#00E5FF] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] flex justify-center items-center opacity-[0.2] mix-blend-overlay pointer-events-none">
          <span className="font-brutal font-black text-[25vw] leading-none text-white select-none whitespace-nowrap">INNOVATION</span>
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
