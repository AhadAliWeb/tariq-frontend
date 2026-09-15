'use client'

import { Baby, Briefcase, RotateCcw, Star } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const audiences = [
  {
    icon: Baby,
    title: 'Children',
    description: 'Age-appropriate daily targets that build lifelong memorization habits.',
  },
  {
    icon: Briefcase,
    title: 'Adults',
    description: 'Realistic plans that work around jobs, family, and other responsibilities.',
  },
  {
    icon: RotateCcw,
    title: 'Students Restarting Hifz',
    description: 'A fresh, structured restart for those who paused memorization before.',
  },
  {
    icon: Star,
    title: 'Advanced Reciters',
    description: 'Students refining and perfecting portions already memorized.',
  },
]

export default function HifzSuitableForSection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page relative bg-[var(--color-surface)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-7xl px-6">
        <div
          className={`us-page max-w-xl motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            Suitable for every stage of the journey
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            Whatever your starting point, we build a plan around where you are today.
          </p>
        </div>

        <div className="us-page mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-12">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={audience.title}
                className={`us-page group border-t-2 border-[var(--color-primary)]/20 pt-6 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out hover:border-[var(--color-primary)] ${
                  inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: inView ? `${index * 110}ms` : '0ms' }}
              >
                <Icon
                  className="us-page h-7 w-7 text-[var(--color-primary)] transition-transform duration-300 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
                <h3 className="us-page mt-4 text-lg font-bold leading-snug text-[var(--color-text)]">
                  {audience.title}
                </h3>
                <p className="us-page mt-2 max-w-md text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
                  {audience.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
