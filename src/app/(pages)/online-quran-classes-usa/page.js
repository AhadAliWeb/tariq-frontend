import React from 'react'
import HeroSection from './components/HeroSection'
import TrialForm from './components/BookTrialUsPageForm'
import Slider from '@/components/Slider'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import TrialCountdown from './components/TrialCountDown'
import FAQ from './components/FAQ'
import Courses from './components/Courses'

const STEPS = [
  {
    number: "1st",
    title: "Register",
    description:
      "Create your account in a couple of minutes with your name, phone, and email.",
  },
  {
    number: "2nd",
    title: "Demo Classes",
    description:
      "Sit in on a free demo class and meet the teacher before you commit.",
  },
  {
    number: "3rd",
    title: "Admission",
    description:
      "Liked the demo? Lock in your seat and finish the admission paperwork.",
  },
  {
    number: "4th",
    title: "Achieve Certificate",
    description:
      "Finish the course, sit the final assessment, and collect your certificate.",
  },
];

const page = () => {
  return (
    <>
        <HeroSection />
        <TrialForm />
        {/* <Slider /> */}
        <Courses />
        <HowItWorks STEPS={STEPS}/>
        <Testimonials />
        {/* <TrialCountdown /> */}
        {/* <FAQ /> */}
        <TrialForm />
    </>
  )
}

export default page