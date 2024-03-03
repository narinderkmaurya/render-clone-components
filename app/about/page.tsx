"use client"

import type { NextPage } from "next";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SubFrameA from "./sub-frame-a";
import NewFrameC from "./sub-frame-c";
import Columns from "./columns";


import localfont from "next/font/local"
import Navbar from "@/components/Navbar";




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
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="">
        <div className="w-full relative flex flex-col items-end justify-start gap-[74px_0px] tracking-[normal] mq700:gap-[74px_0px] mq450:gap-[74px_0px] bg-[#1B1B1B]">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={controls} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="self-stretch h-[730px] relative bg-gray-100 hidden" />
          <SubFrameA />
          <NewFrameC />
        </div>
        <Columns />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } } }}
          className={`bg-[#FFD5D2] h-[212px] w-full flex items-center justify-center text-[72px] text-[#FF553D80] ${regular.className} `}
          style={{ fontWeight: "700" }} >
          {" < Code your path to success > "}
        </motion.div>


        <div className="flex justify-between bg-white text-black px-16 py-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={controls} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.7 } } }} className="">
            <span className={` text-[3rem] ${regular.className} text-[#8980F5]`} style={{ fontWeight: "600" }}>Our Vision</span>
            <p className={`text-[1.5rem] text-[#544D49]  pt-6 pr-20 ${regular.className} `}>
              Building a community of
              workforce ready student
              coders with proof of projects
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={controls} variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.8 } } }} className={` max-w-[731px] px-6 py-6 border text-[#544D49]  ${regular.className} text-[1.25rem] leading-[2.5rem]`} style={{ fontWeight: "500" }}>
            We are dedicated to unlocking the full potential of student coders by
            providing a platform where their coding skills and projects pave the way to
            dream internships. We envision a future where Coderships build students&apos;
            career confidence by showcasing their coding competence in building
            real-world applications
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;