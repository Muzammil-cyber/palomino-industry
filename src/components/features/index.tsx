import Card from "../card";
import { Heading2 } from "../typography/heading2";
import ElevateImage from "./elevate.png";
import CaptureImage from "./capture.png";
import PreserveImage from "./preserve.png";

const FEATURES_CARDS = [{
    title: "Elevate",
    description: "Unlock the Potential of Your Memories with Palomino' Innovative Platform",
    image: ElevateImage,
    buttonText: "Experience the future",
}, {
    title: "Capture",
    description: "Transform Your Memories into Digital Assets with Palomino",
    image: CaptureImage,
    buttonText: "Embrace the Extraordinary",
}, {
    title: "Preserve",
    description: "Palomino: Revolutionizing the Way You Share Your Photos",
    image: PreserveImage,
    buttonText: "Unleash Your Creativity",
}]

export default function FeaturesSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center  gap-5 sm:gap-10 p-8">
            <Heading2 className="max-w-lg text-center">Discover the Power of Blockchain Photography</Heading2>
            <div className="flex flex-col flex-wrap sm:flex-row gap-5 justify-center items-center">
                {FEATURES_CARDS.map((card) => (
                    <Card
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        buttonText={card.buttonText}
                    />
                ))}
            </div>

        </section>
    )
}