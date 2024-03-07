"use client";

import React from 'react'
import { motion, useInView } from 'framer-motion'
import localfont from "next/font/local"
import Columns from './components/column'
import Accordion from './components/accordion'
import Marquee from '../codeships/marquee'
import MainFooter from '@/components/mainFooter';
import { Typewriter } from 'react-simple-typewriter'
import Sail from './components/sail';
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


const textVariant = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
}

const imageVariant = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
}



const StudentPage = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: false })
    return (
        <div className="" >
            <div
                className='min-h-[580px] max-h-[580px] bg-[#1B1B1B]  items-center justify-center w-full flex flex-col'
                
            >
                <h1 className={`text-[3rem] ${semi.className} text-start `} >
                    <span className={` ${regular.className} `}>Compete in coderships to get</span> <br />
                    <Typewriter
                        words={['dream internship offers', 'refferal dream companies']}
                        loop={0}
                        cursor
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>

                <p className='px-80 leading-[2.5rem] text-[#FFFFFF60]'>
                    Are you ready to take your coding skills to the next level & land your dream
                    internship? Look no further than Coderships is the ultimate platform for
                    students to upskill, compete, showcase & win dream internship offers.
                </p>
            </div>

            <div className="h-[200px] bg-black flex items-center justify-center"
                
            >
                <h2 className='text-[1.895rem]'>
                    Your passport to land dream internships in tech
                </h2>
            </div>

            <Columns />
            <Accordion />
            <Sail/>
            <MainFooter />
        </div>
    )
}

export default StudentPage