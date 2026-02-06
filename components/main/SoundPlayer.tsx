"use client";
import { useEffect, useRef } from "react";

const SoundPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const play = () => audioRef.current?.play();
    window.addEventListener("click", play, { once: true });
    return () => window.removeEventListener("click", play);
  }, []);

  return <audio ref={audioRef} src="/sounds/lofi-track.mp3" loop hidden />;
};
export default SoundPlayer;
