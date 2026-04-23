import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata = {
    title: "Admin Dashboard",
    robots: "noindex, nofollow",
};

export default function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-[#f5f5f4] font-sans">
            <AdminSidebar />
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    );
}