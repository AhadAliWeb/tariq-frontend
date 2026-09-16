import HowItWorks from '../../online-quran-classes-usa/components/HowItWorks'

export const STEPS = [
  {
    number: '1st',
    title: 'Book a Free Trial Class',
    description: 'Discuss your current memorization level (if any) and your goals.',
  },
  {
    number: '2nd',
    title: 'Get a Personalized Plan',
    description: 'Daily memorization targets and a revision schedule built around you.',
  },
  {
    number: '3rd',
    title: 'Begin Daily Sessions',
    description: 'Consistent one-on-one classes with your certified Hafiz teacher.',
  },
  {
    number: '4th',
    title: 'Track Real Progress',
    description: 'Ongoing records of every Surah and Juz completed.',
  },
]

export default function HifzHowItWorks() {
  return (
    <>
      <HowItWorks STEPS={STEPS} />
    </>
  )
}
