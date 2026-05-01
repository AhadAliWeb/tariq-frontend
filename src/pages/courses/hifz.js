"use client";
import { Star, CheckCircle, ChevronRight, Target, BarChart, ShieldCheck, Calendar, Clock, Award, Users } from "lucide-react";

const plan = [
    { title: "Daily Memorization Lessons", desc: "Structured new lesson every session" },
    { title: "Muraja'ah (Revision) Sessions", desc: "Consistent review to retain memorization" },
    { title: "Tajweed During Hifz", desc: "Memorize with proper pronunciation" },
    { title: "Weekly & Monthly Tests", desc: "Track and measure progress" },
    { title: "Personalized Hifz Plan", desc: "Tailored to your pace & schedule" },
    { title: "Progress Tracking System", desc: "Stay motivated with visible progress" },
];

const outcomes = [
    "Memorize Quran with accuracy and confidence",
    "Retain memorized portions long-term",
    "Develop discipline and daily consistency",
    "Recite beautifully with Tajweed applied",
];

export default function HifzCourse() {
    return (
        <main className="min-h-screen font-sans bg-neutral-50">
            {/* Hero — prestigious, achievement-focused */}
            <section className="relative overflow-hidden"
                style={{ background: "linear-gradient(160deg, #0e2a1e 0%, #184636 40%, #1e5942 100%)" }}>
                {/* Gold accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #c9a24a, #e8d5a3, #c9a24a)" }} />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 pointer-events-none"
                    style={{ background: "radial-gradient(circle at 80% 20%, #c9a24a, transparent 60%)" }} />

                <div className="relative max-w-6xl mx-auto px-4 py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                                style={{ background: "rgba(201,162,74,0.15)", color: "#c9a24a", border: "1px solid rgba(201,162,74,0.4)" }}>
                                <Star size={14} fill="#c9a24a" color="#c9a24a" /> The Highest Honor in Islam
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                                Quran <span style={{ color: "#c9a24a" }}>Hifz</span><br />
                                <span style={{ color: "#d9efe3" }}>Course Online</span>
                            </h1>
                            <p className="text-lg mb-8" style={{ color: "#b3dfc7" }}>
                                Memorize the Holy Quran with expert Huffaz teachers. Structured, personalized plans to help you achieve this blessed milestone from home.
                            </p>
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {[
                                    { icon: Award, text: "Huffaz-Certified Teachers" },
                                    { icon: Target, text: "Personalized Hifz Plans" },
                                    { icon: BarChart, text: "Progress Tracking" },
                                    { icon: ShieldCheck, text: "1.5–3 Year Program" },
                                ].map(({ icon: Icon, text }) => (
                                    <div key={text} className="flex items-center gap-2 text-sm font-medium"
                                        style={{ color: "#d9efe3" }}>
                                        <Icon size={14} style={{ color: "#4caf83" }} /> {text}
                                    </div>
                                ))}
                            </div>
                            <a href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
                                style={{ background: "#c9a24a", color: "#12352a" }}>
                                Book FREE Trial Class <ChevronRight size={18} />
                            </a>
                        </div>

                        {/* Honor card */}
                        <div className="hidden md:flex flex-col gap-4">
                            <div className="rounded-2xl p-6 border text-center"
                                style={{ background: "rgba(201,162,74,0.1)", borderColor: "rgba(201,162,74,0.3)" }}>
                                <div className="text-5xl mb-3">📖</div>
                                <div className="font-extrabold text-xl mb-1" style={{ color: "#c9a24a" }}>Hafiz al-Quran</div>
                                <div className="text-sm" style={{ color: "#80c9a6" }}>The highest title a Muslim can earn</div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {[["30", "Juz"], ["114", "Surahs"], ["6236", "Verses"]].map(([n, l]) => (
                                    <div key={l} className="rounded-xl p-4 text-center border"
                                        style={{ background: "rgba(47,143,104,0.15)", borderColor: "rgba(47,143,104,0.3)" }}>
                                        <div className="font-extrabold text-2xl" style={{ color: "#c9a24a" }}>{n}</div>
                                        <div className="text-xs mt-0.5" style={{ color: "#80c9a6" }}>{l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plan */}
            <section className="py-20" style={{ background: "#eef7f2" }}>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3"
                            style={{ background: "#d9efe3", color: "#256f52" }}>The Hifz Journey</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#12352a" }}>
                            Your <span style={{ color: "#b5892f" }}>Course Plan</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {plan.map(({ title, desc }, i) => (
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
                                style={{ background: "#d9efe3", color: "#256f52" }}>What You'll Achieve</span>
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
                        <div className="rounded-2xl p-8 border" style={{ background: "#eef7f2", borderColor: "#b3dfc7" }}>
                            <h3 className="font-bold text-lg mb-4" style={{ color: "#12352a" }}>Program Features</h3>
                            {["Personalized Hifz timetable for each student", "Experienced Huffaz teachers with ijazah", "Daily new lesson + daily revision built in", "Weekly tests to ensure retention", "1.5 to 3 years flexible program"].map((item) => (
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
                    <h2 className="text-3xl font-extrabold text-white mb-4">Begin Your Hifz Journey Today</h2>
                    <p className="mb-8" style={{ color: "#b3dfc7" }}>
                        Take the first step toward the most honorable title in Islam. Book a FREE trial class now.
                    </p>
                    <a href="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                        style={{ background: "#c9a24a", color: "#12352a" }}>
                        Book FREE Trial Class <ChevronRight size={20} />
                    </a>
                </div>
            </section>
        </main>
    );
}