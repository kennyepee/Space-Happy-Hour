"use client"

import { User, Briefcase, Rocket, Building2 } from "lucide-react"

const valueCards = [
  {
    icon: User,
    title: "For Attendees",
    benefits: [
      "Authentic access to leadership",
      "Welcoming consistent place to plug into the ecosystem",
      "Networking with peers, mentors, and employers",
    ],
  },
  {
    icon: Briefcase,
    title: "For Industry Leaders",
    benefits: [
      "Thought leadership without formal panels",
      "Talent pipeline",
      "Deal flow and relationship-building",
    ],
  },
  {
    icon: Rocket,
    title: "For Space Happy Hour",
    benefits: [
      "Credible recurring physical presence",
      "Ability to grow membership and email list",
      "Stronger sponsorship model",
    ],
  },
  {
    icon: Building2,
    title: "For Station DC",
    benefits: [
      "Guaranteed monthly traffic",
      "Professional clientele",
      "Stronger branding as a hub for innovation",
    ],
  },
]

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Ecosystem Value
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-12">
          Why This Residency Works
        </h2>

        {/* Value Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueCards.map((card) => (
            <div
              key={card.title}
              className="glass rounded-xl p-6 transition-all duration-300 hover:bg-secondary/50"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <card.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{card.title}</h3>
              <ul className="space-y-2">
                {card.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
