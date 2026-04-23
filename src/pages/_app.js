"use client"
import "../app/globals.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google"
import WhatsAppButton from "@/components/WhatsappButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
}); 

export default function App({ Component, pageProps }) {
  return (
    <div className={`${montserrat.variable}`}>
      <WhatsAppButton />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}