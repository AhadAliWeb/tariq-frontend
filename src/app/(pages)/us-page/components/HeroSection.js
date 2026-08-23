'use client'

import { useState } from 'react'
// import "../page.css"
import Image from 'next/image'
import {
  Sparkles,
  Star,
  PhoneCall,
  ArrowRight,
  Clock,
  GraduationCap,
  Users,
  CheckCircle2,
  PartyPopper,
} from 'lucide-react'

export default function HeroSection() {
  const [submitted, setSubmitted] = useState(false)
  const [studentName, setStudentName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setStudentName((data.get('name') || '').toString().split(' ')[0])
    // TODO: replace with your real submit logic (API route, CRM webhook, email, etc.)
    setSubmitted(true)
  }

  function handleReset() {
    setSubmitted(false)
  }

  function scrollToForm(e) {
    e.preventDefault()
    document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section className="us-page relative overflow-hidden bg-[var(--color-background)] pt-20">
      {/* Background image */}
      <div className="us-page absolute inset-0" aria-hidden="true">
        <Image
          src="/images/us-hero.jpg" // TODO: point this at your uploaded background image in /public
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
              'radial-gradient(ellipse 80% 60% at 50% 15%, var(--color-background) 35%, transparent 75%)',
          }}
        />
        <div className="us-page absolute inset-0 bg-[var(--color-background)] opacity-70" />
      </div>

      {/* Ambient floating icons — decorative only, skipped on small screens and for reduced motion */}
      <div className="us-page pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
        <Star
          className="us-page hero-float absolute left-[8%] top-[18%] h-6 w-6 text-[var(--color-secondary)]"
          fill="currentColor"
          style={{ animationDelay: '0s' }}
        />
        <Sparkles
          className="us-page hero-float absolute right-[12%] top-[14%] h-7 w-7 text-[var(--color-primary)]"
          style={{ animationDelay: '1.2s' }}
        />
        <Star
          className="us-page hero-float absolute right-[6%] top-[55%] h-5 w-5 text-[var(--color-secondary)]"
          fill="currentColor"
          style={{ animationDelay: '2s' }}
        />
        <Sparkles
          className="us-page hero-float absolute left-[4%] top-[60%] h-5 w-5 text-[var(--color-primary)]"
          style={{ animationDelay: '0.6s' }}
        />
      </div>

      <div className="us-page relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* LEFT — copy + CTAs */}
        <div className="us-page hero-fade-up text-center lg:text-left">
          <div className="us-page inline-flex items-center gap-2 rounded-full border border-black/10 bg-[var(--color-surface)] px-4 py-1.5 text-sm font-medium text-[var(--color-primary)] shadow-sm">
            <Sparkles className="us-page h-4 w-4 text-[var(--color-secondary)]" />
            Where Kids Fall in Love with the Qur&apos;an
          </div>

          <h1 className="us-page mt-6 text-4xl font-extrabold leading-tight text-[var(--color-text)] sm:text-5xl lg:text-[3.25rem]">
            Quran Classes Your Child Will{' '}
            <span className="us-page text-[var(--color-primary)] underline decoration-wavy decoration-4 underline-offset-8 decoration-[var(--color-secondary)]">
              Actually Look Forward To
            </span>
          </h1>

          <p className="us-page mx-auto mt-5 max-w-lg text-lg text-[var(--color-text)] opacity-70 lg:mx-0">
            Live 1-on-1 online classes with certified, kid-friendly tutors — Qaida, Tajweed, Hifz &amp; more.
            Fun for your child, trusted by parents.
          </p>

          <div className="us-page mx-auto mt-6 flex max-w-lg flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-[var(--color-text)] lg:mx-0 lg:justify-start">
            <span className="us-page inline-flex items-center gap-1.5">
              <Star className="us-page h-4 w-4 text-[var(--color-secondary)]" fill="currentColor" />
              4.9/5 from parents
            </span>
            <span className="us-page inline-flex items-center gap-1.5">
              <GraduationCap className="us-page h-4 w-4 text-[var(--color-primary)]" />
              Certified tutors
            </span>
            <span className="us-page inline-flex items-center gap-1.5">
              <Users className="us-page h-4 w-4 text-[var(--color-primary)]" />
              30+ countries
            </span>
          </div>

          <div className="us-page mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#trial-form"
              onClick={scrollToForm}
              className="us-page group inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book Free Trial Class
              <ArrowRight className="us-page h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+15552345678" // TODO: replace with your real phone number
              className="us-page inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-primary)] px-7 py-3.5 font-semibold text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white"
            >
              <PhoneCall className="us-page h-4 w-4" />
              Call Us Now
            </a>
          </div>
        </div>

        {/* RIGHT — trial class form */}
        <div className="us-page hero-fade-up-delay mx-auto w-full max-w-md">
          <div
            id="trial-form"
            className="us-page relative rounded-3xl border border-black/5 bg-[var(--color-surface)] p-6 shadow-2xl shadow-black/10 sm:p-8"
          >
            <span className="us-page absolute -top-3 right-6 rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-bold text-white shadow-sm">
              100% Free
            </span>

            <div className="us-page mb-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10">
              <Sparkles className="us-page h-6 w-6 text-[var(--color-primary)]" />
            </div>

            <p className="us-page mt-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              Free Trial Class
            </p>
            <h2 className="us-page mt-1 text-2xl font-extrabold text-[var(--color-text)] sm:text-3xl">
              Claim Your Child&apos;s Free Trial!
            </h2>
            <p className="us-page mt-2 text-sm text-[var(--color-text)] opacity-70">
              Tell us a little about your child — a coordinator will call or WhatsApp you to schedule.
            </p>

            <div className="us-page mt-4 flex items-center gap-2 rounded-xl bg-[var(--color-secondary)]/10 px-4 py-2.5 text-sm font-medium text-[var(--color-text)]">
              <Clock className="us-page h-4 w-4 shrink-0 text-[var(--color-secondary)]" />
              <span>
                Only <strong>6 trial spots</strong> left this week
              </span>
              <span className="us-page ml-auto h-2 w-2 animate-pulse rounded-full bg-[var(--color-secondary)]" />
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="us-page mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="us-page mb-1 block text-sm font-medium text-[var(--color-text)]">
                    Parent / student name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="us-page w-full rounded-xl border border-black/10 bg-[var(--color-background)] px-4 py-2.5 text-[var(--color-text)] placeholder:text-[var(--color-text)]/40 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>

                <div className="us-page grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="us-page mb-1 block text-sm font-medium text-[var(--color-text)]">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(555) 555-5555"
                      className="us-page w-full rounded-xl border border-black/10 bg-[var(--color-background)] px-4 py-2.5 text-[var(--color-text)] placeholder:text-[var(--color-text)]/40 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="us-page mb-1 block text-sm font-medium text-[var(--color-text)]">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="us-page w-full rounded-xl border border-black/10 bg-[var(--color-background)] px-4 py-2.5 text-[var(--color-text)] placeholder:text-[var(--color-text)]/40 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                </div>

                <div className="us-page grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="age" className="us-page mb-1 block text-sm font-medium text-[var(--color-text)]">
                      Student age
                    </label>
                    <select
                      id="age"
                      name="age"
                      required
                      defaultValue=""
                      className="us-page w-full rounded-xl border border-black/10 bg-[var(--color-background)] px-4 py-2.5 text-[var(--color-text)] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    >
                      <option value="" disabled>Select</option>
                      <option>Under 7</option>
                      <option>7–12</option>
                      <option>13–17</option>
                      <option>Adult</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="program" className="us-page mb-1 block text-sm font-medium text-[var(--color-text)]">
                      Interested in
                    </label>
                    <select
                      id="program"
                      name="program"
                      required
                      defaultValue=""
                      className="us-page w-full rounded-xl border border-black/10 bg-[var(--color-background)] px-4 py-2.5 text-[var(--color-text)] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    >
                      <option value="" disabled>Select</option>
                      <option>Basic Book (Noorani Qaida)</option>
                      <option>Recitation of Quran</option>
                      <option>Advance Tajweed Course</option>
                      <option>Hifz Course</option>
                      <option>Translation &amp; Tafseer Course</option>
                      <option>Arabic Language</option>
                      <option>Islamic Studies</option>
                      <option>Aqeedah Course</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="us-page group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] py-3.5 font-bold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Claim My Free Trial Class
                  <ArrowRight className="us-page h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="us-page text-center text-xs text-[var(--color-text)] opacity-60">
                  No payment required. A coordinator replies within 24 hours.
                </p>
              </form>
            ) : (
              <div className="us-page mt-6 py-4 text-center">
                <div className="us-page relative mx-auto mb-3 h-16 w-16" aria-hidden="true">
                  <PartyPopper className="us-page h-16 w-16 text-[var(--color-primary)]" />
                  <span
                    className="us-page confetti-dot absolute left-1 top-2 h-2 w-2 rounded-full bg-[var(--color-secondary)]"
                    style={{ '--fly': 'translate(-22px, -28px)' }}
                  />
                  <span
                    className="us-page confetti-dot absolute right-1 top-0 h-2 w-2 rounded-full bg-[var(--color-primary)]"
                    style={{ '--fly': 'translate(24px, -24px)', animationDelay: '0.1s' }}
                  />
                  <span
                    className="us-page confetti-dot absolute bottom-2 left-0 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]"
                    style={{ '--fly': 'translate(-20px, 22px)', animationDelay: '0.2s' }}
                  />
                  <span
                    className="us-page confetti-dot absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]"
                    style={{ '--fly': 'translate(22px, 20px)', animationDelay: '0.15s' }}
                  />
                </div>
                <h3 className="us-page flex items-center justify-center gap-2 text-xl font-extrabold text-[var(--color-text)]">
                  <CheckCircle2 className="us-page h-5 w-5 text-[var(--color-primary)]" />
                  Jazak Allah Khair!
                </h3>
                <p className="us-page mx-auto mt-2 max-w-xs text-sm text-[var(--color-text)] opacity-70">
                  {studentName ? `${studentName}'s` : 'Your'} request is in. A coordinator will contact you
                  shortly to schedule the free trial class.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="us-page mt-4 text-sm font-semibold text-[var(--color-primary)] underline underline-offset-4"
                >
                  Submit another response
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
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
        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(8deg);
          }
        }
        @keyframes confettiPop {
          0% {
            transform: translate(0, 0) scale(0.6);
            opacity: 1;
          }
          100% {
            transform: var(--fly, translate(0, -20px)) scale(1);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .hero-fade-up {
            animation: heroFadeUp 0.7s ease-out both;
          }
          .hero-fade-up-delay {
            animation: heroFadeUp 0.7s ease-out 0.15s both;
          }
          .hero-float {
            animation: heroFloat 6s ease-in-out infinite;
          }
          .confetti-dot {
            animation: confettiPop 0.9s ease-out forwards;
          }
        }
      `}</style>
    </section>
  )
}