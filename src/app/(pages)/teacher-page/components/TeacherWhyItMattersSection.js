'use client'

import { Quote } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function TeacherWhyItMattersSection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page relative overflow-hidden bg-[var(--color-background)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-3xl px-6 text-center">
        <Quote
          className={`us-page mx-auto h-10 w-10 text-[var(--color-primary)]/25 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 scale-100' : 'us-page opacity-0 scale-75'
          }`}
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <p
          className={`us-page mt-6 text-xl font-bold leading-snug tracking-tight text-[var(--color-text)] motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out sm:text-2xl lg:text-3xl ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: inView ? '120ms' : '0ms' }}
        >
          A consistent, qualified teacher builds more than knowledge — they build habit, comfort,
          and motivation.
        </p>

        <p
          className={`us-page mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[var(--color-text)] opacity-70 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out sm:text-base ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: inView ? '220ms' : '0ms' }}
        >
          That's why every student is matched with one dedicated teacher rather than rotating
          instructors, so trust and progress can build over time.
        </p>

        <div
          className={`us-page mx-auto mt-8 h-px w-16 bg-[var(--color-primary)] motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 scale-x-100' : 'us-page opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: inView ? '320ms' : '0ms' }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
