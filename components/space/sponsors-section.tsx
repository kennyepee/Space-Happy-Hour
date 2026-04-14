"use client"

import { Star, Orbit, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const sponsorTiers = [
  {
    icon: Star,
    name: "Constellation Partner",
    price: "$2,000/mo",
    benefits: [
      "Title sponsor for the month",
      "Logo on all marketing materials",
      "Table or signage at Station DC",
      "Office-hours seat",
      "Ability to bring VIPs",
    ],
    featured: true,
  },
  {
    icon: Orbit,
    name: "Orbit Partner",
    price: "$750/mo",
    benefits: [
      "Logo on marketing materials",
      "One representative in office hours",
      "Ability to place materials",
    ],
    featured: false,
  },
  {
    icon: Rocket,
    name: "Launch Partner",
    price: "$250/mo",
    benefits: [
      "Name on monthly flyer",
    ],
    featured: false,
  },
]

const valuePoints = [
  "Early access to a new, effective event series",
  "Strong branding and built-in member network",
  "Well-attended events with access to influencers and thought leaders",
  "Premium positioning within the DMV space and deep tech ecosystem",
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Sponsors
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
          Partner With the Residency
        </h2>

        {/* Intro Copy */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
          Space Happy Hour offers early access to a growing event series, strong branding 
          opportunities, and direct connection to a curated member network.
        </p>

        {/* Value Points */}
        <div className="glass rounded-xl p-6 mb-12">
          <div className="grid sm:grid-cols-2 gap-4">
            {valuePoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-6 transition-all duration-300 ${
                tier.featured
                  ? "bg-gradient-to-b from-accent/20 to-accent/5 border border-accent/30"
                  : "glass hover:bg-secondary/50"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                tier.featured ? "bg-accent/20" : "bg-secondary"
              }`}>
                <tier.icon size={24} className={tier.featured ? "text-accent" : "text-muted-foreground"} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-1">{tier.name}</h3>
              <p className="text-2xl font-bold text-foreground mb-4">{tier.price}</p>
              
              <ul className="space-y-2">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sponsor CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Interested in sponsoring a future Space Happy Hour?
          </p>
          <Button
            asChild
            variant="outline"
            className="border-border hover:bg-secondary"
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
