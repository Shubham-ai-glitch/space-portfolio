"use client";
import React from "react";
import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx"; // Sahi import
import { FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <span className="font-bold text-gray-300 text-xl">Shubham Singh</span>

        <div className="flex flex-row gap-5 items-center">
          <a href="https://www.instagram.com/shubham.zenith_" target="_blank" rel="noopener noreferrer">
            <RxInstagramLogo className="text-white w-7 h-7 hover:text-pink-500 transition-all duration-300 cursor-pointer" />
          </a>
          <a href="https://github.com/Shubhams872-spec/Shubham-ai-glitch" target="_blank" rel="noopener noreferrer">
            <RxGithubLogo className="text-white w-7 h-7 hover:text-purple-500 transition-all duration-300 cursor-pointer" />
          </a>
          <a href="https://t.me/Shubhams872" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane className="text-white w-7 h-7 hover:text-blue-400 transition-all duration-300 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
