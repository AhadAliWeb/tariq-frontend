"use client";

const TEXT_COLOR = "#ffffff";
const BG_COLOR = "#FF7100";

export default function ContactStrip() {
  return (
    <div
      className="relative overflow-hidden flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 px-5 sm:px-8 py-2.5 text-[0.78rem] sm:text-[0.9rem] font-semibold"
      style={{ backgroundColor: BG_COLOR }}
    >
      {/* Shine sweep */}
      <span
        aria-hidden="true"
        className="shine-sweep pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Group 1: Phone + WhatsApp */}
      <div className="relative flex flex-nowrap items-center gap-x-4 sm:gap-x-6">
        {/* Phone */}
        <a
          href="tel:+447414270363"
          aria-label="Call UK number"
          className="contact-link phone-link inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap no-underline transition-opacity duration-200 hover:underline hover:opacity-80"
          style={{ color: TEXT_COLOR }}
        >
          <PhoneIcon />
          <span>UK: +44 7414 270 363</span>
        </a>

        {/* Divider */}
        <span
          className="hidden sm:block h-3.5 w-px bg-white/40"
          aria-hidden="true"
        />

        {/* WhatsApp */}
        <a
          href="https://wa.me/13322525428?text=Assalam%20o%20Aliakum.%20I%20want%20to%20enroll%20for%20the%20Demo%20Class."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message US number on WhatsApp"
          className="contact-link whatsapp-link inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap no-underline transition-opacity duration-200 hover:underline hover:opacity-80"
          style={{ color: TEXT_COLOR }}
        >
          <WhatsAppIcon />
          <span>US: +1 332 252 5428</span>
        </a>
      </div>

      {/* Divider */}
      <span
        className="relative hidden sm:block h-3.5 w-px bg-white/40"
        aria-hidden="true"
      />

      {/* Email */}
      <a
        href="mailto:quraninstruct@gmail.com"
        aria-label="Email us"
        className="contact-link email-link relative inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap no-underline transition-opacity duration-200 hover:underline hover:opacity-80"
        style={{ color: TEXT_COLOR }}
      >
        <MailIcon />
        <span>quraninstruct@gmail.com</span>
      </a>

      <style>{`
        /* ========================================
           BACKGROUND SHINE ANIMATION
        ======================================== */

        @keyframes shineSweep {
          0% {
            background-position: 200% 0;
          }

          100% {
            background-position: -200% 0;
          }
        }

        .shine-sweep {
          animation: shineSweep 3.4s linear infinite;
        }


        /* ========================================
           ICON PULSE ANIMATION
        ======================================== */

        @keyframes iconPulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.16);
          }
        }

        .contact-link svg {
          animation: iconPulse 2.4s ease-in-out infinite;
          transform-origin: center;
        }

        .whatsapp-link svg {
          animation-delay: 0.5s;
        }

        .email-link svg {
          animation-delay: 1s;
        }

        .contact-link:hover svg {
          animation-duration: 0.7s;
        }


        /* ========================================
           REDUCED MOTION
        ======================================== */

        @media (prefers-reduced-motion: reduce) {
          .shine-sweep,
          .contact-link svg {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}


/* ========================================
   PHONE ICON
======================================== */

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4"
      aria-hidden="true"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* ========================================
   WHATSAPP ICON
======================================== */

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.12h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.2-8.26 8.2zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.93.93 0 0 0-.67.31c-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29z" />
    </svg>
  );
}


/* ========================================
   MAIL ICON
======================================== */

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M22 6l-10 7L2 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}