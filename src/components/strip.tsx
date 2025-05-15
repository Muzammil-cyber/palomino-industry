'use client'
import { cn } from "@/libs/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface StripProps {
    children: React.ReactNode;
    className?: string;
}

export default function Strip({ className, children }: StripProps) {

    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(ref.current, {
            height: 0,
            ease: 'sine.out',
            duration: 0.8,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 50%",
                end: "bottom 50%",
                markers: false,
            }
        })
    }, {
        scope: ref,
    })

    return (
        <section ref={ref} className={cn("mx-auto bg-white overflow-hidden w-full", className)}>
            <div className="px-6 py-9 flex flex-col justify-center items-center gap-12">
                {children}
            </div>
        </section>
    )
}