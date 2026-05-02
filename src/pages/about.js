"use client";

import { useEffect, useRef, useState } from "react";
import FormPopup from "@/components/FormPopup";

// ── Simple counter hook ──────────────────────────────────────────────────────
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── Intersection observer hook ────────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Stats data ───────────────────────────────────────────────────────────────
const STATS = [
  { value: 5000, suffix: "+", label: "Students Enrolled" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 40, suffix: "+", label: "Expert Tutors" },
];

// ── Team data ────────────────────────────────────────────────────────────────
const TEAM = [
  {
    name: "Sheikh Abdullah Al-Farouqi",
    role: "Head of Quran Studies",
    bio: "Hafiz with Ijazah in Hafs 'an 'Asim. 15+ years teaching students globally.",
    initials: "AA",
  },
  {
    name: "Ustadha Maryam Khalid",
    role: "Tajweed Specialist",
    bio: "Graduate of Al-Azhar University with deep expertise in Tajweed rules.",
    initials: "MK",
  },
  {
    name: "Br. Yusuf Siddiqui",
    role: "Islamic Studies Lead",
    bio: "Masters in Islamic Sciences, passionate about making Quran accessible.",
    initials: "YS",
  },
];

// ── Values data ──────────────────────────────────────────────────────────────
const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Authentic Methodology",
    desc: "All lessons follow classical Tajweed rules passed down through unbroken chains of scholarship.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Flexible Scheduling",
    desc: "Learn at your own pace with 1-on-1 sessions available 7 days a week across all time zones.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
      </svg>
    ),
    title: "For All Ages",
    desc: "Dedicated programs for kids (5+), adults, and senior learners — each designed for their unique needs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
        <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Certified Instructors",
    desc: "Every tutor holds Ijazah certification — the gold standard credential in Quranic education.",
  },
];

