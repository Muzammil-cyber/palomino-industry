'use client'
import Image from "next/image";
import Logo from "./logo.svg"
import Link from "next/link";
import { Button } from "../button";
import { useLenis } from "lenis/react";
import { NAV_LINKS } from "@/libs/constants";




export default function Navbar() {
    const lenis = useLenis();

    const toNewsletter = () => {
        lenis?.scrollTo(`#newsletter`, { lerp: 0.1, duration: 3 });
    }
    return (
        <header className="absolute min-h-16 top-0 left-0 right-0 z-50 flex  items-center justify-between w-full px-4 md:pr-2 py-2">
            <div className="h-12 sm:w-1/2 flex items-center justify-start">
                <Link href={'/'} className="flex items-center justify-start">
                    <Image src={Logo} unselectable="on" unoptimized alt="Logo of company" className="w-full" />
                </Link>
            </div >
            <nav className="hidden sm:flex items-center justify-between px-4 space-x-4  sm:w-1/2">
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-white-200 transition-colors hover:text-white font-bold"
                    >
                        {link.name}
                    </Link>

                ))}
                <Button onClick={toNewsletter} size={'sm'} variant="secondary" rounded={'full'} className="-ml-2 hidden md:block text-base px-2 py-1">
                    Newsletter
                </Button>
            </nav>
        </header >
    )
}