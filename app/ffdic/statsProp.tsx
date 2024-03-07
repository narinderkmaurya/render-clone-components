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





interface props{
    title:string;
    info:string;
}


const StatProps = ( {title, info} : props ) => {
  return (
    <div className='text-center'>
        <p className= {` ${semibold.className} text-[2rem] text-[#FFFFFFCC] `} style={{fontWeight:"700"}} >{title}</p>
        <p className= {` ${regular.className} text-[1.0rem]  text-[#666666]`} >{info}</p>
    </div>
  )
}

export default StatProps