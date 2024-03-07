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



const Header = () => {
  return (
    <div className= {` bg-[#1B1B1B] h-[630px] space-y-8 flex flex-col items-start ${regular.className} pl-36 pt-24`} >
      <h1 className={` ${semibold.className} text-[2.75rem]   `}>
        You are just one membership
        <br />
        away from your dream internship
      </h1>

      <p className={`  text-[1.5rem] text-[#ffffff60] `}>
        Designed for those students serious about landing dream <br />
        internships in tech. We can&apos;t wait to see what you can achieve
      </p>

      <button className=' bg-[#6941c6] w-[140px] items-center text-center h-[50px] text-[1.125rem] rounded-[5px] ' >
        Apply Now
      </button>
    </div>
  )
}

export default Header