"use client";

import { useEffect, useRef, useState } from "react";

const HADITH = {
  arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
  translation:
    "The best among you are those who learn the Quran and teach it.",
  source: "Sahih Al-Bukhari 5027",
};

const STATS = [
  { value: "5,000+", label: "Students Enrolled" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "12+", label: "Years of Excellence" },
  { value: "40+", label: "Expert Scholars" },
];

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Flexible Schedule",
    title: "Learn at Your Own Pace",
    desc:
      "Morning, evening, or weekend our scholars adapt to your timezone and lifestyle. No rigid timetables, just consistent spiritual growth on your terms.",
    proof: "Available 24/7 across all timezones",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" strokeLinecap="round" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
      </svg>
    ),
    tag: "Certified Scholars",
    title: "One-on-One with Real Ustadhs",
    desc:
      "Every lesson is live and personal. Our Huffaz and certified scholars from Al-Azhar and Madinah University give you undivided attention no pre-recordings, no bots.",
    proof: "Ijazah-certified teachers",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" />
        <path d="M9 7h6M9 11h4" strokeLinecap="round" />
      </svg>
    ),
    tag: "Full Curriculum",
    title: "From Qaida to Full Hifz",
    desc:
      "Whether your child is reading their first letter or an adult reclaiming their connection to the Quran we have a structured, proven path for every level.",
    proof: "Beginner → Hifz programs",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Tajweed Mastery",
    title: "Correct Every Makhraj & Rule",
    desc:
      "Our Tajweed program uses real-time voice correction so you recite with the same precision as those who sat with the Prophet ﷺ's companions. Beautiful recitation, guaranteed.",
    proof: "Live audio correction every class",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Safe & Trusted",
    title: "Secure Classes for Children",
    desc:
      "All sessions are recorded, parent-observable, and conducted under strict Islamic guidelines. Your child learns in a safe, nurturing environment that you can monitor anytime.",
    proof: "Parent dashboard included",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" />
      </svg>
    ),
    tag: "Affordable",
    title: "World-Class at Honest Prices",
    desc:
      "Premium Islamic education shouldn't be a luxury. We offer flexible payment plans, sibling discounts, and a full 7-day free trial no credit card required.",
    proof: "Free trial, no commitment",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── Animated Counter ─── */
function Counter({ target }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);
  const numeric = parseInt(target.replace(/[^0-9]/g, ""));
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(numeric / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= numeric) { setCount(numeric); clearInterval(timer); }
      else setCount(start);
    }, 24);
    return () => clearInterval(timer);
  }, [inView, numeric]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function WhyStudyWithUs() {
  const [headerRef, headerInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.05);

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "var(--color-wcu-bg)" }}
      aria-label="Why Study With Us"
    >
      {/* ── Decorative Background ── */}
      <Background />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Label pill */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-5"
            style={{ background: "var(--color-wcu-label-bg)", color: "var(--color-wcu-label-text)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--color-primary-400)" }} />
            Trusted by 5,000+ Families Worldwide
          </span>

          {/* Arabic Hadith */}
          <div
            className="relative mx-auto mb-6 px-6 py-5 rounded-2xl max-w-2xl border"
            style={{
              background: "rgba(30, 89, 66, 0.06)",
              borderColor: "var(--color-primary-200)",
            }}
          >
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{ background: "var(--color-secondary-400)", color: "var(--color-primary-900)" }}
            >
              Hadith
            </div>
            <p
              className="text-2xl sm:text-3xl leading-loose mb-2 font-medium"
              style={{
                fontFamily: "'Amiri', 'Scheherazade New', serif",
                direction: "rtl",
                color: "var(--color-primary-800)",
                letterSpacing: "0.02em",
              }}
            >
              {HADITH.arabic}
            </p>
            <p className="text-sm italic" style={{ color: "var(--color-neutral-500)" }}>
              "{HADITH.translation}"
            </p>
            <p className="text-xs mt-1 font-semibold tracking-wide" style={{ color: "var(--color-secondary-600)" }}>
              {HADITH.source}
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5"
            style={{ color: "var(--color-wcu-heading)", fontFamily: "var(--font-heading)" }}
          >
            Your Family Deserves{" "}
            <span
              className="relative inline-block"
              style={{ color: "var(--color-wcu-heading-accent)" }}
            >
              the Best Quran Education
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 10"
                fill="none"
              >
                <path d="M0 8 Q75 2 150 6 Q225 10 300 4" stroke="var(--color-secondary-400)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
            {" "}and We Deliver It.
          </h2>

          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-4"
            style={{ color: "var(--color-wcu-subtext)" }}
          >
            Thousands of Muslims in the UK, USA, Canada & Australia have already transformed
            their relationship with the Holy Quran through our live, one-on-one online classes.
            Here's exactly why they chose us and why you should too.
          </p>

          <p
            className="text-base font-medium"
            style={{ color: "var(--color-primary-600)" }}
          >
            No recordings. No bots. Just real scholars, real progress, real barakah. ✦
          </p>
        </div>

        {/* ── Stats Bar ── */}
        {/* <StatsBar /> */}

        {/* ── Features Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mt-16"
        >
          {FEATURES.map((f, i) => (
            <FeatureCard
              key={i}
              feature={f}
              index={i}
              visible={gridInView}
            />
          ))}
        </div>

        {/* ── CTA Banner ── */}
        {/* <CTABanner /> */}
      </div>
    </section>
  );
}

