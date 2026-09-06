"use client";

import { useState } from "react";
import PhoneInput, {
  isValidPhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  BookOpen,
  User,
  Mail,
  Send,
  CheckCircle,
  MessageCircle,
  Cake,
  GraduationCap,
  // ChevronDown, // uncomment if you switch either field to the dropdown version below
} from "lucide-react";
import { useCountry } from "@/hooks/useCountry";

export default function TrialClassForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    studentAge: "",
    interestedIn: "",
  });
  const [phoneValue, setPhoneValue] = useState("");
  const country = useCountry();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!phoneValue || !isValidPhoneNumber(phoneValue)) {
      setError("Please enter a valid phone number.");
      setLoading(false);
      return;
    }

    let phoneCountry = "";
    let countryCode = "";
    try {
      const parsed = parsePhoneNumber(phoneValue);
      phoneCountry = parsed?.country ?? "";
      countryCode = parsed?.countryCallingCode
        ? `+${parsed.countryCallingCode}`
        : "";
    } catch {
      setError("Invalid phone number. Please check and try again.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          phone: phoneValue,
          countryCode,
          country: phoneCountry,
          studentAge: form.studentAge,
          interestedIn: form.interestedIn,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status >= 500) {
          console.error("Lead submission server error:", data);
          setError("Something went wrong on our end. Please try again later.");
        } else {
          setError(data?.error ?? "Please check your details and try again.");
        }
        setLoading(false);
        return;
      }

      setForm({ name: "", email: "", studentAge: "", interestedIn: "" });
      setPhoneValue("");
      setSubmitted(true);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "form_submit" });
    } catch (err) {
      console.error("Lead submission network error:", err);
      setError(
        "Unable to reach the server. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    // Centering wrapper for the home page. Adjust max-w-md if you want the card wider/narrower.
    <section className="w-full flex justify-center px-4 py-10 md:py-14">
      <div className="w-full max-w-md lg:max-w-2xl">
        <div className="rounded-3xl p-6 sm:p-7 md:p-9 bg-white border border-wcu-card-border shadow-[0_8px_40px_rgba(30,89,66,0.10)]">
          {!submitted ? (
            <>
              <div className="mb-6 md:mb-7">
                <div className="mb-1 flex items-center gap-2">
                  <BookOpen size={18} className="text-primary-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-wcu-label-text">
                    Free Trial Class
                  </span>
                </div>
                <h3 className="text-xl font-extrabold md:text-2xl text-wcu-heading">
                  Book Your Spot Today
                </h3>
                <p className="mt-1 text-sm text-wcu-subtext">
                  Fill in your details and we&apos;ll schedule your free
                  class within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Parent / Student Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title"
                  >
                    Parent / Student Name
                  </label>
                  <div className="relative">
                    <User
                      size={15}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                    />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="e.g. Ahmed Al-Rashid"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 py-3 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>
                </div>

                {/* Row 2: Phone / WhatsApp + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Phone / WhatsApp — functionality unchanged from the original form */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title"
                  >
                    Phone / WhatsApp Number <span className="text-error">*</span>
                  </label>
                  <div className="rounded-xl border border-gray-300 overflow-hidden">
                    <PhoneInput
                      international
                      id="phone"
                      defaultCountry={country}
                      value={phoneValue}
                      onChange={setPhoneValue}
                      className="p-2"
                      numberInputProps={{
                        className: "focus:outline-none focus:ring-0",
                      }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-neutral-400">
                    Select your country flag, then enter your number.
                    We&apos;ll WhatsApp you the class link.
                  </p>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      size={15}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 py-3 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>
                </div>
                </div>

                {/* Row 3: Student Age + Interested In */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* ===== Student Age — ACTIVE: simple number input ===== */}
                <div>
                  <label
                    htmlFor="studentAge"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title"
                  >
                    Student Age
                  </label>
                  <div className="relative">
                    <Cake
                      size={15}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                    />
                    <input
                      type="number"
                      name="studentAge"
                      id="studentAge"
                      min="1"
                      max="100"
                      inputMode="numeric"
                      placeholder="e.g. 8"
                      value={form.studentAge}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 py-3 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>
                </div>

                {/*
                ===== Student Age — ALTERNATIVE: dropdown with age ranges =====
                To switch to this version: delete the "ACTIVE" block above,
                uncomment this block, and uncomment the ChevronDown import at the top.
                Note: this stores a range string (e.g. "5-8") in form.studentAge
                instead of a plain number — update your /api/leads handler if it
                expects a number.

                <div>
                  <label
                    htmlFor="studentAge"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title"
                  >
                    Student Age
                  </label>
                  <div className="relative">
                    <Cake
                      size={15}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 z-10"
                    />
                    <select
                      name="studentAge"
                      id="studentAge"
                      value={form.studentAge}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-gray-300 bg-white py-3 pl-9 pr-9 text-sm outline-none focus:ring-2 focus:ring-primary-400"
                    >
                      <option value="">Select age range</option>
                      <option value="3-4">3 - 4 years</option>
                      <option value="5-8">5 - 8 years</option>
                      <option value="9-12">9 - 12 years</option>
                      <option value="13-17">13 - 17 years</option>
                      <option value="18+">18+ (Adult)</option>
                    </select>
                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                    />
                  </div>
                </div>
                */}

                {/* ===== Interested In — ACTIVE: simple text input ===== */}
                <div>
                  <label
                    htmlFor="interestedIn"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title"
                  >
                    Interested In
                  </label>
                  <div className="relative">
                    <GraduationCap
                      size={15}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                    />
                    <input
                      type="text"
                      name="interestedIn"
                      id="interestedIn"
                      placeholder="e.g. Tajweed, Quran Memorization, Arabic"
                      value={form.interestedIn}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 py-3 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>
                </div>

                {/*
                ===== Interested In — ALTERNATIVE: dropdown with course list =====
                To switch to this version: delete the "ACTIVE" block above,
                uncomment this block, and uncomment the ChevronDown import at the top.
                Edit the <option> list to match your actual course offerings.

                <div>
                  <label
                    htmlFor="interestedIn"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title"
                  >
                    Interested In
                  </label>
                  <div className="relative">
                    <GraduationCap
                      size={15}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 z-10"
                    />
                    <select
                      name="interestedIn"
                      id="interestedIn"
                      value={form.interestedIn}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-gray-300 bg-white py-3 pl-9 pr-9 text-sm outline-none focus:ring-2 focus:ring-primary-400"
                    >
                      <option value="">Select a course</option>
                      <option value="Quran Reading">Quran Reading</option>
                      <option value="Tajweed">Tajweed</option>
                      <option value="Quran Memorization (Hifz)">
                        Quran Memorization (Hifz)
                      </option>
                      <option value="Islamic Studies">Islamic Studies</option>
                      <option value="Arabic Language">Arabic Language</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                    />
                  </div>
                </div>
                */}
                </div>

                {/* Error */}
                {error && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold disabled:opacity-70 bg-hero-cta-bg text-hero-cta-text shadow-[0_4px_14px_rgba(201,162,74,0.35)] transition-colors duration-150 hover:bg-hero-cta-bg-hover"
                >
                  {loading ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Book My Free Trial Class
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-neutral-400">
                  🔒 Your information is private and never shared with third
                  parties.
                </p>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full text-primary-100">
                <CheckCircle size={32} className="text-primary-600" />
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-wcu-heading">
                You&apos;re All Set! 🎉
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-wcu-subtext">
                We&apos;ve received your request. Our team will contact you{" "}
                <strong className="font-semibold">within a few hours</strong>{" "}
                to schedule your free class.
              </p>
              <p className="mt-3 text-sm font-medium text-primary-600">
                Want a faster reply? Message us on WhatsApp →
              </p>
              <a
                href="https://wa.me/13322525428?text=Assalam%20o%20Alaikum.%20I%20want%20to%20enroll%20for%20the%20Demo%20Class."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex bg-hero-cta-bg text-hero-cta-text items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold"
              >
                <MessageCircle size={16} />
                Open WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}