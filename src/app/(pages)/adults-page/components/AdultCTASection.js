'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function AdultCTASection() {
  const [ref, inView] = useScrollReveal()

  return (
    <section ref={ref} className="us-page relative overflow-hidden bg-[var(--color-primary)] py-16 sm:py-24">
      <div
        className="us-page pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, var(--color-secondary) 0%, transparent 45%), radial-gradient(circle at 85% 80%, var(--color-secondary) 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div
        className={`us-page relative mx-auto max-w-2xl px-6 text-center motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
          inView ? 'us-page opacity-100 translate-y-0' : 'us-page opacity-0 translate-y-4'
        }`}
      >
        <span className="us-page mx-auto block h-px w-12 bg-[var(--color-secondary)]" aria-hidden="true" />
        <h2 className="us-page mt-6 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
          Take the First Step
        </h2>
        <p className="us-page mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
          Your Quran journey can start today, at your pace, on your schedule. Book a free trial class and
          experience a patient, private learning environment built for adults.
        </p>

        <div className="us-page mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="https://wa.me/15552345678" // TODO: replace with your real WhatsApp number
            className="us-page group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:px-7 sm:py-3.5 sm:text-base"
          >
            <MessageCircle className="us-page h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            Book Your Free Trial Class
          </a>
          <a
            href="tel:+15552345678" // TODO: replace with your real phone number
            className="us-page inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:px-7 sm:py-3.5 sm:text-base"
          >
            <Phone className="us-page h-4 w-4" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
