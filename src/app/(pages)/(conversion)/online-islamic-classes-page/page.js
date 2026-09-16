// NOTE: Adjust these three import paths if your existing Navbar, HeroSection,
// and Footer live somewhere other than '@/components/...' in your project.
// They are not included in this delivery since you already have them built.
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import HeroSection from '../online-quran-classes-usa/components/HeroSection'
import OnClassWhySection from './components/OnClassWhySection'
import OnClassAudienceSection from './components/OnClassAudienceSection'
import OnClassHowItWorks from './components/OnClassHowItWorks'
import OnClassCTASection from './components/OnClassCTASection'
import OnClassFAQSection from './components/OnClassFAQSection'
import TrialClassForm from '../online-quran-classes-usa/components/BookTrialUsPageForm'
import Courses from '../online-quran-classes-usa/components/Courses'

export const metadata = {
  title: 'Online Islamic Classes | Quran, Fiqh, Seerah & More – Free Trial',
  description:
    'Online Islamic classes for kids & adults covering Quran, Aqeedah, Fiqh, Seerah, and Hadith with certified teachers. Flexible schedule, 1-on-1 sessions. Book a free trial.',
  keywords: [
    'online islamic classes',
    'islamic studies online',
    'online islamic education',
  ],
  alternates: {
    canonical: '/online-islamic-classes',
  },
}

export default function OnlineIslamicClassesPage() {
  return (
    <main className="us-page">
      <Navbar />
      <HeroSection
        heading={'Online Islamic Classes — Complete Islamic Education from Home'}
        subheading={
          'Raising a well-rounded understanding of Islam takes more than just Quran reading — it takes grounding in belief, worship, character, and history. Our online Islamic classes bring together Quran, Aqeedah, Fiqh, Seerah, and Hadith into one structured program, taught live by qualified teachers, one-on-one, from wherever you are.'
        }
      />
      <TrialClassForm />
      <Courses />
      <OnClassWhySection />
      <OnClassAudienceSection />
      <OnClassHowItWorks />
      <OnClassCTASection />
      <OnClassFAQSection />
      <TrialClassForm />
      <Footer />
    </main>
  )
}
