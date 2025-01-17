"use client"

import { icons, LucideIcon } from "lucide-react";
import { ReactNode, useRef } from "react";
import { useState } from "react";

export type IconsSounds = {
  icon: ReactNode;
  sound: string;
  volume: number;
};

export default function Icons({
    icon,
    sound,
    volume,
 } : IconsSounds) {

   const [sounding, setSounding] = useState(0.5);
   const musicRef = useRef(null);
   

   function running(){

   }

   function stopRunning(){

   }

    return(
    <div>
     <div className="w-[] h-[]">{icon}</div>
     
    </div>
    );
 } 
