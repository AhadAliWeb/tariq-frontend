import HowItWorks from '../../online-quran-classes-usa/components/HowItWorks'

export const STEPS = [
  {
    number: '1st',
    title: 'Book a Free Trial Class',
    description: 'Tell us the ages and areas of interest (Quran, Fiqh, Seerah, etc.).',
  },
  {
    number: '2nd',
    title: 'Get Matched with a Teacher',
    description: 'Based on subject focus, gender preference, and schedule.',
  },
  {
    number: '3rd',
    title: 'Follow a Personalized Curriculum',
    description: 'Built around current knowledge level and goals.',
  },
  {
    number: '4th',
    title: 'Track Steady Progress',
    description: 'Ongoing feedback across every subject area covered.',
  },
]

export default function OnClassHowItWorks() {
  return (
    <>
      <HowItWorks STEPS={STEPS} />
    </>
  )
}
