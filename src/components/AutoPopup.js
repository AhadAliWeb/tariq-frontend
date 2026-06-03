"use client"

import { useState, useEffect, useCallback } from "react"
import { X, CheckCircle, User, Mail, MessageSquare, Phone } from "lucide-react"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
import { parsePhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"

const AUTO_SHOW_DELAY = 8000
const SESSION_KEY = "free_trial_popup_shown"

function FieldWrapper({ children, error }) {
    return (
        <div className="flex flex-col gap-1">
            {children}
            {error && (
                <p className="text-red-400 text-xs pl-1" style={{ animation: "errorfade 0.2s ease both" }}>
                    {error}
                </p>
            )}
        </div>
    )
}

function InputField({ icon: Icon, placeholder, value, onChange, type = "text", error }) {
    return (
        <FieldWrapper error={error}>
            <div className={`flex items-center gap-2.5 bg-white/5 border rounded-xl px-3.5 py-3 transition-all duration-200
                ${error ? "border-red-500/60 bg-red-500/5" : "border-white/10 focus-within:border-primary-400/70"}`}>
                <Icon size={15} className={`shrink-0 transition-colors duration-200 ${error ? "text-red-400" : "text-primary-400"}`} />
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="flex-1 bg-transparent text-white text-sm placeholder-primary-600 focus:outline-none"
                />
            </div>
        </FieldWrapper>
    )
}

function TextareaField({ icon: Icon, placeholder, value, onChange, error }) {
    return (
        <FieldWrapper error={error}>
            <div className={`flex items-start gap-2.5 bg-white/5 border rounded-xl px-3.5 py-3 transition-all duration-200
                ${error ? "border-red-500/60 bg-red-500/5" : "border-white/10 focus-within:border-primary-400/70"}`}>
                <Icon size={15} className={`shrink-0 mt-0.5 transition-colors duration-200 ${error ? "text-red-400" : "text-primary-400"}`} />
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    rows={2}
                    className="flex-1 bg-transparent text-white text-sm placeholder-primary-600 focus:outline-none resize-none leading-relaxed"
                />
            </div>
        </FieldWrapper>
    )
}

export default function FormPopup({ isOpen: controlledIsOpen, onClose: controlledOnClose }) {
    const [autoOpen, setAutoOpen] = useState(false)
    const [visible, setVisible] = useState(false)
    const [mounted, setMounted] = useState(false)

    const [phone, setPhone] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [question, setQuestion] = useState("")
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState("")

    const isControlled = controlledIsOpen !== undefined
    const isOpen = isControlled ? controlledIsOpen : autoOpen

    // Mount then animate in
    useEffect(() => {
        if (isOpen) {
            setMounted(true)
            requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
        } else {
            setVisible(false)
            const t = setTimeout(() => setMounted(false), 320)
            return () => clearTimeout(t)
        }
    }, [isOpen])

    const handleClose = useCallback(() => {
        setVisible(false)
        setTimeout(() => {
            if (isControlled) controlledOnClose?.()
            else setAutoOpen(false)
        }, 300)
    }, [isControlled, controlledOnClose])

    // Auto-show once per session
    useEffect(() => {
        if (isControlled) return
        if (sessionStorage.getItem(SESSION_KEY)) return
        const timer = setTimeout(() => {
            setAutoOpen(true)
            sessionStorage.setItem(SESSION_KEY, "true")
        }, AUTO_SHOW_DELAY)
        return () => clearTimeout(timer)
    }, [isControlled])

    // Body scroll lock
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden"
        else document.body.style.overflow = ""
        return () => { document.body.style.overflow = "" }
    }, [isOpen])

    // Reset fields after close animation finishes
    useEffect(() => {
        if (!mounted) {
            setPhone(""); setFullName(""); setEmail(""); setQuestion("")
            setErrors({}); setServerError(""); setSubmitted(false)
        }
    }, [mounted])

    if (!mounted) return null

    const validate = () => {
        const e = {}
        if (!fullName.trim()) e.fullName = "Full name is required"
        else if (fullName.trim().length < 2) e.fullName = "Name must be at least 2 characters"
        if (!email.trim()) e.email = "Email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email"
        if (!phone) e.phone = "WhatsApp number is required"
        if (!question.trim()) e.question = "Please share your question or goal"
        setErrors(e)
        return Object.keys(e).length === 0
    }

    const clearError = (field) => setErrors((prev) => ({ ...prev, [field]: "" }))

    const handleSubmit = async () => {
        if (!validate()) return
        setLoading(true)
        setServerError("")
        try {
            const parsed = parsePhoneNumber(phone)
            if (!isValidPhoneNumber(phone)) {
                    setErrors(prev => ({ ...prev, phone: "Please enter a valid phone number" }));
                    return;
            }
            const country = parsed?.country ?? ""
            const countryCode = parsed ? `+${parsed.countryCallingCode}` : ""
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName: fullName.trim(), email: email.trim(), phone, countryCode, country, question: question.trim() }),
            })
            if (!res.ok) throw new Error(`Status ${res.status}`)
            setSubmitted(true)

            window.dataLayer = window.dataLayer || [];

            window.dataLayer.push({
                event: "form_submit",
            });


        } catch (err) {
            setServerError("Something went wrong. Please try again.")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <style>{`
                @keyframes errorfade {
                    from { opacity: 0; transform: translateY(-3px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes successPop {
                    0%   { opacity: 0; transform: scale(0.9); }
                    60%  { transform: scale(1.04); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .PhoneInputInput {
                    background: transparent !important;
                    color: white !important;
                    font-size: 0.875rem !important;
                    outline: none !important;
                    width: 100% !important;
                }
                .PhoneInputInput::placeholder { color: rgb(80 110 95 / 0.9) !important; }
                .PhoneInputCountrySelectArrow { color: rgb(130 180 155) !important; opacity: 1 !important; }
                .PhoneInputCountrySelect { background: #0b2318 !important; color: white !important; }
            `}</style>

            {/* Backdrop */}
            <div
                onClick={(e) => e.target === e.currentTarget && handleClose()}
                className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
                style={{
                    backgroundColor: `rgba(5, 18, 10, ${visible ? 0.78 : 0})`,
                    backdropFilter: `blur(${visible ? 7 : 0}px)`,
                    WebkitBackdropFilter: `blur(${visible ? 7 : 0}px)`,
                    transition: "background-color 0.32s ease, backdrop-filter 0.32s ease",
                }}
            >
                {/* Card — slides up from bottom on mobile, scales in on desktop */}
                <div
                    className="relative w-full sm:max-w-md overflow-hidden rounded-t-[28px] sm:rounded-3xl bg-[#0b2318] border border-white/10 shadow-2xl"
                    style={{
                        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
                        opacity: visible ? 1 : 0,
                        transition: "transform 0.38s cubic-bezier(0.22, 1.4, 0.36, 1), opacity 0.3s ease",
                    }}
                >
                    {/* Ambient glows */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-secondary-500/10 blur-3xl pointer-events-none" />

                    {/* Drag handle (mobile) */}
                    <div className="sm:hidden flex justify-center pt-3 pb-1">
                        <div className="w-10 h-1 rounded-full bg-white/20" />
                    </div>

                    {/* Close */}
                    <button
                        onClick={handleClose}
                        className="cursor-pointer absolute z-50 top-4 right-4 z-10 text-primary-400 hover:text-white transition-colors duration-150 cursor-pointer p-1.5 rounded-lg hover:bg-white/5"
                    >
                        <X size={18} />
                    </button>

                    {/* Scrollable content */}
                    <div className="relative z-10 px-6 pb-7 pt-4 sm:p-7 overflow-y-auto max-h-[88dvh] sm:max-h-none">
                        {submitted ? (
                            /* ── Success ── */
                            <div
                                className="flex flex-col items-center gap-4 text-center py-6"
                                style={{ animation: "successPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both" }}
                            >
                                <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center ring-1 ring-primary-500/30">
                                    <CheckCircle size={34} className="text-primary-400" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-(family-name:--font-heading) text-2xl font-extrabold text-white">You're all set! 🎉</h3>
                                    <p className="text-primary-300 text-sm mt-2 font-(family-name:--font-sans) leading-relaxed max-w-xs mx-auto">
                                        We'll WhatsApp you shortly to schedule your free class.
                                    </p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="mt-1 bg-[var(--color-wcu-cta-btn-bg)] hover:bg-[var(--color-wcu-cta-btn-hover)] text-[var(--color-wcu-cta-btn-text)] font-extrabold px-8 py-3 rounded-xl transition-colors cursor-pointer font-(family-name:--font-heading)"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            /* ── Form ── */
                            <div className="flex flex-col gap-5">
                                {/* Header */}
                                <div className="text-center pr-6">
                                    <span className="inline-block bg-secondary-400/20 text-secondary-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-(family-name:--font-sans) mb-3">
                                        🎁 Free Trial Class
                                    </span>
                                    <h2 className="font-(family-name:--font-heading) font-extrabold text-2xl text-white leading-tight">
                                        Book Your <span className="text-secondary-300">Free Class</span>
                                    </h2>
                                    <p className="text-primary-300 text-sm mt-1.5 font-(family-name:--font-sans)">
                                        Fill in your details and we'll reach out on WhatsApp.
                                    </p>
                                </div>

                                {/* Fields */}
                                <div className="flex flex-col gap-3">
                                    <InputField
                                        icon={User}
                                        placeholder="Full Name"
                                        value={fullName}
                                        onChange={(v) => { setFullName(v); clearError("fullName") }}
                                        error={errors.fullName}
                                    />
                                    <InputField
                                        icon={Mail}
                                        placeholder="Email Address"
                                        type="email"
                                        value={email}
                                        onChange={(v) => { setEmail(v); clearError("email") }}
                                        error={errors.email}
                                    />

                                    {/* Phone */}
                                    <FieldWrapper error={errors.phone}>
                                        <div className={`flex items-center gap-2.5 bg-white/5 border rounded-xl px-3.5 py-3 transition-all duration-200
                                            ${errors.phone ? "border-red-500/60 bg-red-500/5" : "border-white/10 focus-within:border-primary-400/70"}`}>
                                            <Phone size={15} className={`shrink-0 transition-colors duration-200 ${errors.phone ? "text-red-400" : "text-primary-400"}`} />
                                            <PhoneInput
                                                international
                                                defaultCountry="US"
                                                value={phone}
                                                onChange={(v) => { setPhone(v ?? ""); clearError("phone") }}
                                                numberInputProps={{ className: "PhoneInputInput", placeholder: "WhatsApp Number" }}
                                            />
                                        </div>
                                    </FieldWrapper>

                                    <TextareaField
                                        icon={MessageSquare}
                                        placeholder="What's your question or goal? (e.g. I want to learn conversational Arabic)"
                                        value={question}
                                        onChange={(v) => { setQuestion(v); clearError("question") }}
                                        error={errors.question}
                                    />
                                </div>

                                {/* Server error */}
                                {serverError && (
                                    <p
                                        className="text-red-400 text-xs text-center bg-red-500/10 border border-red-500/20 rounded-xl py-2.5 px-3"
                                        style={{ animation: "errorfade 0.2s ease both" }}
                                    >
                                        {serverError}
                                    </p>
                                )}

                                {/* Submit */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="w-full bg-[var(--color-wcu-cta-btn-bg)] hover:bg-[var(--color-wcu-cta-btn-hover)] text-[var(--color-wcu-cta-btn-text)] font-extrabold py-4 rounded-xl transition-all duration-200 font-(family-name:--font-heading) disabled:opacity-50 cursor-pointer active:scale-[0.98]"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            Submitting…
                                        </span>
                                    ) : "Book My Free Trial Class →"}
                                </button>

                                <p className="text-center text-primary-700 text-xs font-(family-name:--font-sans)">
                                    🔒 No spam. We'll only contact you to schedule your class.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}