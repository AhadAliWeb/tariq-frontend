import HowItWorks from "../../us-page/components/HowItWorks";

export const STEPS = [
  {
    number: "1st",
    title: "Book a Free Trial Class",
    description: "A short assessment of your current recitation.",
  },
  {
    number: "2nd",
    title: "Get a Personalized Tajweed Plan",
    description: "Focused on the specific rules you need most.",
  },
  {
    number: "3rd",
    title: "Practice with Real-Time Correction",
    description: "Your teacher corrects every session as you recite.",
  },
  {
    number: "4th",
    title: "Track Measurable Improvement",
    description: "Clear milestones as each rule becomes second nature.",
  },
];



export default function TajweedHowItWorks() {
    return <>
        <HowItWorks STEPS={STEPS}/>
        </>
}