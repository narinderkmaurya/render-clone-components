"use client"

import Image from "next/image"
import reactangleTop from "@/public/Header/Rectangle 80.svg";
import smallreactangleTop from "@/public/Header/Rectangle 71.png";
import left from "@/public/Header/Rectangle 74.png"
import npm from "@/public/Header/Group 54.png"
import java from "@/public/Header/Group 55.png"
import rotate from "@/public/Header/Group 37.svg"
import green from "@/public/Header/Vector.svg"
import ex from "@/public/ex.png"

import { motion } from 'framer-motion';
import localfont from "next/font/local"
import newLocal from "next/font/local"



const semibold = localfont(
    {
        src: [
            {
                path: "../OTF/GeneralSans-Semibold.otf"
            }
        ],
        variable: "--font-semiboldSans"
    }
)


const medium = newLocal(
    {
        src: [
            {
                path: "../OTF/GeneralSans-Medium.otf"
            }
        ],
        variable: "--font-MediumSans"
    }
)




const Header = () => {
    return (
        <header className=" bg-[#1B1B1B] overflow-hidden">
            <div className="flex h-0 2xl:left-[130px] relative">
                <div className="w-[100px] h-[50px] br border-[#d7d7d7] " />
                <div className="w-[120px] h-[50px]  br  border-[#d7d7d7]  bg-[#D9D9D940]" />
            </div>

            <div className="left-[500px] relative h-0">
                <div className="w-[120px] h-[50px] border-[#d7d7d7]  bg-[#D9D9D940]" />
            </div>


            <div className="left-[725px] 2xl:left-[876px] relative h-0 border-[#d7d7d7] ">
                <div className="w-[355px] h-[50px] br   " />
            </div>


            <motion.div className="h-0  lg:top-[51px] 2xl:left-[130px] 2xl:top-[51px] relative " initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}>
                <Image src={java} alt="" />
            </motion.div>
            <motion.div className="h-0 right-0 top-[120px] absolute justify-end " initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}>
                <Image src={npm} alt="" className="h-[100px] w-[200px] object-left object-cover 2xl:hidden" />
                <Image src={npm} alt="" className="2xl:block hidden" />
            </motion.div>
            <motion.div className="h-0 right-[200px] lg:right-[200px] 2xl:right-[334px]  top-[220px] absolute justify-end" initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}>
                <Image src={ex} alt="ex" />
            </motion.div>
            <motion.div className="h-0 top-[250px] 2xl:top-52 relative left-[270px] 2xl:left-[350px] " initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }} >
                <Image src={rotate} alt="" />
            </motion.div>
            <motion.div className="h-0 top-[450px] 2xl:top-[390px] relative 2xl:left-[460px] md:left-[300px] lg:left-[340px]" initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }} >
                <Image src={green} alt="" />
            </motion.div>
            <div className="flex items-center  justify-center min-h-[900px] max-h-[900px] w-full">
                <div className="text-center px-56 2xl:px-80 space-y-6 md:pt-24 " >
                    <motion.h1
                        className={`text-[3rem] leading-[4.75rem] ${semibold.variable} font-semibold-sans `}
                        style={{ fontWeight: "400" }}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        Reimagining the way students
                        <br />
                        get dream internship opportunities
                    </motion.h1>

                    <motion.p
                        className={`text-[1.5rem] ${medium.variable} leading-[2.75rem] font-medium-sans text-[#7A7A7A]`}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        Ever felt your skills didn’t get the spotlight they deserved? Let your skills <br />
                        speak through virtual internship challenges to showcase your work and <br />
                        stand out with proof-of-skills
                    </motion.p>

                    <motion.button
                        className="h-[50px] rounded-[10px] w-[158px] mt-4 bg-[#6941c6]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        Get Started
                    </motion.button>

                </div>
            </div>

        </header>
    )
}

export default Header