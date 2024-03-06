import React from 'react'
import localfont from "next/font/local"

const medium = localfont(
  {
    src: [
      {
      path:"../OTF/GeneralSans-Medium.otf"
      }
    ],
    variable:"--font-regularGeneral"
  }
)




interface Props {
    title: string;
    subtitle: string;
    desc: string;
    name: string;
    designation: string;
}

const DesktopCardItem = ({title,subtitle,desc,name,designation}:Props) => {
  return (
    <section className={` ${medium.className} flex w-full  flex-col overflow-hidden adjust h-[250px]  md:min-w-[670px]  md:flex-row `}>
       
        <div className='flex flex-col gap-6 md:gap-12 pr-12 px-6 py-4 card items-center justify-center'>
            <blockquote className='text-[22px]  font-normal leading-[3rem] tracking-[0] font-primary text-[#544D49]'> 
                <span className=''>
                    {desc}
                </span>
            </blockquote>

        </div>
    </section>
  )
}

export default DesktopCardItem