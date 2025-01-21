import Footer from "@/components/sections/footer";
import IconsSounds from "@/components/sections/icons-sounds";
import NavBar from "@/components/sections/navbar";
import Timer from "@/components/sections/timer";

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <Timer />
      <IconsSounds />
      <Footer />
    </div>
  );
}
