"use client";

import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const cards = [
  {
    lines: ["מפגשי עבודה", "שגרת עבודה"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shadowColor: "rgba(118, 75, 162, 0.35)",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["צוות מצוי", "והתערבות"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    shadowColor: "rgba(245, 87, 108, 0.35)",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["מעקב ובקרה", "רציפים"],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    shadowColor: "rgba(79, 172, 254, 0.35)",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["תצפיות", "ומתן משוב"],
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    shadowColor: "rgba(67, 233, 123, 0.35)",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["סדנאות הכוונה והובלה", "מנהלת בעלי תפקידים"],
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    shadowColor: "rgba(250, 112, 154, 0.35)",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["העצמת צוות מוביל", "רכזת מדעים", "חקר ויזמות", "רכזות שכבה"],
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    shadowColor: "rgba(161, 140, 209, 0.35)",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["רפלקציה מעצבת", "ומסכמת"],
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    shadowColor: "rgba(252, 182, 159, 0.35)",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop&q=80",
  },
  {
    lines: ["כיתת מנהלת"],
    gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    shadowColor: "rgba(161, 196, 253, 0.35)",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&q=80",
  },
];

const hierarchySteps = [
  { label: "מנהלת" },
  { label: "צוות מוביל" },
  { label: "תפקיד לכל מורה" },
];

export default function MivneIrguni() {
  return (
    <div className="overflow-hidden">
      {/* ===== Hero Section ===== */}
      <section
        className="relative min-h-[50vh] flex flex-col items-center justify-center px-4 py-20"
        style={{
          background: "linear-gradient(165deg, #FDF6E3 0%, #FAF0D7 40%, #F5E6C8 100%)",
        }}
      >
        {/* Background decorative SVG pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="org-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="20" r="12" fill="#1B3A5C" />
              <circle cx="30" cy="60" r="8" fill="#1B3A5C" />
              <circle cx="90" cy="60" r="8" fill="#1B3A5C" />
              <line x1="60" y1="32" x2="30" y2="52" stroke="#1B3A5C" strokeWidth="2" />
              <line x1="60" y1="32" x2="90" y2="52" stroke="#1B3A5C" strokeWidth="2" />
              <circle cx="20" cy="100" r="6" fill="#D4A843" />
              <circle cx="60" cy="100" r="6" fill="#D4A843" />
              <circle cx="100" cy="100" r="6" fill="#D4A843" />
              <line x1="30" y1="68" x2="20" y2="94" stroke="#D4A843" strokeWidth="1.5" />
              <line x1="30" y1="68" x2="60" y2="94" stroke="#D4A843" strokeWidth="1.5" />
              <line x1="90" y1="68" x2="100" y2="94" stroke="#D4A843" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#org-pattern)" />
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          {/* Main Title */}
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-4"
            style={{ color: "#1B3A5C" }}
          >
            מבנה ארגוני
          </h1>
          <p
            className="font-handwriting text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: "#B8912E" }}
          >
            הצוות שמוביל את הדרך
          </p>
          <hr className="divider-gradient w-32 mx-auto mt-8" />
        </motion.div>
      </section>

      {/* ===== Hierarchy Flow Section ===== */}
      <section className="section-glass py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-0">
            {hierarchySteps.map((step, index) => (
              <div key={step.label} className="flex flex-col items-center">
                <motion.div
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  className="relative flex items-center justify-center cursor-default"
                  style={{
                    width: index === 0 ? "200px" : index === 1 ? "260px" : "340px",
                    height: index === 0 ? "80px" : index === 1 ? "90px" : "100px",
                    borderRadius: "50%",
                    background:
                      index === 0
                        ? "linear-gradient(135deg, #1B3A5C 0%, #2A5580 100%)"
                        : index === 1
                        ? "linear-gradient(135deg, #D4A843 0%, #E8C870 100%)"
                        : "linear-gradient(135deg, #4CAF50 0%, #81C784 100%)",
                    boxShadow:
                      index === 0
                        ? "0 8px 32px rgba(27, 58, 92, 0.25), inset 0 1px 0 rgba(255,255,255,0.15)"
                        : index === 1
                        ? "0 8px 32px rgba(212, 168, 67, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)"
                        : "0 8px 32px rgba(76, 175, 80, 0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
                    border: "3px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <span
                    className="font-elegant text-xl sm:text-2xl md:text-3xl text-white"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.25)" }}
                  >
                    {step.label}
                  </span>
                </motion.div>

                {/* Arrow between steps */}
                {index < hierarchySteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
                    className="flex flex-col items-center my-1"
                    style={{ transformOrigin: "top" }}
                  >
                    <div
                      className="w-0.5 h-8"
                      style={{
                        background: "linear-gradient(to bottom, #1B3A5C, #D4A843)",
                      }}
                    />
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                      <path d="M10 14L0 0H20L10 14Z" fill="#D4A843" />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Cards Grid Section ===== */}
      <section
        className="relative py-20 sm:py-28 px-4"
        style={{
          background: "linear-gradient(165deg, #FAF0D7 0%, #F5E6C8 40%, #FDF6E3 100%)",
        }}
      >
        {/* Background decorative SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="60" height="60" fill="none" stroke="#1B3A5C" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="2" fill="#D4A843" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl mb-3"
              style={{ color: "#1B3A5C" }}
            >
              תחומי האחריות
            </h2>
            <hr className="divider-gradient w-24 mx-auto mb-4" />
            <p
              className="font-handwriting text-2xl sm:text-3xl mt-4 max-w-xl mx-auto font-bold"
              style={{ color: "#5A5A5A" }}
            >
              כל אחד תורם מהמקום שלו
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -14,
                  scale: 1.04,
                  transition: { duration: 0.35, ease: "easeOut" },
                }}
                className="group rounded-3xl overflow-hidden relative cursor-default"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: `0 4px 24px rgba(27, 58, 92, 0.08)`,
                }}
              >
                {/* Top gradient accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: card.gradient }}
                />

                {/* Card image */}
                <div className="relative h-36 overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {/* Image overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
                    }}
                  />
                </div>

                {/* Card content */}
                <div className="p-5 pt-2 text-center">
                  {card.lines.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className={`${
                        lineIndex === 0
                          ? "font-elegant text-lg sm:text-xl font-bold"
                          : "font-heading text-sm sm:text-base"
                      } leading-relaxed`}
                      style={{
                        color: lineIndex === 0 ? "#1B3A5C" : "#5A5A5A",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div
                  className="h-0.5 mx-5 mb-4 rounded-full opacity-40"
                  style={{ background: card.gradient }}
                />

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 20px 60px ${card.shadowColor}`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Bottom decorative quote ===== */}
      <section className="section-glass py-16 sm:py-20 px-4">
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
            &ldquo;ביחד אנחנו יוצרים  
            <br />
            סביבה חינוכית מצוינת&rdquo;
          </blockquote>
          <hr className="divider-gradient w-32 mx-auto" />
        </motion.div>
      </section>
    </div>
  );
}
