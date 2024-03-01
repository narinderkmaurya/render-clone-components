"use client";


import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import Google from "@/public/Header/Group 47.png"
import Image from 'next/image'


import newLocal from "next/font/local"





const medium = newLocal(
    {
      src: [
        {
        path:"../OTF/GeneralSans-Medium.otf"
        }
      ],
      variable:"--font-MediumSans"
    }
  )


const MarqueeAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const textAnimation = {
        visible: { opacity: 1, y: 0, x:0, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
        hidden: { opacity: 0, y: 20, x: -50 }
    };

    const marqueeAnimation = {
        visible: { opacity: 1, x: 0, transition: { duration: 1, type: "spring", stiffness: 100 } },
        hidden: { opacity: 0, x: -50 }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className='bg-[#0c0c0c] h-[350px] w-full flex items-center lg:pl-16 2xl:pl-32 gap-20 '
        >
            <motion.div className="w-2/5" variants={textAnimation}>
                <motion.p
                    className={`${medium.variable} font-medium-sans  text-[28px]  leading-[3.5rem] 2xl:text-[24px] 2xl:pr-24`}
                    style={{fontWeight:"500"}}
                    variants={textAnimation}
                >
                    Win referrals to your dream
                    companies by showcasing <br />
                    your skills through Codeships
                </motion.p>
            </motion.div>
            <motion.div className="w-3/5 space-y-6 " variants={marqueeAnimation}>
                <Marquee className='' gradient={true} gradientWidth={120} gradientColor='#0c0c0c' >
                    <div className="flex">
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                    </div>
                </Marquee>
                <Marquee className='' direction='right' gradient={true} gradientWidth={120} gradientColor='#0c0c0c'>
                    <div className="flex">
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                    </div>
                </Marquee>
            </motion.div>
        </motion.div>
    )
}

export default MarqueeAnimation