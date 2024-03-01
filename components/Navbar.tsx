import logo from "@/public/logo.svg";
import Image from "next/image";

const links = [
    { name: "Product", href: "/product" },
    { name: "About", href: "/about" },
    { name: "For Student", href: "/student" },
    { name: "Codeships", href: "/codeships" },
    { name: "Changelog", href: "/changelog" },
    { name: "Careers", href: "/careers" },
    { name: "About", href: "/about" },
];

export default function Navbar() {
    return (
        <nav className='bg-[#0d0d0d] border-b w-full flex items-center py-6 px-4 justify-between'>
            <div className="flex">
                <Image src={logo} alt="logo" className="cursor-pointer"/>

                <ul className="flex 2xl:gap-6 lg:ml-20 ">
                    {links.map((link, index) => (
                        <li key={index} className="link px-2">
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex gap-16">
                <span className="link px-2">
                    Sign In
                </span>

                <button className="bg-white text-black px-6 py-6 -mx-4 -my-6 btn">
                  Get Started          
                </button>

             
            </div>
        </nav>
    );
}
