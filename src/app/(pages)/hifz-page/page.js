// NOTE: Adjust these three import paths if your existing Navbar, HeroSection,
// and Footer live somewhere other than '@/components/...' in your project.
// They are not included in this delivery since you already have them built.
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import HeroSection from '../us-page/components/HeroSection'
import HifzProgramSection from './components/HifzProgramSection'
import HifzSuitableForSection from './components/HifzSuitableForSection'
import HifzMethodSection from './components/HifzMethodSection'
import HifzHowItWorks from './components/HifzHowItWorks'
import HifzCTASection from './components/HifzCTASection'
import HifzFAQSection from './components/HifzFAQSection'
import TrialClassForm from '../us-page/components/BookTrialUsPageForm'

export const metadata = {
  title: 'Online Hifz Classes | Structured Quran Memorization Program',
  description:
    'Join our online Hifz classes with a proven memorization system, daily revision tracking, and certified Hafiz teachers. Suitable for kids and adults. Free trial class.',
  keywords: [
    'online hifz classes',
    'hifz quran online',
    'quran memorization classes',
  ],
  alternates: {
    canonical: '/online-hifz-classes',
  },
}

export default function OnlineHifzClassesPage() {
  return (
    <main className="us-page">
      <Navbar />
      <HeroSection
        heading={'Online Hifz Classes — A Structured Path to Memorizing the Quran'}
        subheading={
          'Memorizing the Quran is one of the most rewarding commitments a Muslim can make — but it takes structure, consistency, and the right guidance to actually complete it. Our program pairs a proven memorization method with certified Hafiz teachers.'
        }
      />
      <TrialClassForm />
      <HifzProgramSection />
      <HifzSuitableForSection />
      <HifzMethodSection />
      <HifzHowItWorks />
      <HifzCTASection />
      <HifzFAQSection />
      <TrialClassForm />
      <Footer />
    </main>
  )
}
