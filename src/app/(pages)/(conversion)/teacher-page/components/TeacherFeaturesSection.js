'use client'

import { GraduationCap, SearchCheck, UsersRound, Sparkles, BriefcaseBusiness } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const differences = [
  {
    icon: GraduationCap,
    title: 'Certified & Ijazah-Holding',
    description: 'Every teacher is formally certified in Quran recitation and Tajweed.',
  },
  {
    icon: SearchCheck,
    title: 'Carefully Screened',
    description: 'Background-checked and interviewed before joining our teaching panel.',
  },
  {
    icon: UsersRound,
    title: 'Matched to You',
    description: 'Selection based on gender preference, age group, level, and learning style.',
  },
  {
    icon: Sparkles,
    title: 'Ongoing Training',
    description: 'Teachers regularly trained in modern, engaging online teaching methods.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Real Teaching Experience',
    description: 'Years of experience teaching students of all ages, from beginners to Hifz students.',
  },
]

export default function TeacherFeaturesSection() {
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
            What makes our teachers different
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            The right teacher makes all the difference in how quickly and confidently you learn.
          </p>
        </div>

        <div className="us-page mt-10 border-t border-[var(--color-text)]/10 sm:mt-14">
          {differences.map((item, index) => {
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
