import CircularText from "@/components/ui/circular-text";
import Image from 'next/image';
import Link from 'next/link';
import gradient from '@/assets/gradient.avif';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full my-20">
      <div className="relative w-full rounded-full overflow-hidden bg-accent-foreground">
        <div className="absolute inset-0 h-full">
          <Image
            src={gradient}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10">
          <div className="px-6 pr-20 py-8 grid grid-cols-[auto_1fr_auto_auto] gap-x-8 bg-black/40 backdrop-blur-md rounded-xl text-foreground">
            {/* Column 1 - Circular Text */}
            <div className="px-3">
              <CircularText text="Locked In Locked In " />
            </div>

            {/* Column 2 - Main Content */}
            <div>
              <h1 className="text-xl mb-3">Lock In.</h1>
              <p className="py-2">
                With our product, your phone doesn't just get a time limit - It's schedule transforms to guide your habits
              </p>
            </div>

            {/* Column 3 - Shop Links */}
            <div className="px-4 flex flex-col items-start text-md whitespace-nowrap [&_button]:p-0 [&_button]:h-auto [&_button]:hover:cursor-pointer">
              <h1 className="text-xl mb-3">Shop</h1>
              <Button variant="link">
                <Link href="/shop" className="py-2">NFC</Link>
              </Button>
              <Button variant="link">
                <Link href="/shop" className="py-2">Stand</Link>
              </Button>
              <Button variant="link">
                <Link href="/shop" className="py-2">Merch</Link>
              </Button>
            </div>

            {/* Column 4 - Company Links */}
            <div className="px-4 flex flex-col items-start text-md whitespace-nowrap [&_button]:p-0 [&_button]:h-auto [&_button]:hover:cursor-pointer">
              <h1 className="text-xl mb-3">Company</h1>
              <Button variant="link">
                <Link href="/about" className="py-2">Our Story</Link>
              </Button>
              <Button variant="link">
                <Link href="/support" className="py-2">Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
