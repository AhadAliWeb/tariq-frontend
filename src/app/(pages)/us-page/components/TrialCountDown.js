'use client'

import { useEffect, useRef, useState } from 'react'
import { Clock, Sparkles, ArrowRight } from 'lucide-react'

// ── Countdown configuration ──────────────────────────────────
// Set how long the countdown should run. It starts from this
// duration the moment the page loads and counts down to zero.
const COUNTDOWN_HOURS = 5
const COUNTDOWN_MINUTES = 0
const COUNTDOWN_SECONDS = 0

// When the timer hits 00:00:00 it restarts from the duration above,
// so the banner always shows an active countdown. Delete the
// "restart" block inside tick() below if you'd rather it stop at zero.
function getCountdownDurationMs() {
  return (COUNTDOWN_HOURS * 3600 + COUNTDOWN_MINUTES * 60 + COUNTDOWN_SECONDS) * 1000
}

export default function TrialCountdownBand() {
  const [time, setTime] = useState({ h: '00', m: '00', s: '00' })
  const targetRef = useRef(null)
  const sectionRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    targetRef.current = Date.now() + getCountdownDurationMs()

    function tick() {
      let diff = targetRef.current - Date.now()
      if (diff <= 0) {
        // Timer reached zero — restart from the configured duration.
        targetRef.current = Date.now() + getCountdownDurationMs()
        diff = targetRef.current - Date.now()
      }
      const totalSeconds = Math.floor(diff / 1000)
      const h = Math.floor(totalSeconds / 3600)
      const m = Math.floor((totalSeconds % 3600) / 60)
      const s = totalSeconds % 60
      setTime({
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0'),
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true)
      return
    }

    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="us-page bg-[var(--color-background)] px-6 py-20 sm:py-24">
      <div
        className={`trial-band-shell mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-12 shadow-2xl transition-all duration-700 sm:px-12 ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, #0a3a25 100%)',
        }}
      >
        <div className="us-page relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_auto_auto]">
          {/* Decorative sparkles */}
          <Sparkles
            className="us-page band-float pointer-events-none absolute -top-6 right-4 h-8 w-8 text-[var(--color-secondary)] opacity-40 lg:right-1/3"
            aria-hidden="true"
          />

          {/* Copy */}
          <div className="us-page text-center lg:text-left">
            <p className="us-page text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
              Limited trial spots this week
            </p>
            <h2 className="us-page mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Book Your Family&apos;s Free Trial Class Today
            </h2>
            <p className="us-page mx-auto mt-2 max-w-md text-sm text-white/70 lg:mx-0">
              No payment or commitment required. Meet your tutor live and decide afterward.
            </p>
          </div>

          {/* Countdown */}
          <div className="us-page flex flex-col items-center gap-3">
            <div className="us-page flex items-center gap-1.5 text-xs font-medium text-white/70">
              <Clock className="us-page h-3.5 w-3.5 text-[var(--color-secondary)]" />
              Spots refresh in
            </div>
            <div className="us-page flex items-center gap-3">
              {[
                { value: time.h, label: 'Hours' },
                { value: time.m, label: 'Mins' },
                { value: time.s, label: 'Secs' },
              ].map((unit) => (
                <div key={unit.label} className="us-page flex flex-col items-center">
                  <div className="us-page flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                    <span
                      key={unit.value}
                      className="us-page countdown-tick font-mono text-2xl font-bold tabular-nums text-white"
                    >
                      {unit.value}
                    </span>
                  </div>
                  <span className="us-page mt-1.5 text-[11px] font-medium uppercase tracking-wide text-white/60">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="us-page flex justify-center lg:justify-end">
            <a
              href="#trial-form"
              className="us-page group inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-7 py-3.5 font-semibold text-[var(--color-text)] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-105"
            >
              Book Free Trial Class
              <ArrowRight className="us-page h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bandFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(10deg);
          }
        }
        @keyframes tickIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .band-float {
            animation: bandFloat 5s ease-in-out infinite;
          }
          .countdown-tick {
            animation: tickIn 0.25s ease-out;
          }
        }
      `}</style>
    </section>
  )
}