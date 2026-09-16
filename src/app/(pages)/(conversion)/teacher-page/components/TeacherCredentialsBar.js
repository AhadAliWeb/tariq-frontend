'use client'

import { ShieldCheck, Award, Users2, Globe2, RefreshCcw } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const credentials = [
  { icon: Award, label: 'Ijazah-Certified' },
  { icon: ShieldCheck, label: 'Background-Checked' },
  { icon: Globe2, label: 'Native Arabic Speakers' },
  { icon: Users2, label: 'Male & Female Teachers' },
  { icon: RefreshCcw, label: 'Ongoing Trained' },
]

export default function TeacherCredentialsBar() {
  const [ref, inView] = useScrollReveal()

  return (
    <section
      ref={ref}
      className="us-page relative border-y border-[var(--color-text)]/10 bg-[var(--color-surface)] py-6 sm:py-8"
    >
      <div className="us-page mx-auto max-w-7xl px-6">
        <div className="us-page flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:justify-between">
          {credentials.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={`us-page flex items-center gap-2.5 motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out ${
                  inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: inView ? `${index * 90}ms` : '0ms' }}
              >
                <span className="us-page flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                  <Icon className="us-page h-4 w-4 text-[var(--color-primary)]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="us-page whitespace-nowrap text-xs font-semibold text-[var(--color-text)] sm:text-sm">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
