"use client";
import { useState } from "react";

const DUMMY_LEADS = [
    { _id: "1", name: "Ahmed Hassan", email: "ahmed.hassan@gmail.com", phone: "+92 300 1234567", service: "Property Investment", message: "Looking to invest in commercial property in DHA Karachi. Budget around 2 crore.", status: "new", createdAt: "2025-04-20T09:30:00Z" },
    { _id: "2", name: "Sara Malik", email: "sara.malik@outlook.com", phone: "+92 321 9876543", service: "Rental Properties", message: "Need a 3-bedroom apartment in Clifton or Defence area. Monthly budget 80,000 PKR.", status: "contacted", createdAt: "2025-04-19T14:15:00Z" },
    { _id: "3", name: "Usman Ali", email: "usman.ali@yahoo.com", phone: "+92 333 5557890", service: "Property Management", message: "I have 3 properties in Bahria Town that need professional management.", status: "qualified", createdAt: "2025-04-18T11:00:00Z" },
    { _id: "4", name: "Fatima Khan", email: "fatima.khan@hotmail.com", phone: "+92 311 4445566", service: "Property Investment", message: "First time investor, interested in residential plots. Preferably in Karachi North.", status: "new", createdAt: "2025-04-17T16:45:00Z" },
    { _id: "5", name: "Bilal Chaudhry", email: "bilal.c@gmail.com", phone: "+92 345 2223344", service: "Commercial Real Estate", message: "Looking for office space in Gulshan-e-Iqbal, approximately 2000 sqft.", status: "closed", createdAt: "2025-04-15T10:20:00Z" },
    { _id: "6", name: "Nadia Siddiqui", email: "nadia.s@gmail.com", phone: "+92 312 6667788", service: "Rental Properties", message: "Want to rent out my apartment in Karachi, need guidance on pricing.", status: "contacted", createdAt: "2025-04-14T13:00:00Z" },
    { _id: "7", name: "Tariq Mehmood", email: "tariq.m@live.com", phone: "+92 302 8889900", service: "Finance & Mortgages", message: "Need help with mortgage options for purchasing a house. Income is 2 lakh/month.", status: "qualified", createdAt: "2025-04-12T09:15:00Z" },
    { _id: "8", name: "Zainab Raza", email: "zainab.raza@gmail.com", phone: "+92 322 1112233", service: "Property Investment", message: "Interested in buying plots for long-term investment. Have 50 lakh available.", status: "new", createdAt: "2025-04-10T17:30:00Z" },
];

