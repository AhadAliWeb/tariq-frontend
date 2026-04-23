"use client"

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FormPopup from "./FormPopup";


const courses = [
  {
    id: 1,
    title: "Noorani Qaida (Beginners)",
    description: "The perfect start for kids and adults. Master the Arabic alphabet and pronunciation to read fluently.",
    imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=600",
    tag: "Most Popular",
  },
  {
    id: 2,
    title: "Quran Reading & Tajweed",
    description: "Read the Holy Quran exactly as it was revealed. Master articulation points with expert tutors.",
    imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=600",
    tag: "Intermediate",
  },
  {
    id: 3,
    title: "Quran Memorization (Hifz)",
    description: "A structured, step-by-step program to memorize the Quran using proven retention techniques.",
    imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=600",
    tag: "Advanced",
  },
  {
    id: 4,
    title: "Islamic Studies & Duas",
    description: "Build a strong foundation. Learn daily Duas, basic Fiqh, Seerah, and essential Islamic values.",
    imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=600",
    tag: "Family Friendly",
  }
];

export default function ExploreCourses() {

  const [popupOpen, setPopupOpen] = useState(false)


  return (
    <section className="relative py-24 overflow-hidden bg-[var(--color-bg-primary)]">
      <FormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      {/* --- Professional Background Design --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle dot pattern for texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--color-primary-900) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        {/* Soft glowing orbs for depth */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-primary-200)] rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-secondary-200)] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <CheckCircle2 className="text-[var(--color-secondary-500)]" size={20} />
            <span className="text-[var(--color-primary-700)] font-semibold text-sm tracking-wide uppercase">
              1-on-1 Interactive Classes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary-900)] mb-6 font-heading leading-tight">
            Explore Our {" "}
            <span className="relative text-[var(--color-secondary-500)]">
              Online Quran
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5 C50 1.5, 150 1.5, 199 5.5" stroke="var(--color-wcu-heading-accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span> Courses
          </h2>
          <p className="text-lg text-[var(--color-neutral-600)] leading-relaxed">
            Whether you are a beginner taking your first steps or an adult aiming to perfect your Tajweed, we have a personalized plan.
            <strong className="block mt-2 text-[var(--color-primary-800)] font-semibold">Join thousands of global students and start with a 100% Free Trial Class today.</strong>
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-neutral-200)] hover:shadow-xl hover:border-[var(--color-primary-300)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-[var(--color-neutral-100)]">
                <div className="absolute top-4 left-4 z-10 bg-[var(--color-secondary-400)] text-[var(--color-primary-900)] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {course.tag}
                </div>
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Image overlay gradient for smoother transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[var(--color-primary-900)] mb-3 font-heading leading-snug">
                  {course.title}
                </h3>

                <p className="text-sm text-[var(--color-neutral-600)] mb-8 flex-grow leading-relaxed">
                  {course.description}
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => setPopupOpen(true)}
                  className="mt-auto flex items-center justify-center w-full py-3 px-4 text-sm font-bold rounded-lg bg-transparent text-[var(--color-primary-700)] border-2 border-[var(--color-primary-200)] group-hover:bg-[var(--color-primary-600)] group-hover:border-[var(--color-primary-600)] group-hover:text-white transition-all duration-300"
                >
                  Book Free Trial
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section >
  );
}