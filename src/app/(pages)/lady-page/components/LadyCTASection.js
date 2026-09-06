import { ArrowRight, PhoneCall } from 'lucide-react'

export default function LadyCTASection() {
  return (
    <section className="us-page relative overflow-hidden bg-[var(--color-primary)] py-16 sm:py-24">
      {/* Subtle geometric pattern accent */}
      <svg
        className="us-page pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="lady-cta-pattern" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M28 0L56 28L28 56L0 28Z" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#lady-cta-pattern)" />
      </svg>

      <div className="us-page relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="us-page text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
          Start learning today
        </h2>
        <p className="us-page mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
          Book a free trial class with one of our qualified female teachers and experience a private, comfortable,
          and pressure-free way to grow closer to the Quran.
        </p>

        <div className="us-page mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/15552345678" // TODO: replace with your real WhatsApp number
            className="us-page group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-secondary)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text)] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:text-base"
          >
            Book Your Free Trial Class
            <ArrowRight className="us-page h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+15552345678" // TODO: replace with your real phone number
            className="us-page inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:text-base"
          >
            <PhoneCall className="us-page h-4 w-4" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
