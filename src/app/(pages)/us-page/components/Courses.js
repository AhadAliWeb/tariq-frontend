'use client'

import { useEffect, useRef, useState } from 'react'
import {
  BookOpen,
  Volume2,
  CheckCircle2,
  Brain,
  Globe,
  MessageSquare,
  GraduationCap,
  Shield,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'

// TODO: replace with your real WhatsApp business number
const WHATSAPP_NUMBER = '18005551212'

const courses = [
  {
    icon: BookOpen,
    level: 'Beginner',
    title: 'Basic Book (Noorani Qaida)',
    desc: 'Foundation course teaching Arabic letters and correct pronunciation before starting the Quran.',
  },
  {
    icon: Volume2,
    level: 'Beginner',
    title: 'Recitation of Quran',
    desc: 'Fluent, correct Quran reading (Nazra) with a tutor correcting your pronunciation live.',
  },
  {
    icon: CheckCircle2,
    level: 'Intermediate',
    title: 'Advance Tajweed Course',
    desc: 'Master the rules of articulation and recitation for a polished, correct Quranic voice.',
  },
  {
    icon: Brain,
    level: 'All Levels',
    title: 'Hifz Course',
    desc: 'Structured daily memorization with tracked revision plans, for kids and adults alike.',
  },
  {
    icon: Globe,
    level: 'Intermediate',
    title: 'Translation & Tafseer Course',
    desc: 'Understand the meaning and context behind the verses you recite, not just the words.',
  },
  {
    icon: MessageSquare,
    level: 'All Levels',
    title: 'Arabic Language',
    desc: 'Conversational and Quranic Arabic to build reading, writing, and comprehension skills.',
  },
  {
    icon: GraduationCap,
    level: 'All Ages',
    title: 'Islamic Studies',
    desc: 'Seerah, Fiqh essentials, and Islamic history taught in an easy, structured format.',
  },
  {
    icon: Shield,
    level: 'Intermediate',
    title: 'Aqeedah Course',
    desc: 'Foundations of Islamic belief and creed, explained clearly for learners of all ages.',
  },
]

export default function Courses() {
  const sectionRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true)
      return
    }

    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function scrollToForm(e) {
    e.preventDefault()
    document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section ref={sectionRef} id="courses" className="us-page bg-[var(--color-background)] py-20 sm:py-24">
      <div className="us-page mx-auto max-w-6xl px-6">
        <div className="us-page mx-auto max-w-xl text-center">
          <p className="us-page text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            Courses
          </p>
          <h2 className="us-page mt-2 text-2xl font-extrabold text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            A Course for Every Stage of Learning
          </h2>
          <p className="us-page mt-3 text-[var(--color-text)] opacity-70">
            From your child&apos;s first Arabic letters to advanced Tafseer — every course is taught
            one-on-one and paced to the student.
          </p>
        </div>

        <div className="us-page mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, i) => {
            const Icon = course.icon
            const isPrimary = i % 2 === 0
            const color = isPrimary ? 'var(--color-primary)' : 'var(--color-secondary)'
            const tint = isPrimary ? '#E8F1EC' : '#FBF3E1'
            const waText = encodeURIComponent(`Hi, I'm interested in the ${course.title} course`)

            return (
              <div
                key={course.title}
                className={`group flex flex-col rounded-3xl border border-black/5 bg-[var(--color-surface)] p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${
                  revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: revealed ? `${(i % 4) * 90}ms` : '0ms' }}
              >
                <div
                  className="us-page mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: tint }}
                >
                  <Icon className="us-page h-7 w-7" style={{ color }} />
                </div>

                <span
                  className="us-page mx-auto mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: tint, color }}
                >
                  {course.level}
                </span>

                <h3 className="us-page mt-3 text-base font-bold leading-snug text-[var(--color-text)] sm:text-lg">
                  {course.title}
                </h3>
                <p className="us-page mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text)] opacity-70">
                  {course.desc}
                </p>

                <div className="us-page mt-6 flex gap-2">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="us-page flex flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-[var(--color-primary)] px-3 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white"
                  >
                    <MessageCircle className="us-page h-4 w-4" />
                    WhatsApp
                  </a>
                  <a
                    href="#trial-form"
                    data-course={course.title}
                    onClick={scrollToForm}
                    className="us-page group/enroll flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[var(--color-primary)] px-3 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    Enroll
                    <ArrowRight className="us-page h-3.5 w-3.5 transition-transform duration-300 group-hover/enroll:translate-x-1" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="us-page mt-14 text-center">
          <a
            href="#trial-form"
            onClick={scrollToForm}
            className="us-page group inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Book Free Trial Class
            <ArrowRight className="us-page h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}