const TEXT_COLOR = "#ffffff";
const BG_COLOR = "#C9A24A";

export default function ContactStrip() {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 px-4 py-2.5 text-[0.9rem] font-semibold"
      style={{ backgroundColor: BG_COLOR }}
    >
      <a
        href="tel:+447414270363"
        aria-label="Call UK number"
        className="inline-flex items-center gap-2 whitespace-nowrap no-underline transition-opacity hover:underline hover:opacity-70"
        style={{ color: TEXT_COLOR }}
      >
        <PhoneIcon />
        <span>UK: +44 7414 270 363</span>
      </a>

      <a
        href="https://wa.me/13322525428?text=Assalam o Aliakum. I want to enroll for the Demo Class."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message US number on WhatsApp"
        className="inline-flex items-center gap-2 whitespace-nowrap no-underline transition-opacity hover:underline hover:opacity-70 ml-2"
        style={{ color: TEXT_COLOR }}
      >
        <WhatsAppIcon />
        <span>US: +1 332 252 5428</span>
      </a>

      <a
        href="mailto:quraninstruct@gmail.com"
        aria-label="Email us"
        className="inline-flex items-center gap-2 whitespace-nowrap no-underline transition-opacity hover:underline hover:opacity-70 ml-2"
        style={{ color: TEXT_COLOR }}
      >
        <MailIcon />
        <span>quraninstruct@gmail.com</span>
      </a>
    </div>
  );
}

/* ---------- Icons (inline SVG, inherit currentColor) ---------- */

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={TEXT_COLOR} strokeWidth="2" className="shrink-0">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={TEXT_COLOR} className="shrink-0">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.12h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.2-8.26 8.2zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.93.93 0 0 0-.67.31c-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={TEXT_COLOR} strokeWidth="2" className="shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}