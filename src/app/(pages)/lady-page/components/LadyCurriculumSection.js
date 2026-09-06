'use client'

import { BookOpen, Volume2, BookMarked, Scale, Sparkles } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const curriculum = [
  {
    icon: BookOpen,
    title: 'Quran Reading (Nazra)',
    description: 'From basic Arabic letters to fluent recitation.',
  },
  {
    icon: Volume2,
    title: 'Tajweed Rules',
    description: 'Precise pronunciation taught step-by-step.',
  },
  {
    icon: BookMarked,
    title: 'Hifz (Memorization)',
    description: 'A structured, realistic memorization plan for busy schedules.',
  },
  {
    icon: Scale,
    title: 'Islamic Studies & Fiqh for Women',
    description: "Topics specifically relevant to women's daily practice.",
  },
  {
    icon: Sparkles,
    title: 'Tafsir & Understanding',
    description: 'Optional lessons to connect deeply with the meaning of the Quran.',
  },
]

export default function LadyCurriculumSection() {
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
            What you can learn
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            A learning path that moves at your speed, from your very first letter to a deeper understanding of
            meaning.
          </p>
        </div>

        <div className="us-page relative mt-14">
          {/* Connecting line — desktop, horizontal */}
          <div
            className="us-page absolute left-0 right-0 top-6 hidden h-px bg-[var(--color-text)]/10 lg:block"
            aria-hidden="true"
          />
          {/* Connecting line — mobile, vertical */}
          <div
            className="us-page absolute bottom-2 left-6 top-2 w-px bg-[var(--color-text)]/10 lg:hidden"
            aria-hidden="true"
          />

          <ol className="us-page relative flex flex-col gap-10 lg:grid lg:grid-cols-5 lg:gap-6">
            {curriculum.map((item, index) => {
              const Icon = item.icon
              return (
                <li
                  key={item.title}
                  className={`us-page relative flex gap-4 lg:flex-col lg:gap-0 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                    inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: inView ? `${index * 100}ms` : '0ms' }}
                >
                  <span className="us-page relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-background)] text-sm font-bold text-[var(--color-primary)] lg:mb-5">
                    0{index + 1}
                  </span>
                  <div className="us-page lg:pr-2">
                    <Icon
                      className="us-page mb-2 hidden h-5 w-5 text-[var(--color-secondary)] lg:block"
                      strokeWidth={1.75}
                    />
                    <h3 className="us-page text-base font-bold text-[var(--color-text)]">{item.title}</h3>
                    <p className="us-page mt-1.5 text-sm leading-relaxed text-[var(--color-text)] opacity-70">
                      {item.description}
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
