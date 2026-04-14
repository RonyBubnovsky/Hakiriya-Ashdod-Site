"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const values = [
  {
    title: "מצוינות",
    text: "שאיפה מתמדת להישגים גבוהים ולצמיחה אישית",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop&q=80",
    color: "bg-[#FF3366]",
    align: "md:justify-start"
  },
  {
    title: "נשמה",
    text: "חינוך מלב אל לב, עם חמימות ואכפתיות",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=800&fit=crop&q=80",
    color: "bg-[#00E5FF]",
    align: "md:justify-end"
  },
  {
    title: "קהילתיות",
    text: "שותפות בין תלמידים, מורים והורים",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=800&fit=crop&q=80",
    color: "bg-[#FFD700]",
    align: "md:justify-start"
  },
  {
    title: "יצירתיות",
    text: "עידוד חשיבה יוצרת וביטוי אישי",
    image: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=1200&h=800&fit=crop&q=80",
    color: "bg-[#CCFF00]",
    align: "md:justify-end"
  }
];

export default function Home() {
  const [currentDate, setCurrentDate] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('he-IL'));
  }, []);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-transparent text-[#111111] overflow-x-hidden font-sans" dir="rtl">
      
      {/* Global Transparent Background Video - Glassmorphism style */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video 
          autoPlay loop muted playsInline 
          src="/hero-video.mp4" 
          className="w-full h-full object-cover saturate-150 contrast-125" 
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F4F4F0]" />
      </div>

      {/* Import specific bold fonts for anti-slop aesthetic */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;900&display=swap');
        .font-brutal { font-family: 'Rubik', sans-serif; }
        .noise {
          position: absolute; inset: 0; pointer-events: none; z-index: 50; opacity: 0.04;
          background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E');
        }
        .bg-grid {
          background-color: #ffffff;
          background-image: 
            linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}} />
      <div className="noise"></div>

      {/* Hero Section: Asymmetric, Brutalist but warm */}
      <section className="relative min-h-[90vh] px-6 sm:px-12 pt-24 lg:pt-32 pb-20 flex flex-col justify-between max-w-[1600px] mx-auto z-10">
        
        {/* Top bar info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-20 lg:mb-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }}>
            <span className="font-brutal font-medium text-xs tracking-widest uppercase bg-black text-white px-4 py-2 hover:bg-[#FF3366] transition-colors cursor-default" suppressHydrationWarning>
              {currentDate || "נטען..."}
            </span>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-brutal font-light text-sm max-w-xs text-black/60">
            בית ספר יסודי • אשדוד<br/>
            מובילים בחינוך ערכי וטכנולוגי
          </motion.div>
        </div>

        {/* Main Hero Layout */}
        <div className="flex flex-col items-center justify-center relative mt-auto mb-20">
          
          {/* Huge Typo Section */}
          <div className="w-full relative z-20 text-center flex flex-col items-center">
            {/* White glow behind text for contrast */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[120%] bg-white/60 blur-[80px] rounded-full -z-10 pointer-events-none" />
            
            {/* Added back Logo */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} 
              className="mb-8 w-32 h-32 md:w-48 md:h-48"
            >
               <img src="/school-logo.jpg" alt="לוגו בית חינוך הקריה" className="w-full h-full object-contain mix-blend-multiply" />
            </motion.div>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="font-brutal font-black text-[15vw] sm:text-[12vw] lg:text-[8rem] leading-[0.85] tracking-tight uppercase"
            >
              בית ספר<br/>
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent" style={{ WebkitTextStroke: '2px #111' }}>הקריה</span>
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                  className="absolute bottom-1 right-0 h-1/2 bg-[#00E5FF] z-0 -rotate-2"
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.7 }}
              className="font-brutal font-light text-xl md:text-3xl max-w-2xl mt-12 leading-relaxed"
            >
              העתיד מתחיל כאן. 
              <br/>סביבת למידה חדשנית שלא מתנצלת על היותה שונה. מרחב שחושב מחוץ למסגרת.
            </motion.p>
          </div>
          
        </div>
      </section>

      {/* Editorial Scrolling Values */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-12 border-t-2 border-black bg-grid">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="mb-24 md:mb-32">
            <h2 className="font-brutal font-black text-5xl sm:text-6xl md:text-8xl w-full border-b-[6px] border-black pb-4 mb-4">
              הערכים המנחים
            </h2>
          </div>

          <div className="flex flex-col gap-24 lg:gap-40">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className={`flex w-full ${val.align} relative`}
              >
                <div className={`w-full lg:w-[80%] flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Heavy Typography Block */}
                  <div className="w-full md:w-1/2 z-20">
                    <span className="font-mono text-xl font-bold bg-black text-white px-3 py-1 inline-block mb-6">
                      0{idx + 1}
                    </span>
                    <h3 className="font-brutal font-black text-4xl sm:text-5xl lg:text-6xl mb-6 leading-none">
                      {val.title}
                    </h3>
                    <p className="font-brutal font-light text-xl sm:text-2xl text-black/70 leading-normal">
                      {val.text}
                    </p>
                  </div>

                  {/* Brutalist Image Block */}
                  <div className="w-full md:w-1/2 relative aspect-square group perspective-[1000px]">
                    <div className={`absolute inset-0 ${val.color} translate-x-3 sm:translate-x-4 lg:translate-x-8 translate-y-3 sm:translate-y-4 lg:translate-y-8 border-2 border-black transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500`}></div>
                    <img 
                      src={val.image} 
                      alt={val.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 border-2 border-black transition-all duration-700"
                    />
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bold CTA Section */}
      <section className="min-h-[40vh] sm:min-h-[50vh] bg-black text-white px-6 py-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
        
        {/* Deep Gradient Background decoration & Video back in CTA */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <video 
             autoPlay loop muted playsInline 
             src="https://www.w3schools.com/html/mov_bbb.mp4" 
             className="w-full h-full object-cover opacity-20 mix-blend-screen scale-110 blur-sm"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[50%] -right-[20%] w-[100vw] h-[100vw] rounded-full bg-gradient-to-r from-[#FF3366] via-transparent to-transparent opacity-30 blur-3xl pointer-events-none"
        />
        
        <h2 className="font-brutal font-black text-[12vw] sm:text-[8vw] leading-none mb-12 relative z-10 uppercase">
          הצטרפו אלינו
        </h2>
        <motion.button 
          onClick={() => setIsFormOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-brutal font-bold text-xl sm:text-2xl bg-[#CCFF00] text-black px-8 sm:px-12 py-4 sm:py-6 rounded-none border-4 border-[#CCFF00] hover:bg-black hover:text-[#CCFF00] transition-colors shadow-[6px_6px_0px_#fff] sm:shadow-[8px_8px_0px_#fff] hover:shadow-[10px_10px_0px_#fff] sm:hover:shadow-[12px_12px_0px_#fff] z-10"
        >
          להרשמה ותיאום ביקור &rarr;
        </motion.button>
      </section>

      {/* Mock Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-lg bg-[#F4F4F0] text-black p-8 sm:p-12 border-4 border-black shadow-[16px_16px_0px_#FF3366] relative"
          >
            <button 
              onClick={() => { setIsFormOpen(false); setIsSubmitSuccess(false); }}
              className="absolute top-4 left-4 text-2xl font-black bg-black text-white w-10 h-10 hover:bg-[#FF3366] transition-colors flex items-center justify-center pt-1"
            >
              &times;
            </button>
            
            {isSubmitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="w-24 h-24 bg-[#CCFF00] border-4 border-black flex items-center justify-center rounded-none shadow-[8px_8px_0px_#000] mb-8 font-brutal text-5xl font-black">
                  ✓
                </div>
                <h3 className="font-brutal font-black text-4xl mb-4 uppercase">נשלח בהצלחה!</h3>
                <p className="font-brutal font-bold text-xl text-black/70 mb-8">ניצור קשר בהקדם.</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setIsSubmitSuccess(false); setIsFormOpen(false); }}
                  className="font-brutal font-black text-xl bg-black text-white px-8 py-3 border-4 border-black hover:bg-[#FF3366] transition-colors shadow-[6px_6px_0px_#00E5FF]"
                >
                  סגירה
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-brutal font-black text-3xl sm:text-4xl mb-8 uppercase text-right">השאירו פרטים</h3>
                <form className="flex flex-col gap-6" onSubmit={(e) => { 
                  e.preventDefault(); 
                  setIsSubmitSuccess(true); 
                }}>
                  <div className="flex flex-col text-right">
                    <label className="font-brutal font-bold text-sm mb-2 uppercase text-black/70">שם מלא</label>
                    <input type="text" className="w-full border-b-4 border-black p-2 bg-transparent focus:outline-none focus:border-[#FF3366] font-brutal text-lg transition-colors" required placeholder="ישראל ישראלי" />
                  </div>
                  <div className="flex flex-col text-right">
                    <label className="font-brutal font-bold text-sm mb-2 uppercase text-black/70">טלפון אבא / אמא</label>
                    <input type="tel" className="w-full border-b-4 border-black p-2 bg-transparent focus:outline-none focus:border-[#00E5FF] font-brutal text-lg transition-colors" required placeholder="050-0000000" dir="ltr" />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="mt-8 font-brutal font-black text-2xl bg-[#CCFF00] text-black py-4 border-4 border-black hover:bg-black hover:text-[#CCFF00] transition-colors"
                  >
                    שליחה
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
      
    </div>
  );
}