// ── StatCard ─────────────────────────────────────────────────────────────────
function StatCard({ value, suffix, label, animate }) {
  const count = useCounter(value, 2200, animate);
  return (
    <div className="flex flex-col items-center">
      <span
        className="text-4xl md:text-5xl font-bold"
        style={{ color: "var(--color-secondary-400)", fontFamily: "var(--font-heading)" }}
      >
        {animate ? count : 0}
        {suffix}
      </span>
      <span
        className="mt-1 text-sm tracking-widest uppercase"
        style={{ color: "var(--color-primary-200)" }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Main About Page ──────────────────────────────────────────────────────────
export default function AboutPage() {
  const [statsRef, statsInView] = useInView(0.3);
  const [heroRef, heroInView] = useInView(0.1);
  const [popupOpen, setPopupOpen] = useState(false)


  return (
    <main
      className="w-full overflow-x-hidden"
      style={{ fontFamily: "var(--font-sans)", background: "var(--color-neutral-50)" }}
    >
      <FormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[520px] flex items-center justify-center px-6 py-24 md:py-32 overflow-hidden"
        style={{ background: "var(--color-hero-bg)" }}
      >
        {/* Glow blobs */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "var(--color-hero-glow-green)" }}
        />
        <div
          className="absolute -bottom-16 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "var(--color-hero-glow-gold)" }}
        />

        {/* Arabic calligraphy watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5"
          style={{ fontSize: "clamp(8rem,22vw,22rem)", color: "#ffffff", fontFamily: "serif", lineHeight: 1 }}
          aria-hidden
        >
          القرآن
        </div>

        <div
          className="relative z-10 max-w-3xl text-center"
          style={{
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "rgba(47,143,104,0.18)",
              color: "var(--color-hero-badge-text)",
              border: "1px solid rgba(76,175,131,0.35)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-hero-badge-dot)", animation: "var(--animate-ping-soft)" }}
            />
            Trusted Online Quran Academy
          </span>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{ color: "#ffffff", fontFamily: "var(--font-heading)" }}
          >
            Learning the Quran{" "}
            <span style={{ color: "var(--color-hero-headline-accent)" }}>
              Made Simple,
            </span>
            <br />Wherever You Are
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
            style={{ color: "var(--color-hero-body)" }}
          >
            We connect Muslims worldwide with certified Quran tutors for personalized,
            flexible online classes — for every age, every level, every schedule.
          </p>

          {/* CTA */}
          <button
            onClick={() => setPopupOpen(true)}
            className="inline-block px-8 cursor-pointer py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            style={{
              background: "var(--color-hero-cta-bg)",
              color: "var(--color-hero-cta-text)",
            }}
          >
            Start Your Free Trial Class →
          </button>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section
        ref={statsRef}
        className="py-14 px-6"
        style={{ background: "var(--color-primary-800)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} animate={statsInView} />
          ))}
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-20 px-6" style={{ background: "var(--color-wcu-bg-alt)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Visual block */}
          <div className="relative">
            <div
              className="w-full aspect-square rounded-3xl flex items-center justify-center overflow-hidden"
              style={{ background: "var(--color-primary-100)" }}
            >
              {/* Decorative Quran-inspired geometric pattern */}
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-70" aria-hidden>
                <defs>
                  <pattern id="geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <polygon
                      points="40,4 76,20 76,60 40,76 4,60 4,20"
                      fill="none"
                      stroke="#2f8f68"
                      strokeWidth="1"
                      opacity="0.4"
                    />
                    <polygon
                      points="40,16 64,28 64,52 40,64 16,52 16,28"
                      fill="none"
                      stroke="#c9a24a"
                      strokeWidth="0.8"
                      opacity="0.3"
                    />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#geo)" />
                <circle cx="200" cy="200" r="90" fill="none" stroke="#2f8f68" strokeWidth="2" opacity="0.5" />
                <circle cx="200" cy="200" r="60" fill="none" stroke="#c9a24a" strokeWidth="1.5" opacity="0.4" />
                <text
                  x="200"
                  y="210"
                  textAnchor="middle"
                  fontSize="52"
                  fill="#256f52"
                  fontFamily="serif"
                  opacity="0.8"
                >
                  اقرأ
                </text>
              </svg>
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-5 px-5 py-3 rounded-2xl shadow-xl text-sm font-bold"
              style={{
                background: "var(--color-secondary-400)",
                color: "var(--color-primary-900)",
              }}
            >
              🎓 Est. 2012 · 12 Years of Excellence
            </div>
          </div>

          {/* Text */}
          <div>
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "var(--color-wcu-label-bg)", color: "var(--color-wcu-label-text)" }}
            >
              Our Story
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: "var(--color-wcu-heading)", fontFamily: "var(--font-heading)" }}
            >
              Born from a Mission to{" "}
              <span style={{ color: "var(--color-wcu-heading-accent)" }}>Reconnect the Ummah</span>{" "}
              with the Quran
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-wcu-subtext)" }}>
              We started in 2012 with a simple belief: every Muslim deserves access to high-quality
              Quran education — regardless of where they live or how busy their schedule is.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-wcu-subtext)" }}>
              What began as a small team of dedicated tutors has grown into a globally trusted academy
              with over 5,000 active students across 30+ countries. Our tutors are certified scholars
              with Ijazah — an unbroken chain of transmission from the Prophet ﷺ himself.
            </p>
            <ul className="space-y-3">
              {[
                "One-on-one live sessions via Zoom or Skype",
                "Structured curriculum from Noorani Qaida to Hifz",
                "Free trial class — no commitment required",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-wcu-subtext)" }}>
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: "var(--color-primary-500)" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="py-20 px-6" style={{ background: "var(--color-wcu-bg)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "var(--color-wcu-label-bg)", color: "var(--color-wcu-label-text)" }}
            >
              Why We're Different
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: "var(--color-wcu-heading)", fontFamily: "var(--font-heading)" }}
            >
              Our Core{" "}
              <span style={{ color: "var(--color-wcu-heading-accent)" }}>Values & Promise</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: "var(--color-wcu-card-bg)",
                  borderColor: "var(--color-wcu-card-border)",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--color-wcu-card-border-hover)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--color-wcu-card-border)")}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "var(--color-wcu-card-icon-bg)",
                    color: "var(--color-wcu-card-icon-color)",
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "var(--color-wcu-card-title)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-wcu-card-text)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}