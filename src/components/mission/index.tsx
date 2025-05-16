import { Parallax } from "@/providers/parallax";
import { Heading2 } from "../typography/heading2";
import { Tagline } from "../typography/tagline";
import SideImage from "./side-image.png"
import { Para } from "../typography/para";
import Image from "next/image";
import { Heading3 } from "../typography/heading3";
import { Heading4 } from "../typography/heading4";
import { cn } from "@/libs/utils";


const TEAM = [{
    name: "Selynne Drayven",
    role: "Founder/CEO",
    description: "Inspiring, Preserving, Empowering",
    image: 'selynne-drayven.png'
},
{
    name: "Yuna Takemori",
    role: "Product Manager",
    description: "Elevating, Capturing, Connecting",
    image: 'yuna-takemori.png'
},
{
    name: "Lianyu Zhao",
    role: "Lead Software Engineer",
    description: "Embracing, Unlocking, Empowering",
    image: 'lianyu-zhao.png'
},
{
    name: "Zenya Falkryn",
    role: "Head of Marketing",
    description: "Celebrating, Preserving, Fostering",
    image: 'zenya-falkryn.png'
}
]

interface OurMissionSectionProps {
    variant?: 'light' | 'dark'
}

export default function OurMissionSection({ variant = 'light' }: OurMissionSectionProps) {

    return (
        <div className={cn("w-full px-6 py-20 flex flex-col justify-start items-center gap-12 overflow-hidden",
            variant === 'light' ? 'bg-white' : 'bg-black',
            variant === 'light' ? 'text-black' : 'text-white',
        )}>
            <div className="w-full h-96 max-w-[1024px] max-h-96 flex justify-start items-center gap-6 overflow-hidden">
                <div className={cn("flex-1 self-stretch p-6 bg-black flex flex-col justify-center items-start gap-2.5 overflow-hidden", {
                    'bg-white': variant === 'dark',
                    'text-black': variant === 'dark',
                })}>
                    <Tagline variant={variant}>Explore Our Mission</Tagline>
                    <Heading2 variant={variant}>Embrace the Extraordinary</Heading2>
                    <Para variant={variant === 'light' ? 'muted' : 'muted-200'}>At Palomino, we believe in the power of photography to connect people and capture the beauty of the world around us. Our mission is to provide a platform that empowers individuals to share their stories, explore new perspectives</Para>
                </div>
                <Parallax speed={1.5} className="h-full w-96" src={SideImage} />
            </div>
            <div className="w-full px-6 flex gap-16 justify-center items-center flex-wrap content-center overflow-hidden">
                {TEAM.map((member) => (
                    <TeamMember key={member.name} name={member.name} role={member.role} description={member.description} image={member.image} variant={variant} />
                ))}

            </div>
        </div>
    )
}

export function TeamMember({ name, role, description, image, variant }: { name: string, role: string, description: string, image: string, variant: 'light' | 'dark' }) {
    return (
        <div className="flex flex-col justify-start items-center gap-1.5 w-fit max-w-[300px] text-center">
            <Image src={`/${image}`} alt={name} width={100} height={100} className="w-44 h-44 rounded-full" />
            <Heading3 variant={variant === "light" ? "dark" : 'light'}>{name}</Heading3>
            <Heading4 className={cn("text-muted-200", {
                'text-muted': variant === 'dark',
            })}>{role}</Heading4>
            <Para variant={variant === 'dark' ? 'muted' : 'muted-200'} className="font-medium">{description}</Para>
        </div>
    )
}
