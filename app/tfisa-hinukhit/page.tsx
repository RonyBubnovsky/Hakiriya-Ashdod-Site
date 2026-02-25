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

export default function TfisaHinukhit() {
  return (
    <div className="overflow-hidden">
      {/* ===== Hero Section ===== */}
      <section
        className="relative min-h-[50vh] flex flex-col items-center justify-center px-4 py-20"
        style={{
          background: "linear-gradient(165deg, #FDF6E3 0%, #FAF0D7 40%, #F5E6C8 100%)",
        }}
      >
        {/* Subtle decorative SVG - open book pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="book-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 20 C30 20 10 30 10 50 C10 70 30 80 50 80 C70 80 90 70 90 50 C90 30 70 20 50 20Z" fill="none" stroke="#1B3A5C" strokeWidth="0.8" />
              <line x1="50" y1="20" x2="50" y2="80" stroke="#D4A843" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#book-pattern)" />
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-4"
            style={{ color: "#1B3A5C" }}
          >
            מצוינות עם נשמה
          </h1>
          <motion.p
            custom={1}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="font-elegant text-2xl sm:text-3xl md:text-4xl"
            style={{ color: "#5A5A5A" }}
          >
            בית חינוך תורני מדעי טכנולוגי הקריה
          </motion.p>
          <motion.div
            custom={2}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <hr className="divider-gradient w-32 mx-auto mt-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== Main Proverb Section ===== */}
      <section className="py-16 sm:py-24 px-4" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-6xl">
          {/* Proverb with image - alternating layout */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 order-2 lg:order-1"
            >
              {/* The proverb quote */}
              <blockquote
                className="font-classic text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-8"
                style={{ color: "#1B3A5C" }}
              >
                <span style={{ color: "#D4A843" }}>&ldquo;</span>
                חנוך לנער על פי דרכו
                <br />
                גם כי יזקין לא יסור ממנה
                <span style={{ color: "#D4A843" }}>&rdquo;</span>
              </blockquote>

              {/* Explanation paragraph */}
              <p
                className="font-rounded text-base sm:text-lg leading-[2] mb-10"
                style={{ color: "#5A5A5A" }}
              >
                התפיסה החינוכית הבית ספרית נובעת מהפסוק הנ&quot;ל, אשר מבטא שתיים
                מבין המטרות העיקריות של בית ספרינו. מתוך מטרות העל הללו נגזרות
                מטרות נוספות אשר יפורטו בהמשך.
              </p>

              {/* Decorative divider */}
              <hr className="divider-gradient w-24 mb-10" />

              {/* מטרה אחת */}
              <motion.div
                custom={1}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mb-10"
              >
                <div
                  className="inline-block px-5 py-2 rounded-full mb-4"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    boxShadow: "0 4px 16px rgba(102, 126, 234, 0.3)",
                  }}
                >
                  <span className="font-display text-lg sm:text-xl text-white">
                    מטרה אחת
                  </span>
                </div>

                <p
                  className="font-elegant text-xl sm:text-2xl mb-3"
                  style={{ color: "#1B3A5C" }}
                >
                  נלמדת מהמילים:{" "}
                  <span className="font-classic font-bold" style={{ color: "#764ba2" }}>
                    &quot;חנוך לנער על פי דרכו&quot;
                  </span>
                </p>

                <p
                  className="font-rounded text-sm sm:text-base leading-[2]"
                  style={{ color: "#5A5A5A" }}
                >
                  המשמעות הנובעת מכך הינה לאפשר לתלמיד להתקדם בהתאם ליכולתו
                  האישית ולממש את הפוטנציאל הטמון בו, זאת באמצעות גיוון דרכי
                  ההוראה, הקניית כלים ומיומנויות שונות שיאפשרו לו להצליח בכל
                  תחומי הידע השונים. כמו כן לפתח יכולת זו עד כי הילד ילמד להיות
                  לומד עצמאי בעל מכוונות עצמאית ללמידה.
                </p>
              </motion.div>

              {/* מטרה שנייה */}
              <motion.div
                custom={2}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div
                  className="inline-block px-5 py-2 rounded-full mb-4"
                  style={{
                    background: "linear-gradient(135deg, #D4A843 0%, #E8C870 100%)",
                    boxShadow: "0 4px 16px rgba(212, 168, 67, 0.3)",
                  }}
                >
                  <span className="font-display text-lg sm:text-xl text-white">
                    מטרה שנייה
                  </span>
                </div>

                <p
                  className="font-elegant text-xl sm:text-2xl mb-3"
                  style={{ color: "#1B3A5C" }}
                >
                  נלמדת מהמילה:{" "}
                  <span className="font-classic font-bold" style={{ color: "#B8912E" }}>
                    &quot;חנוך לנער...&quot;
                  </span>
                </p>

                <p
                  className="font-rounded text-sm sm:text-base leading-[2]"
                  style={{ color: "#5A5A5A" }}
                >
                  משמעות המילה חינוך הינה קביעת עליונות של ערכים מסוימים בליבו של
                  הילד להלכה ומעשה. כלומר להקנות לתלמיד ערכים והרגלים אשר יעצבו
                  את אישיותו, יובילו אותו להיות אזרח טוב האוהב את עמו וארצו
                  ומקפיד לנהל אורח חיים על פי רוח ההלכה והמצוות.
                </p>
              </motion.div>
            </motion.div>

            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="flex-1 order-1 lg:order-2 w-full max-w-lg lg:max-w-none"
            >
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  boxShadow: "0 20px 60px rgba(27, 58, 92, 0.15)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1000&fit=crop&q=80"
                  alt="תלמידים לומדים בכיתה"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                />
                {/* Overlay quote at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-5"
                  style={{
                    background: "linear-gradient(to top, rgba(27, 58, 92, 0.85) 0%, transparent 100%)",
                  }}
                >
                  <p className="font-handwriting text-2xl sm:text-3xl text-white font-bold text-center">
                    חינוך למצוינות עם נשמה
                  </p>
                </div>
                {/* Decorative border */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    border: "3px solid rgba(212, 168, 67, 0.3)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Decorative divider between sections ===== */}
      <div
        className="h-1 w-full"
        style={{
          background: "linear-gradient(to left, #FDF6E3, #D4A843, #1B3A5C, #D4A843, #FDF6E3)",
        }}
      />

      {/* ===== Bottom inspirational quote ===== */}
      <section
        className="py-16 sm:py-20 px-4"
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
            &ldquo;כל ילד הוא עולם ומלואו&rdquo;
          </blockquote>
          <p
            className="font-rounded text-lg sm:text-xl"
            style={{ color: "#5A5A5A" }}
          >
            אנו מאמינים בכל תלמיד ובפוטנציאל הייחודי שלו
          </p>
          <hr className="divider-gradient w-32 mx-auto mt-8" />
        </motion.div>
      </section>
    </div>
  );
}
