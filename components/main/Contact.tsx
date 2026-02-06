"use client";
import React from "react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // Aapki Formspree ID yahan set hai
  const [state, handleSubmit] = useForm("mjgebllj");

  return (
    <section id="contact" className="flex flex-col items-center justify-center py-20 z-[30]">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
        Contact Me
      </h1>
      
      {state.succeeded ? (
        <div className="text-white text-2xl border border-purple-500 p-6 rounded-lg bg-[#030014] animate-pulse">
          Success! Shubham will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-[600px] px-10">
          <input 
            id="name" 
            name="name" 
            placeholder="Full Name" 
            className="p-4 rounded-lg bg-[#1a143e] border border-[#2A0E61] text-white focus:border-[#7042f8] outline-none transition" 
            required 
          />
          
          <input 
            id="email" 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            className="p-4 rounded-lg bg-[#1a143e] border border-[#2A0E61] text-white focus:border-[#7042f8] outline-none transition" 
            required 
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />

          <textarea 
            id="message" 
            name="message" 
            placeholder="Your Message" 
            rows={6} 
            className="p-4 rounded-lg bg-[#1a143e] border border-[#2A0E61] text-white focus:border-[#7042f8] outline-none transition" 
            required 
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm" />

          <button 
            type="submit" 
            disabled={state.submitting} 
            className="py-4 px-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
