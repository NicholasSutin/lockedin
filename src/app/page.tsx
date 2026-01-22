import Image from "next/image";
import Link from "next/link";

import TextAnimate from "@/components/ui/text-animate";
import { Footer } from "@/components/Footer";

import {
  BrickWall,
  TabletSmartphone,
  Zap,
  ShieldUser,
  Brain, Users, RefreshCw, Heart
} from "lucide-react";


import { AccordionDemo } from "@/components/accordion-demo";

export default function Page() {
  return (
    <div className="mx-auto max-w-250">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch mt-10">
        

        {/* Right: content */}
        <div className="p-4 h-full w-full flex flex-col justify-center gap-4">
          {/* Logo (scale by width) */}
          <Image
            src="/nick-store.webp"
            alt="Nick store logo"
            width={180}
            height={60}
            className="max-w-80 mx-auto h-auto object-contain"
          />

          <h1 className="w-full text-center text-4xl font-bold">
            Focus is hard.
          </h1>

          <p className="w-full text-center">
            So we made it easier for everyone to <u>lock in.</u> <br />Currently in early-access org beta.
          </p>
          <Link href="https://testflight.apple.com/join/lock-in-screen-time-app" target="_blank" className="mx-auto rounded-[1rem] bg-primary-foreground/80 transition-colors hover:bg-primary-foreground flex items-center justify-center gap-2 p-2 ">
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
        {/* Left: image (scale by height) */}
        <div className="p-4 flex items-center justify-center">
          <Image
            src="/AppMockupBlack.webp"
            alt="Screenshot demo"
            width={1857}
            height={3096}
            className="h-180 w-auto object-contain"
          />
        </div>
      </div>

      {/*next section*/}
      <div className="w-full">
        <div className="h-[90vh] flex items-center">
          <TextAnimate text="5 to 6 hours. That's the time you'll spend today on your phone, probably without realizing." type="rollIn" />
        </div>
      </div>

      
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 col-span-2 *:border *:p-4 *:rounded-sm mb-30">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BrickWall />
                  <h3 className="font-semibold text-xl">Physical Control</h3>
                </div>
                <p>Tap to lock, tap to unlock. No complicated settings or willpower required.</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TabletSmartphone />
                  <h3 className="font-semibold text-xl">Works with iPhone</h3>
                </div>
                <p>Compatible with all iOS devices with NFC capability.</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap />
                  <h3 className="font-semibold text-xl">Instant Action</h3>
                </div>
                <p>No apps to open, no buttons to press. Just tap and lock in milliseconds.</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ShieldUser />
                  <h3 className="font-semibold text-xl">Privacy First</h3>
                </div>
                <p>Your data stays on your device. No tracking, no cloud, no compromise.</p>
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
              width={1366}
              height={1270}
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
              unoptimized
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

      {/*--next section--*/}
      <section className="w-full px-4 mt-40 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Headline */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
                Not Just Smarter — 
                Actually Better For 
                Your Brain
              </h2>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-foreground rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-foreground leading-relaxed">
                    Built with behavioral scientists, not just engineers
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-foreground rounded-full flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-foreground leading-relaxed">
                    Designed to replace habits, not add more noise
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-foreground rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-foreground leading-relaxed">
                    Trusted by thousands to reset their relationship with rest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--next section--*/}
      <section className="w-full py-20 mt-30">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl w-min p-5 whitespace-nowrap mx-auto rounded-lg md:text-4xl lg:text-5xl text-center mb-6 text-foreground/80">
      Key Features
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-card p-8 rounded-lg">
        <h3 className="text-2xl mb-4 text-card-foreground">Time-Lock Technology</h3>
        <p className="text-muted-foreground leading-relaxed">
          Set custom time locks to keep your phone secured when you need to focus most. No way to unlock until the timer runs out.
        </p>
      </div>

      <div className="bg-card p-8 rounded-lg">
        <h3 className="text-2xl mb-4 text-card-foreground">Simple & Intuitive</h3>
        <p className="text-muted-foreground leading-relaxed">
          No complicated setup or configuration. Just lock your phone and get back to what matters.
        </p>
      </div>

      <div className="bg-card p-8 rounded-lg">
        <h3 className="text-2xl mb-4 text-card-foreground">Durable Design</h3>
        <p className="text-muted-foreground leading-relaxed">
          Built to last with high-quality materials that protect your device while keeping you focused.
        </p>
      </div>

      <div className="bg-card p-8 rounded-lg">
        <h3 className="text-2xl mb-4 text-card-foreground">Universal Compatibility</h3>
        <p className="text-muted-foreground leading-relaxed">
          Works with all smartphone sizes and models. One solution for your entire household.
        </p>
      </div>
    </div>
  </div>
</section>




            <AccordionDemo />

      <Footer />
    </div>
  );
}
