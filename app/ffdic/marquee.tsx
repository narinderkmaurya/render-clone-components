import React from 'react'
import Marquee from 'react-fast-marquee'
const MarqueeAnimation = () => {
    return (
        <div className='bg-[#2C2C2C] h-[120px] flex items-center  text-[1.75rem] '>
            <Marquee>
                <span className="">
                    JavaScript
                </span>

                <span className='px-12'>
                    /
                </span>
                <span className="">
                    React.js
                </span>

                <span className='px-12'>
                    /
                </span><span className="">
                    Tailwind CSS
                </span>

                <span className='px-12'>
                    /
                </span><span className="">
                    Chakra UI
                </span>

                <span className='px-12'>
                    /
                </span><span className="">
                    Redux
                </span>

                <span className='px-12'>
                    /
                </span><span className="">
                    Next.js
                </span>

                <span className='px-12'>
                    /
                </span><span className="">
                    TypeScript
                </span>

                <span className='px-12'>
                    /
                </span>
            </Marquee>
        </div>
    )
}

export default MarqueeAnimation