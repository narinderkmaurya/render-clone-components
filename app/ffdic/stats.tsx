import React from 'react'
import localfont from "next/font/local"
import StatProps from './statsProp'




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
const Stats = () => {
    return (
        <div className={` bg-[#0C0C0C] h-[160px] ${regular.className} flex items-center justify-between w-full px-32 `} >
            <StatProps title="24 hrs" info="Time commitment" />
            <StatProps title="On-Campus" info="Location" />
            <StatProps title="50+" info="startups" />
            <StatProps title="05" info="Coderboats" />
        </div>
    )
}

export default Stats