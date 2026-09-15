'use client'

import { Users, Brain, Compass, GraduationCap } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const audience = [
  {
    icon: Users,
    title: 'Families',
    description: 'Wanting a complete Islamic education for their children, not just Quran reading.',
  },
  {
    icon: Brain,
    title: 'Adults',
    description: 'Looking to strengthen their understanding of Aqeedah, Fiqh, and Seerah.',
  },
  {
    icon: Compass,
    title: 'Reverts',
    description: 'New Muslims wanting a structured introduction to core Islamic knowledge.',
  },
  {
    icon: GraduationCap,
    title: 'Homeschooling Families',
    description: 'Needing a reliable Islamic studies component in their curriculum.',
  },
]

export default function OnClassAudienceSection() {
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
            Who this program is for
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            One program, built to flex around wherever you or your family are starting from.
          </p>
        </div>

        <div className="us-page mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-12">
          {audience.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
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
                  {item.title}
                </h3>
                <p className="us-page mt-2 max-w-md text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
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
