"use client";

const reasons = [
  {
    icon: "🏆",
    tag: "Certified",
    title: "Ijazah-Certified Quran Tutors",
    body: "Every tutor holds an Ijazah the highest traditional Quranic certification, passed through an unbroken chain for over 1,400 years. All tutors are also background-checked and formally trained in online teaching.",
    cta: "Certified Tutors",
  },
  {
    icon: "👨‍👩‍👧",
    tag: "Your Choice",
    title: "Male & Female Tutors You Choose",
    body: "We offer both qualified male Ustadhs and female Ustadhas. Parents can select the right tutor for their child. Sisters and ladies can learn comfortably with female-only instructors.",
    cta: "Choose Your Tutor",
  },
  {
    icon: "🕐",
    tag: "Flexible",
    title: "Flexible Scheduling Your Time Zone",
    body: "Morning, evening, or weekend we work around your schedule. Students in the USA, UK, UAE, and Saudi Arabia can book classes across all time zones without disrupting school or work.",
    cta: "Flexible Timing",
  },
  {
    icon: "🔒",
    tag: "Safe",
    title: "Safe & Monitored Classes for Children",
    body: "All sessions are recorded and parent-observable. Our online Quran classes for kids follow strict Islamic guidelines and child safety standards giving parents complete peace of mind.",
    cta: "Child Safety First",
  },
  {
    icon: "📈",
    tag: "Personalized",
    title: "Personalized Learning Plan for Every Student",
    body: "No two students learn at the same pace. We assess every student before their first paid session and build a custom curriculum around their level, goals, and learning style.",
    cta: "Custom Plan",
  },
];

const stats = [
  { value: "2,000+", label: "Families Enrolled" },
  { value: "30+",    label: "Countries Served"  },
  { value: "4.9★",   label: "Average Rating"    },
  { value: "100%",   label: "Certified Tutors"  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--color-wcu-bg)] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ── LEFT: header + reason list ── */}
          <div>
            {/* Section header */}
            <span className="inline-block bg-[var(--color-wcu-label-bg)] text-[var(--color-wcu-label-text)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-sans)]">
              Why QuranInstruct
            </span>

            <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[var(--color-wcu-heading)] leading-tight mb-5">
              Not Just Another{" "}
              <span className="text-[var(--color-wcu-heading-accent)] relative inline-block">
                Quran Platform
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5 C50 1.5, 150 1.5, 199 5.5" stroke="var(--color-wcu-heading-accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
            </h2>

            <p className="text-[var(--color-wcu-subtext)] text-base sm:text-lg leading-relaxed font-[family-name:var(--font-sans)] mb-10">
              We built QuranInstruct around one belief: every Muslim family deserves a genuine, personal connection with the Holy Quran regardless of where they live.
            </p>

            {/* Reason list */}
            <div className="flex flex-col gap-6">
              {reasons.map(({ icon, tag, title, body }) => (
                <div key={title} className="flex gap-4 group">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-wcu-card-icon-bg)] flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>

                  {/* Text */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-[family-name:var(--font-heading)] font-bold text-base text-[var(--color-wcu-card-title)] leading-snug">
                        {title}
                      </h4>
                      <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider bg-[var(--color-wcu-card-tag-bg)] text-[var(--color-wcu-card-tag-text)] px-2 py-0.5 rounded-full font-[family-name:var(--font-sans)]">
                        {tag}
                      </span>
                    </div>
                    <p className="text-[var(--color-wcu-card-text)] text-sm leading-relaxed font-[family-name:var(--font-sans)]">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hadith + stats box ── */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-[var(--color-wcu-card-bg)] border border-[var(--color-wcu-card-border)] rounded-3xl p-8 shadow-lg flex flex-col gap-8">

              {/* Hadith block */}
              <div className="text-center">
                {/* Decorative top line */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 h-px bg-[var(--color-wcu-card-border)]" />
                  <span className="text-[var(--color-wcu-heading-accent)] text-lg">✦</span>
                  <div className="flex-1 h-px bg-[var(--color-wcu-card-border)]" />
                </div>

                <p
                  className="text-2xl sm:text-3xl font-bold text-[var(--color-wcu-heading)] leading-snug mb-4 tracking-wide"
                  dir="rtl"
                  lang="ar"
                  style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', serif" }}
                >
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </p>

                <p className="text-[var(--color-wcu-subtext)] text-base sm:text-lg leading-relaxed font-[family-name:var(--font-sans)] italic">
                  "The best among you are those who learn the Quran and teach it."
                </p>
                <p className="text-[var(--color-wcu-card-tag-text)] text-sm font-semibold mt-2 font-[family-name:var(--font-sans)]">
                 Sahih Al-Bukhari, 5027
                </p>

                {/* Decorative bottom line */}
                <div className="flex items-center gap-3 mt-6">
                  <div className="flex-1 h-px bg-[var(--color-wcu-card-border)]" />
                  <span className="text-[var(--color-wcu-heading-accent)] text-lg">✦</span>
                  <div className="flex-1 h-px bg-[var(--color-wcu-card-border)]" />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-[var(--color-wcu-card-icon-bg)] rounded-2xl px-4 py-5 text-center border border-[var(--color-wcu-card-border)]"
                  >
                    <p className="font-[family-name:var(--font-heading)] font-extrabold text-2xl text-[var(--color-wcu-heading-accent)] leading-none mb-1">
                      {value}
                    </p>
                    <p className="text-[var(--color-wcu-card-text)] text-xs font-semibold uppercase tracking-wide font-[family-name:var(--font-sans)]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}