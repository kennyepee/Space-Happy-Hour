"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative w-full bg-[#121212]">
      {/* Capitol + headline overlaid; logos follow below */}
      <div className="relative min-h-[min(68vh,560px)] w-full overflow-hidden">
        <Image
          src="/hero/capitol-night.png"
          alt="United States Capitol dome and east front illuminated at night"
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/76 via-black/56 to-[#121212]"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
          <h1 className="font-display flex max-w-4xl flex-col items-center gap-1 text-balance text-xl font-bold leading-tight tracking-[0.06em] text-white sm:gap-1.5 sm:text-3xl md:text-4xl">
            <span>Space Happy Hour DC</span>
            <span className="text-lg font-semibold leading-none text-white/85 sm:text-2xl md:text-3xl">
              x
            </span>
            <span>SHH-DC Residency</span>
          </h1>
        </div>
      </div>

      <div className="mx-auto w-full max-w-4xl px-5 pb-2 pt-10 text-center sm:px-8 sm:pt-12 sm:pb-4">
        <div className="mt-0 grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-2 sm:gap-x-3">
          <div className="flex min-h-0 min-w-0 justify-end">
            <div className="relative h-24 w-[min(100%,280px)] sm:h-28 sm:w-[min(100%,320px)] md:h-32 md:w-[min(100%,360px)]">
              <Image
                src="/logo/shh-brand-lockup.png"
                alt="Space Happy Hour"
                fill
                className="object-contain object-right"
                sizes="(max-width: 768px) 40vw, 360px"
              />
            </div>
          </div>
          <span className="select-none px-0.5 text-2xl font-extralight leading-none text-white/50 sm:text-3xl">
            |
          </span>
          <div className="flex min-h-0 min-w-0 justify-start">
            <div className="relative h-11 w-[min(100%,200px)] sm:h-12 sm:w-[min(100%,240px)] md:h-14">
              <Image
                src="/logo/station-dc-mark.png"
                alt="Station DC"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 38vw, 240px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 py-10 text-center md:px-10 md:py-14">
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          A recurring residency bringing together the DMV&apos;s space, defense, satellite,
          and deep tech ecosystem through curated networking, themed programming, and
          structured office hours.
        </p>
        <div className="mt-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-sm border border-white/30 bg-white px-10 py-6 text-sm font-semibold tracking-wide text-[#121212] transition-colors duration-200 hover:bg-white/90"
          >
            <Link href="/#email-signup">Register for Email List</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
