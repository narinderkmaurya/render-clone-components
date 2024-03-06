"use client";


import Image from 'next/image'
import logo from "@/public/render.svg"
import profile from "./profile.jpg"
import React, { useState, useRef } from 'react';





const HomePage = () => {
  
    const [otp, setOtp] = useState(Array(6).fill(''));
    const inputRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement | null>(null));

      const handleOtpChange = (index: any, event: any) => {
        const newOtp = [...otp];
        newOtp[index] = event.target.value;
        setOtp(newOtp);

        if (event.target.value.length === 1 && index < 5) {
          if (inputRefs[index + 1]?.current) {
            inputRefs[index + 1]?.current?.focus();
          }
        } else if (event.target.value.length === 0 && index > 0) {
          if (inputRefs[index - 1]?.current) {
            inputRefs[index - 1]?.current?.focus();
          }
        }
     };
  return (
    <div className='flex justify-between items-start w-full'>


      <div className="flex flex-col h-0 w-[1/2] lg:w-[1/3] ">
        <div className="flex justify-start">
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 3xl:hidden hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 3xl:hidden hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 xl:block hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 xl:block hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 ' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 ' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />
        </div>
        <div className="flex justify-start">
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 xl:block 3xl:hidden hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 3xl:hidden xl:block hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 3xl:hidden' />

          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0 3xl:hidden hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0   2xl:block hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0  3xl:block hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0  3xl:block hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />
        </div>
        <div className="flex justify-start">
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 3xl:hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 xl:block hidden 3xl:hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 xl:block hidden 3xl:hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0  3xl:block hidden ' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0  3xl:block hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0  3xl:block hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />

        </div>

        <div className="flex justify-start">
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0 hidden xl:block  3xl:hidden ' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 3xl:hidden hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0  3xl:block hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />
        </div>
        <div className="flex justify-start">
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0  3xl:hidden hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 xl:block hidden ' />

          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />
        </div>
        <div className="flex justify-start">
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0 hidden xl:block ' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />
        </div>
        <div className="flex justify-start">
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 3xl:hidden ' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0  3xl:hidden xl:block hidden ' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0   3xl:block hidden' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0  3xl:block hidden' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 3xl:border-t ' />
        </div>
        <div className="flex justify-start">
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 3xl:hidden xl:block hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0  border-t-0  3xl:block hidden' />
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />
        </div>
        <div className="flex justify-start">
          <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-l-0 border-t-0 ' />
        </div>

      </div>

      <div className="h-0 absolute top-[180px]  xl:left-[269.5px] 3xl:left-[268px] ">
        <div className="w-[360px] h-[450px] border-l border-b border-[#e2e2e2] bg-white z-30 text-black font-medium tracking-[0.2px] p-4 text-[1.25rem] flex flex-col justify-between">

          <p>
            Building on Render has been a superpower for Watershed. It lets us focus on what matters most — delighting our customers, rather than managing our infrastructure.
          </p>

          <p>
            Our engineers can ship features to customers in hours or days instead of weeks or months. Every startup should start on Render.
          </p>

          <p className='font-mono text-black bg-[#e7fed4] text-[13px] max-w-fit'>
            Avi Itskovich, Co-founder at Watershed
          </p>
        </div>
      </div>
      <div className="h-0 absolute top-[540px] left-[90px] justify-start  ">
        <div className="w-[180px] h-[180px] border-l border-b border-[#e2e2e2] ">

          <Image src={profile} alt="profile" />
        </div>
      </div>




      <div className="text-black flex pr-12 py-6 flex-col items-end    ">
        <Image src={logo} alt="logo" />


        <div className="text-left items-end pt-24">
          <h1 className='text-[2rem] tracking-[-0.28px] font-medium'>
            Log In ( Invite Code )
          </h1>


          <div className="">

            <div className="flex items-center justify-center ">
              <form className=" ">
                <h2 className="text-lg  mb-4">Enter OTP</h2>
                <div className="grid grid-cols-6 gap-2">
                  {otp.map((digit, index) => (
                   <input
                      key={index}
                      ref={inputRefs[index]}
                      type="text"
                      className={`w-10 h-10 text-lg border border-gray-300 rounded-md text-center outline-none ${
                        index === otp.findIndex((_, i) => i === index && inputRefs[i]?.current?.contains(document.activeElement))
                          ? 'border-blue-500'
                          : ''
                      }`}
                      maxLength={1}
                      pattern="[0-9]"
                      inputMode="numeric"
                      value={digit}
                      onChange={(event) => handleOtpChange(index, event)}
                   />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">Enter the 6-digit code sent to your phone.</p>
              </form>
            </div>




            <button className='border bg-black px-6 py-3 flex gap-2 text-white hover:bg-[#8a05ff] transition-opacity items-center text-[14px] mt-8'>
              Log In
            </button>


          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage