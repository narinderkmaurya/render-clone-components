import React from 'react'
import localfont from "next/font/local"
const semi = localfont(
    {
        src: [
            {
                path: "../../../OTF/GeneralSans-Semibold.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)




const Sail = () => {
    return (
        <div className= {` ${semi.className} `} >
            <p className='text-[#FF553D99] text-[6rem] text-center py-16 bg-white'>
                {"< Sail with Coderships >"}
            </p>
        </div>
    )
}

export default Sail