import HowItWorks from "../../us-page/components/HowItWorks";

export const STEPS = [
  {
    number: "1st",
    title: "Book a Free Trial Class",
    description:
      "Share your current level and preferred timing.",
  },
  {
    number: "2nd",
    title: "Meet Your Female Teacher",
    description:
      "A comfortable first session to understand your goals.",
  },
  {
    number: "3rd",
    title: "Start Your Personal Plan",
    description:
      "Lessons built around your pace and schedule.",
  },
  {
    number: "4th",
    title: "Track Your Progress",
    description:
      "Regular feedback so your growth is always clear.",
  },
];


export default function LadyHowItWorks() {
    return <>
        <HowItWorks STEPS={STEPS}/>
        </>
}