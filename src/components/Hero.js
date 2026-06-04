"use client";

import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { parsePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";

export default function HeroSection() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {


    if (!phone) return;


    

    setError(null);

    try {

      const parsed = parsePhoneNumber(phone);
      
      

      if (!isValidPhoneNumber(phone)) {
        setError("Please enter a valid phone number");
        return;
      }

      const country = parsed.country;
      const countryCode = `+${parsed.countryCallingCode}`;


      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, country, countryCode }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      await res.json();
      setSubmitted(true);


      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "form_submit",
      });

    } catch (error) {
      setError("Error Occurred, Try again later");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="relative overflow-hidden bg-hero-bg flex items-center">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-hero-glow-green/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-hero-glow-gold/15 blur-[100px]" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-[280px] leading-none font-serif text-white/3 select-none hidden lg:block">
          ٱلْقُرْآن
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-20 mt-14 sm:mt-16 lg:mt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* LEFT — Copy */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="inline-flex items-center gap-2 self-start bg-[var(--color-hero-badge-bg)]/20 border border-[var(--color-hero-badge-bg)]/40 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-hero-badge-dot)] [animation:ping-soft_1.5s_ease-out_infinite]" />
              <span className="text-[var(--color-hero-badge-text)] text-xs font-semibold tracking-widest uppercase font-[family-name:var(--font-sans)]">
                Trusted by 2,000+ Families Worldwide
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] font-extrabold text-white leading-[1.1]">
              <span className="text-3xl sm:text-5xl xl:text-6xl block">
                Learn Quran Online
              </span>
              <span className="text-3xl sm:text-5xl xl:text-6xl block mt-1">
                Live, Personal &
              </span>
              <span className="text-3xl sm:text-5xl xl:text-6xl block text-[var(--color-hero-headline-accent)] mt-1">
                Truly Effective
              </span>
            </h1>

            <p className="text-[var(--color-hero-body)]/75 text-sm sm:text-lg leading-relaxed max-w-lg font-[family-name:var(--font-sans)]">
              Join 2,000+ families across the USA, UK, UAE, and Saudi Arabia who learn Quran online with QuranInstruct. Certified Ijazah tutors, flexible scheduling, and live 1-on-1 classes for kids and adults — from the comfort of your home.
              <span className="text-[var(--color-hero-headline-accent)] font-semibold">
                {" "}
                First class is FREE.
              </span>
            </p>

            <ul className="grid grid-cols-2 gap-2 sm:gap-3 max-w-md">
              {[
                "✦ Online Tajweed Classes",
                "✦ Quran Hifz Program",
                "✦ Arabic for Beginners",
                "✦ Islamic Studies Online",
                "✦ Ages 5 - Adult",
                "✦ Male & Female Tutors",
              ].map((point) => (
                <li
                  key={point}
                  className="text-[var(--color-hero-list)] text-sm font-medium font-[family-name:var(--font-sans)]"
                >
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="#lead-form"
              className="lg:hidden inline-flex items-center justify-center gap-2 bg-[var(--color-hero-cta-bg)] hover:bg-[var(--color-hero-cta-bg-hover)] text-[var(--color-hero-cta-text)] font-bold text-base px-8 py-3.5 rounded-xl transition-colors duration-200 font-[family-name:var(--font-sans)] mt-1 w-full sm:w-auto"
            >
              Book My Free Class →
            </a>
          </div>

          {/* RIGHT — Lead Capture Form */}
          <div
            id="lead-form"
            className="bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-8 shadow-2xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-hero-success-bg)]/30 flex items-center justify-center text-3xl text-white">
                  ✓
                </div>
                <h3 className="text-white font-bold text-xl font-[family-name:var(--font-heading)]">
                  JazakAllah Khair!
                </h3>
                <p className="text-[var(--color-hero-list)] text-sm font-[family-name:var(--font-sans)]">
                  We&apos;ve received your request. A tutor will contact you
                  within 24 hours to schedule your free trial class.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-5">
                  <div className="inline-block bg-[var(--color-hero-urgency-bg)]/20 text-[var(--color-hero-urgency-text)] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2 font-[family-name:var(--font-sans)]">
                    🎁 Limited Free Trial Slots
                  </div>
                  <h2 className="text-white font-bold text-xl sm:text-2xl font-[family-name:var(--font-heading)] leading-snug">
                    Book Your Free Trial Class
                  </h2>
                  <p className="text-[var(--color-hero-list)]/70 text-sm mt-1 font-[family-name:var(--font-sans)]">
                    No credit card required. No commitment.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[var(--color-hero-list)] text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-sans)]">
                      WhatsApp / Phone *
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={phone}
                      onChange={setPhone}
                      className="p-2 border border-white/10 rounded-md"
                      numberInputProps={{
                        className: "text-white focus:outline-none focus:ring-0",
                      }}
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs text-center font-[family-name:var(--font-sans)]">
                      ⚠ {error}
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={!phone}
                    className="mt-1 w-full bg-[var(--color-hero-cta-bg)] hover:bg-[var(--color-hero-cta-bg-hover)] disabled:opacity-40 disabled:cursor-not-allowed text-[var(--color-hero-cta-text)] font-extrabold text-base py-4 rounded-xl transition-colors duration-200 font-[family-name:var(--font-heading)] tracking-wide shadow-lg shadow-[var(--color-hero-cta-bg)]/20"
                  >
                    Book My FREE Trial →
                  </button>

                  <p className="text-center text-white/30 text-xs font-[family-name:var(--font-sans)]">
                    🔒 Your information is 100% private & secure.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── Social proof strip ── */}
        <div className="mt-8 sm:mt-14 flex flex-wrap items-center gap-4 sm:gap-10">
          <div className="flex -space-x-2">
            {["A", "F", "M", "S"].map((l, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-[var(--color-hero-avatar-border)] bg-[var(--color-hero-avatar-bg)] flex items-center justify-center text-white text-xs font-bold"
              >
                {l}
              </div>
            ))}
          </div>
          <p className="text-[var(--color-hero-list)]/80 text-sm font-[family-name:var(--font-sans)]">
            <span className="text-white font-semibold">2000+ students</span>{" "}
            enrolled this month
          </p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[var(--color-hero-stars)] text-sm">
                ★
              </span>
            ))}
            <span className="text-[var(--color-hero-list)]/80 text-sm ml-1 font-[family-name:var(--font-sans)]">
              4.9/5 from 300+ reviews
            </span>
          </div>
          <p className="text-[var(--color-hero-list)]/80 text-sm font-[family-name:var(--font-sans)]">
            <span className="text-white font-semibold">30+ Countries</span>{" "}
            Served
          </p>
        </div>
      </div>
    </section>
  );
}