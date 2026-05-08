"use client";

import { useState } from "react";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
    Phone, Mail, MessageCircle, Send, User,
    CheckCircle, Star, BookOpen, HelpCircle,
} from "lucide-react";

const CONTACT_CHANNELS = [
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+1 (332) 252-5428",
        href: "https://wa.me/13322525428?text=Assalam o Aliakum. I want to enroll for the Demo Class.",
        description: "Message us directly. We reply within minutes.",
        external: true,
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+44 7414 270 363",
        href: "tel:+447414270363",
        description: "Speak to our enrollment team directly.",
        external: false,
    },
    {
        icon: Mail,
        label: "Email",
        value: "info@quraninstruct.cloud",
        href: "mailto:info@quraninstruct.cloud",
        description: "Send us your queries anytime.",
        external: false,
    },
    {
        icon: Mail,
        label: "Assistant Email",
        value: "mt9304653@gmail.com",
        href: "mailto:mt9304653@gmail.com",
        description: "Send us your queries anytime.",
        external: false,
    },
];

export default function Contact() {
    const [phoneValue, setPhoneValue] = useState("");
    const [form, setForm] = useState({ name: "", email: "", question: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!phoneValue) {
            setError("Please enter a valid phone number.");
            setLoading(false);
            return;
        }

        let country = "";
        let countryCode = "";
        try {
            const parsed = parsePhoneNumber(phoneValue);
            country = parsed?.country ?? "";
            countryCode = `+${parsed?.countryCallingCode}` ?? "";
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
                    country,
                    question: form.question,
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

            setForm({ name: "", email: "", question: "" });
            setPhoneValue("");
            setSubmitted(true);
        } catch (err) {
            console.error("Lead submission network error:", err);
            setError("Unable to reach the server. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden px-4 py-16 md:py-20 bg-hero-bg">
                <div className="relative mx-auto max-w-2xl text-center">
                    <div className="mb-5 flex items-center justify-center">
                        <span className="bg-[#2f8f6826] text-hero-badge-text inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                            <span className="relative flex h-2 w-2">
                                <span className="bg-hero-badge-dot absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                                <span className="bg-hero-badge-dot relative inline-flex h-2 w-2 rounded-full" />
                            </span>
                            Enrolling Now — Limited Seats Available
                        </span>
                    </div>

                    <h1 className="text-4xl text-white font-black leading-tight tracking-tight md:text-5xl">
                        Begin Your{" "}
                        <span className="text-hero-headline-accent border-b-[3px] border-hero-headline-accent pb-[2px]">
                            Quranic Journey
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-hero-body">
                        Get a <strong className="font-bold text-white">FREE trial class</strong> today. Reach
                        out via WhatsApp, phone, or email — or fill the form and we'll call you back.
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-1.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={15} fill="var(--color-hero-stars)" stroke="none" />
                        ))}
                        <span className="ml-1 text-sm font-medium text-hero-body">
                            4.9 · 2,400+ reviews
                        </span>
                    </div>
                </div>
            </section>

            {/* MAIN BODY */}
            <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
                <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">

                    {/* LEFT COL: Contact Channels */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-wcu-label-text">
                                Contact Channels
                            </span>
                            <h2 className="mt-1.5 text-2xl font-extrabold leading-snug md:text-3xl text-wcu-heading">
                                Talk to Us{" "}
                                <span className="text-wcu-heading-accent">Right Now</span>
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-wcu-subtext">
                                Pick any channel below. Our dedicated team responds quickly in Arabic, English, and Urdu.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {CONTACT_CHANNELS.map(({ icon: Icon, label, value, href, description, external }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noopener noreferrer" : undefined}
                                    className="group flex items-start gap-4 rounded-2xl border p-5 bg-wcu-card-bg hover:bg-primary-50 shadow-[0_4px_20px_rgba(47,143,104,0.12)] hover:shadow-none border-[var(--color-wcu-card-border)] hover:border-[var(--color-wcu-card-border-hover)] transform hover:-translate-y-[2px] transition-all duration-200 ease-in-out"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wcu-card-icon-bg text-wcu-card-icon-color">
                                        <Icon size={20} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-sm font-bold text-wcu-card-title">
                                                {label}
                                            </span>
                                        </div>
                                        <p className="mt-0.5 break-all text-base font-semibold text-primary-700">
                                            {value}
                                        </p>
                                        <p className="mt-1 text-xs text-wcu-subtext">{description}</p>
                                    </div>
                                    <span className="mt-1 shrink-0 text-lg font-light text-primary-400">
                                        →
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COL: Lead-Capture Form */}
                    <div>
                        <div className="rounded-3xl p-7 md:p-9 bg-white border border-wcu-card-border shadow-[0_8px_40px_rgba(30,89,66,0.10)]">
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
                                            Fill in your details and we'll schedule your free class within 24 hours.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <User size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
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
                                            <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title">
                                                Phone Number <span className="text-error">*</span>
                                            </label>
                                            <div className="rounded-xl border border-gray-300 overflow-hidden">
                                                <PhoneInput
                                                    international
                                                    id="phone"
                                                    defaultCountry="US"
                                                    value={phoneValue}
                                                    onChange={setPhoneValue}
                                                    className="p-2"
                                                    numberInputProps={{ className: "focus:outline-none focus:ring-0" }}
                                                />
                                            </div>
                                            <p className="mt-1 text-xs text-neutral-400">
                                                Select your country flag, then enter your number. We'll WhatsApp you the class link.
                                            </p>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-wcu-card-title">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <Mail size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
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
                                            <label htmlFor="question" className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide">
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
                                            className="contact_page_form_fill cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold disabled:opacity-70 bg-hero-cta-bg text-hero-cta-text shadow-[0_4px_14px_rgba(201,162,74,0.35)] transition-colors duration-150 hover:bg-hero-cta-bg-hover"
                                        >
                                            {loading ? (
                                                <>
                                                    <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
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
                                        You're All Set! 🎉
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-wcu-subtext">
                                        We've received your request. Our team will contact you{" "}
                                        <strong className="font-semibold">within a few hours</strong> to schedule your free class.
                                    </p>
                                    <p className="mt-3 text-sm font-medium text-primary-600">
                                        Want a faster reply? Message us on WhatsApp →
                                    </p>
                                    <a
                                        href="https://wa.me/13322525428?text=Assalam o Aliakum. I want to enroll for the Demo Class."
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

                </div>
            </section>
        </main>
    );
}