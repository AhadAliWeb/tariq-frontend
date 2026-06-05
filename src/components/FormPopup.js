"use client"

import { useState, useEffect } from "react"
import { X, CheckCircle } from "lucide-react"
import PhoneInput from "react-phone-number-input"
import { parsePhoneNumber, isValidPhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"


export default function FormPopup({ isOpen, onClose }) {
    const [phone, setPhone] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        if (!isOpen) { setPhone(""); setSubmitted(false) }
        document.body.style.overflow = isOpen ? "hidden" : ""
    }, [isOpen])

    if (!isOpen) return null


        

    const handleSubmit = async () => {
        if (!phone) return;

        setLoading(true);
        setError("")

        try {

            const parsed = parsePhoneNumber(phone)

            if(!isValidPhoneNumber(phone))
            {
                setError("Please enter a valid phone number");
                return;
            }


            const country = parsed.country;
            const countryCode = `+${parsed.countryCallingCode}`

            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone, country, countryCode })
            });

            // Handle non-2xx responses
            if (!res.ok) {
                throw new Error(`Request failed with status ${res.status}`);
            }

            const data = await res.json();
            setSubmitted(true);

            window.dataLayer = window.dataLayer || [];

            window.dataLayer.push({
                event: "form_submit",
            });

        } catch (error) {
            setError("Error Occured, Try again later")
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            onClick={(e) => e.target === e.currentTarget && onClose()}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-900/70 backdrop-blur-sm"
        >
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[#0e2a1e] border border-primary-800 shadow-2xl p-8">

                <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-primary-500/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-secondary-500/20 blur-3xl pointer-events-none" />

                <button onClick={onClose} className="absolute top-4 right-4 z-10 text-primary-300 hover:text-white transition-colors cursor-pointer">
                    <X size={20} />
                </button>

                {submitted ? (
                    <div className="relative z-10 flex flex-col items-center gap-4 text-center py-4">
                        <CheckCircle size={52} className="text-primary-400" strokeWidth={1.5} />
                        <h3 className="font-(family-name:--font-heading) text-2xl font-extrabold text-white">You're all set! 🎉</h3>
                        <p className="text-primary-200 text-sm font-(family-name:--font-sans)">We'll WhatsApp you shortly to schedule your free class.</p>
                        <button
                            onClick={onClose}
                            className="mt-2 bg-[var(--color-wcu-cta-btn-bg)] hover:bg-[var(--color-wcu-cta-btn-hover)] text-[var(--color-wcu-cta-btn-text)] font-extrabold px-6 py-3 rounded-xl transition-colors cursor-pointer font-(family-name:--font-heading)"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <div className="relative z-10 flex flex-col gap-5">
                        <div className="text-center">
                            <span className="inline-block bg-secondary-400/20 text-secondary-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-(family-name:--font-sans) mb-3">
                                🎁 Free Trial Class
                            </span>
                            <h2 className="font-(family-name:--font-heading) font-extrabold text-2xl text-white">
                                Book Your <span className="text-secondary-300">Free Class</span>
                            </h2>
                            <p className="text-primary-200 text-sm mt-2 font-(family-name:--font-sans)">
                                Enter your WhatsApp number and we'll reach out to schedule.
                            </p>
                        </div>

                        <PhoneInput
                            international
                            defaultCountry="GB"
                            value={phone}
                            onChange={setPhone}
                            className="p-2 border border-white/10 rounded-md"
                            numberInputProps={{ className: 'text-white focus:outline-none focus:ring-0' }}
                        />

                        {
                            loading ?
                                <button
                                    className="bg-[var(--color-wcu-cta-btn-bg)] text-[var(--color-wcu-cta-btn-text)] font-extrabold py-4 rounded-xl transition-colors font-(family-name:--font-heading)"
                                >
                                    Submitting...
                                </button>
                                :
                                <button
                                    onClick={handleSubmit}
                                    disabled={!phone}
                                    className="bg-[var(--color-wcu-cta-btn-bg)] hover:bg-[var(--color-wcu-cta-btn-hover)] text-[var(--color-wcu-cta-btn-text)] font-extrabold py-4 rounded-xl transition-colors font-(family-name:--font-heading) disabled:opacity-40 cursor-pointer"
                                >
                                    Book My Free Trial Class →
                                </button>
                        }

                        {error &&
                            <button className="bg-red-500 text-white font-extrabold py-4 rounded-xl transition-colors font-(family-name:--font-heading)">
                                {error}
                            </button>}




                        <p className="text-center text-primary-700 text-xs font-(family-name:--font-sans)">
                            🔒 No spam. We'll only contact you to schedule your class.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}