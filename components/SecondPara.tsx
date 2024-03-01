"use client"

import React from 'react'
import Image from 'next/image'
import green from "@/public/green.png"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import localfont from "next/font/local"

const regular = localfont(
  {
    src: [
      {
      path:"../OTF/GeneralSans-Semibold.otf"
      }
    ],
    variable:"--font-regularGeneral"
  }
)

const medium = localfont(
    {
      src: [
        {
        path:"../OTF/GeneralSans-Medium.otf"
        }
      ],
      variable:"--font-regularGeneral"
    }
  )

const SecondPara = () => {
    const { ref, inView } = useInView()
    return (
        <div ref={ref} className='pb-32 text-black text-center space-y-4'>
            <motion.h3
                className={` ${regular.className}  tracking-[-0.015em] text-[2.5rem]`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ y: 0, opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, once: true }}
            >
                A new way to land dream internships in tech
            </motion.h3>
            <motion.div
                className="h-0 relative left-[600px] bottom-4 2xl:left-[720px]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ y: 0, opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, once: true }}
            >
                <Image src={green} alt="green" />
            </motion.div>
            <motion.p
                className={` ${medium.className} text-[22px] text-[#544D49] leading-[2.75rem]`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ y: 0, opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, once: true }}
            >
                At BrightIntern, we&apos;re on a mission to empower students to realize their full coding <br />
                potential and seize the best internship opportunities available. Through our innovative <br />
                platform, students can harness the power of Codeships to showcase their skills, stand <br />
                out to top employers, and secure referrals to their dream companies.
            </motion.p>
        </div>
    )
}

export default SecondPara