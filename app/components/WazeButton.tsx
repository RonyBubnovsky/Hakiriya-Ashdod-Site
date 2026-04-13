import React from "react";

export default function WazeButton() {
  // Waze deep link for העצמאות 63, אשדוד
  const wazeUrl = "https://waze.com/ul?q=%D7%94%D7%A2%D7%A6%D7%9E%D7%90%D7%95%D7%AA%2063%20%D7%90%D7%A9%D7%93%D7%95%D7%93&navigate=yes";

  return (
    <a 
      href={wazeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#33CCFF] border-4 border-black p-2 shadow-[4px_4px_0px_0px_#111] flex items-center gap-2 hover:translate-y-1 hover:shadow-none transition-all group"
    >
      <img src="https://cdn.simpleicons.org/waze/black" alt="Waze" className="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span className="font-brutal font-black text-sm text-black">
        נווט ב-Waze
      </span>
    </a>
  );
}