const STATUS_CONFIG = {
    new: { label: "New", bg: "bg-blue-50", text: "text-blue-600" },
    contacted: { label: "Contacted", bg: "bg-[#faf6ed]", text: "text-[#c9a24a]" },
    qualified: { label: "Qualified", bg: "bg-[#eef7f2]", text: "text-[#2f8f68]" },
    closed: { label: "Closed", bg: "bg-[#f5f5f4]", text: "text-[#78716c]" },
};

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState(DUMMY_LEADS);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [selectedLead, setSelectedLead] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const filtered = leads.filter((l) => {
        const matchSearch =
            l.name.toLowerCase().includes(search.toLowerCase()) ||
            l.email.toLowerCase().includes(search.toLowerCase()) ||
            l.service.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter ? l.status === statusFilter : true;
        return matchSearch && matchStatus;
    });

    const handleDelete = (id) => {
        setLeads((prev) => prev.filter((l) => l._id !== id));
        setConfirmDelete(null);
        setSelectedLead(null);
    };

    const handleStatusChange = (id, status) => {
        setLeads((prev) => prev.map((l) => (l._id === id ? { ...l, status } : l)));
    };

    const counts = leads.reduce((acc, l) => {
        acc[l.status] = (acc[l.status] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-[#12352a]">Leads</h1>
                <p className="text-[#78716c] text-sm mt-1">
                    {leads.length} total leads · Demo data (connect your API to fetch real leads)
                </p>
            </div>

            {/* Status Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                    <button
                        key={key}
                        onClick={() => setStatusFilter(statusFilter === key ? "" : key)}
                        className={`rounded-xl p-4 text-left transition-all border-2 ${statusFilter === key ? "border-[#2f8f68] shadow-md" : "border-transparent"
                            } ${cfg.bg}`}
                    >
                        <p className={`text-2xl font-bold ${cfg.text}`}>{counts[key] || 0}</p>
                        <p className={`text-sm font-medium ${cfg.text} opacity-80`}>{cfg.label}</p>
                    </button>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a8a29e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search by name, email, or service..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#e7e5e4] rounded-xl text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68]"
                    />
                </div>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2.5 bg-white border border-[#e7e5e4] rounded-xl text-sm text-[#1c1917] focus:outline-none focus:ring-2 focus:ring-[#2f8f68]"
                >
                    <option value="">All Status</option>
                    {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                        <option key={k} value={k}>{v.label}</option>
                    ))}
                </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#e7e5e4] overflow-hidden">
                {filtered.length === 0 ? (
                    <div className="text-center py-16 text-[#a8a29e]">
                        <svg className="w-10 h-10 mx-auto mb-3 text-[#d6d3d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        No leads found
                    </div>
                ) : (
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#f5f5f4] bg-[#fafaf9]">
                                <th className="text-left px-6 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide">Name</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide hidden md:table-cell">Service</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide hidden lg:table-cell">Date</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide">Status</th>
                                <th className="text-right px-6 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f5f5f4]">
                            {filtered.map((lead) => (
                                <tr key={lead._id} className="hover:bg-[#fafaf9] transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-[#1c1917] text-sm">{lead.name}</p>
                                        <p className="text-xs text-[#a8a29e]">{lead.email}</p>
                                    </td>
                                    <td className="px-4 py-4 hidden md:table-cell">
                                        <span className="text-sm text-[#57534e]">{lead.service}</span>
                                    </td>
                                    <td className="px-4 py-4 hidden lg:table-cell text-sm text-[#78716c]">
                                        {new Date(lead.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                    </td>
                                    <td className="px-4 py-4">
                                        <select
                                            value={lead.status}
                                            onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                                            className={`px-2.5 py-1 rounded-full text-xs font-medium border-0 focus:outline-none cursor-pointer ${STATUS_CONFIG[lead.status]?.bg} ${STATUS_CONFIG[lead.status]?.text}`}
                                        >
                                            {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                                                <option key={k} value={k}>{v.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => setSelectedLead(lead)}
                                                className="p-1.5 text-[#a8a29e] hover:text-[#2f8f68] hover:bg-[#eef7f2] rounded-lg transition-colors"
                                                title="View details"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </button>
                                            <a
                                                href={`mailto:${lead.email}`}
                                                className="p-1.5 text-[#a8a29e] hover:text-[#c9a24a] hover:bg-[#faf6ed] rounded-lg transition-colors"
                                                title="Send email"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </a>
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
                )}
            </div>

            {/* Lead Detail Modal */}
            {selectedLead && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full">
                        <div className="flex items-start justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-[#eef7f2] flex items-center justify-center text-[#2f8f68] font-bold text-lg">
                                    {selectedLead.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1c1917]">{selectedLead.name}</h3>
                                    <p className="text-sm text-[#78716c]">{selectedLead.service}</p>
                                </div>
                            </div>
                            <button onClick={() => setSelectedLead(null)} className="text-[#a8a29e] hover:text-[#1c1917]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2 text-[#57534e]">
                                <svg className="w-4 h-4 text-[#a8a29e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <a href={`mailto:${selectedLead.email}`} className="text-[#2f8f68] underline">{selectedLead.email}</a>
                            </div>
                            <div className="flex items-center gap-2 text-[#57534e]">
                                <svg className="w-4 h-4 text-[#a8a29e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                {selectedLead.phone}
                            </div>
                            <div className="flex items-center gap-2 text-[#57534e]">
                                <svg className="w-4 h-4 text-[#a8a29e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                {new Date(selectedLead.createdAt).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                            </div>
                            <div className="mt-4 p-4 bg-[#fafaf9] rounded-xl border border-[#e7e5e4]">
                                <p className="text-xs font-semibold text-[#78716c] uppercase tracking-wide mb-2">Message</p>
                                <p className="text-[#44403c] leading-relaxed">{selectedLead.message}</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-5">
                            <a
                                href={`mailto:${selectedLead.email}`}
                                className="flex-1 text-center px-4 py-2.5 bg-[#2f8f68] text-white rounded-xl text-sm font-medium hover:bg-[#256f52] transition-colors"
                            >
                                Reply via Email
                            </a>
                            <button
                                onClick={() => setSelectedLead(null)}
                                className="px-4 py-2.5 border border-[#e7e5e4] rounded-xl text-sm hover:bg-[#f5f5f4] transition-colors"
                            >
                                Close
                            </button>
                        </div>
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
                            Remove <strong>{confirmDelete.name}</strong> from leads? This cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <button onClick={() => setConfirmDelete(null)} className="flex-1 px-4 py-2.5 border border-[#e7e5e4] rounded-xl text-sm hover:bg-[#f5f5f4] transition-colors">Cancel</button>
                            <button onClick={() => handleDelete(confirmDelete._id)} className="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}