"use client";

import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};



const values = [
  {
    title: "מצוינות",
    text: "שאיפה מתמדת להישגים גבוהים ולצמיחה אישית",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "#764ba2",
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.15) 0%, transparent 50%)",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "נשמה",
    text: "חינוך מלב אל לב, עם חמימות ואכפתיות",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accentColor: "#f5576c",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(245, 87, 108, 0.15) 0%, transparent 50%)",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "קהילתיות",
    text: "שותפות בין תלמידים, מורים והורים",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    accentColor: "#4facfe",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.15) 0%, transparent 50%)",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "יצירתיות",
    text: "עידוד חשיבה יוצרת וביטוי אישי",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    accentColor: "#43e97b",
    bgPattern: "radial-gradient(circle at 30% 70%, rgba(67, 233, 123, 0.15) 0%, transparent 50%)",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop&q=80",
  },
];

const floatingVariants: Variants = {
  animate: (i: number) => ({
    y: [0, -15, 0],
    x: [0, i % 2 === 0 ? 8 : -8, 0],
    transition: {
      duration: 4 + i,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ===== Hero Section ===== */}
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-20"
        style={{
          background: "linear-gradient(165deg, #FDF6E3 0%, #FAF0D7 40%, #F5E6C8 100%)",
        }}
      >


        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          {/* School Logo */}
          <div
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden flex items-center justify-center"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 8px 40px rgba(27, 58, 92, 0.15), 0 0 0 4px rgba(212, 168, 67, 0.3)",
            }}
          >
            <img src="/school-logo.jpg" alt="לוגו בית חינוך הקריה" className="w-[85%] h-[85%] object-contain" />
          </div>

          {/* Main Title */}
          <motion.h1
            custom={1}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
            style={{ color: "#1B3A5C" }}
          >
            בית חינוך הקריה
          </motion.h1>

          {/* Subtitle - Handwriting style */}
          <motion.p
            custom={2}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="font-handwriting text-4xl sm:text-5xl md:text-6xl font-bold mt-4"
            style={{ color: "#B8912E" }}
          >
            חינוך למצוינות עם נשמה
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            custom={3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="w-40 mt-10"
          >
            <hr className="divider-gradient" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== Welcome Section ===== */}
      <section id="about" className="section-glass py-20 sm:py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3" style={{ color: "#1B3A5C" }}>
              ברוכים הבאים
            </h2>
            <hr className="divider-gradient w-24 mx-auto mb-10" />
            <p className="text-lg sm:text-xl leading-[1.9] max-w-2xl mx-auto" style={{ color: "#5A5A5A" }}>
              בית חינוך הקריה הוא בית ספר יסודי בלב העיר אשדוד, 
              המחנך לערכים של <strong style={{ color: "#1B3A5C" }}>מצוינות</strong>, <strong style={{ color: "#1B3A5C" }}>יצירתיות</strong> ו<strong style={{ color: "#1B3A5C" }}>אכפתיות</strong>. 
              אנו מאמינים שכל ילד וילדה הם עולם ומלואו, 
              ושואפים להעניק לכל תלמיד את הכלים להצליח ולצמוח.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Values Section – Redesigned ===== */}
      <section className="values-section py-20 sm:py-28 px-4 relative overflow-hidden">
        {/* Floating decorative elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={floatingVariants}
            animate="animate"
            className="absolute rounded-full opacity-20 pointer-events-none"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              background: i % 2 === 0
                ? "linear-gradient(135deg, #D4A843, #E8C870)"
                : "linear-gradient(135deg, #1B3A5C, #2A5580)",
              top: `${10 + i * 14}%`,
              left: `${5 + i * 16}%`,
            }}
          />
        ))}

        <div className="mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3" style={{ color: "#1B3A5C" }}>
              הערכים שלנו
            </h2>
            <hr className="divider-gradient w-24 mx-auto mb-4" />
            <p className="text-base sm:text-lg mt-4 max-w-xl mx-auto" style={{ color: "#5A5A5A" }}>
              הערכים המנחים אותנו בדרך לחינוך מיטבי
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="values-card group rounded-3xl overflow-hidden relative"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 20px rgba(27, 58, 92, 0.08)",
                }}
              >
                {/* Top accent gradient bar */}
                <div 
                  className="h-1.5 w-full" 
                  style={{ background: value.gradient }} 
                />

                {/* Image area */}
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${value.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {/* Image overlay with gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%), ${value.bgPattern}`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 pt-5">
                  <h3 className="font-heading text-xl font-bold mb-2" style={{ color: "#1B3A5C" }}>
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A5A5A" }}>
                    {value.text}
                  </p>
                </div>

                {/* Bottom decorative element */}
                <div 
                  className="h-0.5 mx-6 mb-5 rounded-full opacity-30"
                  style={{ background: value.gradient }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
