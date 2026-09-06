// NOTE: Adjust these three import paths if your existing Navbar, HeroSection,
// and Footer live somewhere other than '@/components/...' in your project.
// They are not included in this delivery since you already have them built.
import Navbar from '../us-page/components/Navbar'
import HeroSection from '../us-page/components/HeroSection'
import Footer from '@/components/Footer'

import AdultFeaturesSection from './components/AdultFeaturesSection'
import AdultCurriculumSection from './components/AdultCurriculumSection'
import AdultWhyChooseSection from './components/AdultWhyChooseSection'
import AdultCTASection from './components/AdultCTASection'
import AdultFAQSection from './components/AdultFAQSection'
import AdultHowItWorks from './components/AdultHowItWorks'

export const metadata = {
  title: 'Online Quran Classes for Adults | Learn at Your Own Pace, No Judgment',
  description:
    'Online Quran classes for adults with flexible scheduling around work and family life. Learn to read, understand, and recite Quran — no matter your starting level.',
  keywords: [
    'online quran classes for adults',
    'quran classes for adults',
    'adult quran learning online',
  ],
  alternates: {
    canonical: '/online-quran-classes-for-adults',
  },
}

export default function OnlineQuranClassesForAdultsPage() {
  return (
    <main className="us-page">
      <Navbar />
      <HeroSection heading={"Online Quran Classes for Adults | It's Never Too Late to Start"} subheading={"Our adult Quran classes are built entirely around that reality — private, patient, and completely judgment-free, so you can learn at whatever pace feels right for you."}/>
      <AdultFeaturesSection />
      <AdultCurriculumSection />
      <AdultWhyChooseSection />
      <AdultHowItWorks />
      <AdultCTASection />
      <AdultFAQSection />
      <Footer />
    </main>
  )
}
