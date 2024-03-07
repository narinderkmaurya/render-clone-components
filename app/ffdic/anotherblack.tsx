import React from 'react'
import localfont from "next/font/local"




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
                path: "../../OTF/GeneralSans-Medium.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)

const AnotherBlack = () => {
    return (
        <div className='h-[480px] bg-[#171717] flex items-center justify-center flex-col'>
            <h6 className={` ${semibold.className} text-[1.75rem] `} >
                Join us in empowering the next generation of frontend developers
            </h6>

            <p className='text-[1.25rem] px-72 pt-8 pb-12 text-[#FFFFFFE5] text-center' style={{fontWeight:"500"}} >
                Apply now to become a Coderboat Coordinator and lead the Frontend
                Development Dream Internship Challenge at your college
            </p>

            <button className=' bg-[#6941c6] w-[140px] items-center text-center h-[50px] text-[1.125rem] rounded-[5px] ' >
        Apply Now
      </button>
        </div>
    )
}

export default AnotherBlack