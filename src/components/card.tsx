import Image, { StaticImageData } from "next/image";
import { Para } from "./typography/para";
import { Button } from "./button";
import { Heading3 } from "./typography/heading3";
import { cn } from "@/libs/utils";

interface CardProps {
    className?: string;
    title: string;
    description: string;
    image?: StaticImageData;
    buttonText?: string;
    variant?: 'feature' | 'value'

}

/**
 * Card component
 * This component displays a card with an image, title, description, and an optional button.
 * 
 * @param {CardProps} props - The props for the Card component.
 * @returns {JSX.Element} The rendered component.
 */

export default function Card({ className, title, description, image, buttonText, variant = "feature" }: CardProps) {
    return (
        <div className={cn("w-80 h-[500px]  bg-neutral-50 rounded shadow-md transition-shadow hover:shadow-none inline-flex flex-col justify-start items-center overflow-hidden", variant === "value" && "h-auto w-full shadow-none", className)}>
            {image && variant === "feature" ? <Image className=" object-cover flex-1" src={image} alt={title} /> : <div className="w-4 h-28" />}
            <div className="self-stretch px-3 py-6 flex flex-col justify-start items-start gap-3 overflow-hidden">
                <Heading3 className="max-w-72">{title}</Heading3>
                <Para className="font-medium">{description}</Para>

                {buttonText && <>
                    <div className="w-4 h-6" />
                    <div className={cn("w-full inline-flex justify-center items-center gap-2.5 overflow-hidden", variant === "value" && "items-start justify-start")}>
                        <Button variant={variant === "feature" ? "default" : "outline"}>{buttonText}</Button>
                    </div></>}
            </div>
        </div>
    )
}