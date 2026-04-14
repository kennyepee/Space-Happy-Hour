"use client"

import { useEffect, useRef } from "react"

type Comet = {
  x: number
  y: number
  vx: number
  vy: number
  /** Tail length as fraction of min(viewport) — set once per pass */
  tailScale: number
}

function resetComet(w: number, h: number): Comet {
  const angle = Math.PI * 0.08 + Math.random() * (Math.PI * 0.18)
  const speed = 0.22 + Math.random() * 0.14
  return {
    x: -w * (0.08 + Math.random() * 0.12),
    y: -h * (0.02 + Math.random() * 0.1),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    tailScale: 0.36 + Math.random() * 0.06,
  }
}

function drawComet(
  ctx: CanvasRenderingContext2D,
  c: Comet,
  w: number,
  h: number,
) {
  const speed = Math.hypot(c.vx, c.vy) || 1
  const ux = c.vx / speed
  const uy = c.vy / speed
  const tailLen = Math.min(w, h) * c.tailScale
  const tx = c.x - ux * tailLen
  const ty = c.y - uy * tailLen

  const g = ctx.createLinearGradient(c.x, c.y, tx, ty)
  g.addColorStop(0, "rgba(255,252,255,0.42)")
  g.addColorStop(0.08, "rgba(210,232,255,0.28)")
  g.addColorStop(0.22, "rgba(160,200,240,0.12)")
  g.addColorStop(0.55, "rgba(120,170,220,0.04)")
  g.addColorStop(1, "rgba(80,120,180,0)")

  ctx.save()
  ctx.globalCompositeOperation = "screen"

  ctx.strokeStyle = "rgba(160,200,255,0.12)"
  ctx.lineWidth = 36
  ctx.lineCap = "round"
  ctx.beginPath()
  ctx.moveTo(c.x, c.y)
  ctx.lineTo(tx, ty)
  ctx.stroke()

  ctx.strokeStyle = g
  ctx.lineWidth = 11
  ctx.beginPath()
  ctx.moveTo(c.x, c.y)
  ctx.lineTo(tx, ty)
  ctx.stroke()

  ctx.lineWidth = 4
  ctx.globalAlpha = 0.55
  ctx.strokeStyle = "rgba(255,255,255,0.35)"
  ctx.beginPath()
  ctx.moveTo(c.x, c.y)
  ctx.lineTo(c.x - ux * tailLen * 0.35, c.y - uy * tailLen * 0.35)
  ctx.stroke()
  ctx.globalAlpha = 1

  const coma = ctx.createRadialGradient(
    c.x - ux * 4,
    c.y - uy * 4,
    0,
    c.x,
    c.y,
    14,
  )
  coma.addColorStop(0, "rgba(255,255,255,0.5)")
  coma.addColorStop(0.35, "rgba(200,225,255,0.18)")
  coma.addColorStop(1, "rgba(150,190,255,0)")
  ctx.fillStyle = coma
  ctx.beginPath()
  ctx.arc(c.x, c.y, 14, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = "rgba(255,255,255,0.75)"
  ctx.beginPath()
  ctx.arc(c.x, c.y, 1.9, 0, Math.PI * 2)
  ctx.fill()

  ctx.restore()
}

export function DistantComet() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let comet = resetComet(
      window.innerWidth,
      window.innerHeight,
    )
    let rafId = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const tick = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      comet.x += comet.vx
      comet.y += comet.vy

      const margin = Math.max(w, h) * 0.25
      if (
        comet.x > w + margin ||
        comet.y > h + margin ||
        comet.x < -margin * 2
      ) {
        comet = resetComet(w, h)
      }

      drawComet(ctx, comet, w, h)

      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ opacity: 0.48 }}
      aria-hidden
    />
  )
}
