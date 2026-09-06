// NOTE: Adjust these three import paths if your existing Navbar, HeroSection,
// and Footer live somewhere other than '@/components/...' in your project.
// They are not included in this delivery since you already have them built.
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import HeroSection from '../us-page/components/HeroSection'
import KidsFeaturesSection from './components/KidsFeaturesSection'
import KidsCurriculumSection from './components/KidsCurriculumSection'
import KidsTrustSection from './components/KidsTrustSection'
import KidsCTASection from './components/KidsCTASection'
import KidsFAQSection from './components/KidsFAQSection'
import KidsHowItWorks from './components/KidsHowItWorks'
import TrialClassForm from '../us-page/components/BookTrialUsPageForm'

export const metadata = {
  title: 'Online Quran Classes for Kids | Fun, Safe & Interactive Learning',
  description:
    'Fun and engaging online Quran classes for kids with patient, certified teachers. Interactive 1-on-1 lessons in reading, Tajweed, and memorization. Free trial available.',
  keywords: [
    'online quran classes for kids',
    'quran classes for children',
    'kids quran teacher online',
  ],
  alternates: {
    canonical: '/online-quran-classes-for-kids',
  },
}

export default function OnlineQuranClassesForKidsPage() {
  return (
    <main className="us-page">
      <Navbar />
      <HeroSection heading={"Online Quran Classes for Kids | Where Learning Feels Like Fun"} subheading={"Keeping a child engaged in Quran learning takes more than just a teacher — it takes patience, warmth, and a method built specifically for young minds."}/>
      <TrialClassForm />
      <KidsFeaturesSection />
      <KidsCurriculumSection />
      <KidsTrustSection />
      <KidsHowItWorks />
      <KidsCTASection />
      <KidsFAQSection />
      <TrialClassForm />
      <Footer />
    </main>
  )
}
