"use client";

import Link from "next/link";
import Image from "next/image"

const footerLinks = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Free Trial Class", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Our Courses",
    links: [
      { label: "Arabic", href: "/courses/arabic" },
      { label: "Hifz", href: "/courses/hifz" },
      { label: "Islamic Studies", href: "/courses/islamic-studies" },
      { label: "Basic Quran", href: "/courses/quran-basic" },
      { label: "Tafseer", href: "/courses/tafseer" },
      { label: "Tajweed", href: "/courses/tajweed" },
    ],
  },
  {
    heading: "Contact & Support",
    links: [
      { label: "📧 info@quraninstruct.cloud", href: "mailto:info@quraninstruct.cloud" },
      { label: "📞 +1 (332) 252-25428", href: "tel:+133225225428" },
      { label: "💬 WhatsApp Us", href: "https://wa.me/133225225428?text=Assalam-o-Alaikum" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

// const socialLinks = [
//   {
//     label: "Facebook",
//     href: "#",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//         <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//       </svg>
//     ),
//   },
//   {
//     label: "Instagram",
//     href: "#",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
//         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//         <circle cx="12" cy="12" r="4" />
//         <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
//       </svg>
//     ),
//   },
//   {
//     label: "YouTube",
//     href: "#",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//         <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
//       </svg>
//     ),
//   },
//   {
//     label: "WhatsApp",
//     href: "https://wa.me/18001234567",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//       </svg>
//     ),
//   },
// ];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary-900)]">

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Col 1: Logo + Statement ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width="100"
                  height="100"
                />
              </Link>

              {/* Arabic tagline */}
              <p className="text-[var(--color-secondary-400)] text-base font-semibold mb-1" dir="rtl" lang="ar">
                نور القرآن في كل بيت
              </p>
            </div>
            <p className="text-[var(--color-primary-400)] text-xs italic mb-4">
              "The light of the Quran in every home."
            </p>

            <p className="text-[var(--color-primary-200)] text-sm leading-relaxed mb-6">
              Live 1-on-1 Quran classes with certified tutors — for children and adults worldwide. Learn at your pace, from the comfort of your home.
            </p>

            {/* Social icons */}
            {/* <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[var(--color-primary-700)] hover:bg-[var(--color-secondary-400)] text-[var(--color-primary-200)] hover:text-[var(--color-primary-900)] flex items-center justify-center transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* ── Cols 2–4: Link groups ── */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-5 pb-2 border-b border-[var(--color-primary-700)]">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-white font-bold hover:text-secondary-400 text-sm transition-colors duration-150"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-[var(--color-primary-700)]" />

      {/* ── Copyright bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[var(--color-primary-400)] text-xs text-center sm:text-left">
          © {year} QuranInstruct. All rights reserved.
        </p>
        <p className="text-[var(--color-primary-500)] text-xs text-center sm:text-right">
          Serving students in 30+ countries · Alhamdulillah 🤲
        </p>
      </div>

    </footer>
  );
}