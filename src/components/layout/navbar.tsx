'use client'
import Image from "next/image";
import Logo from "./logo.svg"
import Link from "next/link";
import { Button } from "../button";
import { useLenis } from "lenis/react";

const NAV_LINKS = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export default function Navbar() {
    const lenis = useLenis();

    const toNewsletter = () => {
        if (window.location.pathname === "/") {
            lenis?.scrollTo(`#newsletter`, { lerp: 0.1, duration: 3 });
            window.history.pushState({}, "", `/#newsletter`);
        } else {
            window.location.href = `/#newsletter`;
        }
    }
    return (
        <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4 md:pr-2 py-2">
            <div className="w-full sm:w-1/2">
                <Image src={Logo} alt="Logo of company" />
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