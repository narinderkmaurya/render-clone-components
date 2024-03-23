"use client"

import type { NextPage } from "next";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SubFrameA from "./sub-frame-a";
import NewFrameC from "./sub-frame-c";
import Columns from "./columns";


import localfont from "next/font/local"
import Navbar from "@/components/Navbar";
import MainFooter from "@/components/mainFooter";




const regular = localfont(
  {
    src: [
      {
        path: "../../OTF/GeneralSans-Medium.otf"
      }
    ],
    variable: "--font-regularGeneral"
  }
)





const AboutPage: NextPage = () => {
  const { ref, inView } = useInView();


  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="">
      <Navbar />

      <div
        ref={ref}
        className="">
        <div className="w-full relative flex flex-col items-end justify-start gap-[74px_0px] tracking-[normal] mq700:gap-[74px_0px] mq450:gap-[74px_0px] bg-[#1B1B1B]">
          <div  className="self-stretch h-[730px] relative bg-gray-100 hidden" />
          <SubFrameA />
          <NewFrameC />
        </div>
        <Columns />
        <div
         
          className={`bg-[#FFD5D2] h-[212px] w-full flex items-center justify-center text-[72px] text-[#FF553D80] ${regular.className} `}
          style={{ fontWeight: "700" }} >
          {" < Code your path to success > "}
        </div>


        <div className="flex justify-between bg-white text-black px-16 py-16">
          <div  className="">
            <span className={` text-[3rem] ${regular.className} text-[#8980F5]`} style={{ fontWeight: "600" }}>Our Vision</span>
            <p className={`text-[1.5rem] text-[#544D49]  pt-6 pr-20 ${regular.className} `}>
              Building a community of
              workforce ready student
              coders with proof of projects
            </p>
          </div>

          <div className={` max-w-[731px] px-6 py-6 border text-[#544D49]  ${regular.className} text-[1.25rem] leading-[2.5rem]`} style={{ fontWeight: "500" }}>
            We are dedicated to unlocking the full potential of student coders by
            providing a platform where their coding skills and projects pave the way to
            dream internships. We envision a future where Coderships build students&apos;
            career confidence by showcasing their coding competence in building
            real-world applications
          </div>
        </div>
      </div>
      <MainFooter/>
    </div>
  );
};

export default AboutPage;