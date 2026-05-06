"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image"
import FormPopup from "./FormPopup";

const links = [
  { label: "Home", href: "/" },
  {
    label: "Courses", href: "#courses",
    sublinks: [
      { label: "Arabic", href: "/courses/arabic" },
      { label: "Hifz", href: "/courses/hifz" },
      { label: "Islamic Studies", href: "/courses/islamic-studies" },
      { label: "Basic Quran", href: "/courses/quran-basic" },
      { label: "Tafseer", href: "/courses/tafseer" },
      { label: "Tajweed", href: "/courses/tajweed" },
      { label: "Translation", href: "/courses/translation" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function DropdownItem({ link }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 100);
  };

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!link.sublinks) {
    return (
      <li>
        <Link
          href={link.href}
          className="relative px-4 py-2 text-base font-bold hover:text-primary-600 transition-colors rounded-md group flex items-center"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {link.label}
          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-400 rounded-full group-hover:w-[80%] transition-all duration-300" />
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      <button
        className="relative px-4 py-2 text-base font-bold hover:text-primary-600 transition-colors rounded-md flex items-center gap-1.5 group"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {link.label}
        <svg
          width="12" height="12" viewBox="0 0 12 12"
          className={`transition-transform duration-200 mt-0.5 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-400 rounded-full group-hover:w-[80%] transition-all duration-300" />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 h-3" />
      )}

      <div
        className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-48 rounded-xl bg-bg-primary border border-border shadow-lg overflow-hidden transition-all duration-200 origin-top ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-bg-primary border-l border-t border-border" />
        <ul className="py-1.5">
          {link.sublinks.map((sub) => (
            <li key={sub.label}>
              <Link
                href={sub.href}
                className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-300 shrink-0" />
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false)


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/10 backdrop-blur-xl backdrop-saturate-150 shadow-[0_4px_24px_0_rgba(0,0,0,0.12)] border-b border-white/20 text-black"
        : "bg-transparent text-white"
        }`}
    >
      <FormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width="100"
            height="100"
          />
          {/* <span className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-md group-hover:bg-primary-500 transition-colors">
            <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z" fill="white" fillOpacity="0.9" />
              <path d="M9 5.5L12.5 7.5V11.5L9 13.5L5.5 11.5V7.5L9 5.5Z" fill="white" fillOpacity="0.4" />
            </svg>
          </span>
          <span
            className="font-bold text-xl tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Learn Quran
          </span> */}
        </Link>

        {/* Center Nav Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-0.5">
          {links.map((link) => (
            <DropdownItem key={link.label} link={link} />
          ))}
        </ul>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <span className="absolute inset-0 rounded-md bg-primary-400 opacity-60 animate-ping-soft" />
            <button
              className="navbar-cta relative inline-flex cursor-pointer items-center gap-2 px-5 py-2.5 text-sm font-bold bg-primary-600 hover:bg-primary-500 rounded-md shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              onClick={() => setPopupOpen(true)}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-300 animate-pulse shrink-0" />
              Get a free trial
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-text-secondary hover:bg-primary-50 hover:text-primary-600 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
              {menuOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          } bg-bg-primary/98 backdrop-blur-md border-t border-white/20`}
      >
        <ul className="px-4 py-3 flex flex-col gap-1">
          {links.map(({ label, href, sublinks }) => (
            <li key={label}>
              {sublinks ? (
                <>
                  <button
                    onClick={() => setMobileOpen(mobileOpen === label ? null : label)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-base font-bold text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {label}
                    <svg
                      width="12" height="12" viewBox="0 0 12 12"
                      className={`transition-transform duration-200 ${mobileOpen === label ? "rotate-180" : ""}`}
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${mobileOpen === label ? "max-h-80" : "max-h-0"}`}>
                    <ul className="ml-4 border-l-2 border-primary-100 pl-3 py-1 flex flex-col gap-0.5">
                      {sublinks.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-2 py-2 text-sm font-semibold text-text-secondary hover:text-primary-600 transition-colors"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-bold text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="pt-2 pb-1">
            <div className="relative">
              <span className="absolute inset-0 rounded-xl bg-primary-400 opacity-50 animate-ping" />
              <button
                // onClick={() => setMenuOpen(false)}
                onClick={() => setPopupOpen(true)}
                className="relative flex items-center cursor-pointer justify-center gap-2 w-full px-4 py-3 text-sm font-bold text-white bg-primary-600 hover:bg-primary-500 rounded-xl shadow-md transition-all duration-200"
              >
                <span className="navbar-cta w-1.5 h-1.5 rounded-full bg-secondary-300 animate-pulse shrink-0" />
                Get a free trial
              </button>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}