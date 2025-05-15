import FeaturesSection from "@/components/home/features";
import Hero from "@/components/home/hero";
import Strip from "@/components/strip";
import { Heading3 } from "@/components/typography/heading3";

import FacebookImage from "@/assets/facebook.svg";
import InstagramImage from "@/assets/instagram.svg";
import SnapchatImage from "@/assets/snapchat.svg";
import Image from "next/image";
import OurValuesSection from "@/components/home/values";


const SOCIAL_LINKS = [{
  name: "facebook",
  url: "https://facebook.com",
  image: FacebookImage
}, {
  name: "Instagram",
  url: "https://instagram.com",
  image: InstagramImage
}, {
  name: "Snapchat",
  url: "https://snapchat.com",
  image: SnapchatImage
}]


export default function Home() {
  return (
    <main className="min-h-screen bg-white-200">
      <Hero />
      <FeaturesSection />
      <Strip>
        <Heading3 className="text-center text-muted-200 max-w-5xl">
          At Palomino, we believe in the power of photography to connect people and capture the beauty of the world around us
        </Heading3>
        <div className="px-0.5 flex flex-col justify-center items-center gap-12">
          <div className="inline-flex justify-start items-center gap-9 overflow-hidden">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.name} href={link.url} target="_blank" className="w-12 h-12  flex justify-center items-center">
                <Image unoptimized src={link.image} width={30} height={30} alt="" className="w-12 h-12" />
              </a>
            ))}
          </div>
          <Heading3 className="text-center text-muted-200 max-w-5xl">Follow us and become part of the Revolution</Heading3>
        </div>
      </Strip>
      <OurValuesSection />
      <div className="h-screen"></div>
    </main>
  );
}
