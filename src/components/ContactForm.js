"use client";

import { useState } from "react";
import {
    BookOpen,
    User,
    Mail,
    HelpCircle,
    Send,
    CheckCircle,
    MessageCircle,
} from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useCountry } from "@/hooks/useCountry";


const INITIAL_FORM = {
    name: "",
    email: "",
    question: "",
};

export default function TrialClassForm() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [phoneValue, setPhoneValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const country = useCountry();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Basic validation
        if (!phoneValue) {
            setError("Please enter your phone number so we can reach you.");
            return;
        }
        if (!isValidPhoneNumber(phoneValue)) {
            setError("That phone number doesn't look valid. Please check it.");
            return;
        }
        if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
            setError("Please enter a valid email address.");
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
            setError("Something went wrong. Please try again in a moment.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center px-4 py-6 my-12 md:my-20">
            <div className="w-full max-w-xl rounded-3xl p-7 md:p-9 bg-white border border-wcu-card-border shadow-[0_8px_40px_rgba(30,89,66,0.10)]">
                {!submitted ? (
                    <>
                        <div className="mb-7">
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
                                Fill in your details and we&apos;ll schedule your free class within 24 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title"
                                >
                                    Full Name
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
                                        className="w-full rounded-xl border border-gray-300 py-3 pl-9 pr-4 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title"
                                >
                                    Phone Number <span className="text-error">*</span>
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
                                    Select your country flag, then enter your number. We&apos;ll WhatsApp you the class link.
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
                                        className="w-full rounded-xl border border-gray-300 py-3 pl-9 pr-4 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Question */}
                            <div>
                                <label
                                    htmlFor="question"
                                    className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide"
                                >
                                    <HelpCircle size={12} />
                                    Your Question / Course Interest
                                </label>
                                <textarea
                                    name="question"
                                    id="question"
                                    rows={4}
                                    placeholder="e.g. I want Tajweed classes for my 8-year-old. What do you recommend?"
                                    value={form.question}
                                    onChange={handleChange}
                                    className="w-full border-gray-300 resize-none rounded-xl border px-4 py-3 text-sm outline-none"
                                />
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
                                🔒 Your information is private and never shared with third parties.
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
                            <strong className="font-semibold">within a few hours</strong> to schedule your free class.
                        </p>
                        <p className="mt-3 text-sm font-medium text-primary-600">
                            Want a faster reply? Message us on WhatsApp →
                        </p>
                        <a
                            href="https://wa.me/13322525428?text=Assalam%20o%20Aliakum.%20I%20want%20to%20enroll%20for%20the%20Demo%20Class."
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
    );
}