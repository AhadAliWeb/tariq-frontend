import React from 'react'
import HeroSection from './components/HeroSection'
import TrialForm from './components/BookTrialUsPageForm'
import Slider from '@/components/Slider'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import TrialCountdown from './components/TrialCountDown'
import FAQ from './components/FAQ'
import Courses from './components/Courses'

const page = () => {
  return (
    <>
        <HeroSection />
        <TrialForm />
        {/* <Slider /> */}
        <HowItWorks />
        <Courses />
        <Testimonials />
        {/* <TrialCountdown /> */}
        {/* <FAQ /> */}
        <TrialForm />
    </>
  )
}

export default page