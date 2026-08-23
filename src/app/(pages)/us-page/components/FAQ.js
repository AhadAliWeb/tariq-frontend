'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    q: 'Is the free trial class really free?',
    a: "Yes. The trial class has no cost and no obligation to continue. It's a chance for your student to meet a tutor before you commit to a weekly plan.",
  },
  {
    q: 'Can I choose a male or female tutor?',
    a: "Yes, you can request a male or female tutor for your student, and we'll match based on availability in your time zone.",
  },
  {
    q: 'What times are available for US time zones?',
    a: 'Classes are offered across morning, evening, and weekend slots to fit Eastern, Central, Mountain, and Pacific time zones.',
  },
  {
    q: 'Do I need any special software?',
    a: 'No. Classes run over Zoom or Google Meet on any phone, tablet, or computer with a camera and internet connection.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true)
      return
    }

    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function toggle(i) {
    setOpenIndex((current) => (current === i ? -1 : i))
  }

  return (
    <section ref={sectionRef} className="us-page bg-[var(--color-background)] py-20 sm:py-24">
      <div className="us-page mx-auto max-w-3xl px-6">
        <div className="us-page mx-auto max-w-xl text-center">
          <p className="us-page text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            Questions
          </p>
          <h2 className="us-page mt-2 text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="us-page mt-12 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-[var(--color-surface)] shadow-sm transition-all duration-500 ${
                  isOpen ? 'border-[var(--color-primary)]/30 shadow-md' : 'border-black/5'
                } ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: revealed ? `${i * 90}ms` : '0ms' }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="us-page flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="us-page font-semibold text-[var(--color-text)]">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="us-page overflow-hidden">
                    <p className="us-page px-6 pb-5 text-sm leading-relaxed text-[var(--color-text)] opacity-70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="us-page mt-14 text-center">
  <div className="relative inline-flex">
    {/* Soft outer pulse */}
    <span className="us-page absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-40 animate-ping-soft" />

    <a
      href="#trial-form"
      className="us-page group relative inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
    >
      Book Free Trial Class
      <ArrowRight className="us-page h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  </div>
</div>
      </div>
    </section>
  )
}