"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import c from "./c.png"
import localfont from "next/font/local"
import { useInView } from "react-intersection-observer"

const semi = localfont(
  {
    src: [
      {
        path: "../../../OTF/GeneralSans-Semibold.otf"
      }
    ],
    variable: "--font-regularGeneral"
  }
)

const regular = localfont(
  {
    src: [
      {
        path: "../../../OTF/GeneralSans-Medium.otf"
      }
    ],
    variable: "--font-regularGeneral"
  }
)

export const Header = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const animationVariant = {
    visible: { y: 0, opacity: 1, transition: { type: "spring", duration: 1 } },
    hidden: { y: 50, opacity: 0 },
  }

  return (
    <header className="" ref={ref}>
      <motion.div className="h-0" initial="hidden" animate={inView ? "visible" : "hidden"} variants={animationVariant}>
        <div className="flex w-full justify-between ">
          <div className="border-b border-r w-[223px] h-[100px]  border-[#D7D7D750]" />
          <div className="flex gap-[100px]">
            <div className="border border-t-0 justify-end w-[100px] h-[100px]  border-[#D7D7D750] " />
            <div className="w-[100px] h-[100px] bg-[#D9D9D940]" />
          </div>
        </div>
        <div className="flex justify-end w-full -ml-[100px] relative">
          <div className="w-[100px] h-[100px] object-contain py-3 px-3  bg-[#2e2e2e]" />
        </div>
      </motion.div>
      <motion.div className="items-center justify-center pt-[220px] flex flex-col space-y-12 w-full" initial="hidden" animate={inView ? "visible" : "hidden"} variants={animationVariant}>

        <div className="text-[2.25rem] text-center">
          <h1 className={` ${semi.className}  `}>
            Unlock your potential,
          </h1>
          <h2 className={` ${semi.className}  `}>
            <span className='text-[#8980F5]'>#ProveYourSkills</span> with Codeships
          </h2>
        </div>

        <div className={`text-[1.5rem] text-center border-2 border-[##D7D7D750] w-[650px] h-[220px] py-14 ${regular.className}`}>
          Codeships are here to revolutionize the way <br />
          coding skills are showcased and dream  internships <br />
          are secured
        </div>

        <div>
          <div className="flex w-full justify-end relative ">
            <div className="h-[100px] w-[100px] border-[#D7D7D750] border border-b-0" />
          </div>
          <div className="flex w-full h-[50px] columns-3 ">
            <div className="border-[#D7D7D750] border border-l-0 w-[500px]" />
            <div className="border-[#D7D7D750] border border-l-0 border-r-0 w-[300px]" />
            <div className="border-[#D7D7D750] border border-r-0 w-[480px] xl:w-screen" />
          </div>
        </div>
      </motion.div>
    </header>
  )
}