import Image, { StaticImageData } from "next/image";
import { Para } from "./typography/para";
import { Button } from "./button";
import { Heading3 } from "./typography/heading3";

interface CardProps {
    className?: string;
    title: string;
    description: string;
    image: StaticImageData;
    buttonText: string;

}

export default function Card({ title, description, image, buttonText }: CardProps) {
    return (
        <div className="w-80 h-[500px] max-w-80 bg-neutral-50 rounded shadow-md transition-shadow hover:shadow-none inline-flex flex-col justify-start items-center overflow-hidden">
            <Image className=" object-cover flex-1" src={image} alt={title} />
            <div className="self-stretch px-3 py-6 flex flex-col justify-start items-start gap-3 overflow-hidden">
                <Heading3>{title}</Heading3>
                <Para className="font-medium">{description}</Para>
                <div className="w-4 h-6" />
                <div className="self-stretch inline-flex justify-center items-center gap-2.5 overflow-hidden">
                    <Button>{buttonText}</Button>
                </div>
            </div>
        </div>
    )
}