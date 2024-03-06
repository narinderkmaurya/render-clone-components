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


interface Props {
    title: string
    info: string
}


const Card = ({ title, info }: Props) => {
    return (
        <div className='text-start  border border-[#d7d7d7] max-w-[350px] min-w-[350px] min-h-[250px] px-5 py-6'>
            <p className={` ${semibold.className} text-[1.625rem] text-[#1B1B1BCC] `}  >{title}</p>
            <p className={` ${regular.className} text-[1.125rem]  text-[#544D49E5] leading-[2rem] pt-6 `} >{info}</p>
        </div>
    )
}

export default Card