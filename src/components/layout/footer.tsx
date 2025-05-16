import Image from "next/image"
import Logo from "./short-logo.svg"

import Link from "next/link"
import { NAV_LINKS, SOCIAL_LINKS } from "@/libs/constants"
import { Heading4 } from "../typography/heading4"



export default function Footer() {
    return (
        <div className="group w-full h-80 p-2.5 bg-black flex gap-2.5 overflow-hidden">
            <div className="flex-1 h-full px-4 py-6 flex flex-col justify-center items-center gap-7 overflow-hidden">
                <Image src={Logo} alt="" unoptimized className=" group-hover:rotate-180 transition duration-1000" />
                <div className=" text-white text-base font-bold capitalize text-center">© 2025 Palomino, Inc.<br />All rights reserved.</div>
            </div>
            <div className="flex-2 p-9 flex flex-col justify-center h-full gap-3 overflow-hidden">
                <Heading4 variant={'light'} className="mb-2">Quick Links</Heading4>

                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-white-200 transition-colors hover:text-white font-bold"
                    >
                        {link.name}
                    </Link>
                ))}

            </div>
            <div className="flex-2  p-9 flex flex-col justify-center h-full gap-3 overflow-hidden">
                <Heading4 variant={'light'} className="mb-2">Social Links</Heading4>
                {SOCIAL_LINKS.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-white-200 transition-colors hover:text-white font-bold"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}