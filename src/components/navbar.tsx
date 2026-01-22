"use client"

import Link from "next/link"
import type React from "react"

export default function Navbar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={`fixed inset-x-0 top-4 z-50 px-4 max-w-300 mx-auto ${className ?? ""}`} {...props}>
      <div className="mx-auto flex h-15 items-center gap-4 rounded-full bg-background/80 px-3 shadow-lg ring-1 ring-foreground/10 backdrop-blur-md">
        <Link href="/" className="shrink-0 flex items-center gap-2 px-2">
          <img src="/LockLogo.svg" alt="Logo" className="h-8 w-auto object-contain" />
          Lock In
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-10 md:flex
            [&_a]:whitespace-nowrap
            [&_a]:text-foreground/80 [&_a]:transition-colors [&_a:hover]:text-foreground">
            <Link href="/demo">Demo</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About Us</Link>

        </div>

        <Link
          href="https://testflight.apple.com/join/lock-in-screen-time-app" target="_blank"
          className="flex h-10 shrink-0 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
        >
          Try for free
        </Link>
      </div>
    </div>
  )
}
