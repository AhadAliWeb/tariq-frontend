// app/layout.tsx
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner"
import ExploreCourses from "@/components/ExploreCourses"
import WhyStudyWithUs from "@/components/WhyStudyWithUs"
import WhatPeopleSay from "@/components/WhatPeopleSay"
import StudentTestimonials from "@/components/StudentTestimonials"
import Pricing from "@/components/Pricing"
import WhatsAppButton from "@/components/WhatsappButton"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";
import AutoPopup from "@/components/AutoPopup";
import CountrySlider from "@/components/CountrySlider";
import AboutComponent from "@/components/AboutComponent";
import ContactStrip from "@/components/ContactStrip";
import ContactForm from "@/components/ContactForm";
import BottomStrip from "@/components/BottomStrip";
import CallButton from "@/components/CallButton";
import HowItWorks from "./(pages)/us-page/components/HowItWorks";


const STEPS = [
  {
    number: "1st",
    title: "Register",
    description:
      "Create your account in a couple of minutes with your name, phone, and email.",
  },
  {
    number: "2nd",
    title: "Demo Classes",
    description:
      "Sit in on a free demo class and meet the teacher before you commit.",
  },
  {
    number: "3rd",
    title: "Admission",
    description:
      "Liked the demo? Lock in your seat and finish the admission paperwork.",
  },
  {
    number: "4th",
    title: "Achieve Certificate",
    description:
      "Finish the course, sit the final assessment, and collect your certificate.",
  },
];


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
      <CountrySlider />
      <AboutComponent />
      <ContactForm />
      <WhyChooseUs />
      <HowItWorks STEPS={STEPS}/>
      <CtaBanner />
      <ExploreCourses />
      <WhyStudyWithUs />
      <WhatPeopleSay />
      <StudentTestimonials />
      {/* <Pricing /> */}
      {/* <CallButton /> */}
      <Footer />
      <Chat />
      <AutoPopup />
      <BottomStrip />
      <WhatsAppButton />
    </>
  );
}