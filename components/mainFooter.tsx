import Link from 'next/link'
import React from 'react'
import localfont from "next/font/local"
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
const links = [
    { name: "About", href: "/about" },
    { name: "For Students", href: "/student" },
    { name: "Coderships", href: "/codeships" },
    { name: "Features", href: "/features" },
    { name: "Membership", href: "/membership" },
    { name: "FDDIC'24", href: "/ffdic" },
];



const regular = localfont(
    {
        src: [
            {
                path: "../OTF/GeneralSans-Medium.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)

const MainFooter = () => {
    return (
        <footer>
            <div className="bg-[#171717] h-[105px] px-6 py-4 flex items-center justify-between ">


                <div className="flex gap-4 items-end ">
                    <Link href="/">
                        <span className={` ${regular.className} text-[1.5rem] pl-4 tracking-[-0.015em] `} >
                            {"{ coderships }"}
                        </span>
                    </Link>
                    <div className="text-[#e0e0e0]">
                        &copy; 2024 Coderships, Inc
                    </div>
                </div>


                <ul className="flex  ">
                    {links.map((link, index) => (
                        <li key={index} className="link px-2 ">
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-2 ">
                    <FaLinkedinIn className="text-[#e0e0e0] text-4xl hover:bg-[#672be9] transition-opacity p-2" />
                    <FaXTwitter className="text-[#e0e0e0] text-4xl hover:bg-[#672be9] transition-opacity p-2" />
                    <FaFacebookF className="text-[#e0e0e0] text-4xl hover:bg-[#672be9] transition-opacity p-2" />

                </div>

            </div>
        </footer>
    )
}

export default MainFooter