/* ── Background ── */
function Background() {
  return (
    <>
      {/* Geometric SVG pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "var(--color-primary-600)" }}
      >
        <defs>
          <pattern id="arabesque" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <line x1="10" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="0.5" />
            <line x1="40" y1="10" x2="40" y2="70" stroke="currentColor" strokeWidth="0.5" />
            <line x1="18" y1="18" x2="62" y2="62" stroke="currentColor" strokeWidth="0.4" />
            <line x1="62" y1="18" x2="18" y2="62" stroke="currentColor" strokeWidth="0.4" />
            <rect x="22" y="22" width="36" height="36" stroke="currentColor" strokeWidth="0.4" fill="none" transform="rotate(45 40 40)" />
          </pattern>
        </defs>
        {/* <rect width="100%" height="100%" fill="url(#arabesque)" /> */}
      </svg>

      {/* Gradient blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-30 pointer-events-none"
        style={{ background: "var(--color-primary-200)" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: "var(--color-secondary-200)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "var(--color-accent-300)" }}
      />

      {/* Top & bottom soft dividers */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--color-primary-300), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--color-primary-300), transparent)" }}
      />
    </>
  );
}

/* ── Stats Bar ── */
// function StatsBar() {
//   return (
//     <div
//       className="relative rounded-2xl overflow-hidden border"
//       style={{ borderColor: "var(--color-primary-200)" }}
//     >
//       <div
//         className="absolute inset-0"
//         style={{
//           background: "linear-gradient(135deg, var(--color-primary-800) 0%, var(--color-primary-900) 100%)",
//         }}
//       />
//       {/* subtle shine */}
//       <div className="absolute inset-0 opacity-10"
//         style={{ background: "linear-gradient(135deg, white 0%, transparent 50%)" }}
//       />
//       <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
//         style={{ borderColor: "rgba(255,255,255,0.08)" }}>
//         {STATS.map((s, i) => (
//           <div key={i} className="flex flex-col items-center justify-center py-7 px-4 text-center">
//             <span
//               className="text-3xl sm:text-4xl font-extrabold tracking-tight"
//               style={{ color: "var(--color-secondary-300)" }}
//             >
//               <Counter target={s.value} />
//             </span>
//             <span className="text-sm mt-1 font-medium" style={{ color: "var(--color-primary-200)" }}>
//               {s.label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

