"use client"


import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { NextPage } from "next";
import localfont from "next/font/local";

const regular = localfont({
  src: [
    {
      path: "../../OTF/GeneralSans-Medium.otf",
    },
  ],
  variable: "--font-regularGeneral",
});

const slideUpVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 50 },
};

const NewFrameC: NextPage = () => {
  const [ref, inView] = useInView();



  return (
    <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-xl ">
      <div ref={ref}  className="self-stretch flex flex-row items-end justify-between py-0 pr-[3px] pl-0 box-border gap-[20px] max-w-full mq950:flex-wrap">
        <div  className=" h-[100px] w-[100px] relative box-border z-[1] border-t-[1px] border-solid border-lightgray-200 border-r-[1px]" />
        <div className=" box-border flex flex-row items-center justify-end py-[53px] pr-[34px] pl-[47px] max-w-full z-[1] border-t-[1px] border-solid border-lightgray-200 border-l-[1px] mq700:pl-[23px] mq700:box-border">
          <div  className="h-[250px] w-[650px] relative  box-border hidden max-w-full border-t-[1px] border-solid border-lightgray-200 border-l-[1px]" />
          <div  className={`w-[609px] relative  font-medium inline-block min-h-[144px] max-w-full z-[2] mq450:text-base text-[1.25rem] leading-[2rem] ${regular.className}`} style={{ fontWeight: "500" }}>
            <p className="[margin-block-start:0] [margin-block-end:12px]">{`We are building a new path for student coders to build `}</p>
            <p className="[margin-block-start:0] [margin-block-end:12px] ">
              real-world projects and work on production-level applications,
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">{`aimed at giving them the project experience to stand out `}</p>
            <p className="m-0">and get dream internship offers</p>
          </div>
        </div>
      </div>
      <footer  className="self-stretch h-[50px] relative  box-border z-[1] border-t-[1px] border-solid border-lightgray-200 border-b-[1px]">
        <div className="absolute top-[0px] left-[0px]  box-border w-full h-full hidden z-[1] border-t-[1px] border-solid border-lightgray-200 border-b-[1px]" />
        <div className="absolute h-full top-[0px] bottom-[0px] left-[247px]  box-border w-[150px] z-[2] border-[1px] border-t-0 border-solid border-lightgray-200" />
      </footer>
    </section>
  );
};

export default NewFrameC;