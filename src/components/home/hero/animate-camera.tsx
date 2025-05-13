'use client'
import Image from "next/image";
import CameraImage from "./camera.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";



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
        <div ref={containerRef} className="w-full sm:w-1/2 h-full relative">
            <Image ref={imageRef} src={CameraImage} alt="Camera" className="absolute left-1/2 -translate-1/2 -transl -bottom-full rotate-45 " />
        </div>
    )
}