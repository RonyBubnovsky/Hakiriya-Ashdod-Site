import type { Metadata } from "next";
import { Heebo, Rubik, Amatic_SC, Secular_One, Suez_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
  display: "swap",
});

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["hebrew", "latin"],
  variable: "--font-amatic",
  display: "swap",
});

const secularOne = Secular_One({
  weight: "400",
  subsets: ["hebrew", "latin"],
  variable: "--font-secular",
  display: "swap",
});

const suezOne = Suez_One({
  weight: "400",
  subsets: ["hebrew", "latin"],
  variable: "--font-suez",
  display: "swap",
});

export const metadata: Metadata = {
  title: "בית חינוך הקריה | אשדוד",
  description:
    "האתר הרשמי של בית חינוך הקריה – בית ספר יסודי באשדוד. חינוך למצוינות עם נשמה.",
  keywords: ["בית ספר", "הקריה", "אשדוד", "חינוך", "יסודי"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} ${rubik.variable} ${amatic.variable} ${secularOne.variable} ${suezOne.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
