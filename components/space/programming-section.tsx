"use client"

const themes = [
  "AI & Space Night",
  "Startup Showcase Night",
  "Women in Space Night",
  "Government Acquisition Night",
  "University + Research Night",
  "Commercial Space Night",
  "Newcomers Night",
]

export function ProgrammingSection() {
  return (
    <section id="programming" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Programming
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
          Built to Stay Fresh
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Rotating themes help keep the residency fresh, shape the office-hours roster, 
          and attract different segments of the ecosystem.
        </p>

        {/* Theme Chips */}
        <div className="flex flex-wrap gap-3">
          {themes.map((theme) => (
            <div
              key={theme}
              className="glass px-5 py-3 rounded-full text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent/10 hover:border-accent/30 cursor-default"
            >
              {theme}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
