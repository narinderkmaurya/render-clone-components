import React from 'react'
import localfont from "next/font/local"
import Image from 'next/image'
import first from "./first.svg"


const semibold = localfont(
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


const Gateway = () => {
    return (
        <div className={` ${regular.className} flex justify-center items-center px-16 py-20 `} >
            <div className="w-2/3">
                <h2 className={`text-[2rem] text-[#8980f5]   ${semibold.className} pr-44 `}>
                    Coderships - A new gateway for top
                    1% internship opportunities in tech
                </h2>

                <p className='text-[1.25rem] text-[#544D49] leading-[2.5rem] pr-32 pt-6 '>
                    As a platform aimed at building the community of top 1% interns,
                    Coderships are highly selective and students who are committed
                    to showcase their skills to startups and excel in their career are only
                    awarded with membership with acceptance rate less than 25%
                </p>
            </div>
            <div className="">
                <Image src={first} alt=""/>
            </div>
        </div>
    )
}

export default Gateway