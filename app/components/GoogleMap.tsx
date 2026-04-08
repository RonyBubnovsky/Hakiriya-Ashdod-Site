import React from "react";

export default function GoogleMap() {
  return (
    <div className="w-full h-full relative rounded-xl overflow-hidden border border-[rgba(232,80,58,0.2)] shadow-lg transition-transform hover:shadow-xl hover:border-[rgba(232,80,58,0.4)] duration-300">
      {/* Fallback pattern/bg while loading */}
      <div className="absolute inset-0 bg-[#2A2A2A] animate-pulse -z-10" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.276778686036!2d34.64980142377643!3d31.790205933760017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502a2fc2946ff97%3A0x2a0b338d343fece0!2z15HXmde016Eg15TXp9eo15nXlA!5e0!3m2!1siw!2sil!4v1775662973257!5m2!1siw!2sil"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="מפת הגעה לבית חינוך הקריה אשדוד"
        className="absolute inset-0 w-full h-full object-cover"
      ></iframe>
    </div>
  );
}
