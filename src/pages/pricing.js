"use client";

import { useState } from "react";
import FormPopup from "@/components/FormPopup";

const weekdayPlans = [
  {
    days: "2 Days / Week",
    sessions: "8 sessions/mo",
    originalPrice: 59,
    price: 39,
    popular: false,
    badge: null,
    features: [
      "1-on-1 Live Tutor Sessions",
      "Tajweed & Recitation Focus",
      "Progress Tracking Dashboard",
      "Session Recordings Included",
      "WhatsApp Support (Weekdays)",
    ],
  },
  {
    days: "3 Days / Week",
    sessions: "12 sessions/mo",
    originalPrice: 69,
    price: 49,
    popular: true,
    badge: "Most Popular",
    features: [
      "Everything in 2 Days",
      "Memorization (Hifz) Track",
      "Monthly Report Card",
      "Parent Progress Updates",
      "Priority Tutor Matching",
    ],
  },
  {
    days: "4 Days / Week",
    sessions: "16 sessions/mo",
    originalPrice: 79,
    price: 55,
    popular: false,
    badge: "Best Value",
    features: [
      "Everything in 3 Days",
      "Arabic Language Basics",
      "Tafseer Introduction",
      "Dedicated Tutor (Fixed)",
      "24/7 WhatsApp Support",
    ],
  },
  {
    days: "5 Days / Week",
    sessions: "20 sessions/mo",
    originalPrice: 89,
    price: 59,
    popular: false,
    badge: "Accelerated",
    features: [
      "Everything in 4 Days",
      "Intensive Hifz Program",
      "Weekly 1:1 Parent Call",
      "Islamic Studies Add-on",
      "Certificate Upon Completion",
    ],
  },
];

