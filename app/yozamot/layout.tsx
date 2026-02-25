import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "יוזמות ותוכניות ייחודיות",
  description:
    "יוזמות ותוכניות ייחודיות בבית חינוך הקריה אשדוד – מודל הפל״א, סייבר, יזמים צעירים, מנטורים צעירים, מגמות לבחירה ועוד.",
  alternates: {
    canonical: "/yozamot",
  },
  openGraph: {
    title: "יוזמות ותוכניות ייחודיות | בית חינוך הקריה אשדוד",
    description:
      "תוכניות חדשניות – חקר ויזמות, סייבר, מנטורים צעירים, מודל הפל״א ועוד. חדשנות ויצירתיות בחינוך.",
    url: "/yozamot",
    images: [
      {
        url: "/school-logo.jpg",
        alt: "בית חינוך הקריה אשדוד – יוזמות ותוכניות",
      },
    ],
  },
};

export default function YozamotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
