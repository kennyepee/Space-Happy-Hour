"use client"

import { Calendar, MapPin, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Easy to update event data - can be connected to CMS later
const upcomingEvents = [
  {
    id: 1,
    title: "SHH-DC Residency: AI & Space Night",
    date: "May 19, 2026",
    description: "Curated networking and premium community gathering at Station DC, featuring discussions on AI applications in the space industry.",
    location: "Station DC",
    theme: "AI & Space",
    registrationLink: "#register",
  },
  {
    id: 2,
    title: "SHH-DC Residency: Startup Showcase",
    date: "June 16, 2026",
    description: "Monthly networking event featuring emerging space and defense startups presenting to the DMV ecosystem.",
    location: "Station DC",
    theme: "Startups",
    registrationLink: "#register",
  },
  {
    id: 3,
    title: "SHH-DC Residency: Women in Space",
    date: "July 21, 2026",
    description: "Celebrating and connecting women leaders across the space, defense, and deep tech ecosystem.",
    location: "Station DC",
    theme: "Women in Space",
    registrationLink: "#register",
  },
]

export function EventsSection() {
  return (
    <section id="events" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Events
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-12">
          Upcoming Events
        </h2>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="glass rounded-xl p-6 flex flex-col transition-all duration-300 hover:bg-secondary/50"
            >
              {/* Theme Tag */}
              <div className="flex items-center gap-2 mb-4">
                <Tag size={14} className="text-accent" />
                <span className="text-xs font-medium text-accent uppercase tracking-wide">
                  {event.theme}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {event.title}
              </h3>

              {/* Date & Location */}
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {event.description}
              </p>

              {/* Register Button */}
              <Button
                asChild
                className="w-full bg-foreground text-background hover:bg-foreground/90"
              >
                <Link href={event.registrationLink}>Register</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
