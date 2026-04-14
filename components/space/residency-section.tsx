"use client"

import { MapPin, Users, Building2, Train, GraduationCap } from "lucide-react"

const stationDCBenefits = [
  {
    icon: Users,
    title: "Strong links to tech and startup ecosystems",
  },
  {
    icon: Building2,
    title: "Modern, open, social environment",
  },
  {
    icon: GraduationCap,
    title: "Built-in innovation community",
  },
  {
    icon: Train,
    title: "Strong accessibility and central location",
  },
  {
    icon: MapPin,
    title: "Natural fit for educated, tech-forward professionals",
  },
]

export function ResidencySection() {
  return (
    <section id="residency" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Residency
        </p>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Permanent Home */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
              A Permanent Home for the Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Through its residency at Station DC, Space Happy Hour now has a dedicated 
              home for recurring premium events in the heart of Washington&apos;s innovation community.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This partnership enables more consistent programming, a stronger attendee 
              experience, and continued growth of one of the region&apos;s most engaged space 
              and deep tech communities.
            </p>
          </div>

          {/* Right Column - Why Station DC */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Station DC
            </h3>
            <div className="space-y-4">
              {stationDCBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <benefit.icon size={20} className="text-accent" />
                  </div>
                  <p className="text-foreground pt-2">{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
