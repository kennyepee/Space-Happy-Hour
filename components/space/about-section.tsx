"use client"

export function AboutSection() {
  return (
    <section id="about" className="relative bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          About
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
          Networking, Reimagined
        </h2>

        {/* Body Copy */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Space Happy Hour is a curated event series built for professionals across the 
              space, defense, satellite, and advanced technology ecosystem.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              More intentional than a typical mixer, each event is designed to create 
              meaningful connections through themed programming, structured networking 
              opportunities, and a high-quality attendee base.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you&apos;re looking to build relationships, exchange ideas, explore 
              partnerships, or simply stay plugged into the ecosystem, Space Happy Hour 
              creates the environment to do it effectively.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-6">
              <p className="text-3xl font-bold text-foreground mb-2">100+</p>
              <p className="text-sm text-muted-foreground">Attendees at recent events</p>
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-3xl font-bold text-foreground mb-2">Monthly</p>
              <p className="text-sm text-muted-foreground">Recurring programming</p>
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-3xl font-bold text-foreground mb-2">DMV</p>
              <p className="text-sm text-muted-foreground">Space & deep tech ecosystem</p>
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-3xl font-bold text-foreground mb-2">Premium</p>
              <p className="text-sm text-muted-foreground">Curated attendee experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
