'use client'

import { Home, VideoOff, Handshake, ShieldCheck } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const lifestylePoints = [
  {
    icon: Home,
    title: 'Around Household & Family Duties',
    description: 'Class times that work with parenting, work, and home responsibilities.',
  },
  {
    icon: VideoOff,
    title: 'Comfortable Learning Space',
    description: 'No cameras required if you prefer audio-only sessions.',
  },
  {
    icon: Handshake,
    title: 'Consistent Teacher Match',
    description: 'Build trust and comfort with the same instructor over time.',
  },
  {
    icon: ShieldCheck,
    title: 'Supportive, Encouraging Environment',
    description: 'No pressure, no comparison — just steady personal growth.',
  },
]

export default function LadyLifestyleSection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page bg-[var(--color-background)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-7xl px-6">
        <div
          className={`us-page overflow-hidden rounded-[2rem] bg-[var(--color-primary)]/5 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
        >
          <div className="us-page grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-16">
            <div className="us-page flex flex-col justify-center">
              <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
                Designed around a woman&apos;s life
              </h2>
              <p className="us-page mt-4 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
                Your schedule, your comfort, your pace — every part of this program is built to fit around the
                life you&apos;re already living, not the other way around.
              </p>
            </div>

            <div className="us-page flex flex-col divide-y divide-[var(--color-text)]/10">
              {lifestylePoints.map((point) => {
                const Icon = point.icon
                return (
                  <div key={point.title} className="us-page group flex gap-4 py-5 first:pt-0 last:pb-0">
                    <span className="us-page flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="us-page h-5 w-5 text-[var(--color-primary)]" strokeWidth={1.75} />
                    </span>
                    <div className="us-page">
                      <h3 className="us-page text-base font-bold text-[var(--color-text)]">{point.title}</h3>
                      <p className="us-page mt-1 text-sm leading-relaxed text-[var(--color-text)] opacity-70">
                        {point.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
