import React from 'react'
import localfont from "next/font/local"

import Image from 'next/image'
import rs from "./Rs. 6000.svg"


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

const Prize = () => {
    return (
        <div className={` ${regular.className} py-16 `}  >
            <h3 className={` ${semibold.className} text-[2rem] text-[#2D2323E5] text-center `} >
                Ready to start your journey towards <br />
                landing top 1% internships in tech ?
            </h3>
            <div className=" mx-32  border border-[#d7d7d7] flex mt-16" >
                <div className="w-2/3 text-[#544D49] space-y-6 py-12 px-10" >
                    <p className='flex gap-4 items-center text-[1.25rem] '>
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt='' className='w-3 h-3' />
                        5+ career tools premium subscriptions
                    </p>
                    <p className='flex gap-4 items-center text-[1.25rem] '>
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt='' className='w-3 h-3' />
                        Get access to dev tools & resources
                    </p>
                    <p className='flex gap-4 items-center text-[1.25rem] '>
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt='' className='w-3 h-3' />
                        Code review sessions by senior developers
                    </p>
                    <p className='flex gap-4 items-center text-[1.25rem] '>
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt='' className='w-3 h-3' />
                        Get invites to join the teams of emerging startups
                    </p>
                    <p className='flex gap-4 items-center text-[1.25rem] '>
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt='' className='w-3 h-3' />
                        Win AI credits to use new AI tools & platforms
                    </p>
                    <p className='flex gap-4 items-center text-[1.25rem] '>
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt='' className='w-3 h-3' />
                        Win referrals to your dream companies
                    </p>
                </div>

                <div className="border-l border-[#d7d7d7] flex items-center justify-center w-1/3  ">
                    <Image src={rs} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Prize