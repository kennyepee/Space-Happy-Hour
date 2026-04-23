"use client"

import Link from "next/link"

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#events", label: "Events" },
  { href: "/#get-involved", label: "Get involved" },
  { href: "/#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full border-t border-white/10 bg-[#121212] py-16 shadow-[0_-1px_0_rgba(255,255,255,0.06)]"
    >
      <div className="mx-auto w-full max-w-7xl divide-y divide-white/[0.06] px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 pb-10 md:grid-cols-2">
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
        <div className="pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Space Happy Hour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
