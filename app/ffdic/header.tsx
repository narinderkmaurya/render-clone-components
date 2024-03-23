"use client"

import Image from "next/image"
import { motion } from ""
import c from "./c.png"
import localfont from "next/font/local"
import { useInView } from "react-intersection-observer"

const semi = localfont(
    {
        src: [
            {
                path: "../../OTF/GeneralSans-Semibold.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)

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
            <div className="h-0" >
                <div className="flex w-full justify-between ">
                    <div className="">
                        <div className="border-b border-r w-[223px] h-[100px]  border-[#D7D7D750]" />
                        <div className=" w-[100px] h-[100px] border-b border-r border-[#D7D7D750]"/>
                    </div>
                    <div className="flex top-[50px] relative">
                        <div className="w-[100px] h-[100px] bg-[#d9d9d925]" />
                    </div>
                </div>
            </div>
            <div className="items-center justify-center pt-[220px] flex flex-col space-y-12 w-full">

                <div className="text-[2.25rem] text-center">
                    <h1 className={` ${semi.className}  `}>
                        Frontend Development
                    </h1>
                    <h2 className={` ${semi.className}  `}>
                        <span className='text-[#8980F5]'>Dream Internship</span> Challenge
                    </h2>
                </div>

                <div className={`text-[1.5rem] text-[#FFFFFFE5] text-center border-2 border-[##D7D7D750] w-[650px] h-[220px] py-14 ${regular.className}`}>
                    where your journey to landing your dream frontend <br />
                    development internship begins!
                </div>

                <div className="flex w-full justify-end relative top-[49px]">
                    <div className="h-[100px] w-[100px] border-[#D7D7D750] border" />
                </div>
                <div className="flex w-full h-[50px] columns-3 ">
                    <div className="border-[#D7D7D750] border border-l-0 w-[500px]" />
                    <div className="border-[#D7D7D750] border border-l-0 border-r-0 w-[300px]" />
                    <div className="border-[#D7D7D750] border border-r-0 w-[480px] xl:w-screen" />
                </div>
            </div>
        </header>
    )
}

export default Header;