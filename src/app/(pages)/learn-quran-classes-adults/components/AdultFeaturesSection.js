'use client'

import { Clock3, UserRound, Compass, BookOpenCheck, HeartHandshake } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const features = [
  {
    icon: Clock3,
    title: 'Flexible Scheduling',
    description: 'Early mornings, lunch breaks, evenings, or weekends — you choose.',
  },
  {
    icon: UserRound,
    title: 'Private, One-on-One Classes',
    description: 'No group settings, no comparing yourself to others.',
  },
  {
    icon: Compass,
    title: 'Start From Any Level',
    description: "Whether you've never read Arabic or simply want to polish your Tajweed.",
  },
  {
    icon: BookOpenCheck,
    title: 'Understand, Not Just Recite',
    description: 'Optional Tafsir and Arabic comprehension add-ons so you connect with the meaning.',
  },
  {
    icon: HeartHandshake,
    title: 'Consistent Teacher Relationship',
    description: 'Build a rapport with one dedicated instructor over time.',
  },
]

export default function AdultFeaturesSection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page relative bg-[var(--color-background)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-5xl px-6">
        <div className="us-page grid gap-10 sm:grid-cols-[minmax(0,240px)_1fr] sm:gap-14">
          <div
            className={`us-page sm:sticky sm:top-28 sm:self-start motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-4'
            }`}
          >
            <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl">
              Designed Around Your Life
            </h2>
            <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
              Adult schedules are unpredictable. Your classes should bend to that, not the other way around.
            </p>
          </div>

          <ul className="us-page divide-y divide-[var(--color-text)]/10 border-t border-[var(--color-text)]/10">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <li
                  key={feature.title}
                  className={`us-page group motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                    inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: inView ? `${index * 100}ms` : '0ms' }}
                >
                  <div className="us-page flex items-start gap-4 border-l-2 border-transparent py-5 pl-4 transition-all duration-300 group-hover:border-[var(--color-secondary)] group-hover:pl-6 group-hover:bg-[var(--color-surface)]">
                    <Icon
                      className="us-page mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform duration-300 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                    />
                    <div className="us-page">
                      <h3 className="us-page text-base font-bold text-[var(--color-text)] sm:text-lg">
                        {feature.title}
                      </h3>
                      <p className="us-page mt-1 text-sm leading-relaxed text-[var(--color-text)] opacity-70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
