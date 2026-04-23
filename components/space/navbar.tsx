"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

/** Leading `/` keeps the path on `/` so the hash replaces cleanly (no `#about#home`). */
const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#events", label: "Events" },
  { href: "/#why-attend", label: "Why attend" },
  { href: "/#get-involved", label: "Get involved" },
  { href: "/#contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="vh-compact-navbar sticky top-0 z-50 w-full border-b border-white/10 bg-[#121212] shadow-[0_1px_0_rgba(255,255,255,0.06)]">
      <div className="mx-auto w-full max-w-7xl divide-y divide-white/[0.06] px-5 sm:px-8 lg:px-12">
        <div className="vh-compact-navbar-top flex items-center justify-between gap-4 py-4">
          <Link
            href="/#home"
            className="font-display flex items-center gap-3 leading-tight text-foreground"
          >
            <span className="relative flex h-12 w-[5.25rem] shrink-0 items-center justify-center sm:h-[3.25rem] sm:w-[6rem]">
              <Image
                src="/logo/shh-brand-lockup.png"
                alt="Space Happy Hour"
                fill
                className="object-contain object-left"
                priority
                sizes="96px"
              />
            </span>
            <span className="flex flex-col">
              <span className="vh-compact-navbar-brand text-sm font-semibold tracking-[0.08em] sm:text-base">
                Space Happy Hour DC
              </span>
              <span className="vh-compact-navbar-subbrand mt-0.5 text-[10px] font-medium tracking-[0.1em] text-muted-foreground sm:text-xs">
                SHH-DC Residency
              </span>
            </span>
          </Link>
          <Button
            asChild
            size="sm"
            className="shrink-0 rounded-sm border border-white/30 bg-white px-5 text-xs font-semibold tracking-wide text-[#121212] transition-colors duration-200 hover:bg-white/90"
          >
            <Link href="/#email-signup">Register</Link>
          </Button>
        </div>
        <nav className="vh-compact-navbar-nav py-3" aria-label="Section navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium tracking-wide text-muted-foreground sm:text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
