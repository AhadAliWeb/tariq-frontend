// NOTE: Adjust these three import paths if your existing Navbar, HeroSection,
// and Footer live somewhere other than '@/components/...' in your project.
// They are not included in this delivery since you already have them built.
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import HeroSection from '../online-quran-classes-usa/components/HeroSection'
import LearnQuranCurriculumSection from './components/LearnQuranCurriculumSection'
import LearnQuranWhySection from './components/LearnQuranWhySection'
import LearnQuranAudienceSection from './components/LearnQuranAudienceSection'
import LearnQuranHowItWorks from './components/LearnQuranHowItWorks'
import LearnQuranCTASection from './components/LearnQuranCTASection'
import LearnQuranFAQSection from './components/LearnQuranFAQSection'
import TrialClassForm from '../online-quran-classes-usa/components/BookTrialUsPageForm'
import Courses from '../online-quran-classes-usa/components/Courses'

export const metadata = {
  title: 'Learn Quran Online | 1-on-1 Live Classes with Certified Teachers',
  description:
    'Learn Quran online at your own pace with certified teachers. Personalized 1-on-1 lessons for reading, Tajweed, and memorization. Book your free trial class today.',
  keywords: [
    'learn quran online',
    'quran online classes',
    'online quran learning',
  ],
  alternates: {
    canonical: '/learn-quran-online',
  },
}

export default function LearnQuranOnlinePage() {
  return (
    <main className="us-page">
      <Navbar />
      <HeroSection
        heading={'Learn Quran Online — Anywhere, Anytime, at Your Own Pace'}
        subheading={
          "Learning the Quran doesn't need to wait for the \"right time\" or a nearby teacher. With live, one-on-one online classes, you can begin today — whether you're starting from the Arabic alphabet or refining your Tajweed and fluency."
        }
      />
      <TrialClassForm />
      <Courses />
      <LearnQuranCurriculumSection />
      <LearnQuranWhySection />
      <LearnQuranAudienceSection />
      <LearnQuranHowItWorks />
      <LearnQuranCTASection />
      <LearnQuranFAQSection />
      <TrialClassForm />
      <Footer />
    </main>
  )
}