/* ── Feature Card ── */
function FeatureCard({ feature, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl border p-6 flex flex-col gap-4 cursor-default transition-all duration-700"
      style={{
        background: hovered
          ? "linear-gradient(135deg, #ffffff 0%, var(--color-primary-50) 100%)"
          : "var(--color-wcu-card-bg)",
        borderColor: hovered ? "var(--color-primary-400)" : "var(--color-wcu-card-border)",
        boxShadow: hovered
          ? "0 20px 50px -10px rgba(47, 143, 104, 0.18), 0 0 0 1px var(--color-primary-300)"
          : "0 2px 12px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transitionDelay: `${index * 80}ms`,
        opacity: visible ? 1 : 0,
        translate: visible ? "0 0" : "0 40px",
        transition: `opacity 0.7s ${index * 80}ms, translate 0.7s ${index * 80}ms, box-shadow 0.3s, border-color 0.3s, transform 0.3s, background 0.3s`,
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300"
        style={{
          background: hovered
            ? "linear-gradient(to right, var(--color-primary-400), var(--color-secondary-400))"
            : "transparent",
        }}
      />

      {/* Icon + Tag row */}
      <div className="flex items-start justify-between">
        <div
          className="p-3 rounded-xl transition-colors duration-300"
          style={{
            background: hovered ? "var(--color-primary-100)" : "var(--color-wcu-card-icon-bg)",
            color: "var(--color-wcu-card-icon-color)",
          }}
        >
          {feature.icon}
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            background: "var(--color-wcu-card-tag-bg)",
            color: "var(--color-wcu-card-tag-text)",
          }}
        >
          {feature.tag}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold leading-snug"
        style={{ color: "var(--color-wcu-card-title)" }}
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-wcu-card-text)" }}>
        {feature.desc}
      </p>

      {/* Proof point */}
      <div
        className="flex items-center gap-2 text-xs font-semibold pt-2 border-t"
        style={{
          borderColor: "var(--color-primary-100)",
          color: "var(--color-primary-600)",
        }}
      >
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        {feature.proof}
      </div>
    </div>
  );
}

/* ── CTA Banner ── */
// function CTABanner() {
//   const [ref, inView] = useInView(0.2);
//   return (
//     <div
//       ref={ref}
//       className={`relative mt-16 rounded-3xl overflow-hidden transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//     >
//       {/* Background */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: "linear-gradient(135deg, var(--color-wcu-cta-bg) 0%, var(--color-primary-900) 100%)",
//         }}
//       />
//       {/* Glow */}
//       <div
//         className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[80px] opacity-25 pointer-events-none"
//         style={{ background: "var(--color-secondary-500)" }}
//       />
//       <div
//         className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full blur-[60px] opacity-15 pointer-events-none"
//         style={{ background: "var(--color-primary-400)" }}
//       />

//       {/* Arabic ornament watermark */}
//       <div
//         className="absolute right-8 top-1/2 -translate-y-1/2 text-8xl sm:text-9xl opacity-5 select-none pointer-events-none"
//         style={{ fontFamily: "'Amiri', serif", color: "white" }}
//       >
//         ﷽
//       </div>

//       <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-10">
//         <div className="text-center sm:text-left">
//           <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--color-secondary-400)" }}>
//             ✦ Limited Spots Available
//           </p>
//           <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
//             Start Your Free Trial Today.
//             <br />
//             <span style={{ color: "var(--color-primary-200)" }}>No Credit Card. No Risk. Just Barakah.</span>
//           </h3>
//           <p className="mt-2 text-sm" style={{ color: "var(--color-primary-300)" }}>
//             Join 5,000+ families already learning. Your first class is completely free.
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row gap-3 shrink-0">
//           <a
//             href="#enroll"
//             className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
//             style={{
//               background: "var(--color-wcu-cta-btn-bg)",
//               color: "var(--color-wcu-cta-btn-text)",
//             }}
//             onMouseEnter={e => e.currentTarget.style.background = "var(--color-wcu-cta-btn-hover)"}
//             onMouseLeave={e => e.currentTarget.style.background = "var(--color-wcu-cta-btn-bg)"}
//           >
//             Book Free Trial Class
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//           </a>
//           <a
//             href="#learn-more"
//             className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 hover:bg-white/10"
//             style={{
//               borderColor: "var(--color-wcu-cta-outline-border)",
//               color: "var(--color-wcu-cta-outline-text)",
//             }}
//           >
//             See How It Works
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }