import Image from 'next/image'
import { Sparkles, Star, PhoneCall, ArrowRight } from 'lucide-react'
import React from 'react'

export default function HeroSection({heading, subheading}) {
  return (
    <section className="us-page relative overflow-hidden bg-[var(--color-background)] pt-26 sm:pt-20">
      {/* Background image */}
      <div className="us-page absolute inset-0" aria-hidden="true">
        <Image
          src="/images/us-hero.jpg" 
          alt=""
          fill
          priority
          className="us-page object-cover object-center"
        />
        {/* Wash so the pattern stays a soft backdrop and text keeps contrast */}
        <div
          className="us-page absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 20% 20%, var(--color-background) 40%, transparent 78%)',
          }}
        />
        <div className="us-page absolute inset-0 bg-[var(--color-background)] opacity-60" />
      </div>

      <div className="us-page relative z-10 mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:py-28">
        <div className="us-page hero-fade-up max-w-xl text-left">
          {/* Trust line */}
          <div className="us-page inline-flex items-center gap-2 rounded-md border border-black/10 bg-[var(--color-surface)] px-5 py-1.5 text-xs font-medium leading-snug text-[var(--color-text)] shadow-sm sm:text-sm">
            <span className="us-page relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
              <span className="us-page absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-secondary)] opacity-75" />
              <span className="us-page relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
            </span>
            <div className='flex flex-col items-start gap-2'>
              <span>
                <strong className="us-page font-semibold text-[var(--color-primary)]">14 families</strong>{' '}
                booked a trial class this week.
              </span>
              <span>
                Live 1-on-1 online Quran classes, certified tutors.
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="us-page mt-5 text-[1.75rem] font-extrabold leading-[1.15] text-[var(--color-text)] sm:text-3xl sm:leading-tight md:text-4xl lg:text-5xl">
            {heading ? (
              heading.split("|").map((line, index, arr) => (
                <React.Fragment key={index}>
                  {line}
                  {index < arr.length - 1 && <br />}
                </React.Fragment>
              ))
            ) : (
              "Quran classes your child will actually look forward to"
            )}
          </h1>

          {/* Description */}
          <p className="us-page mt-4 max-w-md text-sm leading-relaxed text-[var(--color-text)] opacity-70 sm:text-base sm:leading-relaxed lg:text-lg">
            {subheading ? subheading : "Live 1-on-1 online classes with certified, kid-friendly tutors — Qaida, Tajweed, Hifz and more. Fun for your child, trusted by parents in 30+ countries."}
          </p>

          <div className="lady-page group relative mt-4 inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-medium text-[var(--color-text)] shadow-[0_4px_24px_rgba(0,0,0,0.08)] backdrop-blur-md">
            {/* shine sweep overlay */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{animation: "var(--animate-shine-sweep)"}}
            />

            <Star className="lady-page relative z-10 h-4 w-4 text-[var(--color-secondary)]" fill="#FF1595" />
            <span className="relative z-10">4.9/5 from parents</span>
          </div>

          {/* CTAs */}
          <div className="us-page mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/15552345678" // TODO: replace with your real WhatsApp number
              className="us-page group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:px-7 sm:py-3.5 sm:text-base"
            >
              Book Free Trial Class
              <ArrowRight className="us-page h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+15552345678" // TODO: replace with your real phone number
              className="us-page inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white sm:px-7 sm:py-3.5 sm:text-base"
            >
              <PhoneCall className="us-page h-4 w-4" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .hero-fade-up {
            animation: heroFadeUp 0.7s ease-out both;
          }
        }
      `}</style> */}
    </section>
  )
}