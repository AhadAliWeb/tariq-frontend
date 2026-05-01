"use client";
import { CheckCircle, ChevronRight, Moon, Heart, BookOpen, Users, Clock, Star, Compass } from "lucide-react";

const curriculum = [
    { title: "Aqeedah", desc: "Core Islamic beliefs" },
    { title: "Fiqh", desc: "Salah, fasting & daily practices" },
    { title: "Seerah", desc: "Life of Prophet Muhammad ﷺ" },
    { title: "Islamic Manners", desc: "Ethics and character building" },
    { title: "Daily Duas", desc: "Supplications for every occasion" },
    { title: "Sunnah Practices", desc: "Living the prophetic way" },
];

const outcomes = [
    "Understand core Islamic teachings deeply",
    "Practice Islam correctly in daily life",
    "Build strong moral character and values",
    "Learn the beautiful life of Prophet ﷺ",
];

export default function IslamicStudiesCourse() {
    return (
        <main className="min-h-screen font-sans bg-neutral-50">
            {/* Hero — warm, welcoming, family-friendly */}
            <section className="relative overflow-hidden"
                style={{ background: "linear-gradient(150deg, #0e2a1e 0%, #12352a 40%, #1e5942 100%)" }}>
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-10 right-10 opacity-10">
                        <Moon size={200} style={{ color: "#c9a24a" }} strokeWidth={0.5} />
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                                style={{ background: "rgba(47,143,104,0.2)", color: "#80c9a6", border: "1px solid rgba(47,143,104,0.4)" }}>
                                <Compass size={14} /> For All Ages — Kids & Adults
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                                Islamic <span style={{ color: "#c9a24a" }}>Studies</span><br />
                                <span style={{ color: "#d9efe3" }}>Course Online</span>
                            </h1>
                            <p className="text-lg mb-8" style={{ color: "#b3dfc7" }}>
                                Learn complete Islamic knowledge — beliefs, worship, character, and the beautiful Seerah — with qualified teachers in live, engaging sessions.
                            </p>
                            <ul className="space-y-2 mb-8">
                                {["Perfect for children and adults", "Covers all pillars of Islamic knowledge", "Story-based learning for kids"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#d9efe3" }}>
                                        <CheckCircle size={16} style={{ color: "#4caf83" }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
                                    style={{ background: "#c9a24a", color: "#12352a" }}>
                                    Book FREE Trial <ChevronRight size={18} />
                                </a>
                                <div className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border text-sm font-medium"
                                    style={{ borderColor: "rgba(128,201,166,0.4)", color: "#b3dfc7" }}>
                                    <Clock size={16} /> Ongoing Program
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="rounded-2xl p-6 border" style={{ background: "rgba(14,42,30,0.5)", borderColor: "rgba(47,143,104,0.3)", backdropFilter: "blur(8px)" }}>
                                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <Star size={16} style={{ color: "#c9a24a" }} /> Subjects Covered
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Aqeedah (Beliefs)", icon: "🕋" },
                                        { label: "Fiqh (Worship)", icon: "🙏" },
                                        { label: "Seerah (Prophet's Life)", icon: "📜" },
                                        { label: "Islamic Manners", icon: "💚" },
                                        { label: "Daily Duas", icon: "🤲" },
                                        { label: "Sunnah Practices", icon: "⭐" },
                                    ].map(({ label, icon }) => (
                                        <div key={label} className="flex items-center gap-3 p-3 rounded-xl"
                                            style={{ background: "rgba(47,143,104,0.15)" }}>
                                            <span className="text-xl">{icon}</span>
                                            <span className="text-sm font-medium" style={{ color: "#d9efe3" }}>{label}</span>
                                        </div>
                                    ))}
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
                                A Complete <span style={{ color: "#b5892f" }}>Muslim</span>
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
                            {["Simple & engaging lessons for all ages", "Story-based learning techniques for kids", "Practical guidance for daily Islamic life", "Interactive sessions with real examples", "Regular revision and assessment"].map((item) => (
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
                    <h2 className="text-3xl font-extrabold text-white mb-4">Build Your Islamic Foundation Today</h2>
                    <p className="mb-8" style={{ color: "#b3dfc7" }}>
                        Join our Islamic Studies course — book a FREE trial class for you or your child.
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