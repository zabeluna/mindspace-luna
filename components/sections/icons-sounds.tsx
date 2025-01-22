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
    <div className="flex md:space-x-14 space-x-7 items-center justify-center md:mt-24 mt-16">
      <div className="space-y-7">
        <Data icon1={Water} icon2={Water} sound="/water-montain.mp3" />

        <Data icon1={Forest} icon2={Forest} sound="/forest.mp3" />
      </div>
      <div className="space-y-7">
        <Data icon1={Rain} icon2={Rain} sound="/rain.mp3" />

        <Data icon1={Book} icon2={Book} sound="/book.mp3" />
      </div>
      <div className="space-y-7">
        <Data icon1={Wind} icon2={Wind} sound="/winds.mp3" />

        <Data icon1={Computer} icon2={Computer} sound="/keyboard.mp3" />
      </div>
      <div className="space-y-7">
        <Data icon1={Fire} icon2={Fire} sound="/fire.mp3" />

        <Data icon1={Coffee} icon2={Coffee} sound="/cafe.mp3" />
      </div>
    </div>
  );
};

export default IconsSounds;
