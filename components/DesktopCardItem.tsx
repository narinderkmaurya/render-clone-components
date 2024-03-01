import React from 'react'
import localfont from "next/font/local"

const regular = localfont(
  {
    src: [
      {
      path:"../OTF/GeneralSans-Regular.otf"
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
    <section className={` ${regular.className} flex w-full snap-center flex-col overflow-hidden border h-[250px]  md:min-w-[770px] md:flex-row `}>
       
        <div className='flex flex-col gap-6 p-6 md:gap-12 md:p-10 card'>
            <blockquote className='text-[22px]  font-normal leading-[2.5rem] tracking-[0] font-primary text-[#544D49]'> 
                <span className='font-normal font-primary'>
                    {desc}
                </span>
            </blockquote>

        </div>
    </section>
  )
}

export default DesktopCardItem