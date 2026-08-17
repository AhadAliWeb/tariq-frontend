"use client"

import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import FormPopup from "./FormPopup";

const courses = [
  {
    id: 1,
    title: "Quran Basic Reading Noorani Qaida",
    description: "Start from scratch with Noorani Qaida. Learn Arabic letters, vowels, and basic pronunciation with an expert tutor. Perfect for complete beginners and young children aged 5+.",
    imageUrl: "https://res.cloudinary.com/dqnjqcerb/image/upload/v1761369554/uploads/mpqiogcsjxslgiwhtlhu.png",
    tag: "Beginner Friendly",
    // icon: "📗",
    source: "home_qurani_qaida_course"
  },
  {
    id: 2,
    title: "Online Tajweed Classes",
    description: "Learn correct Quran recitation with proper Tajweed rules Makhraj, Sifaat, Madd, Ghunna, and more. Live 1-on-1 classes with real-time audio correction by Ijazah-certified tutors.",
    imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "All Levels",
    // icon: "🎙️",
    popular: true,
    source: "home_recitation_course"
  },
  {
    id: 3,
    title: "Quran Memorization Hifz Program",
    description: "Memorize the Holy Quran with a structured, personalized Hifz plan. Daily revision, Murajaah sessions, and guidance from experienced Huffaz teachers for kids and adults.",
    imageUrl: "https://res.cloudinary.com/dqnjqcerb/image/upload/v1761471265/uploads/krrariibgllamoqg0kyq.jpg",
    tag: "Kids & Adults",
    // icon: "🧠",
    source: "home_quran_memorization_course"
  },
  {
    id: 4,
    title: "Arabic Language Course Online",
    description: "Learn Arabic to understand the Quran and communicate with confidence. Our tutors teach Modern Standard Arabic and Quranic Arabic from beginner to advanced level.",
    imageUrl: "https://images.unsplash.com/photo-1573483883644-d0b4b55eb25d?q=80&w=880&auto=format&fit=crop",
    tag: "Beginner → Advanced",
    // icon: "🌿",
  },
  {
    id: 5,
    title: "Islamic Studies Online",
    description: "Build a strong Islamic foundation Aqeedah, Fiqh, Seerah, essential Duas, and daily ibadah. Structured lessons for children and adults, taught in simple, engaging English.",
    imageUrl: "https://images.unsplash.com/photo-1589462135796-2b46e4bdd7fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cXVyYW58ZW58MHx8MHx8fDA%3D",
    tag: "All Ages",
    // icon: "📚",
  },
  {
    id: 6,
    title: "Tafseer Quran Explanation Course",
    description: "Go beyond recitation. Learn the meaning, context, and wisdom behind every verse of the Holy Quran through our structured Tafseer course led by qualified Islamic scholars.",
    imageUrl: "https://images.unsplash.com/photo-1573483883644-d0b4b55eb25d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHF1cmFuJTIwdGVhY2hpbmd8ZW58MHx8MHx8fDA%3D",
    tag: "Intermediate & Advanced",
    // icon: "💡",
  },
  // Hidden initially shown after "View More"
  {
    id: 7,
    title: "Quran Translation Course",
    description: "Understand what you recite in Salah. Our Quran Translation course teaches word-by-word meaning of Quranic verses to help students connect deeply with the message of Allah.",
    imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=600",
    tag: "All Levels",
    // icon: "🔤",
  },
  {
    id: 8,
    title: "Online Quran Classes for Kids",
    description: "Fun, age-appropriate Quran classes for children aged 5+. Patient certified teachers use child-friendly methods short Surahs, storytelling, and interactive recitation practice.",
    imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=600",
    tag: "Ages 5–14",
    // icon: "👩‍🏫",
  },
  {
    id: 9,
    title: "Online Quran Classes for Adults",
    description: "It is never too late. Our adult Quran classes are designed for working professionals, new Muslims, and anyone reconnecting with the Quran at your own pace, your own schedule.",
    imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=600",
    tag: "Flexible Timing",
    // icon: "🕌",
  },
];

const INITIAL_COUNT = 6;

export default function ExploreCourses() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll ? courses : courses.slice(0, INITIAL_COUNT);

  return (
    <section className="relative py-24 overflow-hidden bg-bg-primary">
      <FormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />

      {/* Background Design */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--color-primary-900) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-primary-200)] rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-secondary-200)] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <CheckCircle2 className="text-[var(--color-secondary-500)]" size={20} />
            <span className="text-[var(--color-primary-700)] font-semibold text-sm tracking-wide uppercase">
              Our Courses
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary-900)] mb-6 font-heading leading-tight">
            Online Quran Courses for{" "}
            <span className="relative text-[var(--color-secondary-500)]">
              Every Level
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5 C50 1.5, 150 1.5, 199 5.5" stroke="var(--color-wcu-heading-accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-[var(--color-neutral-600)] leading-relaxed">
            From your child's first Arabic letter to full Hifz our certified tutors guide every student with patience, structure, and genuine care.
            <strong className="block mt-2 text-[var(--color-primary-800)] font-semibold">Join thousands of global students and start with a 100% Free Trial Class today.</strong>
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCourses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-neutral-200)] hover:shadow-xl hover:border-[var(--color-primary-300)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-[var(--color-neutral-100)]">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>

                {/* Popular badge */}
                {course.popular && (
                  <div className="absolute top-3 left-3 bg-[var(--color-secondary-500)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Icon badge */}
                {/* <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-xl">
                  {course.icon}
                </div> */}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tag */}
                <span className="inline-block text-xs font-semibold text-[var(--color-primary-600)] bg-[var(--color-primary-50)] border border-[var(--color-primary-100)] rounded-full px-3 py-1 mb-3 w-fit">
                  {course.tag}
                </span>

                <h3 className="text-lg font-bold text-[var(--color-primary-900)] mb-3 font-heading leading-snug">
                  {course.title}
                </h3>

                <p className="text-sm text-[var(--color-neutral-600)] mb-6 flex-grow leading-relaxed">
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

        {/* View More / View Less Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm border-2 border-[var(--color-primary-300)] text-[var(--color-primary-700)] bg-white hover:bg-[var(--color-primary-600)] hover:text-white hover:border-[var(--color-primary-600)] shadow-sm hover:shadow-md transition-all duration-300"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp size={18} />
              </>
            ) : (
              <>
                View More Courses <ChevronDown size={18} />
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}