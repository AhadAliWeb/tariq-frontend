import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
    title: "Admin Dashboard",
    robots: "noindex, nofollow",
};

export default async function AdminLayout({ children }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <AuthProvider>
            <div className="flex min-h-screen bg-[#f5f5f4] font-sans">
                <AdminSidebar />
                <main className="flex-1 overflow-auto pt-14 lg:pt-0">
                    {children}
                </main>
            </div>
        </AuthProvider>
    );
}