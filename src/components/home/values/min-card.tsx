import { Heading3 } from "@/components/typography/heading3";
import { Tagline } from "@/components/typography/tagline";

interface MinCardProps {
    className?: string;
    title: string;
    tagline: string;
}


export default function MinCard({ className, title, tagline }: MinCardProps) {
    return (
        <div className={`py-3 flex flex-col justify-start items-start overflow-hidden ${className}`}>
            <Tagline variant={'light'}>{tagline}</Tagline>
            <Heading3 variant={'light'}>{title}</Heading3>
        </div>
    )
}