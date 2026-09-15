// NOTE: Adjust these three import paths if your existing Navbar, HeroSection,
// and Footer live somewhere other than '@/components/...' in your project.
// They are not included in this delivery since you already have them built.
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import HeroSection from '../us-page/components/HeroSection'
import TeacherCredentialsBar from './components/TeacherCredentialsBar'
import TeacherFeaturesSection from './components/TeacherFeaturesSection'
import TeacherExpertiseSection from './components/TeacherExpertiseSection'
import TeacherMatchingSteps from './components/TeacherMatchingSteps'
import TeacherWhyItMattersSection from './components/TeacherWhyItMattersSection'
import TeacherCTASection from './components/TeacherCTASection'
import TeacherFAQSection from './components/TeacherFAQSection'
import TrialClassForm from '../us-page/components/BookTrialUsPageForm'

export const metadata = {
  title: 'Online Quran Teacher | Certified 1-on-1 Instructors – Free Trial Class',
  description:
    'Get matched with a certified online Quran teacher for personalized 1-on-1 lessons. Male & female teachers available, flexible schedule. Book a free trial today.',
  keywords: [
    'online quran teacher',
    'quran teacher online',
    'private quran tutor',
  ],
  alternates: {
    canonical: '/online-quran-teacher',
  },
}

export default function OnlineQuranTeacherPage() {
  return (
    <main className="us-page">
      <Navbar />
      <HeroSection
        heading={'Online Quran Teacher — Personalized, One-on-One Instruction'}
        subheading={
          "The right teacher makes all the difference in how quickly and confidently someone learns the Quran. Get matched with a dedicated online Quran teacher who builds every lesson around your exact level, pace, and goals."
        }
      />
      <TrialClassForm />
      <TeacherCredentialsBar />
      <TeacherFeaturesSection />
      <TeacherExpertiseSection />
      <TeacherMatchingSteps />
      <TeacherWhyItMattersSection />
      <TeacherCTASection />
      <TeacherFAQSection />
      <TrialClassForm />
      <Footer />
    </main>
  )
}
