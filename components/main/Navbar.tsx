"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[100] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/brand-logo.png"
            alt="logo"
            width={45}
            height={45}
            className="cursor-pointer hover:animate-slowspin rounded-full"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Shubham Singh | <span className="text-purple-500">Expert</span>
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-purple-500 transition">
              About
            </a>
            <a href="#skills" className="cursor-pointer hover:text-purple-500 transition">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-purple-500 transition">
              Achievements
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a 
            href="https://t.me/Shubhams872" 
            target="_blank" 
            className="p-2 bg-[#1a143e] border border-[#2A0E61] rounded-full hover:bg-purple-600 transition"
          >
            <Image src="/telegram.svg" alt="Telegram" width={24} height={24} className="invert" />
          </a>
          <a 
            href="https://www.instagram.com/shubham.zenith_" 
            target="_blank" 
            className="p-2 bg-[#1a143e] border border-[#2A0E61] rounded-full hover:bg-pink-600 transition"
          >
            <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="invert" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
