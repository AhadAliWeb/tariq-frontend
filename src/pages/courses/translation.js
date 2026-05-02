"use client";
import { BookOpen, CheckCircle, ChevronRight, Star, Globe, Award, Calendar, Languages, Heart, Clock } from "lucide-react";
import FormPopup from "@/components/FormPopup";
import { useState } from "react";

const outcomes = [
    "Understand commonly used Quranic words",
    "Follow the meaning while reciting",
    "Strengthen your connection with Allah's message",
    "Recognize Quranic vocabulary in context",
];

const curriculum = [
    { title: "Word-to-Word Translation", desc: "Verse by verse breakdown" },
    { title: "Arabic Vocabulary", desc: "Key Quranic words" },
    { title: "Sentence Structure", desc: "Meanings in context" },
    { title: "Selected Surahs", desc: "Deep explanation" },
    { title: "Daily Life Application", desc: "Practical understanding" },
    { title: "Vocabulary Building", desc: "Progressive learning" },
];

export default function TranslationCourse() {
    const [popupOpen, setPopupOpen] = useState(false)

    return (
        <main className="min-h-screen font-sans bg-neutral-50">
            <FormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
            {/* Hero — center-aligned elegant style */}
            <section className="relative overflow-hidden"
                style={{ background: "linear-gradient(180deg, #0e2a1e 0%, #184636 100%)" }}>
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
                        style={{ background: "radial-gradient(circle, #c9a24a, transparent)" }} />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 py-24 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                        style={{ background: "rgba(201,162,74,0.2)", color: "#c9a24a", border: "1px solid rgba(201,162,74,0.35)" }}>
                        <Languages size={14} /> Understand the Message of Allah
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                        Quran <span style={{ color: "#c9a24a" }}>Translation</span><br />Course Online
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "#d9efe3" }}>
                        Go beyond recitation. Understand the divine message of the Quran word by word, and build a deeper spiritual connection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button
                            onClick={() => setPopupOpen(true)}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
                            style={{ background: "#c9a24a", color: "#12352a" }}>
                            Book FREE Trial Class <ChevronRight size={18} />
                        </button>
                        <div className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border"
                            style={{ borderColor: "rgba(128,201,166,0.4)", color: "#b3dfc7" }}>
                            <Clock size={16} /> Duration: 6–12 Months
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                        {[["6–12", "Months"], ["5 Days", "Per Week"], ["1-on-1", "Sessions"]].map(([n, l]) => (
                            <div key={l} className="rounded-xl py-3 px-2" style={{ background: "rgba(47,143,104,0.2)" }}>
                                <div className="font-extrabold text-xl" style={{ color: "#c9a24a" }}>{n}</div>
                                <div className="text-xs mt-0.5" style={{ color: "#80c9a6" }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20" style={{ background: "#eef7f2" }}>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3"
                            style={{ background: "#d9efe3", color: "#256f52" }}>Curriculum</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#12352a" }}>
                            What You'll <span style={{ color: "#b5892f" }}>Study</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {curriculum.map(({ title, desc }, i) => (
                            <div key={title} className="bg-white rounded-2xl p-6 border hover:shadow-lg transition-all"
                                style={{ borderColor: "#d9efe3" }}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold mb-4"
                                    style={{ background: "#d9efe3", color: "#256f52" }}>{i + 1}</div>
                                <h3 className="font-bold mb-1" style={{ color: "#12352a" }}>{title}</h3>
                                <p className="text-sm" style={{ color: "#57534e" }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3"
                                style={{ background: "#d9efe3", color: "#256f52" }}>Learning Outcomes</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#12352a" }}>
                                Your <span style={{ color: "#b5892f" }}>Transformation</span>
                            </h2>
                            <ul className="space-y-4">
                                {outcomes.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: "#2f8f68" }} />
                                        <span style={{ color: "#57534e" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl p-8" style={{ background: "#eef7f2" }}>
                            <h3 className="font-bold text-lg mb-4" style={{ color: "#12352a" }}>Teaching Approach</h3>
                            {["Simple and easy explanations", "Interactive live sessions", "Detailed notes & revision", "Progressive vocabulary building", "Understanding verses in context"].map((item) => (
                                <div key={item} className="flex items-center gap-3 py-3 border-b last:border-0" style={{ borderColor: "#b3dfc7" }}>
                                    <CheckCircle size={16} style={{ color: "#2f8f68" }} />
                                    <span className="text-sm" style={{ color: "#57534e" }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16" style={{ background: "#184636" }}>
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-4">Connect Deeply with the Quran's Message</h2>
                    <p className="mb-8" style={{ color: "#b3dfc7" }}>Book your FREE trial class and start understanding the Quran today.</p>
                    <button
                        onClick={() => setPopupOpen(true)}
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                        style={{ background: "#c9a24a", color: "#12352a" }}>
                        Book FREE Trial Class <ChevronRight size={20} />
                    </button>
                </div>
            </section>
        </main>
    );
}