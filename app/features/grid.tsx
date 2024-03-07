import React from 'react'
import Image, { StaticImageData } from 'next/image';


interface props {
    description1: string;
    description2: string;
    image: StaticImageData; // Assuming you're using Next.js's Image component
    method: string;
    colorfirst: string;
    colorsecond: string;
    title:string;
}




const Grid = ({ description1, description2, image, method, colorfirst, colorsecond , title}: props) => {
    return (
        <div className="">
            <div className="text-center text-[2rem] h-[120px] flex items-center justify-center  text-[#2D232385]">
                {title}
            </div>

            <div className={` h-[600px] flex w-full ${method} `}>
                <div className={`w-1/2  flex items-center justify-center text-[1.25rem] flex-col leading-[3rem] text-[#544D49] ${colorfirst} px-24 space-y-12 `}>
                    <p>
                        {description1}
                    </p>
                    <p>
                        {description2}
                    </p>
                </div>

                <div className={`w-1/2 ${colorsecond}   grid grid-cols-5 relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image src={image} alt="Central Image" />
                    </div>

                    <div className="grid grid-rows-5">
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                    </div>
                    <div className="grid grid-rows-5">
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                    </div>
                    <div className="grid grid-rows-5">
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                    </div>
                    <div className="grid grid-rows-5">
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                    </div>
                    <div className="grid grid-rows-5">
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                        <div className="border border-r-0 border-t-0  border-[#d7d7d7]"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Grid