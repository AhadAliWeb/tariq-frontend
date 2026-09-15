'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const audience = [
  'Adults wanting to (re)learn the Quran from scratch',
  'Anyone looking to correct their Tajweed and recitation',
  'Students working toward memorizing the Quran',
  'New Muslims wanting a structured, judgment-free start',
]

export default function LearnQuranAudienceSection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page relative bg-[var(--color-background)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-3xl px-6 text-center">
        <div
          className={`us-page motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            Who is this for?
          </h2>
          <p className="us-page mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            Wherever you're starting from, there's a plan built for you.
          </p>
        </div>

        <div className="us-page mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-3.5">
          {audience.map((item, index) => (
            <span
              key={item}
              className={`us-page rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/[0.06] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 sm:text-base ${
                inView ? 'us-page opacity-100 translate-y-0 scale-100' : 'us-page opacity-0 translate-y-3 scale-95'
              }`}
              style={{ transitionDelay: inView ? `${index * 100}ms` : '0ms' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
