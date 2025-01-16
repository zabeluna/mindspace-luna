"use client"

import { ReactNode, useRef } from "react";
import { useState } from "react";

export type IconsSounds = {
  id: string;
  icon: ReactNode;
  sound: string;
  volume: number;
  hasVolume: boolean;
};

export default function Icons({
    id,
    icon,
    sound,
    volume,
    hasVolume,
 } : IconsSounds) {

   const [sounding, setSounding] = useState(0.5);
   const musicRef = useRef(null);
   

   function running(){

   }

   function stopRunning(){

   }

    return(
    <div>


    </div>
    );
 } 
