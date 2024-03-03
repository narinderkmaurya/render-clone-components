

import { Box } from "@/components/Box";
import Header from "@/components/Header";
import MarqueeAnimation from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Para from "@/components/Para";
import Pattern from "@/components/Pattern";
import SecondPara from "@/components/SecondPara";
import Slider from "@/components/Slider";
export default function Home() {
  return (
    <main className="">
      <Navbar />

      <div className="2xl:block hidden overflow-hidden">
        <Header />
        <MarqueeAnimation />
        <div className="bg-white">
          <Para />
          <Box />
          <SecondPara />
          <Pattern />
          <Slider />
        </div>
      </div>

      <div className="2xl:hidden overflow-hidden">
        <Header />
        <MarqueeAnimation />
        <div className="bg-white">

          <Para />
          <Box />
          <SecondPara />
          <Pattern />
          <Slider />
        </div>
      </div>
    </main>
  );
}
