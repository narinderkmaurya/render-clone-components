import React from 'react'
import Image from 'next/image'
import logo from "@/public/render.svg"
import profile from "./profile.jpg"
import github from "./github.svg"
import gitlab from "./gitlab.svg"
import google from "./google.svg"
import Link from 'next/link'







const page = () => {
  return (
    <div className="">
      <div className="sm:hidden pt-6 text-black">
        <nav className='px-4'>
          <Image src={logo} alt="" />
        </nav>

        <div className="pt-16 px-4">

          <h1 className='text-[1.75rem] font-medium '>
            Create an account
          </h1>
          <div className="text-center pt-4">
            <div className="flex gap-4 items-start">
              <button className='border hover px-6 py-3 flex gap-2 hover:text-white transition-opacity items-center text-[14px]'>
                <Image src={github} alt="" />  GitHub
              </button>
              <div className="">
                <button className='border hover px-6 py-3 flex gap-2 hover:text-white transition-opacity items-center text-[14px]'>
                  <Image src={gitlab} alt="" />  GitLab
                </button>
                <p className='text-[14px] pt-6'> or</p>
              </div>
              <button className='border hover px-6 py-3 flex gap-2 hover:text-white transition-opacity items-center text-[14px]'>
                <Image src={google} alt="" />  Google
              </button>
            </div>
            <div className="max-w-[400px] text-start">

              <div className="flex flex-col gap-4 pt-2">
                <label htmlFor="email" className='text-[14px]'>Email</label>
                <input type="email" id="email" className='border border-[#e2e2e2] px-4 py-3 text-[14px]' />
              </div>
              <div className="flex flex-col gap-4 pt-6">
                <label htmlFor="password" className='text-[14px]'>Password</label>
                <input type="password" id="password" className='border border-[#e2e2e2] px-4 py-3 text-[14px]' />
              </div>
              <button className='border px-6 py-3 flex gap-2 hover:text-white hover:bg-[#8a05ff] transition-opacity items-center text-[14px] mt-8'>
                Create Account
              </button>

              <div className="text-[#4d4d4d] pt-6  space-y-2">
                <p className='text-[14px]'>
                  By signing up you agree to our  <Link href="#" className='hover:bg-[#e6daff] underline ' >
                    terms of service</Link>.
                </p>

                <p className='text-[14px]'>
                  Already have an account?  <Link href="#" className='hover:bg-[#e6daff] underline ' >
                    Sign In</Link>.
                </p>


                <p className='text-[12px] pt-4'>
                  This site is protected by <Link href="#" className='hover:bg-[#e6daff] underline ' >
                    hCaptcha</Link>. Its <Link href="#" className='hover:bg-[#e6daff] underline ' >
                    Privacy Policy</Link> and Terms of Service apply.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="pt-12">
        
          <div className="grid grid-cols-8 relative ">
          <div className="absolute  pt-12 flex   flex-col">
          <div className='bg-white min-h-[200px] mx-[53px] px-2 py-4 text-[20px] justify-center  flex flex-col  h-full text-[#141414] '>
          <p>
          "Building on Render has
been a superpower for
Watershed. It lets us focus
on what matters most —
delighting our customers,
rather than managing our
infrastructure.
          </p>
<p className='pt-2'>
Our engineers can ship
features to customers in
hours or days instead of
weeks or months. Every
startup should start on
Render."
</p>

<p className='bg-[#e7fed4] text-[13px] px-4 py-2 font-mono'>
AVI ITSKOVICH, CO-FOUNDER AT WATERSHED
</p>

          </div>
<div className="flex justify-end pr-[51px]">
<Image src={profile} alt="profile" className='w-[102px] pt-[6px] h-[102px]  object-cover '/>

</div>
                    </div>

            <div className="grid grid-rows-12 flex-1">
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />

            </div>
            <div className="grid grid-rows-12 flex-1">
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              

              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />

            </div> <div className="grid grid-rows-12 flex-1">
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              

              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />

            </div> <div className="grid grid-rows-12 flex-1">
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              

              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />

            </div> <div className="grid grid-rows-12 flex-1">
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              

              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />

            </div> <div className="grid grid-rows-12 flex-1">
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              

              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />

            </div> <div className="grid grid-rows-12 flex-1">
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              

              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />

            </div> <div className="grid grid-rows-12 flex-1">
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              

              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />
              <div className='border border-[#d7d7d7] min-w-12  h-12 border-t-0 border-r-0' />

            </div>

          </div>
        </div>

       
      </div>





      {/* for large devices */}
      <div className='sm:flex justify-between items-start w-full hidden '>
        <div className="text-black flex pl-4 py-6 flex-col justify-between min-h-screen ">
          <Image src={logo} alt="logo" />


          <div className="pl-12">
            <h1 className='text-[2rem] tracking-[-0.28px] font-medium'>
              Create an account
            </h1>

            <div className="text-center pt-4">
              <div className="flex gap-4 items-start">
                <button className='border hover px-6 py-3 flex gap-2 hover:text-white transition-opacity items-center text-[14px]'>
                  <Image src={github} alt="" />  GitHub
                </button>
                <div className="">
                  <button className='border hover px-6 py-3 flex gap-2 hover:text-white transition-opacity items-center text-[14px]'>
                    <Image src={gitlab} alt="" />  GitLab
                  </button>
                  <p className='text-[14px] pt-6'> or</p>
                </div>
                <button className='border hover px-6 py-3 flex gap-2 hover:text-white transition-opacity items-center text-[14px]'>
                  <Image src={google} alt="" />  Google
                </button>
              </div>


            </div>

            <div className="max-w-[400px]">

              <div className="flex flex-col gap-4 pt-2">
                <label htmlFor="email" className='text-[14px]'>Email</label>
                <input type="email" id="email" className='border border-[#e2e2e2] px-4 py-3 text-[14px]' />
              </div>
              <div className="flex flex-col gap-4 pt-6">
                <label htmlFor="password" className='text-[14px]'>Password</label>
                <input type="password" id="password" className='border border-[#e2e2e2] px-4 py-3 text-[14px]' />
              </div>
              <button className='border px-6 py-3 flex gap-2 hover:text-white hover:bg-[#8a05ff] transition-opacity items-center text-[14px] mt-8'>
                Create Account
              </button>

              <div className="text-[#4d4d4d] pt-6  space-y-2">
                <p className='text-[14px]'>
                  By signing up you agree to our  <Link href="#" className='hover:bg-[#e6daff] underline ' >
                    terms of service</Link>.
                </p>

                <p className='text-[14px]'>
                  Already have an account?  <Link href="#" className='hover:bg-[#e6daff] underline ' >
                    Sign In</Link>.
                </p>


                <p className='text-[12px] pt-8'>
                  This site is protected by <Link href="#" className='hover:bg-[#e6daff] underline ' >
                    hCaptcha</Link>. Its <Link href="#" className='hover:bg-[#e6daff] underline ' >
                    Privacy Policy</Link> and Terms of Service apply.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-0 w-[1/2] lg:w-[1/3] ">
          <div className="flex justify-end">
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 3xl:hidden hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 3xl:hidden hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 xl:block hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 xl:block hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 ' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 ' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
          </div>
          <div className="flex justify-end">
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  xl:block 3xl:hidden hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  3xl:hidden xl:block hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  3xl:hidden' />

            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0 3xl:hidden hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0   2xl:block hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0  3xl:block hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0  3xl:block hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
          </div>
          <div className="flex justify-end">
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  3xl:hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  xl:block hidden 3xl:hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  xl:block hidden 3xl:hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0  3xl:block hidden ' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0  3xl:block hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0  3xl:block hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />

          </div>

          <div className="flex justify-end">
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0 hidden xl:block  3xl:hidden ' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  3xl:hidden hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0  3xl:block hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
          </div>
          <div className="flex justify-end">
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0  3xl:hidden hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  xl:block hidden ' />

            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
          </div>
          <div className="flex justify-end">
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0 hidden xl:block ' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
          </div>
          <div className="flex justify-end">
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0 3xl:hidden ' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]   3xl:hidden xl:block hidden ' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0   3xl:block hidden' /><div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0  3xl:block hidden' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
          </div>
          <div className="flex justify-end">
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  3xl:hidden xl:block hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2] border-r-0  border-t-0  3xl:block hidden' />
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
          </div>
          <div className="flex justify-end">
            <div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' /><div className='w-[90px] h-[90px] border border-[#e2e2e2]  ' />
          </div>
          <div className="min-h-[90px] hidden sm:block">
            narinder
          </div>
        </div>

        <div className="h-0 absolute top-[180px] lg:left-[740px] xl:left-[849px] 2xl:left-[906px] ">
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
        <div className="h-0 absolute top-[540px] xl:-left-[90px] 2xl:-left-[90px] justify-end w-full flex ">
          <div className="w-[180px] h-[180px] border-l border-b border-[#e2e2e2] ">

            <Image src={profile} alt="profile" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default page