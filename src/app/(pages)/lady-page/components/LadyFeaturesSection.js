'use client'

import { UserCheck, Lock, Smile, CalendarClock, Users2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const secondaryFeatures = [
  {
    icon: Lock,
    title: 'Complete Privacy',
    description: 'Learn from home, at a time that fits around family and daily responsibilities.',
  },
  {
    icon: Smile,
    title: 'Judgment-Free Pace',
    description:
      "Whether you're starting from scratch or refining advanced Tajweed, learning is entirely self-paced.",
  },
  {
    icon: CalendarClock,
    title: 'Flexible Scheduling',
    description: "Morning, afternoon, or evening slots designed around a woman's daily routine.",
  },
  {
    icon: Users2,
    title: 'One-on-One Attention',
    description: 'No group classes — every session is fully focused on you.',
  },
]

export default function LadyFeaturesSection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page relative bg-[var(--color-background)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-7xl px-6">
        <div
          className={`us-page max-w-xl motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            Why this program is different
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            Built specifically for women who want to learn the Quran privately, comfortably, and at their own pace.
          </p>
        </div>

        <div
          className={`us-page mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 motion-safe:transition-all motion-safe:duration-700 motion-safe:delay-150 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
        >
          {/* Flagship feature — the primary trust signal for this audience */}
          <div className="us-page group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[var(--color-primary)] p-7 text-white shadow-lg shadow-[var(--color-primary)]/20 transition-transform duration-300 hover:-translate-y-1 sm:col-span-2 sm:p-9 lg:col-span-2 lg:row-span-2">
            <div
              className="us-page pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--color-secondary)] opacity-20"
              aria-hidden="true"
            />
            <UserCheck className="us-page relative h-9 w-9 text-[var(--color-secondary)]" strokeWidth={1.75} />
            <div className="us-page relative mt-6">
              <h3 className="us-page text-xl font-bold leading-snug sm:text-2xl">100% Female Teachers</h3>
              <p className="us-page mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                Every instructor in this program is a qualified female Alimah or Hafizah.
              </p>
            </div>
          </div>

          {secondaryFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="us-page group flex flex-col justify-between rounded-3xl border border-black/5 bg-[var(--color-surface)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon className="us-page h-7 w-7 text-[var(--color-primary)]" strokeWidth={1.75} />
                <div className="us-page mt-5">
                  <h3 className="us-page text-base font-bold text-[var(--color-text)] sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="us-page mt-1.5 text-sm leading-relaxed text-[var(--color-text)] opacity-70">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
