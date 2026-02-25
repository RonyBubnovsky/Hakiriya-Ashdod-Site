"use client";

import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

const initiatives = [
  {
    title: "מודל הפל״א",
    subtitle: null,
    gradient: "linear-gradient(135deg, #1B3A5C 0%, #2A5580 100%)",
    shadow: "rgba(27, 58, 92, 0.3)",
    borderColor: "rgba(42, 85, 128, 0.4)",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop&q=80",
    fontClass: "font-display",
  },
  {
    title: "בוקר של חלום",
    subtitle: "safe school",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    shadow: "rgba(245, 87, 108, 0.3)",
    borderColor: "rgba(240, 147, 251, 0.4)",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=400&fit=crop&q=80",
    fontClass: "font-handwriting",
  },
  {
    title: "סייבר - ג-ד",
    subtitle: "סייבר - ה-ו",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    shadow: "rgba(79, 172, 254, 0.3)",
    borderColor: "rgba(79, 172, 254, 0.4)",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop&q=80",
    fontClass: "font-elegant",
  },
  {
    title: "נושאים ייחודיים",
    subtitle: "השקפה",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shadow: "rgba(118, 75, 162, 0.3)",
    borderColor: "rgba(102, 126, 234, 0.4)",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop&q=80",
    fontClass: "font-classic",
  },
  {
    title: "מנטורים צעירים",
    subtitle: null,
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    shadow: "rgba(67, 233, 123, 0.3)",
    borderColor: "rgba(67, 233, 123, 0.4)",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop&q=80",
    fontClass: "font-display",
  },
  {
    title: "יזמים צעירים",
    subtitle: "חקר ויזמות",
    gradient: "linear-gradient(135deg, #D4A843 0%, #E8C870 100%)",
    shadow: "rgba(212, 168, 67, 0.3)",
    borderColor: "rgba(212, 168, 67, 0.4)",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=400&fit=crop&q=80",
    fontClass: "font-handwriting",
  },
  {
    title: "מגמות לבחירה",
    subtitle: null,
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    shadow: "rgba(161, 140, 209, 0.3)",
    borderColor: "rgba(161, 140, 209, 0.4)",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop&q=80",
    fontClass: "font-elegant",
  },
];

export default function Yozamot() {
  return (
    <div className="overflow-hidden">
      {/* ===== Hero Section ===== */}
      <section
        className="relative min-h-[45vh] flex flex-col items-center justify-center px-4 py-16 sm:py-20"
        style={{
          background: "linear-gradient(165deg, #FDF6E3 0%, #FAF0D7 40%, #F5E6C8 100%)",
        }}
      >
        {/* Background SVG - lightbulb / innovation pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="idea-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="30" r="14" fill="none" stroke="#1B3A5C" strokeWidth="1" />
              <line x1="35" y1="44" x2="45" y2="44" stroke="#D4A843" strokeWidth="1" />
              <line x1="36" y1="48" x2="44" y2="48" stroke="#D4A843" strokeWidth="1" />
              <line x1="38" y1="52" x2="42" y2="52" stroke="#D4A843" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#idea-pattern)" />
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
            style={{ color: "#1B3A5C" }}
          >
            יוזמות ותוכניות ייחודיות
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-handwriting text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: "#B8912E" }}
          >
            חדשנות ויצירתיות בחינוך
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <hr className="divider-gradient w-32 mx-auto mt-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== Circles Section ===== */}
      <section className="py-16 sm:py-24 px-4" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-6xl">
          {/* Row 1 - 4 circles */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-14 mb-8 sm:mb-10 lg:mb-14">
            {initiatives.slice(0, 4).map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="relative group cursor-default"
              >
                {/* Circle container */}
                <div
                  className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden flex items-center justify-center transition-shadow duration-500"
                  style={{
                    boxShadow: `0 8px 32px ${item.shadow}`,
                    border: `3px solid ${item.borderColor}`,
                  }}
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-80 group-hover:opacity-70 transition-opacity duration-500"
                    style={{ background: item.gradient }}
                  />

                  {/* Text content */}
                  <div className="relative z-10 text-center px-4">
                    <p
                      className={`${item.fontClass} text-white ${
                        item.fontClass === "font-handwriting"
                          ? "text-3xl sm:text-4xl md:text-[2.6rem] font-bold"
                          : "text-lg sm:text-xl md:text-2xl"
                      } leading-tight`}
                      style={{
                        textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                      }}
                    >
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <p
                        className="font-rounded text-xs sm:text-sm md:text-base text-white/90 mt-1 sm:mt-2"
                        style={{
                          textShadow: "0 1px 8px rgba(0,0,0,0.3)",
                        }}
                      >
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Hover glow ring */}
                <div
                  className="absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px 4px ${item.shadow}`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Row 2 - 3 circles, centered */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-14">
            {initiatives.slice(4, 7).map((item, index) => (
              <motion.div
                key={item.title}
                custom={index + 4}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="relative group cursor-default"
              >
                {/* Circle container */}
                <div
                  className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden flex items-center justify-center transition-shadow duration-500"
                  style={{
                    boxShadow: `0 8px 32px ${item.shadow}`,
                    border: `3px solid ${item.borderColor}`,
                  }}
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-80 group-hover:opacity-70 transition-opacity duration-500"
                    style={{ background: item.gradient }}
                  />

                  {/* Text content */}
                  <div className="relative z-10 text-center px-4">
                    <p
                      className={`${item.fontClass} text-white ${
                        item.fontClass === "font-handwriting"
                          ? "text-3xl sm:text-4xl md:text-[2.6rem] font-bold"
                          : "text-lg sm:text-xl md:text-2xl"
                      } leading-tight`}
                      style={{
                        textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                      }}
                    >
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <p
                        className="font-rounded text-xs sm:text-sm md:text-base text-white/90 mt-1 sm:mt-2"
                        style={{
                          textShadow: "0 1px 8px rgba(0,0,0,0.3)",
                        }}
                      >
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Hover glow ring */}
                <div
                  className="absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px 4px ${item.shadow}`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Bottom quote ===== */}
      <section
        className="py-14 sm:py-18 px-4"
        style={{
          background: "linear-gradient(165deg, #FAF0D7 0%, #F5E6C8 40%, #FDF6E3 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <blockquote
            className="font-handwriting text-4xl sm:text-5xl md:text-6xl font-bold leading-snug mb-6"
            style={{ color: "#1B3A5C" }}
          >
            &ldquo;מלמדים חדשנות
            <br />
            מטפחים מנהיגות&rdquo;
          </blockquote>
          <hr className="divider-gradient w-32 mx-auto" />
        </motion.div>
      </section>
    </div>
  );
}
