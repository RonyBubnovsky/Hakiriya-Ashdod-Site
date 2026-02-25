import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מבנה ארגוני",
  description:
    "המבנה הארגוני של בית חינוך הקריה אשדוד – הצוות המוביל, תחומי אחריות, בעלי תפקידים ומערך ההובלה הבית ספרי.",
  alternates: {
    canonical: "/mivne-irguni",
  },
  openGraph: {
    title: "מבנה ארגוני | בית חינוך הקריה אשדוד",
    description:
      "הכירו את הצוות המוביל של בית חינוך הקריה – מנהלת, רכזות שכבה, צוות מצוי ובעלי תפקידים.",
    url: "/mivne-irguni",
    images: [
      {
        url: "/school-logo.jpg",
        alt: "בית חינוך הקריה אשדוד – מבנה ארגוני",
      },
    ],
  },
};

export default function MivneIrguniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
