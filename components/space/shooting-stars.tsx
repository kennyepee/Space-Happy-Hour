"use client"

import { useEffect, useRef } from "react"

type Meteor = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
}

function drawMeteor(ctx: CanvasRenderingContext2D, m: Meteor) {
  const t = m.life / m.maxLife
  const speed = Math.hypot(m.vx, m.vy) || 1
  const ux = m.vx / speed
  const uy = m.vy / speed
  const tail = 62 + 42 * t

  const x1 = m.x - ux * tail
  const y1 = m.y - uy * tail

  const grad = ctx.createLinearGradient(m.x, m.y, x1, y1)
  grad.addColorStop(0, `rgba(255,255,255,${0.88 * t})`)
  grad.addColorStop(0.08, `rgba(245,248,255,${0.62 * t})`)
  grad.addColorStop(0.22, `rgba(230,238,255,${0.38 * t})`)
  grad.addColorStop(1, "rgba(220,232,255,0)")

  ctx.save()
  ctx.strokeStyle = "rgba(200,220,255,0.22)"
  ctx.lineWidth = 4.2
  ctx.lineCap = "round"
  ctx.beginPath()
  ctx.moveTo(m.x, m.y)
  ctx.lineTo(x1, y1)
  ctx.stroke()
  ctx.strokeStyle = grad
  ctx.lineWidth = 2.2
  ctx.stroke()
  ctx.restore()

  ctx.fillStyle = `rgba(255,252,255,${0.78 * t})`
  ctx.beginPath()
  ctx.arc(m.x, m.y, 1.65, 0, Math.PI * 2)
  ctx.fill()
}

function spawnMeteor(w: number, h: number): Meteor {
  const edge = Math.floor(Math.random() * 4)
  let x = 0
  let y = 0
  if (edge === 0) {
    x = -20
    y = Math.random() * h
  } else if (edge === 1) {
    x = w + 20
    y = Math.random() * h
  } else if (edge === 2) {
    x = Math.random() * w
    y = -20
  } else {
    x = Math.random() * w
    y = h + 20
  }
  const targetX = Math.random() * w
  const targetY = Math.random() * h
  const dx = targetX - x
  const dy = targetY - y
  const dist = Math.hypot(dx, dy) || 1
  const speed = 6 + Math.random() * 7
  const maxLife = 48 + Math.floor(Math.random() * 72)
  return {
    x,
    y,
    vx: (dx / dist) * speed,
    vy: (dy / dist) * speed,
    life: maxLife,
    maxLife,
  }
}

export function ShootingStars() {
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

    let meteors: Meteor[] = []
    let nextMeteorIn = 80 + Math.random() * 120
    let rafId = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nextMeteorIn -= 1
      if (nextMeteorIn <= 0 && meteors.length < 2) {
        meteors.push(spawnMeteor(canvas.width, canvas.height))
        nextMeteorIn = 200 + Math.random() * 380
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]
        m.x += m.vx
        m.y += m.vy
        m.life -= 1
        if (m.life <= 0) {
          meteors.splice(i, 1)
          continue
        }
        drawMeteor(ctx, m)
      }

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
      className="absolute inset-0 z-[1] h-full w-full"
      style={{ opacity: 0.9 }}
      aria-hidden
    />
  )
}
