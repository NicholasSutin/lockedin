import Image from "next/image";

import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="mx-auto max-w-250 mt-30">
      
      <video 
        src="https://content.nicholassutin.com/storage/lock-in/AppScreenRecording.mov" 
        controls 
        className="mx-auto h-[80vh] aspect-[2/1]"
      ></video>

      <div className="mt-20 grid grid-cols-5 bg-accent/80 p-20 rounded-xl gap-20">
        <div className="flex items-center col-span-3">
          <video 
            src="/BlenderPhoneDemo.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="mx-auto w-full"
          ></video>
        </div>
        <Image
          src="/PhoneBlender.webp"
          alt="blender mockup"
          width={1200}
          height={1200}
          className="h-full object-contain col-span-2"
        />
        
        <video 
            src="https://content.nicholassutin.com/storage/lock-in/BlenderScreenRecording.mov" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="mx-auto w-full col-span-5"
            ></video>

      </div>
      
      <Footer />
    </div>
  );
}
