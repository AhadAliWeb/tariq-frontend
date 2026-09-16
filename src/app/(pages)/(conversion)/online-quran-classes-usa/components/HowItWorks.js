// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import { CalendarCheck, Video, Repeat, ArrowRight } from 'lucide-react'

// const steps = [
//   {
//     icon: CalendarCheck,
//     title: 'Book Your Free Trial',
//     desc: "Tell us your child's age and goals — we'll match a tutor and confirm a time that works for your family.",
//     color: 'var(--color-primary)',
//     tint: '#E8F1EC',
//   },
//   {
//     icon: Video,
//     title: 'Meet Your Tutor Live',
//     desc: 'A one-on-one video class over Zoom or Google Meet. No software to install — just a device and an internet connection.',
//     color: 'var(--color-secondary)',
//     tint: '#FBF3E1',
//   },
//   {
//     icon: Repeat,
//     title: 'Start a Weekly Plan',
//     desc: 'Continue with a personalized weekly schedule, progress tracking, and a tutor your child already knows and trusts.',
//     color: 'var(--color-primary)',
//     tint: '#E8F1EC',
//   },
// ]

// export default function HowItWorks() {
//   const sectionRef = useRef(null)
//   const [revealed, setRevealed] = useState(false)

//   useEffect(() => {
//     if (typeof window === 'undefined') return

//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//       setRevealed(true)
//       return
//     }

//     const el = sectionRef.current
//     if (!el) return

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setRevealed(true)
//           observer.unobserve(el)
//         }
//       },
//       { threshold: 0.2 }
//     )
//     observer.observe(el)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section ref={sectionRef} className="us-page bg-[var(--color-background)] py-20 sm:py-24">
//       <div className="us-page mx-auto max-w-6xl px-6">
//         <div className="us-page mx-auto max-w-xl text-center">
//           <p className="us-page text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
//             How it works
//           </p>
//           <h2 className="us-page mt-2 text-2xl font-extrabold text-[var(--color-text)] sm:text-3xl lg:text-4xl">
//             Three Steps to Your First Live Class
//           </h2>
//         </div>

//         <div className="us-page mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
//           {steps.map((step, i) => {
//             const Icon = step.icon
//             return (
//               <div
//                 key={step.title}
//                 className={`group rounded-3xl border border-black/5 bg-[var(--color-surface)] p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${
//                   revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//                 }`}
//                 style={{ transitionDelay: revealed ? `${i * 120}ms` : '0ms' }}
//               >
//                 <span
//                   className="us-page block text-4xl font-extrabold leading-none sm:text-5xl lg:text-6xl"
//                   style={{ color: step.color, opacity: 0.14 }}
//                 >
//                   {String(i + 1).padStart(2, '0')}
//                 </span>

//                 <div
//                   className="us-page -mt-8 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
//                   style={{ backgroundColor: step.tint }}
//                 >
//                   <Icon className="us-page h-6 w-6" style={{ color: step.color }} />
//                 </div>

//                 <h3 className="us-page text-base font-bold text-[var(--color-text)] sm:text-lg">{step.title}</h3>
//                 <p className="us-page mt-2 text-sm leading-relaxed text-[var(--color-text)] opacity-70">
//                   {step.desc}
//                 </p>
//               </div>
//             )
//           })}
//         </div>

// <div className="us-page mt-14 text-center">
//   <div className="relative inline-flex">
//     {/* Soft outer pulse */}
//     <span className="us-page absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-40 animate-ping-soft" />

//     <a
//       href="#trial-form"
//       className="us-page group relative inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
//     >
//       Book Free Trial Class
//       <ArrowRight className="us-page h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//     </a>
//   </div>
// </div>







//       </div>
//     </section>
//   )
// }


"use client";

/**
 * ── Edit your steps here ──────────────────────────────────────────────
 * Add, remove, or reorder objects in this array and the roadmap updates
 * automatically. `number` accepts any ordinal string ("1st", "2nd", ...).
 * ────────────────────────────────────────────────────────────────────── */

