import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תפיסה חינוכית – מצוינות עם נשמה",
  description:
    "התפיסה החינוכית של בית חינוך הקריה אשדוד – חנוך לנער על פי דרכו. חינוך למצוינות, ערכים, יצירתיות ומימוש הפוטנציאל האישי של כל תלמיד.",
  alternates: {
    canonical: "/tfisa-hinukhit",
  },
  openGraph: {
    title: "תפיסה חינוכית | בית חינוך הקריה אשדוד",
    description:
      "חנוך לנער על פי דרכו – התפיסה החינוכית של בית חינוך הקריה. חינוך למצוינות עם נשמה, מימוש פוטנציאל אישי וערכים.",
    url: "/tfisa-hinukhit",
    images: [
      {
        url: "/school-logo.jpg",
        alt: "בית חינוך הקריה אשדוד – תפיסה חינוכית",
      },
    ],
  },
};

export default function TfisaHinukhitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
