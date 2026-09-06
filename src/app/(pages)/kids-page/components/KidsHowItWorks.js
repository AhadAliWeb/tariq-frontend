import HowItWorks from "../../us-page/components/HowItWorks";

export const STEPS = [
  {
    number: "1st",
    title: "Book a Free Trial Class",
    description:
      "Tell us your child's age and current Quran level.",
  },
  {
    number: "2nd",
    title: "Meet the Teacher",
    description:
      "A relaxed first session to build comfort and assess starting point.",
  },
  {
    number: "3rd",
    title: "Begin Regular Classes",
    description:
      "Consistent weekly lessons matched to your child's pace.",
  },
  {
    number: "4th",
    title: "See the Progress",
    description:
      "Regular updates so you know exactly what's being learned.",
  },
];



export default function KidsHowItWorks() {
    return <>
        <HowItWorks STEPS={STEPS}/>
        </>
}