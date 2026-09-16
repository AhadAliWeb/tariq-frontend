// app/(pages)/(default)/layout.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import Chat from "@/components/Chat";
import BottomStrip from "@/components/BottomStrip";

export default function MainLayout({ children }) {
    return (
        <>
            {children}
            <WhatsAppButton />
            <Chat />
            <BottomStrip />
        </>
    );
}