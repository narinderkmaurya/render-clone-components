"use client"

import React from 'react'
import localfont from "next/font/local"
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'



const regular = localfont(
  {
    src: [
      {
      path:"../OTF/GeneralSans-Medium.otf"
      }
    ],
    variable:"--font-regularGeneral"
  }
)

const Para = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    useEffect(() => {
        isInView ? console.log("Component entered the viewport") : console.log("Component left the viewport");
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : ""}
            transition={{ duration: 0.5, repeatType: "reverse" }}
            className={`pt-32 text-center  text-[1.5rem] ${regular.className} leading-[3rem] text-[#2D2323]  `} style={{fontWeight:"500"}}
        >
            <p>
                In today's competitive tech landscape, it's not enough to simply list <br />
                your skills or mention some capstone projects on a resume. <br />
                Traditional resumes often fail to adequately convey your coding <br />
                abilities. Many students struggle to gain practical experience in the <br />
                tech industry, making it difficult to stand out to potential employers.
            </p>
        </motion.div>
    )
}

export default Para