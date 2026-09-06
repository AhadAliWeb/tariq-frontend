'use client'

import { BookOpen, Brain, RotateCcw, Users } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const audiences = [
  {
    icon: BookOpen,
    title: 'Reading Reciters',
    description: 'Students who can already read Quran but want to correct their pronunciation.',
  },
  {
    icon: Brain,
    title: 'Hifz Students',
    description: 'Hifz students who need Tajweed reinforced alongside memorization.',
  },
  {
    icon: RotateCcw,
    title: 'Self-Taught Adults',
    description: 'Adults who learned to recite informally and want to correct long-standing habits.',
  },
  {
    icon: Users,
    title: 'Aspiring Reciters',
    description: 'Anyone preparing to recite in front of others — Taraweeh, family gatherings, or competitions.',
  },
]

export default function TajweedAudienceSection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page bg-[var(--color-surface)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-7xl px-6">
        <div
          className={`us-page max-w-xl motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            Who this is for
          </h2>
        </div>

        <div className="us-page mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((persona, index) => {
            const Icon = persona.icon
            const accent = index % 2 === 0 ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-secondary)]'
            return (
              <div
                key={persona.title}
                className={`us-page group overflow-hidden rounded-2xl border border-[var(--color-text)]/10 bg-[var(--color-background)] motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out hover:-translate-y-1.5 hover:shadow-lg ${
                  inView ? 'us-page opacity-100 translate-y-0 scale-100' : 'us-page opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: inView ? `${index * 110}ms` : '0ms' }}
              >
                <div className={`us-page h-1.5 w-full ${accent} motion-safe:transition-all motion-safe:duration-500 group-hover:h-2.5`} />
                <div className="us-page p-6">
                  <Icon className="us-page h-6 w-6 text-[var(--color-primary)]" strokeWidth={1.75} />
                  <h3 className="us-page mt-4 text-base font-bold text-[var(--color-text)]">{persona.title}</h3>
                  <p className="us-page mt-1.5 text-sm leading-relaxed text-[var(--color-text)] opacity-70">
                    {persona.description}
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
