"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative w-full bg-[#121212]">
      {/* Full-bleed prospectus-style hero: Capitol + dark overlay + wide title */}
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
          <p className="font-display mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/75 sm:text-sm">
            Station DC Residency
          </p>
          <h1 className="font-display max-w-4xl text-balance text-2xl font-bold leading-tight tracking-[0.06em] text-white sm:text-4xl md:text-5xl">
            Washington D.C. Space Industry Happy Hour
          </h1>
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 py-14 text-center md:px-10 md:py-18">
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
            <Link href="#email-signup">Register for Email List</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
