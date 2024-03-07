"use client";

import Image from 'next/image'
import React, { useRef, useEffect } from 'react';

import time from "./time.svg"
import localFont from "next/font/local"

import "./accordion.css"



const semi = localFont(
    {
        src: "../../../OTF/GeneralSans-Semibold.otf",
        variable: "--font-semiBoldGeneral"
    }
)


const regular = localFont(
    {
        src: "../../../OTF/GeneralSans-Medium.otf",
        variable: "--font-regularGeneral"
    }
)



const Accordion = () => {
    const accordionContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (accordionContentRef.current) {
            const accordion = accordionContentRef.current.parentElement;
            if (accordion) { // Add this null check
                accordion.addEventListener('toggle', () => {
                    const content = accordionContentRef.current;
                    if (content && (accordion as HTMLDetailsElement).open) {
                        content.style.maxHeight = content.scrollHeight + "px";
                    } else if (content) {
                        content.style.maxHeight = "";
                    }
                });
            }
        }
    }, []);
    return (
        <div className= {` pt-[30px] bg-white  ${regular.className} `} >
            <div className="text-center w-full justify-center items-center flex flex-col pb-12">
                <h4 className={`flex gap-2 py-4 ${semi.className} text-[2.25rem] text-[#FF822D]`}>
                    Focus on what matters the most<Image src={time} alt="" />
                </h4>

                <p className={`text-[#544D49] leading-[2.25rem]   style={{fontWeight:"500", color:"#1b1b1b, fontSize:"1rem" "}}pt-6`} >
                    Keep learning and grow your skills by completing Codeships, building <br />
                    your projects portfolios, and start getting noticed by emerging startups
                </p>
            </div>



            {/* accordion */}
            <div className={`${regular.className} text-[#1B1B1B] text-[22px] `} style={{fontWeight:"500"}}  >
                <div className="bg-[#F4F5F7] mx-6 py-6">
                    <div className={` container max-w-3xl  margin-[2em] mx-auto text-black pt-4   `}>
                        <div className="bg-white py-4 mb-8 px-4 m-1.5 rounded-xl min-h-[80px] ">
                            <details  >
                                <summary className='flex justify-between rounded-xl'>
                                    {"{  Let your projects speak about your skills }"}

                                    <span>➕</span>
                                </summary>
                                <div ref={accordionContentRef} className='px-2 py-4  ' style={{fontWeight:"500", color:"#1b1b1b", fontSize:"1rem" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora id porro ea. Consequuntur amet ut itaque beatae eos natus cupiditate numquam, quas rerum nostrum, libero blanditiis similique animi repellat ipsum earum.
                                </div>
                            </details>
                        </div>
                        <div className="bg-white py-4 mb-8 px-4 m-1.5 rounded-xl min-h-[80px]">
                            <details >
                                <summary className= {` flex justify-between rounded-xl ${regular.className} text-[#1b1b1b] `}>
                                    {"{  Coderships to inspire you }"}

                                    <span>➕</span>
                                </summary>
                                <div ref={accordionContentRef} className='px-2 py-4  ' style={{fontWeight:"500", color:"#1b1b1b", fontSize:"1rem" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora id porro ea. Consequuntur amet ut itaque beatae eos natus cupiditate numquam, quas rerum nostrum, libero blanditiis similique animi repellat ipsum earum.
                                </div>
                            </details>
                        </div>
                        <div className="bg-white py-4 mb-8 px-4 m-1.5 rounded-xl min-h-[80px]">
                            <details >
                                <summary className='flex justify-between rounded-xl'>
                                    {"{  Spend more time building & less time applying }"}

                                    <span>➕</span>
                                </summary>
                                <div ref={accordionContentRef} className='px-2 py-4  ' style={{fontWeight:"500", color:"#1b1b1b", fontSize:"1rem" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora id porro ea. Consequuntur amet ut itaque beatae eos natus cupiditate numquam, quas rerum nostrum, libero blanditiis similique animi repellat ipsum earum.
                                </div>
                            </details>
                        </div>
                        <div className="bg-white py-4 mb-8 px-4 m-1.5 rounded-xl min-h-[80px]">
                            <details >
                                <summary className='flex justify-between rounded-xl'>
                                    {"{  It’s all about real-time projects work experience }"}

                                    <span>➕</span>
                                </summary>
                                <div ref={accordionContentRef} className='px-2 py-4  ' style={{fontWeight:"500", color:"#1b1b1b", fontSize:"1rem" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora id porro ea. Consequuntur amet ut itaque beatae eos natus cupiditate numquam, quas rerum nostrum, libero blanditiis similique animi repellat ipsum earum.
                                </div>
                            </details>
                        </div>
                        <div className="bg-white py-4 mb-8 px-4 m-1.5 rounded-xl min-h-[80px]">
                            <details >
                                <summary className='flex justify-between rounded-xl'>
                                    {"{  You are not alone, join our community }"}

                                    <span>➕</span>
                                </summary>
                                <div ref={accordionContentRef} className='px-2 py-4  ' style={{fontWeight:"500", color:"#1b1b1b", fontSize:"1rem" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora id porro ea. Consequuntur amet ut itaque beatae eos natus cupiditate numquam, quas rerum nostrum, libero blanditiis similique animi repellat ipsum earum.
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion