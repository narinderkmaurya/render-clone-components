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
                path: "../../OTF/GeneralSans-Regular.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)




const Black = () => {
    return (
        <div className={` ${regular.className} bg-[#171717] h-[518px] flex flex-col items-center justify-center `}>
            <h4 className={` ${semibold.className} text-center text-[1.75rem] `} >
                What awaits for you...
            </h4>

            <p className='text-[1.5rem] text-[#FFFFFFE5]  pt-10'>
                A chance to secure a dream internship offer with a starting stipend of
            </p>

            <p className= {` text-[#FFFFFF80] flex gap-2 items-baseline ${semibold.className} `}>
                <p className="text-[3rem] ">Rs.</p>
                <p className='text-[8rem]' style={{fontWeight:"700"}} >
                1,00,000
                </p>
            </p>
        </div>
    )
}

export default Black