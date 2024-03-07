"use client"

import React, { useState, useEffect } from 'react';
import localfont from "next/font/local";
import { useInView } from 'react-intersection-observer';



const semibold = localfont(
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




const Black = () => {


    const [ref, inView] = useInView({
        triggerOnce: true, // Change to false if you want the counter to reset every time it comes into view
    });
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (inView) {
            interval = setInterval(() => {
                setCounter(prevCounter => {
                    if (prevCounter >= 100000) {
                        // If the counter is at or above 1,00,000, clear the interval
                        if (interval) {
                            clearInterval(interval);
                        }
                        // Return the current value to prevent further increment
                        return prevCounter;
                    } else {
                        // Otherwise, increment the counter
                        return prevCounter + 1000;
                    }
                });
            }, 10); // Adjust the speed of the counter here
        } else if (!inView && interval) {
            clearInterval(interval);
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [inView]);


    return (
        <div  ref={ref} className={` ${regular.className} bg-[#171717] h-[518px] flex flex-col items-center justify-center `}>
            <h4 className={` ${semibold.className} text-center text-[1.75rem] `} >
                What awaits for you...
            </h4>

            <p className='text-[1.5rem] text-[#FFFFFFE5]  pt-10'>
                A chance to secure a dream internship offer with a starting stipend of
            </p>

            <p className= {` text-[#FFFFFF80] flex gap-2 items-baseline ${semibold.className} `}>
                <p className="text-[3rem] ">Rs.</p>
                <p className='text-[8rem]' style={{fontWeight:"700"}} >
                {counter.toLocaleString('en-IN')}
                </p>
            </p>
        </div>
    )
}

export default Black
