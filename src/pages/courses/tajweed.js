"use client";
import { Mic, CheckCircle, ChevronRight, Star, Layers, Volume2, Award, Calendar, Users, Globe } from "lucide-react";
import FormPopup from "@/components/FormPopup";
import { useState } from "react";

const curriculum = [
    { title: "Advanced Tajweed Rules", desc: "Complete rule system" },
    { title: "Makharij", desc: "Articulation points of letters" },
    { title: "Noon & Meem Sakinah", desc: "Core pronunciation rules" },
    { title: "Rules of Madd", desc: "Elongation techniques" },
    { title: "Ghunnah & Qalqalah", desc: "Nasal sounds & echoing" },
    { title: "Daily Recitation Practice", desc: "With real-time correction" },
];

const outcomes = [
    "Recite Quran with accuracy and fluency",
    "Avoid common pronunciation mistakes",
    "Improve voice and rhythm in recitation",
    "Gain confidence in Salah recitation",
];

export default function TajweedCourse() {

    const [popupOpen, setPopupOpen] = useState(false)
    return (
        <main className="min-h-screen font-sans bg-neutral-50">
            <FormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
            {/* Hero — diagonal split design */}
            <section className="relative overflow-hidden min-h-[520px] flex items-center"
                style={{ background: "linear-gradient(160deg, #12352a 0%, #1e5942 45%, #2f8f68 100%)" }}>
                {/* Geometric accent */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <svg className="absolute right-0 top-0 h-full opacity-10" viewBox="0 0 400 500" fill="none">
                        <circle cx="350" cy="100" r="200" fill="#c9a24a" />
                        <circle cx="300" cy="400" r="150" fill="#4caf83" />
                    </svg>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ background: "#c9a24a" }} />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
                    <div className="grid md:grid-cols-5 gap-10 items-center">
                        <div className="md:col-span-3">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                                style={{ background: "rgba(201,162,74,0.2)", color: "#c9a24a", border: "1px solid rgba(201,162,74,0.4)" }}>
                                <Mic size={14} /> Recitation Perfection Course
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                                Quran Recitation<br />
                                <span style={{ color: "#c9a24a" }}>with Tajweed</span>
                            </h1>
                            <p className="text-lg mb-8 max-w-lg" style={{ color: "#d9efe3" }}>
                                Already know the basics? Perfect your recitation with all Tajweed rules applied beautifully and correctly, with expert one-on-one guidance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setPopupOpen(true)}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
                                    style={{ background: "#c9a24a", color: "#12352a" }}>
                                    Book FREE Trial <ChevronRight size={18} />
                                </button>
                                <div className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border"
                                    style={{ borderColor: "rgba(128,201,166,0.4)", color: "#b3dfc7" }}>
                                    <Users size={16} />
                                    <span className="text-sm font-medium">1-on-1 Live Classes</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(47,143,104,0.4)", background: "rgba(14,42,30,0.5)", backdropFilter: "blur(12px)" }}>
                                <div className="p-1" style={{ background: "rgba(201,162,74,0.15)" }}>
                                    <div className="flex items-center gap-2 px-3 py-2">
                                        <Volume2 size={14} style={{ color: "#c9a24a" }} />
                                        <span className="text-xs font-semibold" style={{ color: "#c9a24a" }}>COURSE HIGHLIGHTS</span>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    {[
                                        { icon: Layers, text: "All 17 Tajweed Rules Covered" },
                                        { icon: Mic, text: "Real-time Pronunciation Correction" },
                                        { icon: Award, text: "Certified Expert Tutors" },
                                        { icon: Calendar, text: "Ongoing — Learn at Your Pace" },
                                        { icon: Globe, text: "100% Online, Live Sessions" },
                                    ].map(({ icon: Icon, text }) => (
                                        <div key={text} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ background: "rgba(47,143,104,0.25)" }}>
                                                <Icon size={14} style={{ color: "#4caf83" }} />
                                            </div>
                                            <span className="text-sm" style={{ color: "#d9efe3" }}>{text}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-1 pt-2">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#c9a24a" color="#c9a24a" />)}
                                        <span className="ml-2 text-xs" style={{ color: "#80c9a6" }}>Rated 4.9 by students</span>
                                    </div>
                                </div>
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
                            style={{ background: "#d9efe3", color: "#256f52" }}>What's Inside</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#12352a" }}>
                            Course <span style={{ color: "#b5892f" }}>Curriculum</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {curriculum.map(({ title, desc }, i) => (
                            <div key={title} className="bg-white rounded-2xl p-6 border hover:shadow-lg transition-all group"
                                style={{ borderColor: "#d9efe3" }}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                                        style={{ background: "#d9efe3", color: "#256f52" }}>{i + 1}</div>
                                    <h3 className="font-bold" style={{ color: "#12352a" }}>{title}</h3>
                                </div>
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
                            <h3 className="font-bold text-lg mb-4" style={{ color: "#12352a" }}>Teaching Method</h3>
                            {["Expert Quran tutors with ijazah", "Real-time mistake correction during class", "One-on-one live video sessions", "Continuous progress assessment", "Flexible scheduling around your life"].map((item) => (
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Perfect Your Recitation Today
                    </h2>
                    <p className="mb-8" style={{ color: "#b3dfc7" }}>
                        Start with a FREE trial class and experience expert Tajweed teaching firsthand.
                    </p>
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