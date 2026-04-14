"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { sectionPadding, sectionYMid } from "@/components/space/space-layout"

export function FinalCTASection() {
  return (
    <section className={`relative border-t border-neutral-200 bg-transparent ${sectionYMid}`}>
      <div className={sectionPadding}>
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white shadow-lg">
          <div className="relative px-8 py-16 text-center sm:px-12 sm:py-20 lg:px-14 lg:py-24">
            <h2 className="mx-auto mb-6 max-w-3xl text-balance text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:mb-8 lg:text-5xl">
              Join the DMV&apos;s Most Curated Space & Deep Tech Networking Community
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-neutral-600 lg:mb-12">
              Register for the next Space Happy Hour and experience a better way to network.
            </p>

            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button asChild variant="premium" size="premium">
                <Link href="#events">View Upcoming Events</Link>
              </Button>
              <Button asChild variant="premiumOutline" size="premium">
                <Link href="#contact">Contact for Sponsorship</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
