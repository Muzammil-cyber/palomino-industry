"use client";
import { useWindowSize } from "@/hooks/use-window-size";
import { cn } from "@/libs/utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Parallax({
    className = "",
    imageClassName = "",
    src,
    speed = 1,
    id = "parallax",
    width,
    height,
    objectFit = "cover",
}: {
    className?: string;
    imageClassName?: string;
    speed?: number;
    id?: string;
    src: string | StaticImport;
    width?: number;
    height?: number;
    objectFit?: "cover" | "contain" | "fill";
}) {
    const trigger = useRef<HTMLDivElement>(null);
    const target = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const { width: windowWidth = 0 } = useWindowSize(500);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!imageLoaded || !trigger.current || !target.current || !imageRef.current) return;

        const imageWidth = imageRef.current.naturalWidth;

        // Calculate parallax distance based on image dimensions
        const y = Math.min(windowWidth, imageWidth) * speed * 0.1;
        const setY = gsap.quickSetter(target.current, "y", "px");

        const st = ScrollTrigger.create({
            id: id,
            trigger: trigger.current,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
                setY(self.progress * y);
            },
        });

        return () => {
            st.kill();
            ScrollTrigger.getById(id)?.kill();
        };
    }, [id, speed, windowWidth, imageLoaded]);

    return (
        <div
            ref={trigger}
            className={cn(className, "flex items-end overflow-hidden relative", {
                "items-start": speed < 0,
            })}
        >
            <div
                ref={target}
                style={{
                    height: `${100 + 20 * Math.abs(speed)}%`,
                    width: '100%',
                }}
                className="relative"
            >
                <Image
                    ref={imageRef}
                    className={cn("w-full h-full", imageClassName)}
                    src={src}
                    alt=""
                    width={width || 1920}
                    height={height || 1080}
                    style={{ objectFit }}
                    onLoad={() => setImageLoaded(true)}
                    priority
                />
            </div>
        </div>
    );
}