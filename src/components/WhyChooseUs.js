"use client";

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 3-5 4.5-8 4.5 0 7 3.5 12 8 13.5C17.5 19.5 21 14.5 21 7.5 18 7.5 13.5 6 12 3z" />
      </svg>
    ),
    tag: "Most Popular",
    title: "Certified & Verified Tutors",
    body: "Every tutor is hand-screened, Ijazah-certified, and background-checked. Male & female tutors available so you choose who teaches your family — someone you fully trust.",
    cta: "Certified Tutors",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" strokeLinecap="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    ),
    tag: "Flexible",
    title: "Classes That Fit Your Life",
    body: "Mornings, evenings, or weekends — you set the time. Reschedule anytime, no penalties. Whether you're a busy parent or a working professional, we work around you.",
    cta: "Flexible Timing",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 0 0-5.56-3.69M9 20H4v-2a4 4 0 0 1 5.56-3.69M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
      </svg>
    ),
    tag: "All Ages",
    title: "For Kids, Teens & Adults",
    body: "Tailored learning paths starting from age 5, all the way to adults. Begin from Noorani Qaida or pick up mid-journey — we assess your level and build a plan just for you.",
    cta: "No Age Limit",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.4-3A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" />
      </svg>
    ),
    tag: "Zero Risk",
    title: "Your First Class Is FREE",
    body: "No credit card. No contracts. No pressure. Your first session is completely free so you can experience the quality, the tutor, and the teaching style before you commit to anything.",
    cta: "First Class Is On Us",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--color-wcu-bg)] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">

        {/* ── Section header ── */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block bg-[var(--color-wcu-label-bg)] text-[var(--color-wcu-label-text)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-sans)]">
            Why Families Choose Us
          </span>

          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[var(--color-wcu-heading)] leading-tight">
            Not Just Another{" "}
            <span className="text-[var(--color-wcu-heading-accent)] relative inline-block">
              Online Quran Class
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5 C50 1.5, 150 1.5, 199 5.5" stroke="var(--color-wcu-heading-accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </h2>

          <p className="mt-6 text-[var(--color-wcu-subtext)] text-base sm:text-lg leading-relaxed font-[family-name:var(--font-sans)]">
            Most online Quran platforms assign you a random tutor and leave you to figure the rest out.
            We do things differently. From your very first free class, you&apos;ll feel the difference —
            a personalised experience built around your goals, your schedule, and your family&apos;s needs.
          </p>

          <p className="mt-3 text-[var(--color-wcu-subtext)]/80 text-sm sm:text-base leading-relaxed font-[family-name:var(--font-sans)]">
            Over{" "}
            <span className="font-semibold text-[var(--color-wcu-heading)]">2,000 students</span>{" "}
            across 15+ countries have started their Quran journey with us.
            Here&apos;s exactly what makes us the platform they stay with.
          </p>
        </div>

        {/* ── Feature cards grid ── */}
        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map(({ icon, tag, title, body, cta, href }) => (
            <div
              key={title}
              className="group bg-[var(--color-wcu-card-bg)] border border-[var(--color-wcu-card-border)] hover:border-[var(--color-wcu-card-border-hover)] rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-5"
            >
              {/* Icon + tag row */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-wcu-card-icon-bg)] text-[var(--color-wcu-card-icon-color)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[var(--color-wcu-card-tag-bg)] text-[var(--color-wcu-card-tag-text)] px-2.5 py-1 rounded-full font-[family-name:var(--font-sans)]">
                  {tag}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[var(--color-wcu-card-title)] mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-[var(--color-wcu-card-text)] text-sm leading-relaxed font-[family-name:var(--font-sans)]">
                  {body}
                </p>
              </div>

              {/* Per-card CTA button */}
              <div
                className="mt-auto inline-flex items-center justify-center w-full bg-[var(--color-wcu-cta-btn-bg)] hover:bg-[var(--color-wcu-cta-btn-hover)] text-[var(--color-wcu-cta-btn-text)] font-bold text-sm px-6 py-3 rounded-xl transition-colors duration-200 font-[family-name:var(--font-sans)] shadow-sm"
              >
                {cta}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}