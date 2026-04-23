import AuthProvider from "@/components/AuthProvider";

export const metadata = {
    title: "Admin Login",
    robots: "noindex, nofollow",
};

export default function LoginLayout({ children }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}
