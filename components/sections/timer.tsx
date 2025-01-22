"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Play from "@/public/play.png";
import Reset from "@/public/rotate-ccw.png";
import Pause from "@/public/pause.png";
import Image from "next/image";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const startRef = useRef(0);
  

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [running]);

  function startTime() {
    setRunning(true);
    startRef.current = Date.now() - time;
  }

  function stopTime() {
    setRunning(false);
  }

  function resetTime() {
    setTime(0);
    setRunning(false);
  }

  function formatTime() {
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let seconds = Math.floor((time / 1000) % 60);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  return (
    <div>
      <h1 className="md:mt-44 mt-20 md:text-4xl text-3xl text-center">
        sit for a while, turn on the sound and relax.
      </h1>

      <div className="flex justify-center space-x-2 mt-16">
        <Button
          onClick={resetTime}
          className="w-[50px] h-[50px] bg-green-900 hover:bg-green-700 rounded-full"
        >
          <Image src={Reset} width={100} height={100} alt="Reset" />
        </Button>
        <div className="w-[160px] h-[50px] rounded-full bg-green-900 text-xl text-center pt-3 display">
          {formatTime()}
        </div>
        <div>
          {running ? (
            <Button
              onClick={stopTime}
              className="w-[50px] h-[50px] bg-green-900 hover:bg-green-700 rounded-full"
            >
              <Image src={Pause} width={100} height={100} alt="Pause" />
            </Button>
          ) : (
            <Button
              onClick={startTime}
              className="w-[50px] h-[50px] bg-green-900 hover:bg-green-700 rounded-full"
            >
              <Image src={Play} width={100} height={100} alt="Start" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
