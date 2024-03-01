"use client";

import React from 'react'
import localfont from "next/font/local"
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'



const regular = localfont(
  {
    src: [
      {
      path:"../../../OTF/GeneralSans-Regular.otf"
      }
    ],
    variable:"--font-regularGeneral"
  }
)


const Second = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    const textVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 100, damping: 10 }
        },
    }

    return (
        <motion.div
            className= {`bg-white text-[#544D49] flex items-start py-32 px-72 text-[1.25rem] justify-center leading-[2.25rem] ${regular.className} `}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textVariant}
        >
            <div className="">
                <motion.p
                    initial="hidden"
                    animate={controls}
                    variants={textVariant}
                >
                    Coderships are curated, project-based challenges designed for student coders
                    like you to put your skills to test and accomplish the challenge of  building real-
                    time applications alongside gaining real-time project experience

                </motion.p>

                <motion.p
                    className='pt-24'
                    initial="hidden"
                    animate={controls}
                    variants={textVariant}
                >
                    Coderships aren&apos;t just about coding; it&apos;s about turning your potential into
                    results. Coderships provide you with the platform to showcase your creativity,
                    problem-solving abilities, and technical expertise. Whether you&apos;re a novice
                    coder or a student with past internship experience, there&apos;s a challenge waiting
                    for you to tackle.
                </motion.p>


                <motion.h2 className=  {`${regular.className} text-[2.1rem] text-[#8980f5] pt-20  ` } style={{ fontWeight:"600"  }}
                    initial="hidden"
                    animate={controls}
                    variants={textVariant}
                >
                It&apos;s time to test your skills with Coderships
                </motion.h2>
            </div>
        </motion.div>
    )
}

export default Second