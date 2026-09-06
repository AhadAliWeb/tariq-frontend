'use client'

import { Ear, BadgeCheck, TrendingUp, User, ClipboardCheck } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const benefits = [
  {
    icon: Ear,
    title: 'Live, Real-Time Correction',
    description: 'Your teacher listens and corrects your recitation as you go, not after the fact.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Tajweed Teachers',
    description: 'Instructors trained specifically in Tajweed rules and their correct application.',
  },
  {
    icon: TrendingUp,
    title: 'Beginner to Advanced Levels',
    description: "Whether you're learning basic rules or refining advanced recitation styles (Qira'at).",
  },
  {
    icon: User,
    title: 'One-on-One Format',
    description: "Personal correction that group classes simply can't offer.",
  },
  {
    icon: ClipboardCheck,
    title: 'Practical, Not Just Theoretical',
    description: 'Every rule is practiced within actual Quranic verses.',
  },
]

export default function TajweedBenefitsSection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page relative bg-[var(--color-background)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-4xl px-6">
        <div
          className={`us-page max-w-xl motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            Why learn Tajweed with us
          </h2>
        </div>

        <div className="us-page relative mt-12">
          <div
            className="us-page absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[var(--color-text)]/10 sm:block"
            aria-hidden="true"
          />
          <div className="us-page flex flex-col gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              const fromLeft = index % 2 === 0
              return (
                <div
                  key={benefit.title}
                  className={`us-page relative flex items-start gap-4 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out sm:w-1/2 ${
                    fromLeft
                      ? 'us-page sm:flex-row sm:pr-8'
                      : 'us-page sm:ml-auto sm:flex-row-reverse sm:pl-8 sm:text-right'
                  } ${
                    inView
                      ? 'us-page opacity-100 translate-x-0'
                      : `us-page opacity-0 ${fromLeft ? 'us-page -translate-x-6' : 'us-page translate-x-6'}`
                  }`}
                  style={{ transitionDelay: inView ? `${index * 120}ms` : '0ms' }}
                >
                  <span className="us-page relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-secondary)] bg-[var(--color-surface)] shadow-sm transition-transform duration-300 hover:scale-110">
                    <Icon className="us-page h-5 w-5 text-[var(--color-primary)]" strokeWidth={1.75} />
                  </span>
                  <div className="us-page">
                    <h3 className="us-page text-base font-bold text-[var(--color-text)]">{benefit.title}</h3>
                    <p className="us-page mt-1.5 text-sm leading-relaxed text-[var(--color-text)] opacity-70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
