import React from "react";
import GoogleMap from "./GoogleMap";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t-8 border-black font-sans relative z-10" dir="rtl">
      <div className="flex flex-col md:flex-row">
        
        {/* Text Content Block */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-start border-b-8 md:border-b-0 md:border-l-8 border-black bg-[#CCFF00]">
          <h2 className="font-brutal text-4xl md:text-5xl font-black text-black mb-4 uppercase leading-[1]">
            בית חינוך <br/>
            <span className="bg-black text-white px-3 pb-1 mt-2 inline-block shadow-[6px_6px_0px_0px_#FF3366]">הקריה אשדוד</span>
          </h2>
          
          <p className="font-brutal font-bold text-xl md:text-2xl text-black mb-8">
            בית ספר יסודי תורני מדעי טכנולוגי
          </p>
          
          <div className="bg-white border-4 border-black p-4 mb-8 shadow-[6px_6px_0px_0px_#00E5FF] flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="font-brutal font-black text-lg md:text-xl text-black">
              רח׳ העצמאות 63, אשדוד
            </span>
          </div>

          <div className="mt-auto">
            <p className="font-brutal font-bold text-lg md:text-xl text-black uppercase mb-2 border-b-4 border-black inline-block pb-1">
              חינוך למצוינות עם נשמה
            </p>
            <p className="font-brutal text-sm font-medium text-black/80">
              © {currentYear} בית חינוך הקריה. אלופים בחינוך.
            </p>
          </div>
        </div>

        {/* Map Block */}
        <div className="w-full md:w-1/2 bg-[#111] p-8 md:p-16 flex items-center justify-center relative overflow-hidden">
           {/* Decorative bg text */}
           <div className="absolute font-brutal font-black text-white opacity-5 text-[15rem] leading-none pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
             MAP
           </div>
           
           {/* The Map itself */}
           <div className="w-full max-w-[400px] aspect-square relative z-10 border-8 border-white bg-black shadow-[16px_16px_0px_0px_#FFD700] hover:shadow-[16px_16px_0px_0px_#00E5FF] transition-shadow duration-500 overflow-hidden">
             {/* Note: GoogleMap is wrapped heavily */}
             <div className="w-full h-full grayscale contrast-125 filter group-hover:filter-none transition-all duration-500">
               <GoogleMap />
             </div>
           </div>
        </div>

      </div>
    </footer>
  );
}
