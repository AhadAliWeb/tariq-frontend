'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const faqs = [
  {
    question: 'Can I request a specific teacher gender?',
    answer: 'Yes, you can choose a male or female teacher based on your preference.',
  },
  {
    question: "What if I'm not comfortable with my assigned teacher?",
    answer: "We're happy to match you with a different teacher at no extra cost.",
  },
  {
    question: 'Are teachers native Arabic speakers?',
    answer: 'Many of our teachers are native Arabic speakers with formal Quranic certification.',
  },
  {
    question: 'Do I keep the same teacher for every class?',
    answer: 'Yes, we match you with one consistent teacher to build a stable long-term learning relationship.',
  },
]

export default function TeacherFAQSection() {
  const [ref, inView] = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section ref={ref} className="us-page relative bg-[var(--color-surface)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-3xl px-6">
        <div
          className={`us-page max-w-xl motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            Frequently asked questions
          </h2>
          <p className="us-page mt-3 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base">
            Answers to what students and parents ask us most before booking a first class.
          </p>
        </div>

        <div className="us-page mt-10 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`us-page overflow-hidden rounded-2xl border bg-[var(--color-background)] motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                  isOpen
                    ? 'us-page border-[var(--color-primary)]/30'
                    : 'us-page border-[var(--color-text)]/10'
                } ${inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'}`}
                style={{ transitionDelay: inView ? `${index * 80}ms` : '0ms' }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="us-page flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="us-page text-sm font-semibold text-[var(--color-text)] sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`us-page h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform duration-300 ease-out ${
                      isOpen ? 'us-page rotate-180' : 'us-page rotate-0'
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`us-page grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? 'us-page grid-rows-[1fr]' : 'us-page grid-rows-[0fr]'
                  }`}
                >
                  <div className="us-page overflow-hidden">
                    <p className="us-page px-5 pb-4 text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:px-6 sm:pb-5 sm:text-base">
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
