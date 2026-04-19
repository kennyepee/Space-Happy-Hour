"use client"

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, MapPin, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

type EventItem = {
  id: number
  title: string
  date: string
  description: string
  location: string
  theme: string
  /** Present only for upcoming events */
  registrationLink?: string
}

const upcomingEvents: EventItem[] = [
  {
    id: 1,
    title: "SHH-DC Residency: AI & Space Night",
    date: "May 19, 2026",
    description:
      "Curated networking and premium community gathering at Station DC, featuring discussions on AI applications in the space industry.",
    location: "Station DC",
    theme: "AI & Space",
    registrationLink: "/#email-signup",
  },
  {
    id: 2,
    title: "SHH-DC Residency: Startup Showcase",
    date: "June 16, 2026",
    description:
      "Monthly networking event featuring emerging space and defense startups presenting to the DMV ecosystem.",
    location: "Station DC",
    theme: "Startups",
    registrationLink: "/#email-signup",
  },
  {
    id: 3,
    title: "SHH-DC Residency: Women in Space",
    date: "July 21, 2026",
    description:
      "Celebrating and connecting women leaders across the space, defense, and deep tech ecosystem.",
    location: "Station DC",
    theme: "Women in Space",
    registrationLink: "/#email-signup",
  },
]

const pastEvents: EventItem[] = [
  {
    id: 101,
    title: "SHH-DC Residency: Orbital Economy & Policy",
    date: "March 18, 2026",
    description:
      "Panel and networking on commercial space, licensing, and the policy landscape shaping LEO and cislunar activity.",
    location: "Station DC",
    theme: "Policy",
  },
  {
    id: 102,
    title: "SHH-DC Residency: Defense Tech Mixer",
    date: "January 22, 2026",
    description:
      "Cross-sector mixer connecting primes, startups, and government partners around mission-driven hardware and software.",
    location: "Station DC",
    theme: "Defense",
  },
  {
    id: 103,
    title: "SHH-DC Residency: Year-End Celebration",
    date: "December 11, 2025",
    description:
      "Community wrap-up highlighting member wins, partner spotlights, and a look ahead at the residency calendar.",
    location: "Station DC",
    theme: "Community",
  },
]

type TimelineEvent = EventItem & { isPast: boolean }

