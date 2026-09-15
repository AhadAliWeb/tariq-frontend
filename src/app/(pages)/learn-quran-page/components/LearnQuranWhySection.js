'use client'

import { UserCheck2, CalendarClock, GraduationCap, Gauge, LineChart } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const reasons = [
  {
    icon: UserCheck2,
    title: 'One-on-One Attention',
    description: 'Every class is tailored to your level, not a fixed group curriculum.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Scheduling',
    description: 'Classes available 7 days a week, across multiple timezones.',
  },
  {
    icon: GraduationCap,
    title: 'Qualified Teachers',
    description: 'Ijazah-holders and experienced instructors, screened and vetted.',
  },
  {
    icon: Gauge,
    title: 'Learn at Your Own Pace',
    description: 'No pressure to keep up with a class of strangers.',
  },
  {
    icon: LineChart,
    title: 'Progress You Can See',
    description: 'Regular assessments and feedback after every stage.',
  },
]

export default function LearnQuranWhySection() {
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
            Why learn with us
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            Everything is built around how you actually want to learn, not a fixed classroom model.
          </p>
        </div>

        <div className="us-page mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`us-page group rounded-2xl border border-[var(--color-text)]/10 bg-[var(--color-background)] p-6 motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-black/5 ${
                  inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: inView ? `${index * 90}ms` : '0ms' }}
              >
                <div className="us-page flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 transition-colors duration-300 group-hover:bg-[var(--color-primary)]">
                  <Icon
                    className="us-page h-5 w-5 text-[var(--color-primary)] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="us-page mt-4 text-base font-bold leading-snug text-[var(--color-text)] sm:text-lg">
                  {item.title}
                </h3>
                <p className="us-page mt-1.5 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
