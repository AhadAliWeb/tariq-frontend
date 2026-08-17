"use client";

import { useEffect, useState } from "react";
import {
    BookOpen,
    User,
    Mail,
    HelpCircle,
    Send,
    CheckCircle,
    MessageCircle,
    Sparkles,
} from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useCountry } from "@/hooks/useCountry";

const INITIAL_FORM = {
    name: "",
    email: "",
    question: "",
};

const QUESTION_MAX = 400;

export default function TrialClassForm() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [phoneValue, setPhoneValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [errorKey, setErrorKey] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const [mounted, setMounted] = useState(false);
    const country = useCountry();

    useEffect(() => {
        // Trigger the entrance animation once the card is on screen
        const t = setTimeout(() => setMounted(true), 30);
        return () => clearTimeout(t);
    }, []);

    const flashError = (message) => {
        setError(message);
        setErrorKey((k) => k + 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Basic validation
        if (!phoneValue) {
            flashError("Please enter your phone number so we can reach you.");
            return;
        }
        if (!isValidPhoneNumber(phoneValue)) {
            flashError("That phone number doesn't look valid. Please check it.");
            return;
        }
        if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
            flashError("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/trial-class", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    question: form.question,
                    phone: phoneValue,
                }),
            });

            if (!res.ok) {
                throw new Error("Request failed");
            }

            setSubmitted(true);
        } catch (err) {
            flashError("Something went wrong. Please try again in a moment.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center px-4 py-6 my-12 md:my-20">
            <div
                className={`relative w-full max-w-xl overflow-hidden rounded-3xl border border-wcu-card-border bg-white p-7 shadow-[0_8px_40px_rgba(30,89,66,0.10)] transition-all duration-700 ease-out md:p-9 ${
                    mounted
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                }`}
            >
                {/* subtle geometric motif, a nod to the subject matter */}
                <svg
                    className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 text-primary-500"
                    style={{ opacity: 0.05 }}
                    viewBox="0 0 100 100"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M50 4 L61 39 L96 39 L67 60 L78 95 L50 74 L22 95 L33 60 L4 39 L39 39 Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                </svg>

                {!submitted ? (
                    <>
                        <div className="mb-7">
                            <div className="mb-1 flex items-center gap-2">
                                <span className="relative flex h-6 w-6 items-center justify-center">
                                    <span className="motion-safe:animate-float-ring absolute inline-flex h-full w-full rounded-full bg-primary-500" />
                                    <BookOpen
                                        size={16}
                                        className="relative text-primary-500"
                                    />
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-wcu-label-text">
                                    Free Trial Class
                                </span>
                            </div>
                            <h3 className="text-xl font-extrabold md:text-2xl text-wcu-heading">
                                Book Your Spot Today
                            </h3>
                            <p className="mt-1 text-sm text-wcu-subtext">
                                Fill in your details and we&apos;ll schedule your free class within 24 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className={`mb-1.5 block text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${
                                        focusedField === "name"
                                            ? "text-primary-600"
                                            : "text-wcu-card-title"
                                    }`}
                                >
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User
                                        size={15}
                                        className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                                            focusedField === "name"
                                                ? "text-primary-500"
                                                : "text-neutral-400"
                                        }`}
                                    />
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="e.g. Ahmed Al-Rashid"
                                        value={form.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("name")}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full rounded-xl border border-gray-300 py-3 pl-9 pr-4 text-sm outline-none transition-all duration-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className={`mb-1.5 block text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${
                                        focusedField === "phone"
                                            ? "text-primary-600"
                                            : "text-wcu-card-title"
                                    }`}
                                >
                                    Phone Number <span className="text-error">*</span>
                                </label>
                                <div
                                    className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                                        focusedField === "phone"
                                            ? "border-primary-500 ring-4 ring-primary-100"
                                            : "border-gray-300"
                                    }`}
                                >
                                    <PhoneInput
                                        international
                                        id="phone"
                                        defaultCountry={country}
                                        value={phoneValue}
                                        onChange={setPhoneValue}
                                        onFocus={() => setFocusedField("phone")}
                                        onBlur={() => setFocusedField(null)}
                                        className="p-2"
                                        numberInputProps={{
                                            className: "focus:outline-none focus:ring-0",
                                        }}
                                    />
                                </div>
                                <p className="mt-1 text-xs text-neutral-400">
                                    Select your country flag, then enter your number. We&apos;ll WhatsApp you the class link.
                                </p>
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className={`mb-1.5 block text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${
                                        focusedField === "email"
                                            ? "text-primary-600"
                                            : "text-wcu-card-title"
                                    }`}
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail
                                        size={15}
                                        className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                                            focusedField === "email"
                                                ? "text-primary-500"
                                                : "text-neutral-400"
                                        }`}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("email")}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full rounded-xl border border-gray-300 py-3 pl-9 pr-4 text-sm outline-none transition-all duration-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
                                    />
                                </div>
                            </div>

                            {/* Question */}
                            <div>
                                <div className="mb-1.5 flex items-center justify-between">
                                    <label
                                        htmlFor="question"
                                        className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${
                                            focusedField === "question"
                                                ? "text-primary-600"
                                                : "text-wcu-card-title"
                                        }`}
                                    >
                                        <HelpCircle size={12} />
                                        Your Question / Course Interest
                                    </label>
                                    <span
                                        className={`text-[11px] tabular-nums text-neutral-400 transition-opacity duration-200 ${
                                            focusedField === "question" || form.question
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                    >
                                        {form.question.length}/{QUESTION_MAX}
                                    </span>
                                </div>
                                <textarea
                                    name="question"
                                    id="question"
                                    rows={4}
                                    maxLength={QUESTION_MAX}
                                    placeholder="e.g. I want Tajweed classes for my 8-year-old. What do you recommend?"
                                    value={form.question}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField("question")}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
                                />
                            </div>

                            {/* Error */}
                            {error && (
                                <p
                                    key={errorKey}
                                    className="motion-safe:animate-shake rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                                >
                                    {error}
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-hero-cta-bg px-6 py-3.5 text-sm font-bold text-hero-cta-text shadow-[0_4px_14px_rgba(201,162,74,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-hero-cta-bg-hover hover:shadow-[0_8px_22px_rgba(201,162,74,0.45)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
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
                                        <Send
                                            size={15}
                                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                        Book My Free Trial Class
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-neutral-400">
                                🔒 Your information is private and never shared with third parties.
                            </p>
                        </form>
                    </>
                ) : (
                    <div className="flex flex-col items-center py-8 text-center">
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                            <span className="motion-safe:animate-float-ring absolute inline-flex h-full w-full rounded-full bg-primary-500" />
                            <CheckCircle
                                size={32}
                                className="motion-safe:animate-pop-in relative text-primary-600"
                            />
                            <Sparkles
                                size={14}
                                className="motion-safe:animate-pop-in absolute -right-1 -top-1 text-primary-500"
                                style={{ animationDelay: "150ms" }}
                            />
                        </div>
                        <h3 className="motion-safe:animate-pop-in mt-4 text-xl font-extrabold text-wcu-heading">
                            You&apos;re All Set! 🎉
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-wcu-subtext">
                            We&apos;ve received your request. Our team will contact you{" "}
                            <strong className="font-semibold">within a few hours</strong> to schedule your free class.
                        </p>
                        <p className="mt-3 text-sm font-medium text-primary-600">
                            Want a faster reply? Message us on WhatsApp →
                        </p>
                        <a
                            href="https://wa.me/13322525428?text=Assalam%20o%20Aliakum.%20I%20want%20to%20enroll%20for%20the%20Demo%20Class."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-hero-cta-bg px-5 py-2.5 text-sm font-bold text-hero-cta-text transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(201,162,74,0.35)]"
                        >
                            <MessageCircle size={16} />
                            Open WhatsApp
                        </a>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes shake {
                    10%,
                    90% {
                        transform: translateX(-1px);
                    }
                    20%,
                    80% {
                        transform: translateX(2px);
                    }
                    30%,
                    50%,
                    70% {
                        transform: translateX(-4px);
                    }
                    40%,
                    60% {
                        transform: translateX(4px);
                    }
                }
                @keyframes popIn {
                    0% {
                        transform: scale(0.5);
                        opacity: 0;
                    }
                    70% {
                        transform: scale(1.08);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                @keyframes floatRing {
                    0% {
                        transform: scale(1);
                        opacity: 0.35;
                    }
                    100% {
                        transform: scale(1.6);
                        opacity: 0;
                    }
                }
                :global(.animate-shake) {
                    animation: shake 0.5s ease-in-out;
                }
                :global(.animate-pop-in) {
                    animation: popIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
                }
                :global(.animate-float-ring) {
                    animation: floatRing 2s ease-out infinite;
                }
            `}</style>
        </div>
    );
}