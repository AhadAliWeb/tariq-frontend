"use client";
import { BookMarked, CheckCircle, ChevronRight, MessageCircle, Lightbulb, Clock, Users, Award } from "lucide-react";
import FormPopup from "@/components/FormPopup";
import { useState } from "react";

const curriculum = [
    { title: "Tafseer of Selected Surahs", desc: "In-depth verse explanation" },
    { title: "Asbab al-Nuzul", desc: "Context of revelation" },
    { title: "Important Themes", desc: "Core Quranic messages" },
    { title: "Life Lessons", desc: "Wisdom from the Quran" },
    { title: "Daily Application", desc: "Practical guidance for life" },
    { title: "Q&A Sessions", desc: "Discussion-based learning" },
];

const outcomes = [
    "Gain deep understanding of Quranic verses",
    "Learn historical and spiritual context of revelations",
    "Apply Quran teachings meaningfully in daily life",
    "Understand the wisdom behind Allah's commands",
];

export default function TafseerCourse() {

    const [popupOpen, setPopupOpen] = useState(false)

    return (
        <main className="min-h-screen font-sans bg-neutral-50">
            <FormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
            {/* Hero — bold left-border accent style */}
            <section className="relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0e2a1e 0%, #12352a 50%, #1e5942 100%)" }}>
                {/* Decorative right panel */}
                <div className="absolute right-0 top-0 h-full w-1/3 opacity-5 pointer-events-none hidden lg:block"
                    style={{ background: "repeating-linear-gradient(45deg, #c9a24a 0px, #c9a24a 1px, transparent 1px, transparent 20px)" }} />
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "#c9a24a" }} />

                <div className="relative max-w-6xl mx-auto px-4 py-24">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                            style={{ background: "rgba(47,143,104,0.2)", color: "#80c9a6", border: "1px solid rgba(47,143,104,0.4)" }}>
                            <BookMarked size={14} /> Deep Quranic Study
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-none mb-4">
                            Quran<br /><span style={{ color: "#c9a24a" }}>Tafseer</span><br />
                            <span className="text-3xl md:text-4xl font-bold" style={{ color: "#d9efe3" }}>Course Online</span>
                        </h1>
                        <p className="text-lg max-w-xl mb-8" style={{ color: "#b3dfc7" }}>
                            Dive deep into the Quran's meaning, context, and divine wisdom. Learn from qualified scholars in live, interactive one-on-one sessions.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            {[
                                { icon: Clock, text: "1+ Year Program" },
                                { icon: Users, text: "1-on-1 Live" },
                                { icon: Award, text: "Scholar Teachers" },
                                { icon: MessageCircle, text: "Q&A Included" },
                            ].map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                                    style={{ background: "rgba(47,143,104,0.2)", color: "#d9efe3" }}>
                                    <Icon size={14} style={{ color: "#4caf83" }} /> {text}
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => setPopupOpen(true)}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
                            style={{ background: "#c9a24a", color: "#12352a" }}>
                            Book FREE Trial Class <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20" style={{ background: "#eef7f2" }}>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3"
                            style={{ background: "#d9efe3", color: "#256f52" }}>Course Curriculum</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#12352a" }}>
                            What You'll <span style={{ color: "#b5892f" }}>Explore</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {curriculum.map(({ title, desc }, i) => (
                            <div key={title} className="bg-white rounded-2xl p-6 border hover:shadow-lg hover:border-green-300 transition-all"
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

            {/* Outcomes + Teaching */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3"
                                style={{ background: "#d9efe3", color: "#256f52" }}>Learning Outcomes</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#12352a" }}>
                                Deep <span style={{ color: "#b5892f" }}>Understanding</span>
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
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-1"
                                style={{ background: "#d9efe3", color: "#256f52" }}>Teaching Style</span>
                            {[
                                { icon: Lightbulb, title: "Easy-to-Understand", desc: "Complex concepts broken into simple, digestible lessons" },
                                { icon: MessageCircle, title: "Discussion-Based", desc: "Interactive sessions encouraging questions and reflection" },
                                { icon: BookMarked, title: "Regular Q&A", desc: "Dedicated time to address all your questions" },
                            ].map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="flex gap-4 p-4 rounded-2xl border" style={{ borderColor: "#d9efe3" }}>
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: "#d9efe3" }}>
                                        <Icon size={18} style={{ color: "#256f52" }} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm" style={{ color: "#12352a" }}>{title}</div>
                                        <div className="text-sm mt-0.5" style={{ color: "#57534e" }}>{desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16" style={{ background: "#184636" }}>
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-4">Unlock the Depths of the Quran</h2>
                    <p className="mb-8" style={{ color: "#b3dfc7" }}>Begin your Tafseer journey with a FREE trial class from our qualified scholars.</p>
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