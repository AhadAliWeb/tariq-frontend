import HowItWorks from '../../us-page/components/HowItWorks'

export const STEPS = [
  {
    number: '1st',
    title: 'Book a Free Trial Lesson',
    description: 'Share your current level and goals.',
  },
  {
    number: '2nd',
    title: 'Meet Your Teacher',
    description: 'A short assessment helps build your personal learning plan.',
  },
  {
    number: '3rd',
    title: 'Begin Regular Classes',
    description: 'Consistent, live sessions that fit your schedule.',
  },
  {
    number: '4th',
    title: 'Review Your Growth',
    description: 'Ongoing feedback so progress is always visible.',
  },
]

export default function LearnQuranHowItWorks() {
  return (
    <>
      <HowItWorks STEPS={STEPS} />
    </>
  )
}
