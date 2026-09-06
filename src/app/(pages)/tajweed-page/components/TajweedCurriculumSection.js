'use client'

import { useState } from 'react'
import { Mic2, GitBranch, Waves, PauseCircle, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const rules = [
  {
    icon: Mic2,
    tag: 'Articulation',
    title: 'Makharij al-Huroof',
    teaser: 'Where each letter truly begins.',
    description: 'The correct articulation point of every Arabic letter.',
  },
  {
    icon: GitBranch,
    tag: 'Noon & Meem',
    title: 'Rules of Noon & Meem Sakinah',
    teaser: 'Ikhfa, Idghaam, Iqlab & Izhar.',
    description: 'Ikhfa, Idghaam, Iqlab, and Izhar explained clearly.',
  },
  {
    icon: Waves,
    tag: 'Elongation',
    title: 'Madd Rules',
    teaser: 'How long each sound should stretch.',
    description: 'Elongation rules and their different durations.',
  },
  {
    icon: PauseCircle,
    tag: 'Stopping',
    title: 'Qalqalah & Waqf Rules',
    teaser: 'Controlled echoes and clean stops.',
    description: 'Proper stopping and letter-echoing rules.',
  },
  {
    icon: CheckCircle2,
    tag: 'Practice',
    title: 'Practical Application',
    teaser: 'Rules applied inside real recitation.',
    description: 'Applying every rule directly within real Quran recitation, not just theory.',
  },
]

export default function TajweedCurriculumSection() {
  const [ref, inView] = useScrollReveal()
  const [flipped, setFlipped] = useState({})

  const toggleFlip = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <section ref={ref} className="us-page relative bg-[var(--color-surface)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-7xl px-6">
        <div
          className={`us-page max-w-xl motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            What you&apos;ll learn
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            Five rule groups, each practiced until it becomes second nature. Tap a card to see what it covers.
          </p>
        </div>

        <div className="us-page mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {rules.map((rule, index) => {
            const Icon = rule.icon
            const isFlipped = Boolean(flipped[index])
            return (
              <button
                type="button"
                key={rule.title}
                onClick={() => toggleFlip(index)}
                aria-pressed={isFlipped}
                aria-label={`${rule.title}. Tap to reveal description.`}
                className={`us-page group relative h-60 w-full [perspective:1200px] text-left motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                  inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: inView ? `${index * 90}ms` : '0ms' }}
              >
                <div
                  className={`us-page relative h-full w-full [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:-translate-y-1 ${
                    isFlipped ? 'us-page [transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* Front */}
                  <div className="us-page absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-text)]/10 bg-[var(--color-background)] p-5 [backface-visibility:hidden]">
                    <Icon
                      className="us-page pointer-events-none absolute -bottom-5 -right-5 h-28 w-28 text-[var(--color-primary)] opacity-[0.06]"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />

                    <div className="us-page relative flex items-center justify-between gap-2">
                      <span className="us-page text-xs font-semibold text-[var(--color-secondary)]">
                        0{index + 1}
                      </span>
                      <span className="us-page rounded-full bg-[var(--color-primary)]/10 px-2.5 py-1 text-[11px] font-medium text-[var(--color-primary)]">
                        {rule.tag}
                      </span>
                    </div>

                    <div className="us-page relative">
                      <Icon className="us-page h-8 w-8 text-[var(--color-primary)]" strokeWidth={1.75} />
                      <h3 className="us-page mt-3 text-base font-bold leading-snug text-[var(--color-text)]">
                        {rule.title}
                      </h3>
                      <p className="us-page mt-1.5 text-xs leading-relaxed text-[var(--color-text)] opacity-60">
                        {rule.teaser}
                      </p>
                    </div>

                    <span className="us-page relative text-[11px] font-medium text-[var(--color-primary)] opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                      Tap to reveal the full rule
                    </span>
                  </div>

                  {/* Back */}
                  <div className="us-page absolute inset-0 flex flex-col justify-center gap-2 rounded-2xl bg-[var(--color-primary)] p-5 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <Icon className="us-page h-6 w-6 text-[var(--color-secondary)]" strokeWidth={1.75} />
                    <h3 className="us-page text-sm font-bold leading-snug">{rule.title}</h3>
                    <p className="us-page text-sm leading-relaxed text-white/85">{rule.description}</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}