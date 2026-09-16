import HowItWorks from '../../online-quran-classes-usa/components/HowItWorks'

export const STEPS = [
  {
    number: '1st',
    title: 'Tell Us Your Goals',
    description: 'Age, current level, and what you want to focus on.',
  },
  {
    number: '2nd',
    title: 'Choose Your Preference',
    description: 'Male or female teacher, preferred timing.',
  },
  {
    number: '3rd',
    title: 'Meet Your Teacher',
    description: "A free trial class to confirm it's the right fit.",
  },
  {
    number: '4th',
    title: 'Continue with Confidence',
    description: 'Keep the same teacher for consistent, long-term progress.',
  },
]

export default function TeacherMatchingSteps() {
  return (
    <>
      <HowItWorks STEPS={STEPS} />
    </>
  )
}
