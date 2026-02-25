"use client";

import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const goals = [
  {
    number: 1,
    title: "עידוד מצוינות ומיצוי הפוטנציאל האישי של כל תלמיד תוך מתן מענה לשונות",
    color: "#1B3A5C",
    gradient: "linear-gradient(135deg, #1B3A5C 0%, #2A5580 100%)",
    shadow: "rgba(27, 58, 92, 0.2)",
    accentBg: "rgba(27, 58, 92, 0.08)",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop&q=80",
  },
  {
    number: 2,
    title: "תגבור לימודי והשלמת פערים בשילוב מיומנויות של הוראה דיפרנציאלית - מודל הפל״א",
    color: "#764ba2",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shadow: "rgba(118, 75, 162, 0.2)",
    accentBg: "rgba(118, 75, 162, 0.08)",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&h=300&fit=crop&q=80",
  },
  {
    number: 3,
    title: "הקניית כלים ומיומנויות מבוססות חדשנות, חקר ויזמות תוך ביסוס התהליך בחדר המורים והכיתה",
    color: "#2E7D32",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    shadow: "rgba(67, 233, 123, 0.2)",
    accentBg: "rgba(67, 233, 123, 0.08)",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&h=300&fit=crop&q=80",
  },
  {
    number: 4,
    title: "הטמעת כלי תקשוב שונים בתהליך הלמידה, הוראה וביסוס הטכנו-פדגוגיה תוך שימוש בכלים דיגיטליים מגוונים. AI, יצירת ספר דיגיטלי, פאדלט, שימוש בכלי להתקדמות קריאה בטימס וכתיבת סיפורים באנגלית בעזרת STORYWIZARD.AI.IL ועוד...",
    color: "#D4A843",
    gradient: "linear-gradient(135deg, #D4A843 0%, #E8C870 100%)",
    shadow: "rgba(212, 168, 67, 0.2)",
    accentBg: "rgba(212, 168, 67, 0.08)",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop&q=80",
  },
  {
    number: 5,
    title: "גיבוש, התמקצעות והעצמת הצוות החינוכי",
    color: "#C62828",
    gradient: "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)",
    shadow: "rgba(245, 87, 108, 0.2)",
    accentBg: "rgba(245, 87, 108, 0.08)",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=300&fit=crop&q=80",
  },
  {
    number: 6,
    title: "ביסוס וקידום אקלים חברתי, ערכי, תורני תוך ביסוס תחושת השייכות והמגוונות",
    color: "#4facfe",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    shadow: "rgba(79, 172, 254, 0.2)",
    accentBg: "rgba(79, 172, 254, 0.08)",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop&q=80",
  },
];

export default function Yeadim() {
  return (
    <div className="overflow-hidden">
      {/* ===== Hero Section ===== */}
      <section
        className="relative min-h-[45vh] flex flex-col items-center justify-center px-4 py-16 sm:py-20"
        style={{
          background: "linear-gradient(165deg, #FDF6E3 0%, #FAF0D7 40%, #F5E6C8 100%)",
        }}
      >
        {/* Subtle background SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="target-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="18" fill="none" stroke="#1B3A5C" strokeWidth="0.8" />
              <circle cx="40" cy="40" r="10" fill="none" stroke="#D4A843" strokeWidth="0.6" />
              <circle cx="40" cy="40" r="3" fill="#1B3A5C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#target-pattern)" />
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-2"
            style={{ color: "#1B3A5C" }}
          >
            יעדי בית הספר לשנה״ל תשפ״ו
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-handwriting text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: "#B8912E" }}
          >
            בית חינוך תורני מדעי טכנולוגי הקריה
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

      {/* ===== Goals Section ===== */}
      <section className="py-16 sm:py-24 px-4" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-5xl flex flex-col gap-10 sm:gap-14">
          {goals.map((goal, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={goal.number}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-12`}
              >
                {/* Image side */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <div
                    className="relative rounded-3xl overflow-hidden group"
                    style={{
                      boxShadow: `0 12px 40px ${goal.shadow}`,
                    }}
                  >
                    <img
                      src={goal.image}
                      alt={`יעד ${goal.number}`}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay at bottom */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1/3"
                      style={{
                        background: `linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)`,
                      }}
                    />
                    {/* Accent strip */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1.5"
                      style={{ background: goal.gradient }}
                    />
                  </div>
                </div>

                {/* Content side */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-right">
                  {/* Goal number badge */}
                  <div
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-5"
                    style={{
                      background: goal.gradient,
                      boxShadow: `0 4px 16px ${goal.shadow}`,
                    }}
                  >
                    <span className="font-display text-lg sm:text-xl text-white">
                      יעד {goal.number}
                    </span>
                  </div>

                  {/* Goal content */}
                  <p
                    className="font-handwriting text-2xl sm:text-3xl md:text-4xl font-bold leading-snug"
                    style={{ color: "#2D2D2D" }}
                  >
                    {goal.title}
                  </p>

                  {/* Decorative line */}
                  <div
                    className="w-16 h-1 rounded-full mt-5"
                    style={{ background: goal.gradient }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== Bottom Section ===== */}
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
            &ldquo;שואפים גבוה
            <br />
            מגיעים רחוק&rdquo;
          </blockquote>
          <p
            className="font-rounded text-lg sm:text-xl"
            style={{ color: "#5A5A5A" }}
          >
            יחד נממש את כל היעדים שלנו
          </p>
          <hr className="divider-gradient w-32 mx-auto mt-8" />
        </motion.div>
      </section>
    </div>
  );
}