function splitOrdinal(value) {
  const match = String(value).match(/^(\d+)(\D*)$/);
  if (!match) return { digits: value, suffix: "" };
  return { digits: match[1], suffix: match[2] };
}

function ConnectorPaths({ d }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="#2F6B3E"
      strokeWidth="2.5"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      pathLength="100"
      strokeDasharray="3 8"
      className="how-it-works-flow"
    />
  );
}

function DesktopConnector({ toRight }) {
  const d = toRight
    ? "M 8 0 C 8 58, 92 30, 92 100"
    : "M 92 0 C 92 58, 8 30, 8 100";

  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <ConnectorPaths d={d} />
    </svg>
  );
}

function MobileConnector() {
  return (
    <svg
      className="pointer-events-none absolute left-3 top-0 block h-full w-10 md:hidden"
      viewBox="0 0 40 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <ConnectorPaths d="M 20 0 C 8 32, 32 68, 20 100" />
    </svg>
  );
}

function Step({ step, index, isFirst }) {
  const alignRight = index % 2 === 1;
  const { digits, suffix } = splitOrdinal(step.number);
  const floatStyle = { animationDelay: `${index * 0.25}s` };

  return (
    <div className="relative">
      {!isFirst && (
        <>
          <div className="relative hidden md:block md:h-14">
            <DesktopConnector toRight={alignRight} />
          </div>
          <div className="relative h-12 md:hidden">
            <MobileConnector />
          </div>
        </>
      )}

      {/* Desktop / tablet layout — zigzag with the numeral above the card */}
      <div className={`hidden w-full md:flex md:w-[46%] ${alignRight ? "md:ml-auto" : ""}`}>
        <div className="w-full how-it-works-float" style={floatStyle}>
          <div className="mb-2 flex items-baseline gap-1 pl-1">
            <span className="text-2xl font-extrabold leading-none text-[#C68A2E]">
              {digits}
            </span>
            <span className="text-xs font-bold leading-none text-[#C68A2E]">
              {suffix}
            </span>
          </div>

          <div className="rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl border border-[#2F6B3E]/60 bg-white p-4 shadow-sm">
            <h3 className="mb-1 text-base font-bold text-[#1F4A2C]">
              {step.title}
            </h3>
            <p className="text-sm leading-snug text-slate-600">
              {step.description}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile layout — numbered badge beside the card */}
      <div className="how-it-works-float md:hidden" style={floatStyle}>
        <div className="flex items-start gap-3 rounded-2xl border border-[#2F6B3E]/60 bg-white p-4 shadow-sm">
          <div className="flex h-11 w-11 flex-none items-center justify-center gap-0.5 rounded-full border-2 border-[#2F6B3E] bg-[#FAF8F3]">
            <span className="text-sm font-extrabold leading-none text-[#C68A2E]">
              {digits}
            </span>
            <span className="text-[9px] font-bold leading-none text-[#C68A2E]">
              {suffix}
            </span>
          </div>
          <div className="min-w-0 pt-0.5">
            <h3 className="mb-1 text-base font-bold text-[#1F4A2C]">
              {step.title}
            </h3>
            <p className="text-sm leading-snug text-slate-600">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks({STEPS}) {
  return (
    <section className="bg-[#FAF8F3] py-10 md:py-14">
      <style>{`
        @keyframes how-it-works-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .how-it-works-float {
          animation: how-it-works-float 3.5s ease-in-out infinite;
        }
        @keyframes how-it-works-flow {
          to { stroke-dashoffset: -11; }
        }
        .how-it-works-flow {
          animation: how-it-works-flow 1.6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .how-it-works-float,
          .how-it-works-flow { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-xl px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-[#1F4A2C] md:text-3xl">
          How It Works
        </h2>

        <div className="flex flex-col">
          {STEPS.map((step, index) => (
            <Step key={index} step={step} index={index} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}