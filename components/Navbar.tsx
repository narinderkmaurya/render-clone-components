import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import localfont from "next/font/local"




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

const links = [
    { name: "About", href: "/about" },
    { name: "For Students", href: "/student" },
    { name: "Coderships", href: "/codeships" },
    { name: "Features", href: "/features" },
    { name: "Membership", href: "/membership" },
    { name: "FDDIC'24", href: "/ffdic" },
];

export default function Navbar() {
    return (
        <nav className='bg-[#0d0d0d] border-b w-full flex items-center h-[85px] px-4 justify-between'>
            <div className="flex items-center">
                <Link href="/">
                    <span className={` ${regular.className} text-[1.5rem] pl-4 tracking-[-0.015em] `} >
                        {"{ coderships }"}
                    </span>
                </Link>

                <ul className="flex 2xl:gap-6 lg:ml-20 ">
                    {links.map((link, index) => (
                        <li key={index} className="link px-2 ">
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex gap-4 items-center">
                <Link href="sign-in">
                    <span className="link px-2">
                        Log In
                    </span></Link>

                <Link href= {` get-started `} >
                    <button className= {` bg-white text-black px-6 btn py-4 h-[40px] items-center justify-center flex rounded-lg ${regular.className} `} >
                        Get started
                    </button></Link>


            </div>
        </nav>
    );
}
