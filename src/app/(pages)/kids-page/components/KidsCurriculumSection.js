'use client'

import { BookOpen, ScrollText, Mic2, Brain, HeartHandshake } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const curriculum = [
  {
    icon: BookOpen,
    title: 'Noorani Qaida',
    description: 'The foundational step before Quran reading.',
  },
  {
    icon: ScrollText,
    title: 'Quran Reading (Nazra)',
    description: 'Gradual, guided fluency building.',
  },
  {
    icon: Mic2,
    title: 'Basic Tajweed',
    description: 'Correct pronunciation from an early age.',
  },
  {
    icon: Brain,
    title: 'Hifz (Memorization)',
    description: 'Age-appropriate memorization pace with regular revision.',
  },
  {
    icon: HeartHandshake,
    title: 'Islamic Manners & Stories',
    description: 'Short lessons on akhlaq and Prophetic stories to build love for the deen.',
  },
]

export default function LadyCurriculumSection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page relative bg-[var(--color-surface)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-3xl px-6">
        <div
          className={`us-page max-w-xl motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            What your child will learn
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            A steady path from first letters to lifelong habits.
          </p>
        </div>

        <div className="us-page relative mt-12 sm:mt-16">
          {/* Timeline track */}
          <div
            className="us-page absolute left-6 top-0 bottom-0 w-px bg-[var(--color-text)]/15 sm:left-8"
            aria-hidden="true"
          >
            <div
              className={`us-page h-full w-full origin-top bg-[var(--color-primary)] transition-transform duration-[1400ms] ease-out ${
                inView ? 'us-page scale-y-100' : 'us-page scale-y-0'
              }`}
            />
          </div>

          <ol className="us-page flex flex-col gap-10 sm:gap-12">
            {curriculum.map((step, index) => {
              const Icon = step.icon
              return (
                <li
                  key={step.title}
                  className={`us-page relative flex gap-5 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out sm:gap-7 ${
                    inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: inView ? `${index * 150}ms` : '0ms' }}
                >
                  <div className="us-page relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-surface)] transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16">
                    <Icon className="us-page h-5 w-5 text-[var(--color-primary)] sm:h-6 sm:w-6" strokeWidth={1.75} />
                  </div>
                  <div className="us-page pt-1 sm:pt-3">
                    <span className="us-page text-xs font-semibold text-[var(--color-secondary)]">
                      Step 0{index + 1}
                    </span>
                    <h3 className="us-page mt-1 text-base font-bold leading-snug text-[var(--color-text)] sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="us-page mt-1.5 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
