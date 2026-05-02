"use client";
import { Plus, UserPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function LogoutButton() {
    const handleLogout = async () => {
        // Unsubscribe from push notifications before signing out
        try {
            if ("serviceWorker" in navigator && "PushManager" in window) {
                const registration = await navigator.serviceWorker.ready;
                const subscription = await registration.pushManager.getSubscription();

                if (subscription) {
                    // Remove from server
                    await fetch("/api/push/unsubscribe", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ endpoint: subscription.endpoint }),
                    });

                    // Unsubscribe in browser
                    await subscription.unsubscribe();
                }
            }
        } catch (err) {
            console.error("Failed to unsubscribe from push:", err);
            // Don't block logout even if unsubscribe fails
        }

        const { signOut } = await import("next-auth/react");
        await signOut({ callbackUrl: "/login" });
    };

    return (
        <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full text-xs text-[#80c9a6] hover:text-red-400 transition-colors px-2 py-1.5 rounded-lg hover:bg-[#184636] group"
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
        </button>
    );
}

const navItems = [
    {
        label: "Dashboard",
        href: "/admin",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        label: "Blogs",
        href: "/admin/blogs",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
        ),
    },
    {
        label: "New Blog",
        href: "/admin/blogs/new",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
        ),
    },
    {
        label: "Leads",
        href: "/admin/leads",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    // {
    //     label: "Add New Admin",
    //     href: "/admin/add-admin",
    //     icon: (
    //         <UserPlus />
    //     )
    // }
];

function SidebarContent({ pathname, onNavClick }) {
    return (
        <>
            {/* Logo */}
            <div className="px-6 py-6 border-b border-[#1e5942]">
                <Link href="/admin" className="flex items-center gap-3" onClick={onNavClick}>
                    <div className="w-9 h-9 rounded-lg bg-[#2f8f68] flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm leading-tight">Admin Panel</p>
                        <p className="text-[#80c9a6] text-xs">Content Manager</p>
                    </div>
                </Link>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-1">
                {navItems.map((item) => {
                    const isActive =
                        item.href === "/admin"
                            ? pathname === "/admin"
                            : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onNavClick}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${isActive
                                ? "bg-[#2f8f68] text-white shadow-md"
                                : "text-[#80c9a6] hover:bg-[#184636] hover:text-white"
                                }`}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="px-4 py-4 border-t border-[#1e5942] space-y-2">
                <Link
                    href="/"
                    target="_blank"
                    className="flex items-center gap-2 text-xs text-[#4caf83] hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-[#184636]"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Website
                </Link>
                <LogoutButton />
            </div>
        </>
    );
}

export default function AdminSidebar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile top bar */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-[#0e2a1e] border-b border-[#1e5942]">
                <Link href="/admin" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#2f8f68] flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <span className="text-white font-bold text-sm">Admin Panel</span>
                </Link>
                <button
                    onClick={() => setMobileOpen(true)}
                    className="p-2 text-[#80c9a6] hover:text-white rounded-lg hover:bg-[#184636] transition-colors"
                    aria-label="Open menu"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile drawer overlay */}
            {mobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Mobile drawer */}
            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-64 z-50 bg-[#0e2a1e] flex flex-col shadow-2xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close button */}
                <button
                    onClick={() => setMobileOpen(false)}
                    className="absolute top-4 right-4 p-1.5 text-[#80c9a6] hover:text-white rounded-lg hover:bg-[#184636] transition-colors"
                    aria-label="Close menu"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <SidebarContent pathname={pathname} onNavClick={() => setMobileOpen(false)} />
            </div>

            {/* Desktop sidebar — always visible on lg+ */}
            <aside className="hidden lg:flex w-64 min-h-screen bg-[#0e2a1e] flex-col shadow-2xl shrink-0">
                <SidebarContent pathname={pathname} onNavClick={undefined} />
            </aside>
        </>
    );
}