"use client";
import { CheckCircle, ChevronRight, MessageSquare, PenLine, BookOpen, Globe, Users, Clock, Award } from "lucide-react";
import FormPopup from "@/components/FormPopup";
import { useState } from "react";

const curriculum = [
    { title: "Arabic Alphabets", desc: "Pronunciation & recognition" },
    { title: "Vocabulary Building", desc: "Progressive word learning" },
    { title: "Grammar (Nahw & Sarf)", desc: "Core Arabic grammar basics" },
    { title: "Conversation Practice", desc: "Real-life dialogue skills" },
    { title: "Quranic Arabic", desc: "Understand Quran directly" },
    { title: "Reading & Writing", desc: "Full Arabic literacy" },
];

const outcomes = [
    "Read and write Arabic with confidence",
    "Understand basic Arabic conversations",
    "Understand the Quran without translation",
    "Communicate in Quranic Arabic",
];

export default function ArabicCourse() {
    const [popupOpen, setPopupOpen] = useState(false)

    return (
        <main className="min-h-screen font-sans bg-neutral-50">
            <FormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
            {/* Hero — language-focused, vibrant */}
            <section className="relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #12352a 0%, #0e2a1e 50%, #184636 100%)" }}>
                {/* Script decorative bg */}
                <div className="absolute inset-0 flex items-center justify-end pr-16 pointer-events-none overflow-hidden opacity-5">
                    <span className="text-[280px] font-extrabold text-white leading-none select-none">ع</span>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                                style={{ background: "rgba(47,143,104,0.2)", color: "#80c9a6", border: "1px solid rgba(47,143,104,0.4)" }}>
                                <Globe size={14} /> Quranic & Conversational Arabic
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                                Arabic <span style={{ color: "#c9a24a" }}>Language</span><br />
                                <span style={{ color: "#d9efe3" }}>Course Online</span>
                            </h1>
                            <p className="text-lg mb-8 max-w-lg" style={{ color: "#b3dfc7" }}>
                                Master the language of the Quran. From alphabets to grammar, reading to conversation — learn Arabic with certified native teachers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    className="inline-flex items-center justify-center gap-2 cursor-pointer px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
                                    style={{ background: "#c9a24a", color: "#12352a" }}
                                    onClick={() => setPopupOpen(true)}
                                >
                                    Book FREE Trial Class <ChevronRight size={18} />
                                </button>
                                <div className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border text-sm font-medium"
                                    style={{ borderColor: "rgba(128,201,166,0.4)", color: "#b3dfc7" }}>
                                    <Clock size={16} /> 6–12 Month Program
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: BookOpen, label: "Reading", sub: "Arabic text fluency" },
                                    { icon: PenLine, label: "Writing", sub: "Script & calligraphy" },
                                    { icon: MessageSquare, label: "Speaking", sub: "Conversation skills" },
                                    { icon: Globe, label: "Quranic", sub: "Direct understanding" },
                                ].map(({ icon: Icon, label, sub }) => (
                                    <div key={label} className="rounded-2xl p-5 border text-center"
                                        style={{ background: "rgba(47,143,104,0.12)", borderColor: "rgba(47,143,104,0.3)" }}>
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                                            style={{ background: "rgba(47,143,104,0.3)" }}>
                                            <Icon size={18} style={{ color: "#4caf83" }} />
                                        </div>
                                        <div className="font-bold text-sm text-white">{label}</div>
                                        <div className="text-xs mt-0.5" style={{ color: "#80c9a6" }}>{sub}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-2xl p-4 text-center border"
                                style={{ background: "rgba(201,162,74,0.1)", borderColor: "rgba(201,162,74,0.3)" }}>
                                <span className="font-bold" style={{ color: "#c9a24a" }}>500+ students</span>
                                <span className="text-sm ml-2" style={{ color: "#80c9a6" }}>already learning Arabic with us</span>
                            </div>
                        </div>
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
                            What You'll <span style={{ color: "#b5892f" }}>Learn</span>
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
                                What You'll <span style={{ color: "#b5892f" }}>Master</span>
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
                        <div className="rounded-2xl p-8 border" style={{ background: "#eef7f2", borderColor: "#b3dfc7" }}>
                            <h3 className="font-bold text-lg mb-4" style={{ color: "#12352a" }}>Teaching Approach</h3>
                            {["Interactive live lessons with real practice", "Structured exercises after every class", "Real-life conversation examples used", "Progressive grammar building", "Focus on Quranic vocabulary throughout"].map((item) => (
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
                    <h2 className="text-3xl font-extrabold text-white mb-4">Start Speaking the Language of the Quran</h2>
                    <p className="mb-8" style={{ color: "#b3dfc7" }}>Book your FREE trial Arabic class and start your journey today.</p>
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