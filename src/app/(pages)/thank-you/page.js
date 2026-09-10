"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#0e2a1e] px-4 py-4 font-sans flex items-center justify-center">
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
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-2xl w-full mx-auto text-center max-h-full overflow-hidden">
        <div className="rounded-3xl border border-[#2f8f68]/30 bg-[#12352a]/60 backdrop-blur-sm shadow-2xl shadow-black/30 px-5 py-6 sm:px-10 sm:py-8">

          {/* Success icon */}
          <div className="mx-auto mb-3 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2f8f68]/20 border border-[#2f8f68]/40 flex items-center justify-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#2f8f68] to-[#1e5942] flex items-center justify-center shadow-lg shadow-[#2f8f68]/30">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Badge */}
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a24a] border border-[#c9a24a]/40 rounded-full px-3 py-1 mb-2 bg-[#c9a24a]/10">
            Request Received
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
            JazakAllah <span style={{ color: "#c9a24a" }}>Khair!</span>
          </h1>

          <p className="text-[#b3dfc7] text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-4">
            Your free trial request has been submitted. A tutor will reach out on WhatsApp within{" "}
            <strong className="text-white">24 hours</strong> to schedule your first class.
          </p>

          {/* What happens next */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { icon: "📱", title: "We message you" },
              { icon: "🧑‍🏫", title: "We match a tutor" },
              { icon: "📖", title: "Trial is scheduled" },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-[#0e2a1e]/60 border border-[#2f8f68]/20 rounded-xl px-2 py-2.5"
              >
                <span className="text-lg block mb-1" aria-hidden>
                  {step.icon}
                </span>
                <p className="text-white font-semibold text-[11px] leading-snug">{step.title}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <a
              href="https://wa.me/133225225428"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-chat inline-flex items-center justify-center gap-2 bg-[#2f8f68] hover:bg-[#257a56] text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-[#2f8f68]/20"
            >
              💬 Message Us on WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#2f8f68]/40 text-[#b3dfc7] hover:bg-white/5 font-bold text-sm px-6 py-3 rounded-xl transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-2 mt-4 pt-3 border-t border-[#2f8f68]/20">
            {["✓ Ijazah-Certified Tutors", "✓ No Credit Card Required", "✓ Cancel Anytime"].map((t) => (
              <span
                key={t}
                className="text-[10px] text-[#80c9a6] bg-[#2f8f68]/10 border border-[#2f8f68]/20 rounded-full px-2.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}