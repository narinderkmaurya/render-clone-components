"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Pattern() {
    const variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 },
    };
    const [ref, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes back into view
    });
    return (
        <div ref={ref} className="">
            {inView && (
                <div className="hidden 2xl:block">
                    <div className="flex">
                        <motion.div className="w-[200px] h-[100px] brall " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px]  " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px] brall " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[200px] h-[100px] brall2 " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px]  " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px] brall " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[200px] h-[100px]" initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[530px] 2xl:flex-1 h-[100px] brall " initial="hidden" animate="visible" variants={variants} />
                    </div>
                    <div className="flex">
                        <motion.div className="w-[100px] h-[100px]  " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[221px] " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[220px]  brall " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[200px] h-[100px]" initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px]  " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px] brall" initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px] " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[200px] h-[100px] brall" initial="hidden" animate="visible" variants={variants} />
                    </div>
                </div>
            )}


            {inView && (
                <div className="block 2xl:hidden">
                    <div className="flex">
                        <motion.div className="w-[100px] h-[100px] brall " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px]  " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px] brall " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[200px] h-[100px] brall2 " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px]  " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px] brall " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[200px] h-[100px]" initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[380px] h-[100px] brall " initial="hidden" animate="visible" variants={variants} />
                    </div>
                    <div className="flex">
                        <motion.div className="w-[100px] h-[100px]  " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[221px] brall " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px]  " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[200px] h-[100px]" initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px] brall " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[100px] h-[100px] " initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[200px] h-[100px] brall" initial="hidden" animate="visible" variants={variants} />
                        <motion.div className="w-[380px] h-[100px] " initial="hidden" animate="visible" variants={variants} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Pattern;