'use client'

import { BookOpenText, Mic2, Brain, Languages, CalendarCheck2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    icon: BookOpenText,
    title: 'Quran Reading (Nazra)',
    description: 'Rebuild or refine fluent recitation.',
  },
  {
    icon: Mic2,
    title: 'Tajweed Mastery',
    description: 'Correct long-standing pronunciation habits with expert guidance.',
  },
  {
    icon: Brain,
    title: 'Hifz for Adults',
    description: 'A realistic, structured memorization plan that respects your schedule.',
  },
  {
    icon: Languages,
    title: 'Basic Arabic & Tafsir',
    description: "Understand the words you're reciting.",
  },
  {
    icon: CalendarCheck2,
    title: 'Daily Practice Guidance',
    description: 'Practical tips for building consistency around work and family.',
  },
]

export default function AdultCurriculumSection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page relative bg-[var(--color-surface)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-4xl px-6">
        <div
          className={`us-page max-w-xl motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-4'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl">
            What Adult Students Learn
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            A realistic path, taken one stage at a time.
          </p>
        </div>

        <div className="us-page relative mt-12">
          {/* connecting line, drawn once on scroll into view */}
          <div
            className="us-page absolute left-4 top-2 bottom-2 w-px bg-[var(--color-text)]/10 sm:left-5"
            aria-hidden="true"
          >
            <div
              className={`us-page h-full w-full origin-top bg-[var(--color-primary)] transition-transform duration-[1400ms] ease-out ${
                inView ? 'us-page scale-y-100' : 'us-page scale-y-0'
              }`}
            />
          </div>

          <ol className="us-page space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <li
                  key={step.title}
                  className={`us-page relative pl-12 sm:pl-16 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                    inView ? 'us-page opacity-100 translate-x-0' : 'us-page opacity-0 -translate-x-3'
                  }`}
                  style={{ transitionDelay: inView ? `${index * 150}ms` : '0ms' }}
                >
                  <div className="us-page absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-surface)] text-[var(--color-primary)] transition-colors duration-300 sm:h-10 sm:w-10">
                    <Icon className="us-page h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="us-page text-base font-bold text-[var(--color-text)] sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="us-page mt-1 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
                    {step.description}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