function buildTimeline(): TimelineEvent[] {
  return [
    ...pastEvents.map((e) => ({ ...e, isPast: true })),
    ...upcomingEvents.map((e) => ({ ...e, isPast: false })),
  ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

function startOfDay(d: Date): Date {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

/** Today’s event if any, else next upcoming; if all in the past, the most recent event. */
function getDefaultEventIndex(timeline: TimelineEvent[]): number {
  if (timeline.length === 0) return 0
  const today = startOfDay(new Date())

  for (let i = 0; i < timeline.length; i++) {
    const eventDay = startOfDay(new Date(timeline[i].date))
    if (eventDay.getTime() === today.getTime()) {
      return i
    }
  }

  for (let i = 0; i < timeline.length; i++) {
    const eventDay = startOfDay(new Date(timeline[i].date))
    if (eventDay.getTime() > today.getTime()) {
      return i
    }
  }

  return timeline.length - 1
}

function EventCard({ event, isPast }: { event: EventItem; isPast: boolean }) {
  return (
    <div
      className={cn(
        "glass flex h-full min-h-[320px] flex-col rounded-xl p-5 transition-all duration-300 hover:bg-secondary/50 sm:p-6",
        isPast ? "opacity-95" : ""
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Tag size={14} className="text-accent" />
          <span className="text-xs font-medium uppercase tracking-wide text-accent">{event.theme}</span>
        </div>
        {isPast ? (
          <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Past
          </span>
        ) : (
          <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
            Upcoming
          </span>
        )}
      </div>

      <h3 className="mb-3 text-lg font-semibold leading-snug text-foreground sm:text-xl">{event.title}</h3>

      <div className="mb-3 flex flex-wrap gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar size={14} />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={14} />
          <span>{event.location}</span>
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{event.description}</p>

      {!isPast && event.registrationLink ? (
        <Button asChild className="mt-auto w-full bg-foreground text-background hover:bg-foreground/90">
          <Link href={event.registrationLink}>Register</Link>
        </Button>
      ) : (
        <div className="mt-auto w-full rounded-md border border-border bg-muted/20 py-2.5 text-center text-sm text-muted-foreground">
          Past event
        </div>
      )}
    </div>
  )
}

/** Side “next / previous track” preview — compact, faded stack like Spotify queue. */
function EventPeekCard({
  event,
  isPast,
  side,
  onSelect,
}: {
  event: TimelineEvent
  side: "prev" | "next"
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "glass w-full max-w-full rounded-xl p-3 text-left transition-all duration-300 sm:p-4",
        "hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
        side === "prev" ? "origin-right" : "origin-left"
      )}
    >
      <div className="mb-2 flex items-center justify-between gap-1">
        <Tag size={12} className="shrink-0 text-accent/80" />
        <span
          className={cn(
            "rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider",
            isPast ? "border border-border/60 bg-muted/30 text-muted-foreground" : "border border-accent/30 bg-accent/10 text-accent"
          )}
        >
          {isPast ? "Past" : "Upcoming"}
        </span>
      </div>
      <p className="line-clamp-2 text-xs font-semibold leading-snug text-foreground sm:text-sm">{event.title}</p>
      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-muted-foreground sm:text-xs">
        <Calendar className="size-3 shrink-0" />
        {event.date}
      </div>
    </button>
  )
}

export function EventsSection() {
  const timeline = useMemo(() => buildTimeline(), [])
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const last = timeline.length - 1

  useLayoutEffect(() => {
    setActiveIndex(getDefaultEventIndex(timeline))
  }, [timeline])

  useEffect(() => {
    setActiveIndex((i) => Math.min(i, Math.max(0, last)))
  }, [last])

  const goPrev = useCallback(() => {
    setActiveIndex((i) => Math.max(0, i - 1))
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((i) => Math.min(last, i + 1))
  }, [last])

  const prevEvent = activeIndex > 0 ? timeline[activeIndex - 1] : null
  const currentEvent = timeline[activeIndex]
  const nextEvent = activeIndex < last ? timeline[activeIndex + 1] : null

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (dx > 56) goPrev()
    else if (dx < -56) goNext()
  }

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return
    if (e.deltaX > 20) goNext()
    else if (e.deltaX < -20) goPrev()
  }

  if (timeline.length === 0) {
    return null
  }

  return (
    <section id="events" className="relative bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Events</p>

        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Upcoming &amp; previous events
        </h2>
        <p className="mb-2 max-w-2xl text-muted-foreground">
          The center card is the focus; faded cards are the previous and next residency nights — like a queue in a
          player.
        </p>
        <p className="mb-10 text-sm text-muted-foreground/80">
          Use the arrows, swipe, or click a side card to change events.
        </p>

        <div
          className="relative mx-auto max-w-6xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Events carousel"
        >
          <div className="flex items-stretch justify-center gap-2 sm:gap-4 md:gap-6">
            <button
              type="button"
              aria-label="Previous event"
              disabled={activeIndex === 0}
              onClick={goPrev}
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-white/15 bg-white/[0.06] text-foreground transition-colors",
                "hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
                "disabled:pointer-events-none disabled:opacity-25"
              )}
            >
              <ChevronLeft className="size-6" strokeWidth={1.75} />
            </button>

            <div
              tabIndex={0}
              className="grid min-h-[min(420px,70vh)] w-full min-w-0 flex-1 grid-cols-1 items-stretch gap-3 outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary/30 sm:grid-cols-[minmax(0,1fr)_minmax(0,22rem)_minmax(0,1fr)] sm:gap-4 md:gap-5"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onWheel={onWheel}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  e.preventDefault()
                  goPrev()
                }
                if (e.key === "ArrowRight") {
                  e.preventDefault()
                  goNext()
                }
              }}
            >
              {/* Previous peek — hidden on xs, shown sm+ */}
              <div
                className={cn(
                  "hidden min-h-0 min-w-0 sm:flex sm:items-center sm:justify-end",
                  !prevEvent && "pointer-events-none sm:opacity-0"
                )}
              >
                {prevEvent && (
                  <div
                    className="w-full max-w-[13rem] opacity-45 transition-opacity duration-300 hover:opacity-70 md:max-w-[15rem]"
                    style={{ transform: "scale(0.92)" }}
                  >
                    <EventPeekCard
                      event={prevEvent}
                      isPast={prevEvent.isPast}
                      side="prev"
                      onSelect={goPrev}
                    />
                  </div>
                )}
              </div>

              {/* Center — now playing */}
              <div className="z-10 flex min-w-0 items-stretch justify-center sm:col-start-2">
                <div className="w-full max-w-md">
                  <EventCard event={currentEvent} isPast={currentEvent.isPast} />
                </div>
              </div>

              {/* Next peek */}
              <div
                className={cn(
                  "hidden min-h-0 min-w-0 sm:flex sm:items-center sm:justify-start",
                  !nextEvent && "pointer-events-none sm:opacity-0"
                )}
              >
                {nextEvent && (
                  <div
                    className="w-full max-w-[13rem] opacity-45 transition-opacity duration-300 hover:opacity-70 md:max-w-[15rem]"
                    style={{ transform: "scale(0.92)" }}
                  >
                    <EventPeekCard
                      event={nextEvent}
                      isPast={nextEvent.isPast}
                      side="next"
                      onSelect={goNext}
                    />
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              aria-label="Next event"
              disabled={activeIndex >= last}
              onClick={goNext}
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-white/15 bg-white/[0.06] text-foreground transition-colors",
                "hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
                "disabled:pointer-events-none disabled:opacity-25"
              )}
            >
              <ChevronRight className="size-6" strokeWidth={1.75} />
            </button>
          </div>

          {/* Mobile: show tiny peek row under main card */}
          <div className="mt-4 flex justify-center gap-3 sm:hidden">
            {prevEvent && (
              <div className="w-[42%] max-w-[11rem] opacity-50" style={{ transform: "scale(0.94)" }}>
                <EventPeekCard event={prevEvent} isPast={prevEvent.isPast} side="prev" onSelect={goPrev} />
              </div>
            )}
            {nextEvent && (
              <div className="w-[42%] max-w-[11rem] opacity-50" style={{ transform: "scale(0.94)" }}>
                <EventPeekCard event={nextEvent} isPast={nextEvent.isPast} side="next" onSelect={goNext} />
              </div>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground" aria-live="polite">
            Event {activeIndex + 1} of {timeline.length}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {timeline.map((ev, i) => (
              <button
                key={ev.id}
                type="button"
                aria-label={`Show event ${i + 1}`}
                aria-current={i === activeIndex}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-200",
                  i === activeIndex ? "w-8 bg-white" : "w-1.5 bg-white/25 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
