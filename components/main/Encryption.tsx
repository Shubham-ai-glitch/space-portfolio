"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { ABOUT_TEXT } from "@/constants";

export const Encryption = () => {
  return (
    <section id="about-me" className="flex flex-col relative items-center justify-center min-h-screen w-full h-full z-[20] py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10 md:px-20 mt-20 w-full">
        
        <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-4 text-start max-w-[600px]">
          <h2 className="text-4xl font-bold text-white uppercase tracking-wider">About Me</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {ABOUT_TEXT}
          </p>
          <div className="text-cyan-400 font-mono text-sm mt-4 border-l-2 border-cyan-500 pl-4">
             {">"} Status: NEET Aspirant <br/>
             {">"} Specialization: Ethical Hacking & Frontend <br/>
             {">"} Location: Kanpur, India
          </div>
        </motion.div>

        <motion.div variants={slideInFromRight(0.5)} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          <Image
            src="/shubham.png" 
            alt="Shubham Singh Frontend Developer Kanpur"
            width={350}
            height={350}
            className="relative rounded-full object-cover border-4 border-[#7042f88b] shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
