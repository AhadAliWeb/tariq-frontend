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



export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <CtaBanner />
      <ExploreCourses />
      <WhyStudyWithUs />
      <WhatPeopleSay />
      <StudentTestimonials />
      <Pricing />
      <WhatsAppButton />
      <Footer />
      <Chat />
      <AutoPopup />
    </>
  );
}