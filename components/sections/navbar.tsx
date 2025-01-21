import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <div className="w-full h-24 bg-green-950 shadow-lg space-x-24 flex justify-between">
        <Link className="text-lg pl-10 pt-8 md:text-xl md:pl-24" href="/">
          mindspace
        </Link>
        <div className="pt-8 md:pr-24 flex space-x-8">
          <div className="text-lg md:text-xl">
            <Link href="/about">about</Link>
          </div>
          <a href="https://www.izabelleluna.com/">
            <Button>hey! click here</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
