"use client"

import { Handshake, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

/** Replace with your real inbox before launch. */
const PARTICIPATION_EMAIL = "participate@example.com"

export function GetInvolvedSection() {
  const mailtoHref = `mailto:${PARTICIPATION_EMAIL}?subject=${encodeURIComponent("Get involved — Space Happy Hour DC")}`

  return (
    <section id="get-involved" className="relative border-y border-border/60 bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Get involved</p>

        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,28rem)] lg:items-center lg:gap-16">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Want to participate?
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              If you&apos;re interested in volunteering, co-hosting, speaking, or helping shape future
              residency nights, we&apos;d love to hear from you. Send a short note about how you&apos;d
              like to get involved.
            </p>
          </div>

          <div className="glass rounded-xl p-8 transition-all duration-300 hover:bg-secondary/50">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Handshake size={24} className="text-accent" aria-hidden />
            </div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Reach out
            </p>
            <a
              href={mailtoHref}
              className="font-display break-all text-lg font-semibold tracking-wide text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {PARTICIPATION_EMAIL}
            </a>
            <div className="mt-8">
              <Button
                asChild
                className="rounded-sm border border-white/30 bg-white px-6 text-sm font-semibold tracking-wide text-[#121212] transition-colors duration-200 hover:bg-white/90"
              >
                <a href={mailtoHref}>
                  <Mail aria-hidden />
                  Email us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
