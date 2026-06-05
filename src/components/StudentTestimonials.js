"use client";
import { useState } from "react";
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { parsePhoneNumber } from "react-phone-number-input"

const testimonials = [
  {
    id: 1,
    name: "Umm Abdullah",
    role: "Mother of 3 · Hifz Program",
    location: "Birmingham, UK",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    course: "Hifz Program",
    quote:
      "SubhanAllah! My son has memorised 3 Juz in just 6 months. The teachers are so patient and encouraging. I was worried about online learning, but this exceeded all my expectations. May Allah reward the entire team.",
  },
  {
    id: 2,
    name: "Brother Khalid R.",
    role: "Software Engineer · Tajweed Course",
    location: "Dubai, UAE",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    course: "Tajweed Intensive",
    quote:
      "I tried learning Tajweed from YouTube for years nothing clicked. Within 4 weeks here, my recitation transformed completely. The one-on-one sessions are a game changer. Highly recommend to every Muslim professional.",
  },
  {
    id: 3,
    name: "Sister Maryam T.",
    role: "University Student · Quran for Beginners",
    location: "Toronto, Canada",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    course: "Beginner Course",
    quote:
      "I grew up not knowing how to read Arabic. At 22, I finally took the leap. My teacher never made me feel embarrassed only encouraged. Now I pray with full understanding. This is the best investment I've ever made.",
  },
  {
    id: 4,
    name: "Dr. Ahmed F.",
    role: "Physician · Adult Quran Program",
    location: "Karachi, Pakistan",
    image: "https://i.pravatar.cc/150?img=53",
    rating: 5,
    course: "Adult Program",
    quote:
      "As a busy doctor, I needed flexible scheduling. They accommodated early morning sessions before my hospital shifts. Alhamdulillah, I've completed my first full reading of the Quran.",
  },
  {
    id: 5,
    name: "Sister Ruqayyah N.",
    role: "Homemaker · Tajweed & Tafseer",
    location: "Nairobi, Kenya",
    image: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    course: "Tafseer Program",
    quote:
      "Learning Tafseer changed how I connect with the Quran in salah. I cry in my prayers now because I understand what Allah is saying to me. This course is not just education it is spiritual healing.",
  },
  {
    id: 6,
    name: "Brother Imran J.",
    role: "Teacher · Advanced Tajweed",
    location: "Houston, USA",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    course: "Advanced Tajweed",
    quote:
      "I've studied with multiple online academies. This is the only one where the Ustadh corrected my exact makhaarij errors that others overlooked. The quality of teaching is truly ijazah-level.",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count
            ? "text-[var(--color-hero-stars)]"
            : "text-[var(--color-neutral-300)]"
            }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.974 2.886a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118L10 16.347l-3.555 2.65c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.086 10.1c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export default function StudentTestimonials() {
  const [current, setCurrent] = useState(0);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  // Calculate the 3 visible testimonials (wraps around the array if needed)
  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  const handleSubmit = async () => {
    if (!phone) return;

    setLoading(true);
    setError("")

    try {

      const parsed = parsePhoneNumber(phone)

      console.log("parsed:", parsed);


      if (!parsed) {

        setError("Inavlid Phone Number")
        throw new Error("Invalid Phone Number")
      }


      const country = parsed.country;
      const countryCode = `+${parsed.countryCallingCode}`

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, country, countryCode })
      });

      // Handle non-2xx responses
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      setSubmitted(true);

      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "form_submit",
      });

    } catch (error) {
      setError("Error Occured, Try again later")
      console.error("Error submitting form:", error);

    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[var(--color-wcu-label-bg)] text-[var(--color-wcu-label-text)]">
            Voices of Our Community
          </span>

          {/* Hadith */}
          <div className="mb-6 bg-[var(--color-primary-50)] border border-[var(--color-primary-100)] rounded-2xl px-6 py-5">
            <p
              className="font-heading text-2xl sm:text-3xl text-[var(--color-primary-800)] leading-relaxed"
              dir="rtl"
            >
              «مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى
              الْجَنَّةِ»
            </p>
            <p className="text-xs text-[var(--color-neutral-500)] mt-3 text-center">
              "Whoever treads a path seeking knowledge, Allah will make easy for
              him a path to Paradise." <em>Sahih Muslim</em>
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wcu-heading)] leading-tight">
            Student{" "}
            <span className="text-[var(--color-wcu-heading-accent)]">
              Testimonials
            </span>{" "}
            &amp; Feedback
          </h2>

          <p className="mt-4 text-[var(--color-wcu-subtext)] text-base sm:text-lg leading-relaxed">
            Every review is from a real student who chose to prioritise the
            Quran. Their words are proof that the right teacher makes all the
            difference.
          </p>
        </div>

        {/* Carousel / Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl border border-[var(--color-wcu-card-border)] shadow-lg p-6 sm:p-8 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary-100)] overflow-hidden">
                    <img src={t.image} className="w-full h-full object-cover" alt={t.name} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-wcu-heading)]">
                      {t.name}
                    </h4>
                    <p className="text-sm text-[var(--color-wcu-subtext)]">
                      {t.role}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--color-wcu-subtext)] leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Prev / Next Controls */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--color-wcu-card-border)] flex items-center justify-center text-[var(--color-primary-700)] hover:bg-[var(--color-primary-50)] transition-colors shadow-sm"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current
                    ? "w-6 h-2.5 bg-[var(--color-primary-500)]"
                    : "w-2.5 h-2.5 bg-[var(--color-neutral-200)]"
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[var(--color-wcu-card-border)] flex items-center justify-center text-[var(--color-primary-700)] hover:bg-[var(--color-primary-50)] transition-colors shadow-sm"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-[var(--color-primary-800)] rounded-3xl px-8 py-12 text-center relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[var(--color-secondary-500)] opacity-10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[var(--color-primary-500)] opacity-10 blur-3xl pointer-events-none" />

          <p className="relative z-10 font-heading text-2xl sm:text-3xl font-black text-white mb-2">
            Your Journey Starts With One Free Class
          </p>
          <p className="relative z-10 text-[var(--color-primary-200)] mb-8 max-w-md mx-auto">
            No commitment. No payment. Just 30 minutes that could change your life.
          </p>

          {/* Phone Input + Button */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            {!submitted ? (
              <>
                <PhoneInput
                  international
                  defaultCountry="GB"
                  value={phone}
                  onChange={setPhone}
                  className="bg-white p-2 border border-white/10 rounded-3xl"
                  numberInputProps={{ className: 'focus:outline-none focus:ring-0' }}
                />
                <button
                  onClick={loading ? undefined : handleSubmit}
                  disabled={!phone || loading}
                  className="cursor-pointer w-full sm:w-auto px-6 py-3 rounded-full font-bold bg-[var(--color-secondary-400)] text-[var(--color-primary-900)] transition-colors duration-300 whitespace-nowrap shadow-lg disabled:cursor-auto disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Claim Your Free Trial"}
                </button>
              </>
            ) : (
              <p className="text-white font-medium text-center">
                You are all set. We will contact you soon!
              </p>
            )}
          </div>

          {error && (
            <p className="w-full sm:w-auto px-6 py-3 mt-4 rounded-full font-bold bg-red-500 text-white transition-colors duration-300 whitespace-nowrap shadow-lg inline-block">
              An Error Occured, Try again later
            </p>
          )}

        </div>
      </div>
    </section>
  );
}