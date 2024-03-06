"use client";

import React from 'react'
import { motion } from 'framer-motion'
import localfont from "next/font/local"
import { useInView } from 'react-intersection-observer'

const semibold = localfont(
    {
        src: [
            {
                path: "../../../OTF/GeneralSans-Semibold.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)
const regular = localfont(
    {
        src: [
            {
                path: "../../../OTF/GeneralSans-Regular.otf"
            }       
        ],
        variable: "--font-regularGeneral"
    }
)

const Black = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className='min-h-[1018px] w-full flex flex-col  items-center bg-[#171717'>
            <motion.h3
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={` ${semibold.className} pt-32 text-[2rem] `}  >
                Why Coderships?
            </motion.h3>
            <div className="flex pt-16">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-[575px] border border-[#4A4B52] h-[300px] py-3">
                    <span className={` px-6 text-[1.4rem] ${regular.className}  `} style={{ fontWeight: "600" }} >
                        Demand for Practical Experience
                    </span>
                    <div className="py-3 border-[#D7D7D733]border-2">
                        <hr />
                    </div>
                    <p className={` px-6 pr-8 pt-2 leading-[2.5rem] text-[1.125rem] ${regular.className} `}>
                        With many employers seeking candidates with practical, hands-on
                        experience, Coderships provide students with the opportunity
                        to gain real-world experience by working on production-level
                        projects that mirror real-time applications.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-[575px] border border-[#4A4B52] h-[300px] py-3">
                    <span className={` px-6 text-[1.4rem] ${regular.className}  `} style={{ fontWeight: "600" }} >
                        Skills Validation
                    </span>
                    <div className="py-3 border-[#D7D7D733]border-2">
                        <hr />
                    </div>
                    <p className={` px-6 pr-8 pt-2 leading-[2.5rem] text-[1.125rem] ${regular.className} `}>
                        By requiring students to showcase their skills through real-time
                        projects, Coderships serves as a validation of their proficiency in
                        programming languages and software development, making it
                        easier for startups to identify top talent.
                    </p>
                </motion.div>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#693ee0] w-[1150px] px-6 my-6 ">
                <div className="flex items-center gap-6 py-12">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? {opacity: 1, x:0} : { }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="w-[545px] border border-[#4A4B52] h-[350px] py-3 bg-[#171717]  ">
                        <span className={` px-6 text-[1.4rem] ${regular.className}  `} style={{ fontWeight: "600" }} >
                        Empowerment Through Action
                        </span>
                        <div className="py-3 border-[#D7D7D733]border-2">
                            <hr />
                        </div>
                        <p className={` px-6 pr-8 pt-2 leading-[2.5rem] text-[1.125rem] ${regular.className} `}>
                        Coderships empowers students to take control of their internship search and actively demonstrate their skills. Instead of passively submitting applications and hoping for the best, students can proactively build projects that showcase their coding skills and attract the attention of potential employers
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? {opacity: 1, x:0} : { }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="w-[545px] border border-[#4A4B52] h-[350px] py-3 bg-[#171717]  ">
                        <span className={` px-6 text-[1.4rem] ${regular.className}  `} style={{ fontWeight: "600" }} >
                            Alignment with Industry Needs
                        </span>
                        <div className="py-3 border-[#D7D7D733]border-2">
                            <hr />
                        </div>
                        <p className={` px-6 pr-8 pt-2 leading-[2.5rem] text-[1.125rem] ${regular.className} `}>
                            By focusing on building real-time applications, Coderships
                            ensures that students are equipped with the skills and
                            experience needed to meet the demands of the tech
                            industry. This alignment between student projects and
                            industry needs increases the likelihood of landing dream
                            internships and future career opportunities.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Black