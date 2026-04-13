"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function TfisaHinukhit() {
  const [proverbRevealed, setProverbRevealed] = useState(false);
  const [goal1Revealed, setGoal1Revealed] = useState(false);
  const [goal2Revealed, setGoal2Revealed] = useState(false);
  
  const goalsRef = useRef<HTMLDivElement>(null);
  const goalsInView = useInView(goalsRef, { once: true, margin: "-10%" });

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
          Educational Philosophy
        </motion.p>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-brutal font-black text-6xl sm:text-7xl lg:text-[8rem] leading-[0.85] tracking-tight uppercase max-w-5xl"
        >
          מצוינות<br />עם נשמה
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="font-brutal text-2xl md:text-4xl mt-8 leading-relaxed font-bold bg-[#FFD700] px-4 py-2 border-4 border-black inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          בית חינוך תורני מדעי טכנולוגי הקריה
        </motion.p>
      </section>

      {/* INTERACTIVE PROVERB REVEAL */}
      <section className="relative py-32 px-6 sm:px-12 bg-[#00E5FF] border-b-8 border-black">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center overflow-hidden">
          <span className="font-brutal font-black text-[25vw] whitespace-nowrap text-black">DISCOVER</span>
        </div>
        
        <div className="mx-auto max-w-4xl relative z-10">
          <AnimatePresence mode="wait">
            {!proverbRevealed ? (
              <motion.div
                key="invite"
                onClick={() => setProverbRevealed(true)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4 }}
                className="cursor-pointer group block"
              >
                <div className="bg-white border-8 border-black p-12 md:p-20 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform transition-transform group-hover:-translate-y-2 group-hover:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-brutal font-black text-2xl tracking-widest uppercase text-black bg-[#CCFF00] px-4 py-1 border-4 border-black mb-8 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    CLICK TO REVEAL
                  </span>
                  
                  <h2 className="font-brutal font-black text-4xl sm:text-6xl mb-6 text-black">
                    גלו את התפיסה החינוכית<br/>של בית הספר שלנו
                  </h2>
                  
                  <p className="font-brutal text-xl md:text-2xl font-medium text-black/60 mb-10">
                    לחצו לגילוי הפסוק המנחה ומשמעותו
                  </p>

                  <div className="w-16 h-16 mx-auto bg-[#FF3366] text-white border-4 border-black flex items-center justify-center rounded-full text-4xl group-hover:scale-110 transition-transform">
                    ↓
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-black text-white border-8 border-white p-12 md:p-20 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
              >
                <span className="font-brutal font-black text-xl tracking-widest uppercase text-black bg-[#FFD700] px-3 py-1 mb-8 inline-block">
                  GUIDING VERSE
                </span>

                <blockquote className="font-brutal font-black text-5xl sm:text-7xl leading-[1.1] mb-10 text-[#00E5FF]">
                  "חנוך לנער על פי דרכו<br/>גם כי יזקין לא יסור ממנה"
                </blockquote>

                <div className="w-24 h-4 bg-[#FF3366] mx-auto mb-10 border-2 border-white" />

                <p className="font-brutal text-xl md:text-3xl leading-[1.7] max-w-3xl mx-auto font-medium">
                  התפיסה החינוכית הבית ספרית נובעת מהפסוק הנ"ל, אשר מבטא שתיים ממטרות העיקריות של בית ספרינו. מתוך מטרות העל הללו נגזרות מטרות נוספות אשר יפורטו בהמשך.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CORE GOALS */}
      <section ref={goalsRef} className="relative py-32 px-6 sm:px-12 bg-[#111]">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="mb-20 text-center">
             <span className="font-brutal font-black text-2xl tracking-widest text-[#CCFF00] uppercase block mb-4">CORE GOALS</span>
             <h2 className="font-brutal font-black text-6xl sm:text-8xl text-white">מטרות העל</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* GOAL 1 */}
            <motion.div
              className="relative cursor-pointer group h-full flex flex-col"
              onClick={() => setGoal1Revealed(!goal1Revealed)}
              initial={{ opacity: 0, y: 50 }}
              animate={goalsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-[#FF3366] border-8 border-black text-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-y-2 group-hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] transition-all flex flex-col h-full overflow-hidden relative">
                
                <span className="absolute top-4 left-4 font-brutal font-black text-[10rem] leading-none text-black/10 select-none pointer-events-none">
                  01
                </span>

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="bg-black text-white font-brutal font-black px-4 py-2 text-xl border-4 border-white shadow-[4px_4px_0px_0px_#fff]">
                    מטרה אחת
                  </div>
                  <div className="w-12 h-12 bg-white text-black border-4 border-black flex items-center justify-center font-black text-3xl transition-transform" style={{ transform: goal1Revealed ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </div>
                </div>

                <div className="relative z-10 mb-8">
                   <p className="font-brutal text-2xl sm:text-4xl font-black leading-tight">
                     נלמדת מהמילים:<br/>
                     <span className="text-white underline decoration-black decoration-4 underline-offset-8">"חנוך לנער על פי דרכו"</span>
                   </p>
                </div>

                {!goal1Revealed && (
                  <div className="mt-auto font-brutal font-bold text-xl uppercase tracking-wider text-black bg-white/40 px-4 py-2 border-2 border-black inline-block w-fit">
                    לחצו לגילוי המשמעות המלאה
                  </div>
                )}

                <AnimatePresence>
                  {goal1Revealed && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-4 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <p className="font-brutal font-medium text-xl leading-[1.6]">
                        המשמעות הנובעת מכך הינה לאפשר לתלמיד להתקדם בהתאם ליכולתו הרגשית ולממש את הפוטנציאל הטמון בו, זאת באמצעות גיוון דרכי ההוראה, הקניית כלים ומיומנויות שונות שיאפשרו לו להצליח בכל תחומי הידע השונים. כמו כן לפתח יכולת זו עד כי הילד ילמד להיות לומד עצמאי בעל מכוונות עצמית ללמידה.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* GOAL 2 */}
            <motion.div
              className="relative cursor-pointer group h-full flex flex-col"
              onClick={() => setGoal2Revealed(!goal2Revealed)}
              initial={{ opacity: 0, y: 50 }}
              animate={goalsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-[#FFD700] border-8 border-black text-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-y-2 group-hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] transition-all flex flex-col h-full overflow-hidden relative">
                
                <span className="absolute top-4 left-4 font-brutal font-black text-[10rem] leading-none text-black/10 select-none pointer-events-none">
                  02
                </span>

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="bg-black text-white font-brutal font-black px-4 py-2 text-xl border-4 border-white shadow-[4px_4px_0px_0px_#fff]">
                    מטרה שנייה
                  </div>
                  <div className="w-12 h-12 bg-white text-black border-4 border-black flex items-center justify-center font-black text-3xl transition-transform" style={{ transform: goal2Revealed ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </div>
                </div>

                <div className="relative z-10 mb-8">
                   <p className="font-brutal text-2xl sm:text-4xl font-black leading-tight">
                     נלמדת מהמילה:<br/>
                     <span className="text-white underline decoration-black decoration-4 underline-offset-8">"חנוך לנער..."</span>
                   </p>
                </div>

                {!goal2Revealed && (
                  <div className="mt-auto font-brutal font-bold text-xl uppercase tracking-wider text-black bg-white/40 px-4 py-2 border-2 border-black inline-block w-fit">
                    לחצו לגילוי המשמעות המלאה
                  </div>
                )}

                <AnimatePresence>
                  {goal2Revealed && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-4 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <p className="font-brutal font-medium text-xl leading-[1.6]">
                        משמעות המילה חינוך הינה קביעת עליונות של ערכים מסוימים בליבו של הילד להלכה ומעשה. כלומר להקנות לתלמיד ערכים והרגלים אשר יעצבו את אישיותו, יובילו אותו להיות אזרח טוב האוהב את עמו וארצו ומקפיד לנהל אורח חיים על פי רוח ההלכה והמצוות.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CLOSING / EVERY CHILD */}
      <section className="py-32 px-6 bg-[#CCFF00] border-t-8 border-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] flex justify-center items-center opacity-[0.1] mix-blend-multiply pointer-events-none">
          <span className="font-brutal font-black text-[20vw] leading-none text-black select-none">EVERY CHILD</span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto bg-white border-8 border-black p-12 md:p-20 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
        >
           <span className="font-brutal font-black text-xl tracking-widest uppercase text-white bg-black px-4 py-2 mb-8 inline-block shadow-[4px_4px_0px_0px_#FF3366]">
             המטרה המובילה
           </span>
           
           <blockquote className="font-brutal font-black text-5xl sm:text-7xl leading-tight mb-8 text-black">
             "כל ילד הוא עולם ומלואו"
           </blockquote>
           
           <div className="w-full h-2 bg-black mb-8"></div>
           
           <p className="font-brutal font-bold text-2xl sm:text-4xl text-black">
             אנו מאמינים <span className="bg-[#00E5FF] px-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">בכל תלמיד</span> ובפוטנציאל הייחודי שלו
           </p>
        </motion.div>

      </section>
    </div>
  );
}
