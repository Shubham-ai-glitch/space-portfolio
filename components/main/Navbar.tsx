"use client";
import React from "react";
import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <span className="font-bold text-gray-300 text-xl">Shubham Singh</span>

        <div className="flex flex-row items-center justify-between w-[400px] border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">About</a>
          <a href="#skills" className="cursor-pointer">Skills</a>
          <a href="#projects" className="cursor-pointer">Certificates</a>
        </div>

        <div className="flex flex-row gap-5 items-center">
          <a href="https://www.instagram.com/shubham.zenith_" target="_blank"><RxInstagramLogo className="text-white w-6 h-6 hover:text-pink-500 transition" /></a>
          <a href="https://github.com/Shubhams872-spec/Shubham-ai-glitch" target="_blank"><RxGithubLogo className="text-white w-6 h-6 hover:text-purple-500 transition" /></a>
          <a href="https://t.me/Shubhams872" target="_blank"><FaTelegramPlane className="text-white w-6 h-6 hover:text-blue-400 transition" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
