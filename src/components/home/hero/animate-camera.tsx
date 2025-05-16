'use client'
import Image from "next/image";
import CameraImage from "./camera.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


/**
 * AnimateCamera component
 * This component displays an animated camera image that moves from the bottom to the center of the screen.
 * It uses GSAP for animations.
 * 
 * @returns {JSX.Element} The rendered component.
 */


export default function AnimateCamera() {

    const imageRef = useRef(null)
    const containerRef = useRef(null)

    useGSAP(() => {

        gsap.to(imageRef.current, {
            // center of the div
            bottom: 'auto',
            top: '50%',
            rotate: 0,
            duration: 3,
            ease: "sine.out",
            delay: 0.8

        })

    }, {
        scope: containerRef
    })

    return (
        <div ref={containerRef} className="w-full min-h-[460px] flex-grow sm:w-1/2 h-full relative">
            <Image ref={imageRef} src={CameraImage} alt="Camera" className="absolute left-1/2 -translate-1/2 -transl -bottom-full rotate-45 " />
        </div>
    )
}