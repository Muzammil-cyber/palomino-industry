import { Button } from "../../button";
import SideImage from "./side-image.png"
import { Tagline } from "../../typography/tagline";
import { Heading2 } from "../../typography/heading2";
import { Parallax } from "@/providers/parallax";

export default function NewsletterSection() {
    return (
        <div className="p-32 flex  justify-center items-center overflow-hidden">
            <div className="w-full bg-white rounded-lg flex items-center overflow-hidden">
                <Parallax
                    className="flex-grow h-[512px]"
                    imageClassName="object-cover"
                    speed={2}
                    src={SideImage}
                />
                <div className=" max-w-lg w-full px-8 py-12 flex flex-col justify-center gap-1.5 overflow-hidden">
                    <Tagline>Partner with Palomino</Tagline>
                    <Heading2 className="max-w-3xs">Join Our Newsletter</Heading2>
                    <input type="email" className="w-full border-b-1 border-black py-2 focus:ring-muted-200" placeholder="Email" />
                    <div className="w-4 h-4" />
                    <Button size={'sm'}>Submit</Button>
                </div>
            </div>
        </div>
    )
}