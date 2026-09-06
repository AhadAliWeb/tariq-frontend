import HowItWorks from "../../us-page/components/HowItWorks";

export const STEPS = [
  {
    number: "1st",
    title: "Book a Free Trial Class",
    description:
      "A relaxed first session, no pressure or assumptions.",
  },
  {
    number: "2nd",
    title: "Discuss Your Goals",
    description:
      "Reading fluency, Tajweed correction, Hifz, or understanding meaning.",
  },
  {
    number: "3rd",
    title: "Start Your Personalized Plan",
    description:
      "Built entirely around your current level.",
  },
  {
    number: "4th",
    title: "Keep Moving Forward",
    description:
      "Regular classes, real accountability, visible progress.",
  },
];




export default function AdultHowItWorks() {
    return <>
        <HowItWorks STEPS={STEPS}/>
        </>
}