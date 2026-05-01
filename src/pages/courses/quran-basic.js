"use client";
import { BookOpen, Clock, Users, Star, CheckCircle, ChevronRight, Play, Award, Calendar, Globe } from "lucide-react";

const outcomes = [
    "Recognize and pronounce Arabic letters correctly",
    "Read Quran slowly with proper pronunciation",
    "Build confidence in Quran reading",
    "Develop love and connection with the Quran",
];

const curriculum = [
    { title: "Noorani Qaida", desc: "Complete beginner foundation" },
    { title: "Arabic Alphabets", desc: "Recognition and sounds" },
    { title: "Letter Joining", desc: "Word formation basics" },
    { title: "Basic Tajweed", desc: "Pronunciation rules" },
    { title: "Short Surahs", desc: "Reading from the Quran" },
    { title: "Daily Duas", desc: "Islamic essentials" },
];

const features = [
    { icon: Users, label: "One-on-One Classes" },
    { icon: Globe, label: "Live Online Sessions" },
    { icon: Award, label: "Certified Teachers" },
    { icon: Calendar, label: "Flexible Timing" },
];

export default function QuranBasicCourse() {
    return (
        <main className="min-h-screen font-sans bg-neutral-50">
            {/* Hero */}
            <section
                className="relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0e2a1e 0%, #1e5942 60%, #0e2a1e 100%)" }}
            >
                {/* Decorative blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, #2f8f68, transparent)", transform: "translate(-40%, -40%)" }} />
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15"
                    style={{ background: "radial-gradient(circle, #b5892f, transparent)", transform: "translate(30%, 30%)" }} />

                <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                                style={{ background: "rgba(47,143,104,0.25)", color: "#80c9a6", border: "1px solid rgba(47,143,104,0.4)" }}>
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4caf83" }} />
                                Beginner Friendly • Ages 5+
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                                Quran Basic<br />
                                <span style={{ color: "#c9a24a" }}>Course Online</span>
                            </h1>
                            <p className="text-lg mb-8" style={{ color: "#d9efe3" }}>
                                Learn Quran from scratch with expert, certified teachers. Build a strong foundation in Arabic letters, pronunciation, and Tajweed — all from the comfort of your home.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {["No prior knowledge needed", "Flexible class timings", "FREE trial class available"].map((item) => (
                                    <li key={item} className="flex items-center gap-3" style={{ color: "#b3dfc7" }}>
                                        <CheckCircle size={18} style={{ color: "#4caf83" }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
                                    style={{ background: "#c9a24a", color: "#12352a" }}>
                                    Book FREE Trial Class <ChevronRight size={18} />
                                </a>
                                <a href="#curriculum"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:bg-white/10"
                                    style={{ borderColor: "#80c9a6", color: "#d9efe3" }}>
                                    <Play size={16} /> View Curriculum
                                </a>
                            </div>
                        </div>

                        {/* Stat card */}
                        <div className="hidden md:block">
                            <div className="rounded-2xl p-8 backdrop-blur-sm border"
                                style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(47,143,104,0.3)" }}>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { num: "500+", label: "Students Enrolled" },
                                        { num: "98%", label: "Satisfaction Rate" },
                                        { num: "5 Days", label: "Per Week" },
                                        { num: "3–6", label: "Months Duration" },
                                    ].map(({ num, label }) => (
                                        <div key={label} className="text-center p-4 rounded-xl" style={{ background: "rgba(47,143,104,0.15)" }}>
                                            <div className="text-3xl font-extrabold" style={{ color: "#c9a24a" }}>{num}</div>
                                            <div className="text-sm mt-1" style={{ color: "#80c9a6" }}>{label}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-1 justify-center mt-6">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#c9a24a" color="#c9a24a" />)}
                                    <span className="ml-2 text-sm" style={{ color: "#b3dfc7" }}>4.9/5 from 200+ reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features strip */}
            <section className="bg-white border-b" style={{ borderColor: "#d9efe3" }}>
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {features.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-3 justify-center">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#d9efe3" }}>
                                    <Icon size={16} style={{ color: "#256f52" }} />
                                </div>
                                <span className="text-sm font-semibold" style={{ color: "#12352a" }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section id="curriculum" className="py-20" style={{ background: "#eef7f2" }}>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3"
                            style={{ background: "#d9efe3", color: "#256f52" }}>Course Curriculum</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#12352a" }}>
                            What You'll <span style={{ color: "#b5892f" }}>Learn</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {curriculum.map(({ title, desc }, i) => (
                            <div key={title} className="bg-white rounded-2xl p-6 border hover:border-primary-400 transition-all hover:shadow-lg"
                                style={{ borderColor: "#d9efe3" }}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg mb-4"
                                    style={{ background: "#d9efe3", color: "#256f52" }}>
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-lg mb-1" style={{ color: "#12352a" }}>{title}</h3>
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
                                What You'll <span style={{ color: "#b5892f" }}>Achieve</span>
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
                            <div className="flex items-center gap-3 mb-4">
                                <Clock size={20} style={{ color: "#256f52" }} />
                                <span className="font-bold" style={{ color: "#12352a" }}>Course Details</span>
                            </div>
                            <dl className="space-y-3">
                                {[
                                    ["Duration", "3 to 6 months"],
                                    ["Schedule", "5 days a week"],
                                    ["Timing", "Flexible (your choice)"],
                                    ["Format", "One-on-one live sessions"],
                                    ["Level", "Complete beginner"],
                                ].map(([k, v]) => (
                                    <div key={k} className="flex justify-between py-2 border-b" style={{ borderColor: "#b3dfc7" }}>
                                        <dt className="font-medium" style={{ color: "#57534e" }}>{k}</dt>
                                        <dd className="font-semibold" style={{ color: "#12352a" }}>{v}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16" style={{ background: "#184636" }}>
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Ready to Start Your Quran Journey?
                    </h2>
                    <p className="mb-8" style={{ color: "#b3dfc7" }}>
                        Join hundreds of students learning Quran online. Book your FREE trial class today — no commitment required.
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