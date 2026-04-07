"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/mivne-irguni", label: "מבנה ארגוני" },
  { href: "/tfisa-hinukhit", label: "תפיסה חינוכית" },
  { href: "/yozamot", label: "יוזמות ותוכניות ייחודיות" },
  { href: "/yeadim", label: "יעדים לשנה״ל תשפ״ו" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "#1A1A1A",
        borderColor: "rgba(232, 80, 58, 0.15)",
      }}
      aria-label="ניווט ראשי"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 bg-white overflow-hidden transition-transform duration-300 group-hover:scale-105"
              style={{ clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)" }}
            >
              <img
                src="/school-logo.jpg"
                alt="לוגו בית חינוך הקריה אשדוד"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-display text-sm sm:text-base font-bold text-white leading-tight block">
                בית חינוך הקריה
              </span>
              <span
                className="font-syne text-[9px] sm:text-[10px] tracking-[0.15em] uppercase block"
                style={{ color: "#E8503A" }}
              >
                Ashdod
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 lg:px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 right-0 left-0 h-[2px]"
                      style={{ backgroundColor: "#E8503A" }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 hover:bg-white/5 transition-colors"
            aria-label="תפריט ניווט"
            aria-expanded={isOpen}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1px] bg-white mb-1.5 origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[1px] bg-white mb-1.5"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1px] bg-white origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/5"
            style={{ backgroundColor: "#141414" }}
          >
            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        isActive
                          ? "text-white border-r-2"
                          : "text-white/50 hover:text-white/80"
                      }`}
                      style={
                        isActive ? { borderColor: "#E8503A" } : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
