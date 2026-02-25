import Link from "next/link";

export default function Yozamot() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="text-6xl mb-6">🚀</div>
      <h1 className="font-heading text-4xl font-bold text-primary mb-4">
        יוזמות ותוכניות ייחודיות
      </h1>
      <p className="font-handwriting text-3xl font-bold text-accent mb-6">
        בקרוב...
      </p>
      <p className="text-text-light text-lg max-w-md mb-8">
        עמוד זה נמצא בהכנה ויעלה בקרוב עם כל היוזמות והתוכניות הייחודיות שלנו
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-light transition-colors"
      >
        חזרה לדף הבית
      </Link>
    </div>
  );
}
