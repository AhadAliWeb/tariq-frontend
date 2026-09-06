'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const faqs = [
  {
    question: 'Are all teachers female?',
    answer: 'Yes, every teacher in this program is a qualified, experienced female instructor.',
  },
  {
    question: 'Do I need to keep my camera on?',
    answer: 'No, audio-only sessions are available if you prefer.',
  },
  {
    question: 'Can I learn Tajweed and Hifz together?',
    answer: 'Yes, your teacher can build a combined plan based on your goals and available time.',
  },
  {
    question: 'What if I need to reschedule often due to family commitments?',
    answer: 'We offer flexible rescheduling — just notify your teacher in advance.',
  },
]

export default function LadyFAQSection() {
  const [ref, inView] = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section ref={ref} className="us-page bg-[var(--color-background)] py-16 sm:py-24">
      <div className="us-page mx-auto max-w-3xl px-6">
        <div
          className={`us-page motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
          }`}
        >
          <h2 className="us-page text-2xl font-extrabold leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="us-page mt-10 flex flex-col divide-y divide-[var(--color-text)]/10 border-y border-[var(--color-text)]/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="us-page">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="us-page flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-300 hover:text-[var(--color-primary)]"
                >
                  <span className="us-page text-sm font-semibold text-[var(--color-text)] sm:text-base">
                    {faq.question}
                  </span>
                  <Plus
                    className={`us-page h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform duration-300 ${
                      isOpen ? 'us-page rotate-45' : 'us-page rotate-0'
                    }`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`us-page grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'us-page grid-rows-[1fr] opacity-100' : 'us-page grid-rows-[0fr] opacity-0'
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
