import React from "react";
import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[50]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="flex flex-row items-center justify-center gap-10 mb-4">
           <a href="https://www.instagram.com/shubham.zenith_" target="_blank" className="flex items-center gap-2 hover:text-pink-500 transition">
             <RxInstagramLogo size={24} />
             <span>Instagram</span>
           </a>
           <a href="https://github.com/Shubhams872-spec/Shubham-ai-glitch" target="_blank" className="flex items-center gap-2 hover:text-purple-500 transition">
             <RxGithubLogo size={24} />
             <span>GitHub</span>
           </a>
           <a href="https://t.me/Shubhams872" target="_blank" className="flex items-center gap-2 hover:text-blue-400 transition">
             <FaTelegramPlane size={24} />
             <span>Telegram</span>
           </a>
        </div>
        <div className="text-[15px] text-center opacity-50">
          &copy; 2026 Shubham Singh | Kanpur
        </div>
      </div>
    </div>
  );
};
