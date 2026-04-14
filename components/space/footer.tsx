"use client"

import Link from "next/link"

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#residency", label: "Residency" },
  { href: "#events", label: "Events" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer id="contact" className="relative py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground">Space Happy Hour</h3>
              <p className="text-sm text-muted-foreground">at Station DC</p>
            </div>
            <p className="text-muted-foreground max-w-md">
              A recurring residency for the DMV&apos;s space and deep tech ecosystem.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Space Happy Hour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
