"use client";

import React from 'react'
import { motion, useInView } from 'framer-motion'
import localfont from "next/font/local"
import Columns from './components/column'
import Accordion from './components/accordion'
import Marquee from '../codeships/marquee'


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
                path: "../../OTF/GeneralSans-Regular.otf"
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
        <div className="" ref={ref}>
            <motion.div
                className='min-h-[580px] max-h-[580px] bg-[#1B1B1B] pt-40 items-start justify-center w-full flex'
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={textVariant}
            >
                <h1 className={`text-[3rem] ${semi.className} text-center `} >
                    Complete in coderships to get <br />
                    dream internship offers
                </h1>
            </motion.div>

            <motion.div className="h-[200px] bg-black flex items-center justify-center"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={imageVariant}
            >
                <h2 className='text-[1.895rem]'>
                    Your passport to land dream internships in tech
                </h2>
            </motion.div>

            <Columns/>
            <Accordion/>
        </div>
    )
}

export default StudentPage