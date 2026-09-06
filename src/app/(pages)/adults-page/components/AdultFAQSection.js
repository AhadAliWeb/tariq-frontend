'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const faqs = [
  {
    question: "I'm a complete beginner — is that okay?",
    answer: 'Absolutely. Many of our adult students start from zero, and lessons are built to meet you there.',
  },
  {
    question: 'How much time do I need to commit weekly?',
    answer: 'Most adult students take 2–3 classes per week, but plans can be adjusted to your schedule.',
  },
  {
    question: 'Can I focus only on Tajweed correction?',
    answer: "Yes, lessons can be customized to focus solely on Tajweed if that's your priority.",
  },
  {
    question: 'Are classes private?',
    answer: 'Yes, all adult classes are strictly one-on-one with your assigned teacher.',
  },
]

export default function AdultFAQSection() {
  const [ref, inView] = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section ref={ref} className="us-page relative bg-[var(--color-surface)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-3xl px-6">
        <div
          className={`us-page motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-4'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            Still deciding? Here's what other adult students usually ask first.
          </p>
        </div>

        <div className="us-page mt-10 divide-y divide-[var(--color-text)]/10 border-t border-b border-[var(--color-text)]/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`us-page motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                  inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: inView ? `${index * 90}ms` : '0ms' }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="us-page flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-300 hover:text-[var(--color-primary)]"
                >
                  <span className="us-page text-base font-semibold text-[var(--color-text)] transition-colors duration-300 sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`us-page h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform duration-300 ${
                      isOpen ? 'us-page rotate-180' : ''
                    }`}
                    strokeWidth={1.75}
                  />
                </button>

                <div
                  className={`us-page grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'us-page grid-rows-[1fr]' : 'us-page grid-rows-[0fr]'
                  }`}
                >
                  <div className="us-page overflow-hidden">
                    <p className="us-page pb-5 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