const weekendPlans = [
  {
    duration: "30 Min Session",
    sessions: "8 sessions/mo",
    originalPrice: 80,
    price: 60,
    popular: false,
    badge: null,
    features: [
      "1-on-1 Live Tutor Sessions",
      "Quran Reading & Tajweed",
      "Flexible Weekend Timing",
      "Session Recordings",
      "Email Progress Reports",
    ],
  },
  {
    duration: "45 Min Session",
    sessions: "8 sessions/mo",
    originalPrice: 110,
    price: 82,
    popular: true,
    badge: "Best Choice",
    features: [
      "Everything in 30 Min",
      "Memorization (Hifz) Track",
      "Tafseer & Islamic Studies",
      "Dedicated Fixed Tutor",
      "WhatsApp + Email Support",
    ],
  },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#2f8f68" fillOpacity="0.15" />
    <path d="M5 8.5l2 2 4-4" stroke="#2f8f68" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Sparkle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6L12 17.2l-6.2 4.5 2.4-7.6L2 9.6h7.6z" />
  </svg>
);

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("weekday");
  const [popupOpen, setPopupOpen] = useState(false)


  const plans = activeTab === "weekday" ? weekdayPlans : weekendPlans;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0e2a1e] py-20 px-4 font-sans">
      <FormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      {/* ── Decorative Background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(47,143,104,1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,143,104,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#2f8f68] opacity-10 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[#b5892f] opacity-10 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[400px] rounded-full bg-[#2f9e97] opacity-8 blur-[140px]" />

        <svg className="absolute top-0 right-0 w-96 h-96 opacity-[0.06]" viewBox="0 0 400 400" fill="none">
          <circle cx="400" cy="0" r="200" stroke="#80c9a6" strokeWidth="1" />
          <circle cx="400" cy="0" r="280" stroke="#c9a24a" strokeWidth="0.5" />
          <circle cx="400" cy="0" r="350" stroke="#80c9a6" strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.06]" viewBox="0 0 320 320" fill="none">
          <circle cx="0" cy="320" r="160" stroke="#80c9a6" strokeWidth="1" />
          <circle cx="0" cy="320" r="240" stroke="#c9a24a" strokeWidth="0.5" />
        </svg>

        <Sparkle className="absolute top-24 right-1/4 w-3 h-3 text-[#c9a24a] opacity-30 animate-pulse" />
        <Sparkle className="absolute top-1/3 left-16 w-2 h-2 text-[#4caf83] opacity-25 animate-pulse" style={{ animationDelay: "1s" }} />
        <Sparkle className="absolute bottom-32 right-20 w-3 h-3 text-[#c9a24a] opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2f8f68]/20 border border-[#2f8f68]/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4caf83] animate-ping" />
            <span className="text-[#80c9a6] text-xs font-semibold tracking-widest uppercase">Enrolling Now — Limited Spots</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Simple, Transparent
            <span className="block" style={{ color: "#c9a24a" }}>Pricing Plans</span>
          </h1>
          <p className="text-[#b3dfc7] text-base md:text-lg max-w-xl mx-auto">
            Expert Quran tutors. Live 1-on-1 sessions. Flexible schedules designed for every family.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-[#80c9a6]">
            {["✓ Free Trial Class", "✓ Cancel Anytime", "✓ Certified Tutors", "✓ Kids & Adults"].map((t) => (
              <span key={t} className="bg-[#2f8f68]/10 border border-[#2f8f68]/20 rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className="relative flex bg-[#12352a]/80 border border-[#2f8f68]/30 rounded-full p-1 backdrop-blur-sm">
            {["weekday", "weekend"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === tab
                  ? "bg-[#2f8f68] text-white shadow-lg shadow-[#2f8f68]/30"
                  : "text-[#80c9a6] hover:text-white"
                  }`}
              >
                {tab === "weekday" ? "📅 Weekday Classes" : "🌙 Weekend Classes"}
              </button>
            ))}
          </div>
        </div>

        {/* Savings Banner */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-[#c9a24a]/10 border border-[#c9a24a]/30 rounded-lg px-4 py-2 text-[#c9a24a] text-sm font-medium">
            🎉 <strong>Launch Offer:</strong> Save up to 30% — Limited time only!
          </span>
        </div>

        {/* Pricing Cards */}
        <div
          className={`grid gap-6 ${plans.length === 4
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
            }`}
        >
          {plans.map((plan, i) => {
            const title = plan.days || plan.duration;
            const isPop = plan.popular;
            const discount = Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100);

            return (
              <div
                key={i}
                className={`relative flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${isPop
                  ? "border-[#c9a24a]/60 bg-gradient-to-b from-[#12352a] to-[#0e2a1e] shadow-xl shadow-[#c9a24a]/10"
                  : "border-[#2f8f68]/25 bg-[#0e2a1e]/80 hover:border-[#2f8f68]/50"
                  }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wide whitespace-nowrap ${isPop ? "bg-[#c9a24a] text-[#12352a]" : "bg-[#2f8f68] text-white"
                    }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                  <p className="text-[#80c9a6] text-xs mb-4">{plan.sessions}</p>

                  <div className="mb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                      <span className="text-[#80c9a6] text-sm">/month</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[#57534e] text-sm line-through">${plan.originalPrice}</span>
                      <span className="bg-[#c9a24a]/20 text-[#c9a24a] text-xs font-semibold px-2 py-0.5 rounded-full">
                        Save {discount}%
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[#2f8f68]/20 mb-5" />

                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[#b3dfc7] text-sm">
                        <CheckIcon />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setPopupOpen(true)}
                    className={`block text-center py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${isPop
                      ? "bg-[#c9a24a] hover:bg-[#b5892f] text-[#12352a] shadow-lg shadow-[#c9a24a]/25"
                      : "bg-[#2f8f68]/20 hover:bg-[#2f8f68]/40 text-[#4caf83] border border-[#2f8f68]/40 hover:border-[#4caf83]"
                      }`}
                  >
                    {isPop ? "🚀 Enroll Now" : "Get Started"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Low Income Discount Notice ── */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-[#12352a]/80 border border-[#2f8f68]/30 rounded-2xl px-5 py-4 max-w-xl text-center">
            <span className="text-2xl shrink-0" aria-hidden>🤲</span>
            <p className="text-sm text-[#b3dfc7] leading-relaxed">
              <strong className="text-[#c9a24a]">Supporting every family —</strong>{" "}
              Low-income families are offered a{" "}
              <strong className="text-white">10% discount</strong> on any plan.
              Reach out via WhatsApp or the contact form to apply.
            </p>
          </div>
        </div>

        {/* Free Trial CTA */}
        <div className="mt-10 relative rounded-2xl overflow-hidden border border-[#2f8f68]/30">
          <div className="absolute inset-0 bg-gradient-to-r from-[#12352a] via-[#1e5942] to-[#12352a]" />
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle, #4caf83 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10">
            <div>
              <p className="text-[#c9a24a] text-sm font-semibold uppercase tracking-widest mb-1">Risk-Free Offer</p>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Start With a <span style={{ color: "#c9a24a" }}>FREE Trial Class</span>
              </h2>
              <p className="text-[#b3dfc7] text-sm max-w-md">
                No commitment. No credit card. Experience our teaching quality firsthand before you enroll.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-wcu-cta-btn-bg)] hover:bg-[var(--color-wcu-cta-btn-hover)] text-[var(--color-wcu-cta-btn-text)] font-extrabold text-base px-8 py-4 rounded-xl transition-colors duration-200 font-[family-name:var(--font-heading)] shadow-lg shadow-black/20"
                onClick={() => setPopupOpen(true)}
              >
                Book My Free Trial Class →
              </button>
              <a
                href="https://wa.me/133225225428"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-wcu-cta-outline-border)] text-[var(--color-wcu-cta-outline-text)] hover:bg-white/10 font-bold text-base px-8 py-4 rounded-xl transition-colors duration-200 font-[family-name:var(--font-sans)]"
              >
                Talk to an Advisor
              </a>
            </div>
          </div>
        </div>

        {/* FAQ-lite trust strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[
            { icon: "🔒", title: "No Hidden Fees", desc: "Price you see is all you pay" },
            { icon: "🔄", title: "Cancel Anytime", desc: "No lock-in contracts ever" },
            { icon: "👨‍🏫", title: "Certified Tutors", desc: "Ijazah-certified instructors" },
          ].map((item) => (
            <div key={item.title} className="bg-[#12352a]/50 border border-[#2f8f68]/20 rounded-xl p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-[#80c9a6] text-xs mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[#57534e] text-xs mt-8">
          All prices in USD · Monthly billing · Taxes may apply based on location
        </p>
      </div>
    </section>
  );
}