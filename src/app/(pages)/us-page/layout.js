import Footer from "@/components/Footer";
import UsNavbar from "./components/Navbar";

export default function UsPageLayout({ children }) {
    return (
        <>
            <UsNavbar />
            {children}
            <Footer />
        </>
    );
}