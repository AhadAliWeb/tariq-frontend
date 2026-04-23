"use client";

import { useState } from "react";

const weekdayPlans = [
  {
    id: "2days",
    label: "2 Days / Week",
    badge: null,
    originalPrice: 89,
    price: 59,
    sessions: 8,
    perSession: "~$7.38",
    color: "accent",
    features: [
      "2 live 1-on-1 sessions per week",
      "Certified male & female tutors",
      "Tajweed correction every class",
      "WhatsApp progress updates",
      "Free trial class included",
    ],
  },
  {
    id: "3days",
    label: "3 Days / Week",
    badge: "Most Popular",
    originalPrice: 119,
    price: 79,
    sessions: 12,
    perSession: "~$6.58",
    color: "primary",
    features: [
      "3 live 1-on-1 sessions per week",
      "Certified male & female tutors",
      "Tajweed + Memorization focus",
      "Monthly progress report",
      "WhatsApp support anytime",
      "Free trial class included",
    ],
  },
  {
    id: "4days",
    label: "4 Days / Week",
    badge: "Best Value",
    originalPrice: 149,
    price: 99,
    sessions: 16,
    perSession: "~$6.19",
    color: "secondary",
    features: [
      "4 live 1-on-1 sessions per week",
      "Certified male & female tutors",
      "Quran + Islamic Studies option",
      "Bi-weekly parent meeting",
      "Priority tutor scheduling",
      "Free trial class included",
    ],
  },
  {
    id: "5days",
    label: "5 Days / Week",
    badge: "Fastest Progress",
    originalPrice: 179,
    price: 119,
    sessions: 20,
    perSession: "~$5.95",
    color: "gold",
    features: [
      "5 live 1-on-1 sessions per week",
      "Hand-picked senior tutor",
      "Full Quran completion plan",
      "Weekly 1-on-1 parent call",
      "Lifetime access to recordings",
      "Free trial class included",
    ],
  },
];

const weekendPlans = [
  {
    id: "30min",
    label: "30 Min Session",
    badge: "Starter",
    originalPrice: 59,
    price: 39,
    sessions: 8,
    perSession: "~$4.88",
    color: "accent",
    features: [
      "2 weekend sessions / month",
      "Nāzira (reading) focus",
      "Certified tutor assigned",
      "Basic Tajweed correction",
      "WhatsApp updates",
      "Free trial class included",
    ],
  },
  {
    id: "45min",
    label: "45 Min Session",
    badge: "Recommended",
    originalPrice: 89,
    price: 59,
    sessions: 8,
    perSession: "~$7.38",
    color: "primary",
    features: [
      "2 weekend sessions / month",
      "Hifz + Tajweed combined",
      "Senior certified tutor",
      "In-depth recitation review",
      "Monthly progress report",
      "Free trial class included",
    ],
  },
];

const colorMap = {
  primary: {
    badge: "bg-primary-500 text-white",
    highlight: "border-primary-400",
    btn: "bg-primary-600 hover:bg-primary-700 text-white",
    iconBg: "bg-primary-100",
    iconText: "text-primary-600",
    tag: "bg-primary-50 text-primary-700",
    ring: "ring-[var(--color-primary-400)]",
  },
  accent: {
    badge: "bg-[var(--color-accent-500)] text-white",
    highlight: "border-[var(--color-accent-400)]",
    btn: "bg-[var(--color-accent-600)] hover:bg-[var(--color-accent-700)] text-white",
    iconBg: "bg-[var(--color-accent-100)]",
    iconText: "text-[var(--color-accent-600)]",
    tag: "bg-[var(--color-accent-50)] text-[var(--color-accent-700)]",
    ring: "ring-[var(--color-accent-400)]",
  },
  secondary: {
    badge: "bg-[var(--color-secondary-500)] text-white",
    highlight: "border-[var(--color-secondary-400)]",
    btn: "bg-[var(--color-secondary-600)] hover:bg-[var(--color-secondary-700)] text-white",
    iconBg: "bg-[var(--color-secondary-100)]",
    iconText: "text-[var(--color-secondary-600)]",
    tag: "bg-[var(--color-secondary-50)] text-[var(--color-secondary-700)]",
    ring: "ring-[var(--color-secondary-400)]",
  },
  gold: {
    badge: "bg-[var(--color-hero-cta-bg)] text-[var(--color-primary-900)]",
    highlight: "border-[var(--color-hero-cta-bg)]",
    btn: "bg-[var(--color-hero-cta-bg)] hover:bg-[var(--color-hero-cta-bg-hover)] text-[var(--color-primary-900)]",
    iconBg: "bg-[var(--color-secondary-100)]",
    iconText: "text-[var(--color-secondary-700)]",
    tag: "bg-[var(--color-secondary-50)] text-[var(--color-secondary-700)]",
    ring: "ring-[var(--color-secondary-400)]",
  },
};

