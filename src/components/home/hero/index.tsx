import { buttonVariants } from "@/components/button";
import { Heading1 } from "@/components/typography/heading1";
import { Para } from "@/components/typography/para";
import Link from "next/link";
import AnimateCamera from "./animate-camera";
import Image from "next/image";
import FacebookImage from "./facebook.svg";
import InstagramImage from "./instagram.svg";
import SnapchatImage from "./snapchat.svg";


const SOCIAL_LINKS = [{
    name: "facebook",
    url: "https://facebook.com",
    image: FacebookImage
}, {
    name: "Instagram",
    url: "https://instagram.com",
    image: InstagramImage
}, {
    name: "Snapchat",
    url: "https://snapchat.com",
    image: SnapchatImage
}]

/**
 * Hero component
 * This component displays the hero section of the website.
 * It includes a heading, a paragraph, a button, and social media links.
 * 
 * @returns {JSX.Element} The rendered component.
 */

export default function Hero() {
    return (
        <section className="overflow-hidden flex flex-col sm:flex-row items-center justify-center w-full min-h-screen sm:h-screen">
            <AnimateCamera />
            <div className="w-full sm:w-1/2 h-full bg-black p-6 pb-12 sm:pb-0 relative  inline-flex flex-col justify-center items-start gap-4 sm:gap-9">
                <Heading1 variant={'light'} className="max-w-xl">
                    Capture the Past Share the Future
                </Heading1>
                <Para variant={'muted'}>
                    Palomino Industries, a company that inspires new ways to share your photos by combining blockchain technology with an easy to use interface. Our product is a website that you can use wherever you are and implements new creative
                </Para>
                <Link href={'#'} className={buttonVariants({ variant: "secondary" })}>
                    Explore
                </Link>
                <div className="px-0.5 bottom-4 right-4 absolute inline-flex justify-start items-end gap-2.5 overflow-hidden">
                    <div className="justify-start text-neutral-50 text-base font-medium font-['Space_Grotesk'] capitalize">Follow us on</div>
                    <div className="flex justify-start items-center gap-2.5 overflow-hidden">
                        {SOCIAL_LINKS.map((link) => (
                            <Link key={link.name} href={link.url} target="_blank" className="w-8 h-8 rounded-full bg-neutral-50/10 hover:bg-neutral-50/20 flex justify-center items-center">
                                <Image unoptimized src={link.image} width={30} height={30} alt="" className="w-4 h-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}