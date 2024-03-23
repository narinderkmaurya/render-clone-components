"use client";

import React from 'react'
import localfont from "next/font/local"


import { useInView } from 'react-intersection-observer'

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

const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
}

const CodeShipsMarquee = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5
    })

    return (
        <div className={` ${regular.className} bg-white text-black `}>
            <div className="md:block hidden">
                <div className="flex" ref={ref} >
                    <div className='h-[70px] w-[160px] xl:w-full ' />
                    <div className='h-[70px] w-[160px] xl:w-full  border border-r-0 border-[#D7D7D7] flex items-center justify-center text-[1.25rem]' >
                        Next.js
                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border border-r-0 border-[#D7D7D7] flex items-center justify-center text-[1.25rem]' >

                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border border-r-0 border-[#D7D7D7] flex items-center justify-center text-[1.25rem]' >
                        Node.js
                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border border-r-0 border-[#D7D7D7] flex items-center justify-center text-[1.25rem] bg-[#F5EEFF]' >

                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border border-r-0 border-[#D7D7D7] flex items-center justify-center text-[1.25rem]' >
                        Next.js
                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border  border-[#D7D7D7] flex items-center justify-center text-[1.25rem] ' >

                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border-[#D7D7D7] border-b border-t-0 border-r-0 border-l-0 flex items-center justify-center text-[1.25rem]' >
                    </div>
                </div>

                <div className="flex" ref={ref}  >
                    <div className='h-[70px] w-[160px] xl:w-full  bg-[#F5EEFF] border border-l-0 border-r-0 border-[#D7D7D7] ' />
                    <div className='h-[70px] w-[160px] xl:w-full  border-l border-[#D7D7D7] flex items-center justify-center text-[1.25rem]' >
                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center text-[1.25rem]' >
                        TypeScript
                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border-l border-[#D7D7D7] flex items-center justify-center text-[1.25rem]' >
                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border  border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center text-[1.25rem]' >
                        JavaScript

                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border border-b-0 border-t-0 border-r-0 border-[#D7D7D7] flex items-center justify-center text-[1.25rem]' >
                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border border-t-0  border-[#D7D7D7] flex items-center justify-center text-[1.25rem] ' >
                        Siemens
                    </div>
                    <div className='h-[70px] w-[160px] xl:w-full  border-t-0 border border-l-0 border-[#D7D7D7] flex items-center justify-center text-[1.25rem] bg-[#F5EEFF]' >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeShipsMarquee