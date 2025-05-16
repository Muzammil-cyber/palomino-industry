"use client"
import { Heading2 } from "@/components/typography/heading2";
import Image from "next/image";
import Image1 from "./image-1.png"
import Image2 from "./image-2.png"
import Image3 from "./image-3.png"
import Image4 from "./image-4.png"
import Card from "@/components/card";
import MinCard from "./min-card";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@/hooks/use-window-size";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * OurValuesSection component
 * This component displays the values of the company in a visually appealing way.
 * It uses GSAP for animations and is responsive to screen size.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function OurValuesSection() {

    const { width } = useWindowSize(500);
    const [isMobile, setIsMobile] = useState<boolean>(width && width < 640 ? true : false);
    const containerRef = useRef<HTMLDivElement>(null);
    const rowsRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

    useEffect(() => {
        if (width) {
            setIsMobile(width < 640);
        }
    }, [width]);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (isMobile) {
            gsap.set(rowsRefs, { y: 0 });
            return;
        }
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "30% 60%",
                end: "40% 20%",
                scrub: true,
            },
            defaults: {
                ease: "sine.out",
            },
        });

        // Even rows come in from the bottom together
        // Odd rows come in from the top together
        rowsRefs.forEach((row, index) => {
            const y = index % 2 === 0 ? 500 : -500;
            tl.from(row.current, {
                y: y,
                duration: 1,
                stagger: {
                    amount: 0.5,
                    from: "start",
                },
            }, "<");
        });







    }, {
        scope: containerRef,
        dependencies: [isMobile]

    });

    return (
        <section ref={containerRef} className="px-6 pt-14 pb-7 bg-black flex flex-col justify-center items-center gap-8 overflow-hidden">
            <Heading2 variant={'light'}>Our Values</Heading2>
            <div className="overflow-hidden flex flex-col sm:flex-row gap-3 w-full container mx-auto">
                <div ref={rowsRefs[0]} className="flex-1 flex flex-col items-center  gap-3">
                    <Image src={Image1} alt="" className="rounded-sm aspect-square object-cover h-96" />
                    <Card variant="value" title="Passion for Exploration" description="Unlock the Potential of Your Memories with Palomino's Innovative Platform" buttonText="Experience the future" />
                    <MinCard className="my-auto" tagline="Capturing Life's Masterpieces" title="Empowering Creativity through Blockchain Technology" />
                </div>
                <div ref={rowsRefs[1]} className="flex-1 flex flex-col items-center  gap-3">
                    <Image src={Image2} alt="" className="rounded-sm aspect-square object-cover h-96" />
                    <Image src={Image3} alt="" className="rounded-sm  object-cover flex-grow" />
                </div>
                <div ref={rowsRefs[2]} className="flex-1 flex flex-col items-center  gap-3">
                    <MinCard tagline="Preserving Moments" title="Revolutionizing the Way You Capture and Share Your Photographic Journey" />
                    <Image src={Image4} alt="" className="rounded-sm aspect-square object-cover flex-grow" />
                    <Card variant="value" title="Palomino: Where Memories Become" description="Connecting People, Sharing Stories" />
                </div>
            </div>

        </section>
    )
}