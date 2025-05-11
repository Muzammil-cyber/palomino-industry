import { Button } from "@/components/button";
import { Heading1 } from "@/components/typography/heading1";
import { Para } from "@/components/typography/para";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Heading1 variant={'light'}>
        Capture the Past <br /> Share the Future
      </Heading1>
      <Para >
        Palomino Industries, a company that inspires new ways to share your photos by combining blockchain technology with an easy to use interface. Our product is a website that you can use wherever you are and implements new creative
      </Para>
      <Button>Hello world</Button>
      <Button variant={'outline'}>Hello world</Button>
      <Button variant={'secondary'} size={'sm'} rounded={'full'}>Hello world</Button>
      <Button variant={'link'} size={'link'}>Link</Button>
    </main>
  );
}
