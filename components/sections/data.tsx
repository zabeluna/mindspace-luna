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
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const controlRef = useRef(0);

  function setPlayingState(state: boolean | ((prevState: boolean) => boolean)) {
    setIsPlaying(state);
  }

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      
    }
  });

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
        autoPlay={true}
        ref={audioRef}
        loop
        onPlay={() => setPlayingState(true)}
        onPause={() => setPlayingState(false)}
      ></audio>

      <div>
       
      </div>
    </div>
  );
}
