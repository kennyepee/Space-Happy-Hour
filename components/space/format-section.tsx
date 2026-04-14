"use client"

import { Users, MessageSquare, Lightbulb, Coffee } from "lucide-react"

const formatCards = [
  {
    icon: Users,
    title: "Curated Networking",
    description: "Meet a highly engaged group of professionals across the space, defense, and deep tech ecosystem.",
  },
  {
    icon: MessageSquare,
    title: "Office Hours",
    description: "Participate in optional structured conversations with featured experts, investors, operators, recruiters, and industry leaders.",
  },
  {
    icon: Lightbulb,
    title: "Themed Programming",
    description: "Each event is centered around a focused topic to create relevance and drive stronger conversations.",
  },
  {
    icon: Coffee,
    title: "Relaxed Atmosphere",
    description: "Designed to remove the friction of awkward networking and create more natural, productive interactions.",
  },
]

const timeline = [
  {
    time: "4:00 - 5:30 PM",
    title: "Open-Door Office Hours",
    description: "Rotating experts, investors, government buyers, founders and technical leaders, primes, integrators, labs, and research groups",
  },
  {
    time: "5:30 - 6:00 PM",
    title: "Transition + Doors Open",
    description: "Transition period as networking attendees begin to arrive",
  },
  {
    time: "6:00 - 8:00 PM",
    title: "Space Happy Hour Networking",
    description: "Main networking event with curated attendees and themed programming",
  },
]

export function FormatSection() {
  return (
    <section id="format" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Format
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-12">
          What to Expect
        </h2>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {formatCards.map((card) => (
            <div
              key={card.title}
              className="glass rounded-xl p-6 transition-all duration-300 hover:bg-secondary/50"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <card.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-8">Monthly Residency Schedule</h3>
          <div className="space-y-0">
            {timeline.map((item, index) => (
              <div key={item.time} className="flex gap-6">
                {/* Timeline indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border flex-1 min-h-[60px]" />
                  )}
                </div>
                
                {/* Content */}
                <div className="pb-8">
                  <p className="text-sm font-medium text-accent mb-1">{item.time}</p>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
