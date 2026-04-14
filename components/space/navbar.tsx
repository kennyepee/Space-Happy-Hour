"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#residency", label: "Residency" },
  { href: "#events", label: "Events" },
  { href: "#format", label: "Format" },
  { href: "#why-attend", label: "Why attend" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#121212]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="#home"
          className="font-display text-sm font-semibold tracking-[0.08em] text-foreground sm:text-base"
        >
          Space Happy Hour{" "}
          <span className="font-medium text-muted-foreground">Station DC</span>
        </Link>
        <Button
          asChild
          size="sm"
          className="shrink-0 rounded-sm border border-white/30 bg-white px-5 text-xs font-semibold tracking-wide text-[#121212] transition-colors duration-200 hover:bg-white/90"
        >
          <Link href="#email-signup">Register</Link>
        </Button>
      </div>
      <nav
        className="border-t border-white/5"
        aria-label="Section navigation"
      >
        <ul className="mx-auto flex w-full max-w-7xl flex-wrap gap-x-6 gap-y-2 px-5 py-3 text-xs font-medium tracking-wide text-muted-foreground sm:px-8 sm:text-sm lg:px-12">
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
    </header>
  )
}
