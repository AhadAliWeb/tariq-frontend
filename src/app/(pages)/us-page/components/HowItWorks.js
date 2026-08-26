'use client'

import { useEffect, useRef, useState } from 'react'
import { CalendarCheck, Video, Repeat, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book Your Free Trial',
    desc: "Tell us your child's age and goals — we'll match a tutor and confirm a time that works for your family.",
    color: 'var(--color-primary)',
    tint: '#E8F1EC',
  },
  {
    icon: Video,
    title: 'Meet Your Tutor Live',
    desc: 'A one-on-one video class over Zoom or Google Meet. No software to install — just a device and an internet connection.',
    color: 'var(--color-secondary)',
    tint: '#FBF3E1',
  },
  {
    icon: Repeat,
    title: 'Start a Weekly Plan',
    desc: 'Continue with a personalized weekly schedule, progress tracking, and a tutor your child already knows and trusts.',
    color: 'var(--color-primary)',
    tint: '#E8F1EC',
  },
]

export default function HowItWorks() {
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
            How it works
          </p>
          <h2 className="us-page mt-2 text-2xl font-extrabold text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            Three Steps to Your First Live Class
          </h2>
        </div>

        <div className="us-page mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className={`group rounded-3xl border border-black/5 bg-[var(--color-surface)] p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${
                  revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: revealed ? `${i * 120}ms` : '0ms' }}
              >
                <span
                  className="us-page block text-4xl font-extrabold leading-none sm:text-5xl lg:text-6xl"
                  style={{ color: step.color, opacity: 0.14 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div
                  className="us-page -mt-8 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: step.tint }}
                >
                  <Icon className="us-page h-6 w-6" style={{ color: step.color }} />
                </div>

                <h3 className="us-page text-base font-bold text-[var(--color-text)] sm:text-lg">{step.title}</h3>
                <p className="us-page mt-2 text-sm leading-relaxed text-[var(--color-text)] opacity-70">
                  {step.desc}
                </p>
              </div>
            )
          })}
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