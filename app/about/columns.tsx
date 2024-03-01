import { motion } from 'framer-motion'
import React from 'react'

import localfont from "next/font/local"

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
const medium = localfont(
    {
        src: [
            {
                path: "../../OTF/GeneralSans-Medium.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)


const Columns = () => {
    const containerVariants = {
        hidden: { x: '100vw', opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 120 }
        },
        exit: { x: '100vw', opacity: 0, transition: { ease: 'easeInOut' } }
    };

    const textVariants = {
        hidden: { x: '-100vw', opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 120, delay: 0.2 }
        },
        exit: { x: '-100vw', opacity: 0, transition: { ease: 'easeInOut' } }
    };

    return (
        <motion.div className='bg-white text-black w-full py-16 flex gap-8  px-8'
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}>
            <motion.div className="min-w-[750px] 2xl:w-2/3 lg:h-[480px] border border-[#D7D7D7] px-8 py-8"
                variants={containerVariants}>
                <motion.span className={`text-[2rem] text-[#8980F5] ${semi.className} `}
                    variants={textVariants}>
                    Empowering Students to Code, Complete, and Conquer
                </motion.span>
                <motion.p className={`text-[1.25rem] pt-6 leading-[2.5rem] text-[#544D49] ${medium.className}  `}
                    variants={textVariants}>
                    At BrightIntern, we&apos;ve recognized an undeniable gap between the world of
                    learning and the demands of the workforce. We firmly believe that the key
                    to bridging this gap lies in providing students with opportunities to work
                    on real-time projects and test their skills. It&apos;s this belief that has driven us
                    to create a platform dedicated to empowering every student to apply their
                    skills in Codeships and leading them to best internships in tech with
                    proof-of-code
                </motion.p>
            </motion.div>
            <motion.div className="min-w-[375px] 2xl:w-1/3 lg:h-[480px] border border-[#D7D7D7] px-8 py-8 text-[#544D49]"
                variants={containerVariants}>
                <motion.p className={`text-[1.25rem]  ${medium.className} pr-4 leading-[3rem]`}
                    variants={textVariants}>
                    Our <motion.span className='text-[#FF822D]' variants={textVariants}>goal</motion.span> is to empower
                    students to build <motion.span className='text-[#FF822D]' variants={textVariants}>projects
                    packed with meaningful
                    code contributions</motion.span> that
                    put their skills in the
                    spotlight & help them
                    secure dream internships
                    in tech
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

export default Columns