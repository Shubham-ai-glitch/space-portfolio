"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { FaTelegramPlane } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";

const HeroContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div variants={slideInFromTop} className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[13px]">Cybersecurity Expert & AI Developer</h1>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span>
            Welcome to the Space of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Shubham Singh</span>
          </span>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-[600px]">
          NEET Aspirant at Aakash Institute | **Cybersecurity Expert** | Professional Frontend Developer. 
          Architecting secure and scalable web solutions in Kanpur.
        </motion.p>

        <motion.div variants={slideInFromLeft(1)} className="flex flex-row gap-5 z-[50]">
           <a href="/resume.pdf" download="Shubham_Singh_Resume.pdf" className="py-3 px-8 button-primary text-white font-bold rounded-lg hover:scale-105 transition-all shadow-lg shadow-purple-500/50">
             Download Resume
           </a>
           <div className="flex flex-row gap-4 items-center">
              <a href="https://t.me/Shubhams872" target="_blank" className="p-3 bg-[#1a143e] border border-[#2A0E61] rounded-full hover:bg-purple-600 transition">
                <FaTelegramPlane className="text-white w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/shubham.zenith_" target="_blank" className="p-3 bg-[#1a143e] border border-[#2A0E61] rounded-full hover:bg-pink-600 transition">
                <RxInstagramLogo className="text-white w-6 h-6" />
              </a>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
