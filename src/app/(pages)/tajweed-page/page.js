import Navbar from "../us-page/components/Navbar"
import HeroSection from '../us-page/components/HeroSection' // adjust to your actual import path
import TajweedCurriculumSection from './components/TajweedCurriculumSection'
import TajweedBenefitsSection from './components/TajweedBenefitsSection'
import TajweedAudienceSection from './components/TajweedAudienceSection'
import TajweedCTASection from './components/TajweedCTASection'
import TajweedFAQSection from './components/TajweedFAQSection'
import Footer from '@/components/Footer' // adjust to your actual import path
import TajweedHowItWorks from "./components/TajweedHowItWorks"
import TrialClassForm from "../us-page/components/BookTrialUsPageForm"

export const metadata = {
  title: 'Online Tajweed Classes | Learn Correct Quran Pronunciation – Free Trial',
  description:
    'Master Quran pronunciation with our online Tajweed classes. Certified teachers, structured rules-based learning, and personalized correction. Book a free trial today.',
  keywords: ['online tajweed classes', 'learn tajweed online', 'tajweed course online'],
  alternates: {
    canonical: '/online-tajweed-classes',
  },
  openGraph: {
    title: 'Online Tajweed Classes | Learn Correct Quran Pronunciation – Free Trial',
    description:
      'Master Quran pronunciation with our online Tajweed classes. Certified teachers, structured rules-based learning, and personalized correction.',
    url: '/online-tajweed-classes',
    type: 'website',
  },
}

export default function OnlineTajweedClassesPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection heading={"Online Tajweed Classes | Learn to Recite the Quran Correctly"} subheading={"Reciting the Quran with proper Tajweed isn't just about sounding good — it's about reciting the way it was revealed, with correct pronunciation, articulation points (Makharij), and rules that carry real meaning."}/>
        <TrialClassForm />
        <TajweedCurriculumSection />
        <TajweedBenefitsSection />
        <TajweedAudienceSection />
        <TajweedHowItWorks />
        <TajweedCTASection />
        <TajweedFAQSection />
        <TrialClassForm />
      </main>
      <Footer />
    </>
  )
}
