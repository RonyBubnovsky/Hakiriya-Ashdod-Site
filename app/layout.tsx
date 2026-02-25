import type { Metadata, Viewport } from "next";
import { Heebo, Rubik, Amatic_SC, Secular_One, Suez_One, Frank_Ruhl_Libre, Varela_Round } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const SITE_URL = "https://hakiriya-ashdod.vercel.app";
const SITE_NAME = "בית חינוך הקריה – אשדוד";

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

const frankRuhl = Frank_Ruhl_Libre({
  weight: ["400", "700"],
  subsets: ["hebrew", "latin"],
  variable: "--font-frank",
  display: "swap",
});

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["hebrew", "latin"],
  variable: "--font-varela",
  display: "swap",
});

/* ===== Viewport Export (Next.js 14+) ===== */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B3A5C",
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
        className={`${heebo.variable} ${rubik.variable} ${amatic.variable} ${secularOne.variable} ${suezOne.variable} ${frankRuhl.variable} ${varelaRound.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>

        {/* ===== Footer with SEO-rich content ===== */}
        <footer
          className="py-10 px-4 text-center border-t-2"
          style={{
            backgroundColor: "#1B3A5C",
            borderColor: "rgba(212, 168, 67, 0.3)",
          }}
        >
          <div className="mx-auto max-w-4xl">
            <p
              className="font-heading text-lg font-bold mb-2"
              style={{ color: "#E8C870" }}
            >
              בית חינוך הקריה – אשדוד
            </p>
            <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.7)" }}>
              בית ספר יסודי תורני מדעי טכנולוגי
            </p>
            <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.7)" }}>
              רח׳ העצמאות 63, אשדוד
            </p>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
              חינוך למצוינות עם נשמה
            </p>
            <hr
              className="w-16 mx-auto mb-4"
              style={{ borderColor: "rgba(212, 168, 67, 0.3)" }}
            />
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              © {new Date().getFullYear()} בית חינוך הקריה, אשדוד. כל הזכויות
              שמורות.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
