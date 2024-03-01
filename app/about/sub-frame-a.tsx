"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { NextPage } from "next";
import react from "@/public/Group 44.png"
import Image from "next/image";


import localfont from "next/font/local"




const regular = localfont(
  {
    src: [
      {
      path:"../../OTF/GeneralSans-Regular.otf"
      }
    ],
    variable:"--font-regularGeneral"
  }
)


const textVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 50 },
};

const imageVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.8 },
};

const SubFrameA: NextPage = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section ref={ref} className="w-[1150px] flex flex-col items-end justify-start py-0 pr-0 pl-5 box-border max-w-full text-left text-17xl text-white ">
      <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={imageVariants} className="w-[546px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className=" [border:none] pt-[22px] px-[19px] pb-[23px] bg-gainsboro-500 flex flex-row items-center justify-center z-[1]">
          <div className="h-[100px] w-[100px] relative bg-gainsboro-500 hidden" />
          <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={imageVariants}>
            <Image
              className="h-[55px] w-[61.7px] relative z-[2]"
              alt=""
              src={react}
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={textVariants} className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq975:flex-wrap mq975:justify-center  ">
        <div className="w-[510px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[500px] max-w-full mq700:min-w-full ">
          <motion.h2 initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={textVariants} className={`m-0  h-[232px] relative   font-semibold  inline-block z-[1] mq450:text-[36px] mq950:text-[36px] ${regular.className} `  }>
            <p className="  xl:-ml-[250px] 2xl:[margin-block-start:0] [margin-block-end:12px]">
              Empowering the next
            </p>
            <p className="  xl:-ml-[250px] 2xl:[margin-block-start:0] [margin-block-end:12px]">
              generation of student coders
            </p>
            <p className="  xl:-ml-[250px] 2xl:[margin-block-start:0] [margin-block-end:12px]">{`to reach new heights through `}</p>
            <p className="  xl:-ml-[250px] m-0">
              <span>{`innovative `}</span>
              <span className="text-[#8980f5]">Codeships</span>
              <span className="text-white">{` `}</span>
            </p>
          </motion.h2>
        </div>
        <div className="w-[423px] flex flex-row items-start justify-start gap-[0px_100px] min-w-[423px] max-w-full mq700:min-w-full mq450:flex-wrap mq450:gap-[0px_100px] mq975:flex-1">
          <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={imageVariants}
            className="[border:none] [outline:none] bg-[#2e2e2e] h-[100px] w-[100px] relative min-w-[100px] z-[1] mq450:flex-1"
          />
          <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={imageVariants} className="h-[100px] flex-1 relative  box-border min-w-[145px] z-[1] border-t-[1px] border-solid border-lightgray-200 border-b-[1px] border-l-[1px]" />
        </div>
      </motion.div>
    </section>
  );
};

export default SubFrameA;