import Image from "next/image";
import Link from "next/link";

import TextAnimate from "@/components/ui/text-animate";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="mx-auto max-w-250">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch mt-10">
        {/* Left: image (scale by height) */}
        <div className="p-4 flex items-center justify-center">
          <Image
            src="/ScrDemo3.webp"
            alt="Screenshot demo"
            width={1200}
            height={675}
            className="h-180 w-auto object-contain"
          />
        </div>

        {/* Right: content */}
        <div className="p-4 h-full w-full flex flex-col justify-center gap-4">
          {/* Logo (scale by width) */}
          <Image
            src="/nick-store.webp"
            alt="Nick store logo"
            width={146}
            height={58}
            className="max-w-80 mx-auto h-auto object-contain"
          />

          <h1 className="w-full text-center text-4xl font-bold">
            Focus is hard.
          </h1>

          <p className="w-full text-center">
            So we made it easier for everyone to <u>lock in.</u> <br />Currently in early-access beta.
          </p>
          <Link href="#" className="mx-auto rounded-[1rem] bg-primary-foreground/80 transition-colors hover:bg-primary-foreground flex items-center justify-center gap-2 p-2 ">
            <Image
              src="/testflight.webp"
              alt="testflight"
              width={400}
              height={400}
              className="w-auto h-10 object-contain"
            />
            <p className="px-2 pr-2.5 text-xl">
              Try on Testflight
            </p>
          </Link>
        </div>
      </div>

      {/*next section*/}
      <div className="w-full">
        <div className="h-[90vh] flex items-center">
          <TextAnimate text="5 to 6 hours. That's the time you'll spend today on your phone, probably without realizing." type="rollIn" />
        </div>
      </div>

      {/*next section*/}
      <div className="grid grid-cols-2 gap-8 p-8">
        <div className="h-96 flex items-center">
          <div>
            <p className="border-3 p-2 px-3 rounded-full text-sm w-fit">Focus Score™</p>
            <h2 className="text-xl font-bold py-3" >Track Your Focus</h2>
            <p>See your screen time and focus change in real time.</p>
            <p>You'll also get a progress on your report every week.</p>
          </div>
        </div>

        <div>
          <div className="p-4 flex items-center justify-center">
            <Image
              src="/ScrDemo1.webp"
              alt="Screenshot demo"
              width={1200}
              height={675}
              className="w-auto object-contain"
            />
          </div>
        </div>

        <div>
          <div className="p-4 flex items-center justify-center">
            <Image
              src="/PhoneModes.gif"
              alt="Phone Modes"
              width={3173}
              height={4319}
              className="w-auto object-contain"
            />
          </div>
        </div>

        <div className="h-96 flex items-center">
          <div className="ml-10">
            <p className="border-3 p-2 px-3 rounded-full text-sm w-fit">Focus Blocks™</p>
            <h2 className="text-xl font-bold py-3" >Customize your blocks</h2>
            <p>Lock the apps of your choice.</p>
            <p>Apply automations or physical restrictions.</p>
          </div>
        </div>

      </div>


      <Footer />
    </div>
  );
}
