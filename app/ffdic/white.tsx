import React from 'react'
import localfont from "next/font/local"
import Card from './card'




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

const White = () => {
    return (
        <div className={` ${regular.className} bg-white py-16 `} >
            <div className=" text-[#544D49]  text-[1.25rem] px-64 space-y-6 leading-[2.5rem] ">
                <p className='pr-20'>
                    Welcome to the  FDIC 24, a once-in a-year opportunity that you won't want to
                    miss!
                </p>
                <p className='pr-12'>
                    This exclusive challenge is designed to test and showcase your frontend
                    development skills, providing you with the opportunity to stand out to potential
                    startups and secure an internship that aligns with your career aspirations.
                </p>
            </div>


            <div className="space-y-8 pt-16">
                <h3 className={` ${semibold.className} text-[2rem] text-[#8980F5] text-center `}  >
                    How it works
                </h3>
                <div className="flex  items-center gap-6 w-full justify-center">
                    <Card info='Sign up for the FDDIC 24 to 
                    secure your spot ' title='Register' />

                    <Card info='On the day of event, you&apos;ll receive a series of Coderboats to complete within specified timeframes ' title='Receive' />
                    <Card info='Students who successfully complete
                        the assigned Coderboats shall
                        be given the internship offer from
                        partnered startups ' title='Submit' />
                </div>
            </div>
        </div>
    )
}

export default White