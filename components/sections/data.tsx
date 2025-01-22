"use client";

import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Image from "next/image";

export type Sounds = {
  sound: any;
  icon1: any;
  icon2: any;
};

export default function Data({ sound, icon1, icon2 }: Sounds) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [control, setControl] = useState(false);

  const toggleIsPlaying = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
      setControl(!isPlaying);
    }
  };

  return (
    <div className="justify-items-center">
      {isPlaying ? (
        <button onClick={toggleIsPlaying}>
          <Image src={icon1} width={40} height={40} alt="lucide-react" />
        </button>
      ) : (
        <button onClick={toggleIsPlaying}>
          <Image src={icon2} width={40} height={40} alt="lucide-react" />
        </button>
      )}

      <audio
        src={sound}
        autoPlay={false}
        ref={audioRef}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      ></audio>

      <div className={control ? "visible" : "invisible"}>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          className="bg-white accent-slate-100 w-[50px] h-[2px]"
          onChange={(e) => {
            const volume = parseFloat(e.target.value);
            if (audioRef.current) {
              audioRef.current.volume = volume;
            }
          }}
        />
      </div>
    </div>
  );
}
