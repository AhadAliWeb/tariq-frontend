"use client";

import { useState } from "react";

const qaItems = [
  {
    q: "Is QuranInstruct suitable for complete beginners?",
    a: "Yes. QuranInstruct offers beginner Quran courses starting from Noorani Qaida the foundational Arabic reading guide. Tutors assess each student's current level before the first paid session and build a personalized learning plan accordingly. No prior knowledge of Arabic is required.",
  },
  {
    q: "How does QuranInstruct work for kids in the USA, UK, or UAE?",
    a: "Parents book a free trial class via the website form or WhatsApp. A tutor matched to the child's age and level conducts a 30-minute live session over video call. All children's sessions are parent-observable, recorded for safety, and follow structured age-appropriate curriculums. Classes are scheduled around school hours and weekends to suit families in US, UK, and UAE time zones.",
  },
  {
    q: "Are the tutors at QuranInstruct qualified?",
    a: "Every tutor at QuranInstruct holds an Ijazah the highest traditional Islamic certification in Quranic teaching, transmitted through an unbroken chain from the Prophet ﷺ. Tutors are also background-checked and trained in modern online pedagogy. Both male and female tutors are available.",
  },
  {
    q: "What is the cost of online Quran classes at QuranInstruct?",
    a: "Plans start at $39/month for 2 classes per week (8 sessions/month). The most popular plan is $49/month for 3 classes per week. All plans include a free first trial class, no contracts, and can be cancelled anytime. Low-income families may apply for a 10% discount via WhatsApp.",
  },
];

function QAItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden
        ${open
          ? "border-emerald-500/50 bg-emerald-950/60 shadow-lg shadow-emerald-900/30"
          : "border-emerald-800/40 bg-emerald-950/30 hover:border-emerald-600/40"
        }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
        aria-expanded={open}
      >
        {/* Question */}
        <span
          className={`font-semibold text-sm md:text-base leading-snug transition-colors duration-200
            ${open ? "text-amber-300" : "text-emerald-100 group-hover:text-amber-200"}`}
          
        >
          <span className="text-emerald-500 mr-2 font-bold">Q.</span>
          {item.q}
        </span>

        {/* Chevron */}
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300
            ${open
              ? "bg-amber-400 border-amber-300 rotate-180"
              : "bg-emerald-800/60 border-emerald-700 group-hover:bg-emerald-700"
            }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors duration-200 ${open ? "text-emerald-950" : "text-emerald-300"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Answer animated expand */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p
            className="px-5 pb-5 text-emerald-200/85 text-sm md:text-base leading-relaxed"
            
          >
            <span className="text-amber-400/70 font-semibold mr-2">A.</span>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutComponent() {
  return (
    <section className="relative w-full bg-gradient-to-b from-emerald-950 via-[#0a1f18] to-emerald-950 py-20 px-4 overflow-hidden">

      {/* Background geometric decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.04]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-emerald-400" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full border-[30px] border-teal-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-emerald-500" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-amber-400 border border-amber-500/40 rounded-full px-4 py-1.5 mb-5 bg-amber-400/10"
          >
            About QuranInstruct
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            
          >
            What Is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              QuranInstruct
            </span>
            ?
          </h2>
          <p className="text-emerald-300/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed" >
            A trusted online Quran academy connecting Muslim families worldwide with certified, Ijazah-qualified Quran teachers.
          </p>
        </div>

        {/* AI-style overview card */}
        <div className="rounded-2xl border border-emerald-700/50 bg-emerald-950/70 backdrop-blur-sm shadow-xl shadow-black/30 overflow-hidden mb-6">

          {/* Card header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-emerald-800/50 bg-emerald-900/40">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-xl shadow-md">
              📖
            </div>
            <h3
              className="text-white font-bold text-base md:text-lg"
              
            >
              QuranInstruct Online Quran Academy
            </h3>
          </div>

          {/* Card body */}
          <div className="px-6 py-6 space-y-4 text-emerald-100/85 text-sm md:text-base leading-relaxed" >
            <p>
              <strong className="text-white">QuranInstruct</strong> is an online Quran academy offering live, one-on-one Quran classes for children and adults across the USA, UK, United Arab Emirates, and Saudi Arabia. The platform connects students with Ijazah-certified male and female Quran tutors who deliver personalized lessons in Quran recitation, Tajweed, Hifz (memorization), Arabic language, Islamic Studies, and Tafseer all from the comfort of the student's home.
            </p>
            <p>
              Unlike recorded video courses, QuranInstruct uses real-time, interactive sessions via secure video platforms. Each student is matched with a tutor suited to their level, age, and goals whether they are a complete beginner starting with Noorani Qaida, a child memorizing Juz Amma, or an adult seeking to perfect their Makhraj and Tajweed rules. All sessions are conducted under strict Islamic guidelines with a safe, monitored environment for children.
            </p>
            <p>
              Students in the United States, United Kingdom, Canada, Australia, UAE, and Saudi Arabia benefit from flexible time zones, affordable pricing starting from{" "}
              <strong className="text-amber-300">$39/month</strong>, and a risk-free first trial class at no charge.
            </p>
          </div>
        </div>

        {/* Q&A Accordion */}
        <div className="space-y-3">
          {qaItems.map((item, idx) => (
            <QAItem key={idx} item={item} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}