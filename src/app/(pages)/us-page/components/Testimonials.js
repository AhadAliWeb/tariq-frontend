'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote, User, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'My son looks forward to his class every week. His tutor is patient and keeps him engaged the whole session.',
    who: 'Parent',
    place: 'Houston, TX',
    tint: '#E8F1EC',
    color: 'var(--color-primary)',
  },
  {
    quote:
      'Scheduling around our time zone was easy, and the trial class made it simple to see if it was a fit.',
    who: 'Parent',
    place: 'Chicago, IL',
    tint: '#FBF3E1',
    color: 'var(--color-secondary)',
  },
  {
    quote:
      "I started Tajweed classes as an adult and finally understand rules I've recited for years without knowing.",
    who: 'Student',
    place: 'Sacramento, CA',
    tint: '#E8F1EC',
    color: 'var(--color-primary)',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

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
    <section ref={sectionRef} className="us-page bg-[var(--color-background)] py-20 sm:py-24">
      <div className="us-page mx-auto max-w-6xl px-6">
        <div className="us-page mx-auto max-w-xl text-center">
          <p className="us-page text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            Families across the USA
          </p>
          <h2 className="us-page mt-2 text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl">
            What Parents Are Saying
          </h2>
        </div>

        <div className="us-page mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.place}
              className={`group relative overflow-hidden rounded-3xl border border-black/5 bg-[var(--color-surface)] p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: revealed ? `${i * 120}ms` : '0ms' }}
            >
              <Quote
                className="us-page absolute -right-2 -top-2 h-20 w-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ color: t.color, opacity: 0.08 }}
                fill="currentColor"
              />

              <div className="us-page relative flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="us-page h-4 w-4 text-[var(--color-secondary)]"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="us-page relative mt-4 text-sm leading-relaxed text-[var(--color-text)]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="us-page relative mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
                <div
                  className="us-page flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: t.tint }}
                >
                  <User className="us-page h-5 w-5" style={{ color: t.color }} />
                </div>
                <div>
                  <p className="us-page text-sm font-semibold text-[var(--color-text)]">{t.who}</p>
                  <p className="us-page text-xs text-[var(--color-text)] opacity-60">{t.place}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="us-page mt-14 text-center">
  <div className="relative inline-flex">
    {/* Soft outer pulse */}
    <span className="us-page absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-40 animate-ping-soft" />

    <a
      href="#trial-form"
      className="us-page group relative inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
    >
      Book Free Trial Class
      <ArrowRight className="us-page h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  </div>
</div>
      </div>
    </section>
  )
}