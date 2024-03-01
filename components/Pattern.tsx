import * as React from "react";
import Image from "next/image";
import xl from "@/public/Group 56.svg"
import lg from "@/public/Group 55.svg"

function Pattern() {
    return (
        <div className="">

            <div className="hidden 2xl:block">
                <Image src={xl} alt="" />
            </div>

            <div className="block 2xl:hidden">
                <Image src={lg} alt="" />
            </div>
        </div>
    );
}

export default Pattern;