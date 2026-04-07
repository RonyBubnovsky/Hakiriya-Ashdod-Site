import type { Metadata, Viewport } from "next";
import { Heebo, Secular_One, Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import GrainOverlay from "./components/GrainOverlay";
import PageTransition from "./components/PageTransition";

const SITE_URL = "https://hakiriya-ashdod.vercel.app";
const SITE_NAME = "בית חינוך הקריה – אשדוד";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const secularOne = Secular_One({
  weight: "400",
  subsets: ["hebrew", "latin"],
  variable: "--font-secular",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

/* ===== Viewport Export (Next.js 14+) ===== */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A1A",
};

/* ===== Global Metadata ===== */
export const metadata: Metadata = {
  /* ─── Basic ─── */
  title: {
    default: "בית חינוך הקריה | בית ספר יסודי באשדוד – חינוך למצוינות עם נשמה",
    template: "%s | בית חינוך הקריה אשדוד",
  },
  description:
    "האתר הרשמי של בית חינוך הקריה – בית ספר יסודי תורני מדעי טכנולוגי באשדוד. חינוך למצוינות עם נשמה, יוזמות חדשניות, תוכניות ייחודיות ומענה אישי לכל תלמיד.",
  keywords: [
    "בית ספר יסודי אשדוד",
    "בית חינוך הקריה",
    "הקריה אשדוד",
    "בית ספר תורני אשדוד",
    "בית ספר מדעי טכנולוגי אשדוד",
    "חינוך למצוינות",
    "בית ספר יסודי",
    "אשדוד",
    "חינוך",
    "מצוינות עם נשמה",
    "בית ספר הקריה",
    "חינוך יסודי אשדוד",
    "רישום לבית ספר אשדוד",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  /* ─── Canonical & Alternates ─── */
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },

  /* ─── Robots ─── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ─── Open Graph (Facebook / Social) ─── */
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "בית חינוך הקריה | בית ספר יסודי באשדוד",
    description:
      "בית חינוך הקריה – בית ספר יסודי תורני מדעי טכנולוגי באשדוד. חינוך למצוינות עם נשמה, יוזמות חדשניות ותוכניות ייחודיות.",
    images: [
      {
        url: "/school-logo.jpg",
        width: 800,
        height: 600,
        alt: "לוגו בית חינוך הקריה אשדוד",
      },
    ],
  },

  /* ─── Twitter Card ─── */
  twitter: {
    card: "summary_large_image",
    title: "בית חינוך הקריה | בית ספר יסודי באשדוד",
    description:
      "בית חינוך הקריה – בית ספר יסודי תורני מדעי טכנולוגי באשדוד. חינוך למצוינות עם נשמה.",
    images: ["/school-logo.jpg"],
  },

  /* ─── Icons & Manifest ─── */
  icons: {
    icon: "/favicon.ico",
    apple: "/school-logo.jpg",
  },
  manifest: "/manifest.json",

  /* ─── Category ─── */
  category: "education",
};

/* ===== JSON-LD Structured Data ===== */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "בית חינוך הקריה",
  alternateName: "בית ספר הקריה אשדוד",
  url: SITE_URL,
  logo: `${SITE_URL}/school-logo.jpg`,
  image: `${SITE_URL}/school-logo.jpg`,
  description:
    "בית חינוך הקריה – בית ספר יסודי תורני מדעי טכנולוגי באשדוד. חינוך למצוינות עם נשמה.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "העצמאות 63",
    addressLocality: "אשדוד",
    addressCountry: "IL",
  },
  areaServed: {
    "@type": "City",
    name: "אשדוד",
  },
  sameAs: [],
  foundingDate: "",
  "@id": `${SITE_URL}/#organization`,
  educationalLevel: "יסודי",
  teaches: ["מדעים", "טכנולוגיה", "תורה", "חדשנות", "יזמות"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "דף הבית",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "מבנה ארגוני",
      item: `${SITE_URL}/mivne-irguni`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "תפיסה חינוכית",
      item: `${SITE_URL}/tfisa-hinukhit`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "יוזמות ותוכניות ייחודיות",
      item: `${SITE_URL}/yozamot`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "יעדים",
      item: `${SITE_URL}/yeadim`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body
        className={`${heebo.variable} ${secularOne.variable} ${syne.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <GrainOverlay />
        <Navbar />
        <main><PageTransition>{children}</PageTransition></main>

        {/* ===== Footer — Editorial ===== */}
        <footer
          className="py-12 px-4 border-t"
          style={{
            backgroundColor: "#1A1A1A",
            borderColor: "rgba(232, 80, 58, 0.2)",
          }}
        >
          <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-right">
              <p
                className="font-display text-lg font-bold mb-1"
                style={{ color: "#FBFBFB" }}
              >
                בית חינוך הקריה - אשדוד
              </p>
              <p className="text-sm" style={{ color: "rgba(251,251,251,0.5)" }}>
                בית ספר יסודי תורני מדעי טכנולוגי
              </p>
              <p className="text-sm" style={{ color: "rgba(251,251,251,0.5)" }}>
                רח׳ העצמאות 63, אשדוד
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p
                className="font-syne text-xs tracking-[0.2em] uppercase mb-2"
                style={{ color: "#E8503A" }}
              >
                חינוך למצוינות עם נשמה
              </p>
              <p className="text-xs" style={{ color: "rgba(251,251,251,0.3)" }}>
                © {new Date().getFullYear()} בית חינוך הקריה, אשדוד. כל הזכויות
                שמורות.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
