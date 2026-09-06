"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "13322525428";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Assalam o Aliakum. I want to enroll for the Demo Class."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppRedirectPage() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPulse(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-hero-bg flex items-center justify-center overflow-hidden">

      {/* ── Background layers (mirrors Hero) ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-hero-glow-green/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-hero-glow-gold/15 blur-[120px]" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Decorative Arabic text */}
        <div
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-[280px] leading-none font-serif select-none hidden lg:block"
          style={{ color: "rgba(255,255,255,0.03)" }}
        >
          ٱلْقُرْآن
        </div>
      </div>

      {/* ── Card ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center gap-6 sm:gap-8 px-6 py-12 sm:py-16 max-w-lg w-full mx-4"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: "1.5rem",
          boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
        }}
      >
        {/* Green WhatsApp glow icon */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "80px", height: "80px" }}>
          {/* Outer ping ring */}
          <span
            style={{
              position: "absolute",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "radial-gradient(circle, #25D366 0%, transparent 70%)",
              opacity: 0.3,
              animation: pulse ? "wa-ping 2s ease-out infinite" : "none",
            }}
          />
          {/* Secondary glow ring */}
          <span
            style={{
              position: "absolute",
              width: "96px",
              height: "96px",
              borderRadius: "50%",
              border: "1.5px solid rgba(37,211,102,0.35)",
              animation: pulse ? "wa-ping 2s ease-out 0.4s infinite" : "none",
            }}
          />
          {/* Icon circle */}
          <div
            style={{
              width: "80px",
              height: "80px",
              minWidth: "80px",
              minHeight: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 32px rgba(37,211,102,0.5)",
              position: "relative",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="white"
              style={{ width: "40px", height: "40px" }}
            >
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.522.658 4.882 1.81 6.93L2 30l7.302-1.782A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.918-1.624l-.424-.25-4.334 1.056 1.09-4.218-.276-.434A11.52 11.52 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.374-8.646c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.104 1.364-.204.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.062-1.936-2.41-.204-.348-.022-.536.154-.71.158-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.088-.174-.784-1.888-1.074-2.588-.282-.68-.57-.588-.784-.598l-.668-.012c-.232 0-.61.088-.928.436-.318.348-1.218 1.19-1.218 2.902s1.246 3.366 1.42 3.598c.174.232 2.452 3.742 5.942 5.248.832.358 1.48.572 1.986.732.834.264 1.594.226 2.194.138.67-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.204-1.656-.086-.144-.318-.232-.668-.406z" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 self-center bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
            <span
              className="w-2 h-2 rounded-full bg-[#25D366]"
              style={{ animation: "ping-soft 1.5s ease-out infinite" }}
            />
            <span className="text-[#25D366] text-xs font-semibold tracking-widest uppercase font-[family-name:var(--font-sans)]">
              We&apos;re Online Now
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] font-extrabold text-white text-2xl sm:text-3xl leading-snug">
            One Step Away From Your <br />
            <span className="text-[var(--color-hero-headline-accent)]">Free Trial Class</span>
          </h1>

          <p className="text-white text-sm sm:text-base leading-relaxed font-[family-name:var(--font-sans)] max-w-sm mx-auto">
            Click the button below to connect with us on WhatsApp. Our team will schedule your <strong className="text-[var(--color-hero-headline-accent)]">FREE demo class</strong> within minutes.
          </p>
        </div>

        {/* Pre-filled message preview */}
        <div
          className="w-full rounded-xl p-3 sm:p-4 text-left"
          style={{
            background: "rgba(37,211,102,0.07)",
            border: "1px solid rgba(37,211,102,0.2)",
          }}
        >
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-[family-name:var(--font-sans)] mb-1">
            Message we&apos;ll send on your behalf
          </p>
          <p className="text-white text-sm font-[family-name:var(--font-sans)] italic">
            &ldquo;Assalam o Aliakum. I want to enroll for the Demo Class.&rdquo;
          </p>
        </div>

        {/* CTA Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full flex items-center justify-center gap-3 font-[family-name:var(--font-heading)] font-extrabold text-white text-base sm:text-lg py-4 sm:py-5 rounded-xl transition-all duration-200 shadow-lg"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            boxShadow: "0 8px 32px rgba(37,211,102,0.30)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(37,211,102,0.50)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,211,102,0.30)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-6 h-6 flex-shrink-0">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.522.658 4.882 1.81 6.93L2 30l7.302-1.782A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.918-1.624l-.424-.25-4.334 1.056 1.09-4.218-.276-.434A11.52 11.52 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.374-8.646c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.104 1.364-.204.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.062-1.936-2.41-.204-.348-.022-.536.154-.71.158-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.088-.174-.784-1.888-1.074-2.588-.282-.68-.57-.588-.784-.598l-.668-.012c-.232 0-.61.088-.928.436-.318.348-1.218 1.19-1.218 2.902s1.246 3.366 1.42 3.598c.174.232 2.452 3.742 5.942 5.248.832.358 1.48.572 1.986.732.834.264 1.594.226 2.194.138.67-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.204-1.656-.086-.144-.318-.232-.668-.406z" />
          </svg>
          Chat With Us on WhatsApp →
        </a>

        {/* Trust note */}
        <p className="text-white/25 text-xs font-[family-name:var(--font-sans)]">
          🔒 Your number is private. No spam, ever.
        </p>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes wa-ping {
          0%   { transform: scale(1);   opacity: 0.4; }
          70%  { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes ping-soft {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}