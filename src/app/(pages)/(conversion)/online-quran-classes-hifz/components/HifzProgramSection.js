'use client'

import { Target, RefreshCw, UserCheck2, TrendingUp, GraduationCap } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const program = [
  {
    icon: Target,
    title: 'Daily Memorization Targets',
    description: 'Realistic, personalized daily goals based on your pace and schedule.',
  },
  {
    icon: RefreshCw,
    title: 'Structured Revision (Dohrani)',
    description: 'Systematic revision of previously memorized portions so nothing is forgotten.',
  },
  {
    icon: UserCheck2,
    title: 'One-on-One Sessions',
    description: 'Focused, distraction-free memorization and correction with your teacher.',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: "Clear records of what's been memorized, revised, and mastered.",
  },
  {
    icon: GraduationCap,
    title: 'Certified Hafiz Teachers',
    description: 'Instructors who have themselves memorized the Quran and know the process inside out.',
  },
]

export default function HifzProgramSection() {
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
            How our Hifz program works
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            A proven memorization method built around daily consistency, not guesswork.
          </p>
        </div>

        <div className="us-page mt-10 border-t border-[var(--color-text)]/10 sm:mt-14">
          {program.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`us-page group relative flex flex-col gap-4 border-b border-[var(--color-text)]/10 py-7 pl-5 -ml-5 border-l-4 border-l-transparent motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out hover:border-l-[var(--color-primary)] hover:bg-[var(--color-primary)]/[0.035] sm:flex-row sm:items-start sm:gap-7 ${
                  inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: inView ? `${index * 90}ms` : '0ms' }}
              >
                <div className="us-page flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 transition-colors duration-300 group-hover:bg-[var(--color-primary)]">
                  <Icon
                    className="us-page h-5 w-5 text-[var(--color-primary)] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.75}
                  />
                </div>
                <div className="us-page pt-0.5 sm:pt-1.5">
                  <h3 className="us-page text-base font-bold leading-snug text-[var(--color-text)] sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="us-page mt-1.5 max-w-2xl text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
                    {item.description}
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
