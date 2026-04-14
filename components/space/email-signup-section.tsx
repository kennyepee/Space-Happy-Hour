"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function EmailSignupSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section id="email-signup" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Stay Connected to Future Events
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8">
          Stay informed on future events, themed programming, and announcements.
        </p>

        {/* Email Form */}
        {isSubmitted ? (
          <div className="glass rounded-xl p-8">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Mail size={32} className="text-accent" />
            </div>
            <p className="text-lg font-medium text-foreground">Thanks for subscribing!</p>
            <p className="text-muted-foreground mt-2">We&apos;ll keep you updated on upcoming events.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <Button
              type="submit"
              className="bg-foreground text-background hover:bg-foreground/90 font-medium px-6"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
