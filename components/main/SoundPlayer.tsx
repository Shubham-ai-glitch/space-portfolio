"use client";
import React, { useState, useRef } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

const SoundPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-[60]">
      <audio ref={audioRef} src="/bg-sound.mp3" loop />
      
      {/* Glow Effect Background */}
      <div className={`absolute -inset-2 rounded-full blur-xl opacity-75 transition-all duration-500 ${isPlaying ? 'bg-purple-600 animate-pulse' : 'bg-transparent'}`}></div>
      
      <button
        onClick={togglePlay}
        className="relative group flex items-center justify-center w-16 h-16 rounded-full bg-[#030014] border-2 border-[#7042f88b] text-white hover:border-[#b49bff] hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(112,66,248,0.5)]"
      >
        {isPlaying ? (
          <div className="flex flex-col items-center">
             <SpeakerWaveIcon className="h-8 w-8 text-cyan-400 animate-bounce" />
             <span className="text-[8px] font-bold text-cyan-400 mt-1">ON</span>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <SpeakerXMarkIcon className="h-8 w-8 text-gray-400" />
            <span className="text-[8px] font-bold text-gray-400 mt-1">OFF</span>
          </div>
        )}

        {/* Hover Tooltip */}
        <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-[#7042f8] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
          {isPlaying ? "Mute Music" : "Play Music"}
        </span>
      </button>
    </div>
  );
};

export default SoundPlayer;
