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

const Apply = () => {
    return (
        <div className='bg-white px-48 text-center py-24'>
            <h5 className={` ${semibold.className} text-[2rem] text-[#2D2323D9] `} >
                How to apply
            </h5>

            <p className='text-[#544D49] pt-6 text-[1.25rem] leading-[2.25rem] px-20  '>
                Reach out to your college T&P cell or Coderboat Coordinator to know about the
                upcoming dates of the event and submit your application. It&apos;s <span className='text-[#FF9100]'>free of cost</span> to
                apply but applicants should have completed at least <span className='text-[#FF9100]'>3 frontend projects</span> in
                the respective tech stack
            </p>
        </div>
    )
}

export default Apply