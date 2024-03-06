import React from 'react'
import localfont from "next/font/local"
import Image from 'next/image'




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

const Note = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-16">
            <div className={` ${regular.className}  `} >
                <h4 className=' text-[1.25rem] text-[#FF9100] text-center mb-4 ' style={{ fontWeight: "500" }} >
                    Important Note for students
                </h4>

                <div className="border border-[#d7d7d7] mx-32 max-w-[798px] px-10 py-4">
                    <p className="flex gap-3 items-start text-[#544D49E5] text-[1.125rem] leading-[2rem] ">
                        <Image src="https://ik.imagekit.io/internquest/svgexport-14%201-min.svg?updatedAt=1709646013371" alt='' width={4} height={4} className='w-6 h-6 mt-1' />
                        Students should have completed atleast 2-3 projects in respective tech stack in
                        order to apply for Coderships
                    </p>
                    <p className="flex gap-3 items-start text-[#544D49E5] text-[1.125rem] leading-[2rem] ">
                        <Image src="https://ik.imagekit.io/internquest/svgexport-14%201-min.svg?updatedAt=1709646013371" alt='' width={4} height={4} className='w-6 h-6 mt-1' />
                        Students should sign a commitment bond in order to access curated projects to
                        build as a part of Coderships
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Note