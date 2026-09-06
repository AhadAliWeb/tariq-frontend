// app/(pages)/(default)/layout.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import Chat from "@/components/Chat";

export default function MainLayout({ children }) {
    return (
        <>
            <WhatsAppButton />
            <Navbar />
            {children}
            <Footer />
            <Chat />
        </>
    );
}