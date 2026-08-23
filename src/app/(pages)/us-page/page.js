import React from 'react'
import HeroSection from './components/HeroSection'
import Slider from '@/components/Slider'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import TrialCountdown from './components/TrialCountDown'
import FAQ from './components/FAQ'

const page = () => {
  return (
    <>
        <HeroSection />
        <Slider />
        <HowItWorks />
        <Testimonials />
        <TrialCountdown />
        <FAQ />
    </>
  )
}

export default page