import Data from "./data";
import Water from "@/public/waves.png";
import Wind from "@/public/wind.png";
import Fire from "@/public/flame-kindling.png";
import Book from "@/public/book-open-text.png";
import Computer from "@/public/computer.png";
import Forest from "@/public/tree-pine.png";
import Coffee from "@/public/coffee.png";
import Rain from "@/public/cloud-rain.png";


const IconsSounds = () => {
  return (
    <div className="flex space-x-14 items-center justify-center">
        <div className="space-y-14">
        <Data icon1={Water} icon2={Water} sound="/water.mp3" />

        <Data icon1={Forest} icon2={Forest} sound="/water.mp3" />
      </div>
      <div className="space-y-14">
        <Data icon1={Rain} icon2={Rain} sound="/water.mp3" />

        <Data icon1={Book} icon2={Book} sound="/water.mp3" />
      </div>
      <div className="space-y-14">
      <Data icon1={Wind} icon2={Wind} sound="/water.mp3" />

        <Data icon1={Computer} icon2={Computer} sound="/water.mp3" />
      </div>
      <div className="space-y-14">
      <Data icon1={Fire} icon2={Fire} sound="/water.mp3" />
        
        <Data icon1={Coffee} icon2={Coffee} sound="/water.mp3" />
      </div>
    </div>
  );
};

export default IconsSounds;
