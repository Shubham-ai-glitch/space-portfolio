"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center py-20 z-[30]">
      <motion.h1 
        variants={slideInFromLeft(0.5)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Contact Me
      </motion.h1>

      <div className="w-full max-w-[600px] p-8 rounded-2xl border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md shadow-[0_0_20px_rgba(112,66,248,0.3)]">
        <form action="https://formspree.io/f/your-id" method="POST" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-200 font-medium">Your Name</label>
            <input 
              type="text" name="name" required
              placeholder="Enter your name"
              className="bg-[#0c0521] border border-[#7042f88b] rounded-lg p-3 text-gray-200 outline-none focus:border-cyan-500 transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-200 font-medium">Your Email</label>
            <input 
              type="email" name="email" required
              placeholder="Enter your email"
              className="bg-[#0c0521] border border-[#7042f88b] rounded-lg p-3 text-gray-200 outline-none focus:border-cyan-500 transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-200 font-medium">Message</label>
            <textarea 
              name="message" rows={5} required
              placeholder="How can I help you?"
              className="bg-[#0c0521] border border-[#7042f88b] rounded-lg p-3 text-gray-200 outline-none focus:border-cyan-500 transition resize-none"
            />
          </div>

          <button 
            type="submit"
            className="py-3 px-8 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-lg hover:scale-105 transition duration-300 shadow-[0_0_15px_rgba(112,66,248,0.5)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

