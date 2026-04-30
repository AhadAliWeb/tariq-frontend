"use client";
import { useState } from "react";

export default function AddAdminPage() {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setError("");
        setSuccess("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (form.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/admin/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    password: form.password,
                }),
            });

            const data = await res.json();

            if (!data.success) {
                setError(data.error || "Something went wrong. Please try again.");
            } else {
                setSuccess(`Admin account for "${data.admin.name}" (${data.admin.email}) was created successfully.`);
                setForm({ name: "", email: "", password: "", confirmPassword: "" });
            }
        } catch {
            setError("Network error. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 min-h-screen">
            {/* Page Header */}
            <div className="mb-6 md:mb-8">
                <h1 className="text-xl sm:text-2xl font-bold text-[#12352a]">Add Admin</h1>
                <p className="text-[#78716c] text-sm mt-1">
                    Create a new administrator account with full dashboard access.
                </p>
            </div>

            <div className="max-w-xl w-full">
                {/* Success Banner */}
                {success && (
                    <div className="mb-5 px-4 py-3 bg-[#eef7f2] border border-[#a3d9be] rounded-xl flex items-start gap-3 text-sm text-[#1a5c3a]">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#2f8f68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{success}</span>
                    </div>
                )}

                {/* Error Banner */}
                {error && (
                    <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-sm text-red-700">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{error}</span>
                    </div>
                )}

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#e7e5e4] p-5 sm:p-7">
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Full Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-[#44403c] mb-1.5">
                                Full Name <span className="text-red-400">*</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="e.g. Sarah Khan"
                                className="w-full px-4 py-2.5 rounded-lg border border-[#e7e5e4] bg-[#fafaf9] text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68] focus:border-transparent transition text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#44403c] mb-1.5">
                                Email Address <span className="text-red-400">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="admin@example.com"
                                className="w-full px-4 py-2.5 rounded-lg border border-[#e7e5e4] bg-[#fafaf9] text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68] focus:border-transparent transition text-sm"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-[#44403c] mb-1.5">
                                Password <span className="text-red-400">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Min. 6 characters"
                                    className="w-full px-4 py-2.5 pr-11 rounded-lg border border-[#e7e5e4] bg-[#fafaf9] text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68] focus:border-transparent transition text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a8a29e] hover:text-[#78716c] transition"
                                    tabIndex={-1}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#44403c] mb-1.5">
                                Confirm Password <span className="text-red-400">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirm ? "text" : "password"}
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    placeholder="Re-enter password"
                                    className={`w-full px-4 py-2.5 pr-11 rounded-lg border bg-[#fafaf9] text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:border-transparent transition text-sm ${form.confirmPassword && form.password !== form.confirmPassword
                                            ? "border-red-300 focus:ring-red-300"
                                            : "border-[#e7e5e4] focus:ring-[#2f8f68]"
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a8a29e] hover:text-[#78716c] transition"
                                    tabIndex={-1}
                                    aria-label={showConfirm ? "Hide password" : "Show password"}
                                >
                                    {showConfirm ? (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {form.confirmPassword && form.password !== form.confirmPassword && (
                                <p className="mt-1.5 text-xs text-red-500">Passwords do not match.</p>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-[#f0efee] pt-1" />

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-[#2f8f68] hover:bg-[#27795a] disabled:bg-[#a8d5c2] disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Creating account…
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                    Create Admin Account
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Info note */}
                <p className="text-xs text-[#a8a29e] mt-4 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    New admins will have full access to this dashboard. Only share credentials with trusted people.
                </p>
            </div>
        </div>
    );
}