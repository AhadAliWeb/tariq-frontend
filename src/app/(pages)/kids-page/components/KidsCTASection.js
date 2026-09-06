'use client'

import { PhoneCall, ArrowRight, Sparkles } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function LadyCTASection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page relative overflow-hidden bg-[var(--color-primary)] py-16 sm:py-24">
      {/* Decorative backdrop, quiet and non-distracting */}
      <div className="us-page pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="us-page absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--color-secondary)' }}
        />
        <div
          className="us-page absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ background: 'var(--color-background)' }}
        />
      </div>

      <div
        className={`us-page relative z-10 mx-auto max-w-3xl px-6 text-center motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
          inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-6'
        }`}
      >
        <div className="us-page inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white sm:text-sm">
          <Sparkles className="us-page h-3.5 w-3.5 text-[var(--color-secondary)]" aria-hidden="true" />
          Free trial class, zero pressure
        </div>

        <h2 className="us-page mt-5 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
          Give your child a strong start
        </h2>

        <p className="us-page mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base sm:leading-relaxed">
          A free trial class lets you and your child experience the teaching style firsthand, with
          zero pressure and zero cost.
        </p>

        <div className="us-page mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/15552345678" // TODO: replace with your real WhatsApp number
            className="us-page group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
          >
            Book a Free Trial Class for Your Child
            <ArrowRight className="us-page h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+15552345678" // TODO: replace with your real phone number
            className="us-page inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
          >
            <PhoneCall className="us-page h-4 w-4" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
