"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        setLoading(false);

        if (result?.error) {
            setError("Invalid email or password. Please try again.");
        } else {
            router.push("/admin");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen bg-[#0e2a1e] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-11 h-11 rounded-xl bg-[#2f8f68] flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-white font-bold text-lg leading-tight">Admin Panel</p>
                        <p className="text-[#80c9a6] text-xs">Content Manager</p>
                    </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h1 className="text-2xl font-bold text-[#12352a] mb-1">Welcome back</h1>
                    <p className="text-[#78716c] text-sm mb-6">Sign in to access the dashboard</p>

                    {error && (
                        <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-sm text-red-700">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-[#44403c] mb-1.5">
                                Email address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="admin@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-[#e7e5e4] bg-[#fafaf9] text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68] focus:border-transparent transition text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#44403c] mb-1.5">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-[#e7e5e4] bg-[#fafaf9] text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68] focus:border-transparent transition text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-[#2f8f68] hover:bg-[#27795a] disabled:bg-[#a8d5c2] text-white font-semibold rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Signing in…
                                </>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center text-[#4caf83] text-xs mt-6">
                    Access restricted to administrators only
                </p>
            </div>
        </div>
    );
}
