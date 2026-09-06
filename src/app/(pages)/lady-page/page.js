import Footer from "@/components/Footer"
import Navbar from "../us-page/components/Navbar"
import LadyCTASection from "./components/LadyCTASection"
import LadyCurriculumSection from "./components/LadyCurriculumSection"
import LadyFAQSection from "./components/LadyFAQSection"
import LadyFeaturesSection from "./components/LadyFeaturesSection"
import LadyHeroSection from "./components/LadyHeroSection"
import LadyLifestyleSection from "./components/LadyLifestyleSection"
import TrialClassForm from "../us-page/components/BookTrialUsPageForm"
import LadyHowItWorks from "./components/LadyHowItWorks"


export const metadata = {
  title: 'Online Quran Classes for Ladies | Female Teachers Only – Free Trial',
  description:
    'Private online Quran classes for ladies, taught exclusively by qualified female teachers. Comfortable, flexible, and judgment-free learning. Book your free trial today.',
  keywords: ['online quran classes for ladies', 'female quran teacher online', 'quran classes for women'],
  alternates: {
    canonical: '/online-quran-classes-for-ladies',
  },
  openGraph: {
    title: 'Online Quran Classes for Ladies | Female Teachers Only – Free Trial',
    description:
      'Private online Quran classes for ladies, taught exclusively by qualified female teachers. Comfortable, flexible, and judgment-free learning.',
    url: '/online-quran-classes-for-ladies',
    type: 'website',
  },
}

const page = () => {
  return (
    <>
        <Navbar />
        <LadyHeroSection />
        <TrialClassForm />
        <LadyFeaturesSection />
        <LadyHowItWorks />
        <LadyCurriculumSection />
        <LadyLifestyleSection />
        <LadyCTASection />
        <LadyFAQSection />
        <TrialClassForm />
        <Footer />
        {/* <TrialForm /> */}
        {/* <Slider /> */}
        {/* <Courses /> */}
        {/* <HowItWorks /> */}
        {/* <Testimonials /> */}
        {/* <TrialCountdown /> */}
        {/* <FAQ /> */}
        {/* <TrialForm /> */}
    </>
  )
}

export default page