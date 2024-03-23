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

;
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
            <div className="flex h-0 2xl:left-[130px] relative ">
                <div className="w-[100px] h-[50px] br  border-[#d7d7d7] " />
                <div className="w-[120px] h-[50px] br  border-[#d7d7d7]  bg-[#D9D9D940]" />
            </div>

            <div className="left-[500px] relative h-0">
                <div className="w-[120px] h-[50px] border-[#d7d7d7]  bg-[#D9D9D940]" />
            </div>


            <div className="left-[725px] 2xl:left-[848px] relative h-0 border-[#d7d7d7] ">
                <div className="w-[355px] h-[50px] br   " />
            </div>


            <div className="h-0  lg:top-[51px] 2xl:left-[130px] 2xl:top-[51px] relative " >
                <Image src="https://ik.imagekit.io/internquest/java-min.svg?updatedAt=1709201833586" width={100} height={100} className="w-[100px] h-[100px] py-4 object-contain bg-[#4a4a4a]"  alt="" />
            </div>
            <div className="h-0 right-0 top-[135px] absolute justify-end " >
                <Image src="https://ik.imagekit.io/internquest/npm-min.svg?updatedAt=1709201833487" alt="" width={200} height={100} className="h-[100px] w-[200px]  px-6  object-contain 2xl:hidden bg-[#4a4a4a]" />
                <Image src={npm} alt="" className="2xl:block hidden" />
            </div>
            <div className="h-0 right-[200px] lg:right-[200px] 2xl:right-[333px]  top-[235px] absolute justify-end" >
                <Image src="https://ik.imagekit.io/internquest/express-min.svg?updatedAt=1709201833468" width={100} height={100} alt="ex" className="w-[100px] h-[100px] bg-[#4a4a4a] px-4 object-contain " />
            </div>
            <div className="h-0 top-[250px] 2xl:top-52 relative left-[270px] 2xl:left-[350px] "  >
                <Image src={rotate} alt="" />
            </div>
            <div className="h-0 top-[450px] 2xl:top-[450px] relative 2xl:left-[500px] md:left-[300px] lg:left-[340px]"  >
                <Image src={green} alt="" />
            </div>
            <div className="flex items-center  justify-center min-h-[900px] max-h-[900px] w-full">
                <div className="text-center px-56 2xl:px-80 space-y-6 md:pt-24 " >
                    <h1
                        className={`text-[3rem] leading-[4.75rem] ${semibold.variable} font-semibold-sans `}
                        style={{ fontWeight: "400" }}
                       
                    >
                        Reimagining the way students
                        <br />
                        get dream internship opportunities
                    </h1>

                    <p
                        className={`text-[1.5rem] ${medium.variable} leading-[2.75rem] font-medium-sans text-[#7A7A7A]`}
                       
                    >
                        Ever felt your skills didn’t get the spotlight they deserved? Let your skills <br />
                        speak through virtual internship challenges to showcase your work and <br />
                        stand out with proof-of-skills
                    </p>

                    <button
                        className="h-[50px] rounded-[10px] w-[158px] mt-4 bg-[#6941c6]"
                    >
                        Get Started
                    </button>

                </div>
            </div>

        </header>
    )
}

export default Header