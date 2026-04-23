"use client"

import { Users, Building2, Award, Target } from "lucide-react"

const stats = [
  {
    icon: Users,
    stat: "100+",
    label: "Attendees at Recent Events",
    description: "Consistently well-attended gatherings of ecosystem leaders",
  },
  {
    icon: Building2,
    stat: "Station DC",
    label: "Premium Venue",
    description: "Modern innovation hub in the heart of Washington",
  },
  {
    icon: Award,
    stat: "Featured",
    label: "Industry Leaders",
    description: "Investors, operators, founders, and executives",
  },
  {
    icon: Target,
    stat: "Curated",
    label: "Attendee Base",
    description: "Industry, government, startups, and investors",
  },
]

export function WhyAttendSection() {
  return (
    <section id="why-attend" className="relative bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Why Attend
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-12">
          Why Attend
        </h2>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="glass rounded-xl p-6 text-center transition-all duration-300 hover:bg-secondary/50"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon size={28} className="text-accent" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{item.stat}</p>
              <p className="text-sm font-medium text-foreground mb-2">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
