"use client";

import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import localfont from "next/font/local"



const regular = localfont(
    {
        src: [
            {
                path: "../../../OTF/GeneralSans-Semibold.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)

const medium = localfont(
    {
        src: [
            {
                path: "../../../OTF/GeneralSans-Medium.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)



const Columns = () => {
    const [ref, inView] = useInView()


    const textVariant = {
        visible: { opacity: 1, transition: { duration: 0.5 }, x: 0 },
        hidden: { opacity: 0, x: 100 }
    }

    const boxVariant = {
        visible: { opacity: 1, transition: { duration: 0.5 }, x: 0 },
        hidden: { opacity: 0, x: -100 }
    }

    return (
        <div className="bg-white">
            <div className="w-full items-center px-12 py-12">
                <h3
                  ref={ref}
                  
                  className={`${regular.className} text-[2.25rem] text-[#8980F5] text-center`}>
                    Changing the approach...
                </h3>

                <div className="flex justify-center items-center pt-16 gap-6">
                    <div
                      ref={ref}
                    
                      className="border-[#D7D7D7] min-w-[500px] h-[480px] border px-12 py-8">
                        <span
                        
                          className={`${medium.className} text-[#1B1B1B90] text-[1.75rem]`}>
                            Before BrightIntern
                        </span>
                        <p
                        
                          className="text-[#544D49] pt-4 text-[1.25rem] leading-[2.5rem] ">
                            Working on basic or generic capstone projects,
                            no code reviews and project feedbacks, no such
                            projects on resume to make a profile standout,
                            no real-time project experience, completing
                            internship assignments as a part of selection
                            process only to get ghosted, overwhelmed
                            applying for jobs & internships only to not
                            hear back from companies
                        </p>
                    </div>
                    <div
                      ref={ref}
                    
                      className="border-[#D7D7D7] min-w-[500px] h-[480px] border px-12 py-8">
                        <span
                        
                          className={`${medium.className} text-[#1B1B1B90] text-[1.75rem]`}>
                            Before BrightIntern
                        </span>
                        <p
                        
                          className="text-[#544D49] pt-4 text-[1.25rem] leading-[2.5rem]">
                            Focused time building challenging projects based
                            on real-time applications, code reviews by senior
                            developers, projects that makes you stand out from
                            the rest, real time project experience that tests
                            your skills, winning referrals to your dream companies
                            by showcasing your technical expertise through
                            Coderships, receiving dream internship offers from
                            startups by competing with the most aspiring
                            student coders
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Columns