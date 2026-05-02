"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const LIMIT = 10;

function useDebounce(value, delay = 400) {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const t = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(t);
    }, [value, delay]);
    return debounced;
}

function formatTime(dateStr) {
    return new Date(dateStr).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({ total: 0, totalPages: 1 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const debouncedSearch = useDebounce(search, 400);

    const fetchLeads = useCallback(async (searchVal, pageVal) => {
        setLoading(true);
        setError(null);
        try {
            const params = new URLSearchParams({
                search: searchVal,
                page: pageVal,
                limit: LIMIT,
            });
            const res = await fetch(`/api/leads?${params}`);
            if (!res.ok) throw new Error("Failed to fetch leads");
            const data = await res.json();
            setLeads(data.leads);
            setPagination(data.pagination);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Reset to page 1 when search changes
    useEffect(() => {
        setPage(1);
    }, [debouncedSearch]);

    useEffect(() => {
        fetchLeads(debouncedSearch, page);
    }, [debouncedSearch, page, fetchLeads]);

    const handleDelete = async () => {
        if (!confirmDelete) return;
        setDeleting(true);
        try {
            const res = await fetch(`/api/leads?id=${confirmDelete._id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Failed to delete lead");
            setConfirmDelete(null);
            // If deleting the last item on a page > 1, go back a page
            const newTotal = pagination.total - 1;
            const newTotalPages = Math.ceil(newTotal / LIMIT) || 1;
            const newPage = page > newTotalPages ? newTotalPages : page;
            if (newPage !== page) {
                setPage(newPage);
            } else {
                fetchLeads(debouncedSearch, page);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setDeleting(false);
        }
    };

    const totalPages = pagination.totalPages || 1;

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-[#12352a]">Leads</h1>
                <p className="text-[#78716c] text-sm mt-1">
                    {pagination.total ?? 0} total lead{pagination.total !== 1 ? "s" : ""}
                </p>
            </div>

            {/* Search */}
            <div className="mb-5">
                <div className="relative max-w-md">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a8a29e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search by phone, country, or code..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#e7e5e4] rounded-xl text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68]"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a8a29e] hover:text-[#1c1917]"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Error */}
            {error && (
                <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                    {error}
                </div>
            )}

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#e7e5e4] overflow-hidden">
                {loading ? (
                    <div className="flex items-center justify-center py-16 gap-2 text-[#a8a29e] text-sm">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Loading leads...
                    </div>
                ) : leads.length === 0 ? (
                    <div className="text-center py-16 text-[#a8a29e]">
                        <svg className="w-10 h-10 mx-auto mb-3 text-[#d6d3d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        No leads found
                    </div>
                ) : (
                    <>
                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full min-w-[500px]">
                                <thead>
                                    <tr className="border-b border-[#f5f5f4] bg-[#fafaf9]">
                                        <th className="text-left px-5 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide">Phone</th>
                                        <th className="text-left px-4 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide">Country</th>
                                        <th className="text-left px-4 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide">Code</th>
                                        <th className="text-left px-4 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide">Time</th>
                                        <th className="text-right px-5 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#f5f5f4]">
                                    {leads.map((lead) => (
                                        <tr key={lead._id} className="hover:bg-[#fafaf9] transition-colors">
                                            <td className="px-5 py-3.5 text-sm text-[#57534e] whitespace-nowrap">{lead.phone}</td>
                                            <td className="px-4 py-3.5 text-sm text-[#57534e]">{lead.country}</td>
                                            <td className="px-4 py-3.5">
                                                <span className="inline-block px-2 py-0.5 bg-[#eef7f2] text-[#2f8f68] text-xs font-medium rounded-full">
                                                    {lead.countryCode}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3.5 text-sm text-[#78716c] whitespace-nowrap">{formatTime(lead.createdAt)}</td>
                                            <td className="px-5 py-3.5">
                                                <div className="flex items-center justify-end">
                                                    <button
                                                        onClick={() => setConfirmDelete(lead)}
                                                        className="p-1.5 text-[#a8a29e] hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Delete lead"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Cards */}
                        <div className="md:hidden divide-y divide-[#f5f5f4]">
                            {leads.map((lead) => (
                                <div key={lead._id} className="p-4">
                                    <div className="flex items-start justify-between gap-2">
                                        <p className="font-medium text-[#1c1917] text-sm">{lead.phone}</p>
                                        <button
                                            onClick={() => setConfirmDelete(lead)}
                                            className="p-1.5 shrink-0 text-[#a8a29e] hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-[#57534e]">
                                        <div>
                                            <p className="text-[#a8a29e] font-medium mb-0.5">Country</p>
                                            <p>{lead.country}</p>
                                        </div>
                                        <div>
                                            <p className="text-[#a8a29e] font-medium mb-0.5">Code</p>
                                            <span className="inline-block px-2 py-0.5 bg-[#eef7f2] text-[#2f8f68] font-medium rounded-full">
                                                {lead.countryCode}
                                            </span>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-[#a8a29e] font-medium mb-0.5">Time</p>
                                            <p>{formatTime(lead.createdAt)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Pagination */}
            {!loading && totalPages > 1 && (
                <div className="flex items-center justify-between mt-4 text-sm">
                    <p className="text-[#78716c]">
                        Page {page} of {totalPages}
                    </p>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="px-3 py-1.5 rounded-lg border border-[#e7e5e4] text-[#57534e] hover:bg-[#f5f5f4] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            ← Prev
                        </button>

                        {/* Page numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                            .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                            .reduce((acc, p, idx, arr) => {
                                if (idx > 0 && p - arr[idx - 1] > 1) acc.push("...");
                                acc.push(p);
                                return acc;
                            }, [])
                            .map((item, idx) =>
                                item === "..." ? (
                                    <span key={`ellipsis-${idx}`} className="px-2 text-[#a8a29e]">…</span>
                                ) : (
                                    <button
                                        key={item}
                                        onClick={() => setPage(item)}
                                        className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${page === item
                                            ? "bg-[#2f8f68] text-white"
                                            : "border border-[#e7e5e4] text-[#57534e] hover:bg-[#f5f5f4]"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                )
                            )}

                        <button
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="px-3 py-1.5 rounded-lg border border-[#e7e5e4] text-[#57534e] hover:bg-[#f5f5f4] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            )}

            {/* Delete Confirm Modal */}
            {confirmDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full">
                        <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 className="text-center font-bold text-[#1c1917] mb-1">Delete Lead</h3>
                        <p className="text-center text-sm text-[#78716c] mb-6">
                            Remove <strong>{confirmDelete.phone}</strong> from leads? This cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setConfirmDelete(null)}
                                disabled={deleting}
                                className="flex-1 px-4 py-2.5 border border-[#e7e5e4] rounded-xl text-sm hover:bg-[#f5f5f4] transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={deleting}
                                className="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {deleting && (
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                )}
                                {deleting ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}