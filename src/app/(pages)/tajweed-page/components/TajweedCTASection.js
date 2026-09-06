import { ArrowRight, PhoneCall } from 'lucide-react'

const BAR_COUNT = 28

export default function TajweedCTASection() {
  const bars = Array.from({ length: BAR_COUNT })

  return (
    <section className="us-page relative overflow-hidden bg-[var(--color-primary)] py-16 sm:py-24">
      <style>{`
        @keyframes tajweedWave {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
      `}</style>

      {/* Waveform accent — a nod to real-time listening & correction. Hidden for reduced-motion users. */}
      <div
        className="us-page pointer-events-none absolute inset-x-0 bottom-0 flex h-24 items-end justify-center gap-1.5 opacity-[0.12] motion-reduce:hidden"
        aria-hidden="true"
      >
        {bars.map((_, index) => (
          <span
            key={index}
            className="us-page block w-1.5 origin-bottom rounded-full bg-white"
            style={{
              height: `${20 + ((index * 37) % 60)}%`,
              animation: 'tajweedWave 1.8s ease-in-out infinite',
              animationDelay: `${(index % 7) * 0.15}s`,
            }}
          />
        ))}
      </div>

      <div className="us-page relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="us-page text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
          Perfect your recitation today
        </h2>
        <p className="us-page mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
          Small pronunciation habits can be hard to notice on your own — a trained ear makes all the difference.
          Book a free trial class and get direct, real-time Tajweed correction from a certified teacher.
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
