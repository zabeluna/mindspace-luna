import Icons from "./data";
import {Waves} from "lucide-react";
import {Winds} from "@/audio/winds.mp3";


const IconsSounds = () => {
    return(
    <div>
        <Icons
        icon={<Waves/>}
        sound={""}
        volume={0}
        />
    </div>
)
}

export default IconsSounds;