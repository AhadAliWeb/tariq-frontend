'use client'

import { ShieldCheck, Timer, TrendingUp, Users2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'No Embarrassment, Ever',
    description: 'Teachers are trained specifically to support late-starting adult learners.',
  },
  {
    icon: Timer,
    title: 'Efficient Use of Time',
    description: 'Focused 30–45 minute sessions that fit into a busy day.',
  },
  {
    icon: TrendingUp,
    title: 'Real Progress Tracking',
    description: "Clear milestones so you can see how far you've come.",
  },
  {
    icon: Users2,
    title: 'Male & Female Teachers Available',
    description: 'Learn with whoever makes you most comfortable.',
  },
]

export default function AdultWhyChooseSection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page relative bg-[var(--color-background)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-5xl px-6">
        <div
          className={`us-page max-w-xl motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-4'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl">
            Why Adults Choose Us
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            The details that matter most once you're learning as a working adult, not a child in a classroom.
          </p>
        </div>

        <div className="us-page mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className={`us-page group border-t-2 border-[var(--color-primary)]/30 pt-5 transition-colors duration-300 hover:border-[var(--color-primary)] motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                  inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: inView ? `${index * 110}ms` : '0ms' }}
              >
                <Icon
                  className="us-page h-6 w-6 text-[var(--color-primary)] transition-transform duration-300 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
                <h3 className="us-page mt-3 text-base font-bold text-[var(--color-text)] sm:text-lg">
                  {reason.title}
                </h3>
                <p className="us-page mt-1.5 text-sm leading-relaxed text-[var(--color-text)] opacity-70">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
