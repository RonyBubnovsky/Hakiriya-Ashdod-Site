import React from "react";
import GoogleMap from "./GoogleMap";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-4 border-t relative z-10"
      style={{
        backgroundColor: "#1A1A1A",
        borderColor: "rgba(232, 80, 58, 0.2)",
      }}
    >
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-10 md:gap-8 justify-between items-center md:items-stretch">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-right justify-center space-y-4">
          <div>
            <h2
              className="font-display text-2xl md:text-3xl font-bold mb-2"
              style={{ color: "#FBFBFB" }}
            >
              בית חינוך הקריה - אשדוד
            </h2>
            <p className="text-base md:text-lg" style={{ color: "rgba(251,251,251,0.7)" }}>
              בית ספר יסודי תורני מדעי טכנולוגי
            </p>
          </div>
          
          <div className="flex flex-col space-y-1">
            <p className="text-sm md:text-base font-medium flex items-center justify-center md:justify-start gap-2" style={{ color: "rgba(251,251,251,0.5)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              רח׳ העצמאות 63, אשדוד
            </p>
          </div>

          <div className="pt-6 md:pt-4">
            <p
              className="font-editorial text-sm md:text-base tracking-[0.1em] italic mb-2"
              style={{ color: "#E8503A" }}
            >
              חינוך למצוינות עם נשמה
            </p>
            <p className="text-xs" style={{ color: "rgba(251,251,251,0.3)" }}>
              © {currentYear} בית חינוך הקריה, אשדוד. כל הזכויות שמורות.
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] flex-shrink-0">
            <GoogleMap />
          </div>
        </div>

      </div>
    </footer>
  );
}
