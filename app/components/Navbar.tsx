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
      className="sticky top-0 z-50 bg-white border-b-8 border-black font-sans"
      aria-label="ניווט ראשי"
      dir="rtl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_#00E5FF] transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_0px_#FF3366]">
              <img
                src="/school-logo.jpg"
                alt="לוגו בית חינוך הקריה אשדוד"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <div>
              <span className="font-brutal text-lg sm:text-xl font-black text-black leading-none block uppercase">
                בית חינוך הקריה
              </span>
              <span className="font-brutal text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#FF3366] block">
                Ashdod
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-base font-brutal font-bold transition-all border-4 ${
                    isActive
                      ? "bg-black text-white border-black shadow-[4px_4px_0px_0px_#FFD700]"
                      : "bg-transparent text-black border-transparent hover:border-black hover:bg-[#CCFF00] hover:shadow-[4px_4px_0px_0px_#111]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 bg-[#FFD700] border-4 border-black shadow-[4px_4px_0px_0px_#111] hover:bg-[#FF3366] transition-colors"
            aria-label="תפריט ניווט"
            aria-expanded={isOpen}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-1 bg-black mb-1 origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-1 bg-black mb-1"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-1 bg-black origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, borderBottomWidth: 0 }}
            animate={{ height: "auto", borderBottomWidth: 8 }}
            exit={{ height: 0, borderBottomWidth: 0 }}
            className="lg:hidden overflow-hidden bg-white border-black absolute top-full left-0 w-full z-40"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-4 font-brutal font-black text-lg border-4 transition-all ${
                        isActive
                          ? "bg-black text-white border-black shadow-[4px_4px_0px_0px_#FFD700]"
                          : "bg-[#F4F4F0] text-black border-black hover:bg-[#00E5FF] hover:shadow-[4px_4px_0px_0px_#111]"
                      }`}
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
