import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { AccordionDemo } from "@/components/accordion-demo";
import { TeamSection } from "@/components/team-section";

export default function Page() {
  return (
    <div className="mx-auto max-w-250 mt-30">

        <div className="min-h-screen">
            <h2 className="w-160 text-3xl text-center mx-auto">Our mission is to align computers with human well-being. We believe in the power of technology for human progress, productivity and happiness.</h2>
        
        <Image
                  src="/sample_our-team.jpg"
                  alt="Our team"
                  width={1928}
                  height={1280}
                  className="w-full w-max-400 py-10 object-contain"
                />

            <h2 className="w-160 text-5xl font-bold text-center mx-auto">Our Team</h2>

            <TeamSection />

            <h2 className="w-160 text-5xl font-bold text-center mx-auto mt-20">Feedback</h2>
            <h2 className="w-160 text-3xl text-center mx-auto py-10">Have suggestions, questons, comments, or concerns? email us at <u>feedback@lockin.ong</u></h2>

        </div>
      <Footer />
    </div>
  );
}