function CheckIcon({ colorClass }) {
  return (
    <svg
      className={`w-4 h-4 shrink-0 mt-0.5 ${colorClass}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PricingCard({ plan, featured }) {
  const c = colorMap[plan.color];
  return (
    <div
      className={`relative flex flex-col rounded-2xl border-2 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
        ${featured ? `${c.highlight} shadow-xl ring-2 ${c.ring}` : "border-[var(--color-neutral-200)] shadow-md"}
      `}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className={`px-1 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow ${c.badge}`}>
            {plan.badge}
          </span>
        </div>
      )}

      <div className="p-6 pt-8 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-[var(--color-primary-900)] font-heading mb-1">{plan.label}</h3>
          <p className="text-xs text-[var(--color-neutral-500)]">{plan.sessions} sessions/month · {plan.perSession} per class</p>
        </div>

        {/* Price */}
        <div className="mb-5 flex items-end gap-2">
          <span className="text-sm line-through text-[var(--color-neutral-400)] font-medium">${plan.originalPrice}</span>
          <span className="text-4xl font-extrabold text-[var(--color-primary-800)] font-heading leading-none">${plan.price}</span>
          <span className="text-sm text-[var(--color-neutral-500)] mb-0.5">/mo</span>
          <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full ${c.tag}`}>
            Save ${plan.originalPrice - plan.price}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-100 mb-4" />

        {/* Features */}
        <ul className="space-y-2.5 flex-1 mb-6">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-neutral-700">
              <CheckIcon colorClass={c.iconText} />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`block w-full text-center py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md ${c.btn}`}
        >
          Start Free Trial →
        </a>

        <p className="text-center text-xs text-[var(--color-neutral-400)] mt-3">
          No contract · Cancel anytime
        </p>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [tab, setTab] = useState("weekday");
  const plans = tab === "weekday" ? weekdayPlans : weekendPlans;
  const featuredId = tab === "weekday" ? "3days" : "45min";

  return (
    <section id="pricing" className="relative overflow-hidden bg-[var(--color-bg-primary)] py-20 lg:py-28">

        {/* Arabesque top-right */}
        <svg className="absolute -top-20 -right-20 w-96 h-96 opacity-[0.06]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="190" stroke="#2f8f68" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="150" stroke="#2f8f68" strokeWidth="1" />
          <circle cx="200" cy="200" r="110" stroke="#b5892f" strokeWidth="1" />
          <circle cx="200" cy="200" r="70" stroke="#b5892f" strokeWidth="1.5" />
          {[0,45,90,135,180,225,270,315].map((deg) => (
            <line
              key={deg}
              x1="200" y1="10"
              x2="200" y2="390"
              stroke="#2f8f68"
              strokeWidth="0.8"
              transform={`rotate(${deg} 200 200)`}
            />
          ))}
        </svg>

        {/* Green glow bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--color-primary-400)] opacity-[0.07] blur-3xl" />
        {/* Gold glow top-center */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[var(--color-secondary-300)] opacity-[0.06] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          {/* Arabic Hadith */}
          <div className="inline-block mb-4 px-5 py-3 rounded-2xl bg-[var(--color-primary-50)] border border-[var(--color-primary-100)]">
            <p className="text-2xl md:text-3xl font-bold text-[var(--color-primary-700)] leading-relaxed" dir="rtl" lang="ar">
              «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
            </p>
            <p className="mt-1.5 text-xs text-[var(--color-neutral-500)] tracking-wide">
              "The best among you are those who learn the Quran and teach it." — Sahih al-Bukhari 5027
            </p>
          </div>

          {/* Label pill */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-500)] inline-block" />
              Simple, Transparent Pricing
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary-900)] leading-tight mb-4">
            Invest in Your Child&apos;s{" "}
            <span className="text-[var(--color-secondary-500)]">Quranic Journey</span>
            <br className="hidden sm:block" /> — Less Than a Cup of Coffee a Day
          </h2>

          <p className="max-w-2xl mx-auto text-[var(--color-neutral-600)] text-base sm:text-lg leading-relaxed">
            Live 1-on-1 sessions with certified tutors. No hidden fees, no long-term lock-in.
            Choose the schedule that fits your family — and start with a{" "}
            <strong className="text-[var(--color-primary-700)]">100% free trial class</strong> today.
          </p>

          {/* Trust micro-proof */}
          <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm text-[var(--color-neutral-500)]">
            {["✅ 2,400+ students enrolled", "⭐ 4.9/5 average rating", "🌍 Serving 30+ countries", "🔒 Safe, monitored environment"].map((t) => (
              <span key={t} className="flex items-center gap-1">{t}</span>
            ))}
          </div>
        </div>

        {/* ── Tab Toggle ── */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-2xl bg-[var(--color-primary-100)] gap-1 shadow-inner">
            {[
              { key: "weekday", label: "📅 Weekday Classes", sub: "Mon – Fri" },
              { key: "weekend", label: "🕌 Weekend Classes", sub: "Sat & Sun" },
            ].map(({ key, label, sub }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`relative flex flex-col items-center px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 focus:outline-none
                  ${tab === key
                    ? "bg-[var(--color-primary-700)] text-white shadow-lg scale-105"
                    : "text-[var(--color-primary-700)] hover:bg-[var(--color-primary-200)]"
                  }`}
              >
                <span>{label}</span>
                <span className={`text-xs font-normal ${tab === key ? "text-[var(--color-primary-200)]" : "text-[var(--color-neutral-500)]"}`}>{sub}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div
          className={`grid gap-6 
            ${tab === "weekday"
              ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
            }`}
        >
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} featured={plan.id === featuredId} />
          ))}
        </div>

        {/* ── Why This Pricing Section ── */}
        <div className="mt-20 relative">
          {/* card bg with subtle pattern */}
          <div className="relative rounded-3xl overflow-hidden bg-[var(--color-primary-900)] shadow-2xl">
            {/* inner glow */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[var(--color-primary-600)] opacity-20 blur-3xl -translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[var(--color-secondary-500)] opacity-15 blur-3xl translate-x-1/3 translate-y-1/3" />
              {/* subtle dot grid */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.2" fill="#80c9a6" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>

            {/* <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
              <div className="text-center mb-10">
                <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[var(--color-primary-700)] text-[var(--color-primary-200)] text-xs font-bold uppercase tracking-widest">
                  Why Our Pricing Makes Sense
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
                  More Affordable Than Local Tutors.{" "}
                  <span className="text-[var(--color-secondary-400)]">Far More Effective.</span>
                </h3>
                <p className="max-w-2xl mx-auto text-[var(--color-primary-200)] text-base leading-relaxed">
                  Local tutors can cost $25–$50 per session. Our online model removes overhead so
                  you get a <strong className="text-white">certified, experienced tutor</strong> for a fraction of the price — with zero commute.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🎓",
                    title: "Certified & Screened Tutors",
                    text: "Every tutor holds an Ijazah (chain of transmission) and passes our 3-step vetting. Your child learns from the best.",
                  },
                  {
                    icon: "🕐",
                    title: "Flexible Scheduling",
                    text: "Morning, afternoon, or evening — 7 days a week. Sessions fit around school and family life, not the other way around.",
                  },
                  {
                    icon: "📈",
                    title: "Measurable Progress",
                    text: "Monthly reports, recitation recordings, and milestone tracking keep you informed every step of the way.",
                  },
                  {
                    icon: "🔒",
                    title: "Safe Online Environment",
                    text: "All sessions are conducted in a monitored, recorded setting. Parents can join or review at any time.",
                  },
                  {
                    icon: "🌍",
                    title: "Learn From Anywhere",
                    text: "No commute. No rescheduling. Access your tutor from any device — at home, traveling, or abroad.",
                  },
                  {
                    icon: "🎁",
                    title: "No Risk — Free Trial First",
                    text: "Try a full class for free before paying a single dollar. If it's not the right fit, you owe nothing.",
                  },
                ].map(({ icon, title, text }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{icon}</span>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
                      <p className="text-[var(--color-primary-200)] text-xs leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>


              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[var(--color-secondary-400)] hover:bg-[var(--color-secondary-500)] text-[var(--color-primary-900)] font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Book My Free Trial Class 🎉
                </a>
                <a
                  href="tel:+1234567890"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-[var(--color-primary-400)] text-[var(--color-primary-100)] hover:bg-[var(--color-primary-800)] font-bold text-sm transition-all duration-200"
                >
                  📞 Talk to an Advisor
                </a>
              </div>
              <p className="text-center text-[var(--color-primary-400)] text-xs mt-4">
                Limited spots available — Classes fill up fast during Ramadan & school holidays.
              </p>
            </div> */}
          </div>
        </div>

      </div>
    </section>
  );
}