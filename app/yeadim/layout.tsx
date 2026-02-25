import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "יעדי בית הספר לשנה״ל תשפ״ו",
  description:
    "יעדי בית חינוך הקריה אשדוד לשנת הלימודים תשפ״ו – מצוינות, חדשנות, תקשוב, הוראה דיפרנציאלית, חקר ויזמות, ואקלים חברתי ערכי.",
  alternates: {
    canonical: "/yeadim",
  },
  openGraph: {
    title: "יעדי בית הספר תשפ״ו | בית חינוך הקריה אשדוד",
    description:
      "6 יעדים מרכזיים לשנת הלימודים – מצוינות אישית, חדשנות, תקשוב, AI, העצמת הצוות ואקלים חברתי ערכי.",
    url: "/yeadim",
    images: [
      {
        url: "/school-logo.jpg",
        alt: "בית חינוך הקריה אשדוד – יעדים",
      },
    ],
  },
};

export default function YeadimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
