"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminBlogsPage() {
    const router = useRouter();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [pagination, setPagination] = useState({ total: 0, pages: 1, page: 1 });
    const [deletingId, setDeletingId] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const fetchBlogs = useCallback(async (page = 1) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({ page, limit: 10 });
            if (statusFilter) params.set("status", statusFilter);
            const res = await fetch(`/api/blogs?${params}`);
            const data = await res.json();
            if (data.success) {
                setBlogs(data.blogs);
                setPagination(data.pagination);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [statusFilter]);

    useEffect(() => { fetchBlogs(1); }, [fetchBlogs]);

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
            const data = await res.json();
            if (data.success) {
                setBlogs((prev) => prev.filter((b) => b._id !== id));
                setPagination((p) => ({ ...p, total: p.total - 1 }));
            }
        } catch (err) {
            console.error(err);
        } finally {
            setDeletingId(null);
            setConfirmDelete(null);
        }
    };

    const handleToggleStatus = async (blog) => {
        const newStatus = blog.status === "published" ? "draft" : "published";
        try {
            const res = await fetch(`/api/blogs/${blog._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            const data = await res.json();
            if (data.success) {
                setBlogs((prev) =>
                    prev.map((b) => (b._id === blog._id ? { ...b, status: newStatus } : b))
                );
            }
        } catch (err) {
            console.error(err);
        }
    };

    const filtered = blogs.filter((b) =>
        b.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-[#12352a]">Blogs</h1>
                    <p className="text-[#78716c] text-sm mt-1">{pagination.total} total posts</p>
                </div>
                <Link
                    href="/admin/blogs/new"
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#2f8f68] text-white rounded-xl text-sm font-medium hover:bg-[#256f52] transition-colors shadow-sm"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New Blog
                </Link>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a8a29e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#e7e5e4] rounded-xl text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68] focus:border-transparent"
                    />
                </div>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2.5 bg-white border border-[#e7e5e4] rounded-xl text-sm text-[#1c1917] focus:outline-none focus:ring-2 focus:ring-[#2f8f68]"
                >
                    <option value="">All Status</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#e7e5e4] overflow-hidden">
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="w-8 h-8 border-2 border-[#2f8f68] border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-20 text-[#a8a29e]">
                        <svg className="w-12 h-12 mx-auto mb-3 text-[#d6d3d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="font-medium">No blogs found</p>
                        <Link href="/admin/blogs/new" className="text-sm text-[#2f8f68] underline mt-1 inline-block">
                            Create your first blog
                        </Link>
                    </div>
                ) : (
                    <>
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#f5f5f4] bg-[#fafaf9]">
                                    <th className="text-left px-6 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide">Title</th>
                                    <th className="text-left px-4 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide hidden sm:table-cell">Date</th>
                                    <th className="text-left px-4 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide">Status</th>
                                    <th className="text-right px-6 py-3 text-xs font-semibold text-[#78716c] uppercase tracking-wide">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f5f5f4]">
                                {filtered.map((blog) => (
                                    <tr key={blog._id} className="hover:bg-[#fafaf9] transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-medium text-[#1c1917] text-sm line-clamp-1 max-w-xs">{blog.title}</p>
                                            <p className="text-xs text-[#a8a29e] mt-0.5">{blog.readTime} min read</p>
                                        </td>
                                        <td className="px-4 py-4 text-sm text-[#78716c] hidden sm:table-cell">
                                            {new Date(blog.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                        </td>
                                        <td className="px-4 py-4">
                                            <button
                                                onClick={() => handleToggleStatus(blog)}
                                                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${blog.status === "published"
                                                    ? "bg-[#eef7f2] text-[#2f8f68] hover:bg-[#d9efe3]"
                                                    : "bg-[#faf6ed] text-[#c9a24a] hover:bg-[#f4ead1]"
                                                    }`}
                                                title="Click to toggle status"
                                            >
                                                {blog.status}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/blog/${blog.slug}`}
                                                    target="_blank"
                                                    className="p-1.5 text-[#a8a29e] hover:text-[#2f8f68] hover:bg-[#eef7f2] rounded-lg transition-colors"
                                                    title="View post"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </Link>
                                                <Link
                                                    href={`/admin/blogs/edit/${blog._id}`}
                                                    className="p-1.5 text-[#a8a29e] hover:text-[#c9a24a] hover:bg-[#faf6ed] rounded-lg transition-colors"
                                                    title="Edit"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </Link>
                                                <button
                                                    onClick={() => setConfirmDelete(blog)}
                                                    className="p-1.5 text-[#a8a29e] hover:text-[#dc2626] hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Delete"
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

                        {/* Pagination */}
                        {pagination.pages > 1 && (
                            <div className="flex items-center justify-between px-6 py-4 border-t border-[#f5f5f4]">
                                <p className="text-sm text-[#78716c]">
                                    Page {pagination.page} of {pagination.pages}
                                </p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => fetchBlogs(pagination.page - 1)}
                                        disabled={pagination.page === 1}
                                        className="px-3 py-1.5 text-sm border border-[#e7e5e4] rounded-lg disabled:opacity-40 hover:bg-[#f5f5f4] transition-colors"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => fetchBlogs(pagination.page + 1)}
                                        disabled={pagination.page === pagination.pages}
                                        className="px-3 py-1.5 text-sm border border-[#e7e5e4] rounded-lg disabled:opacity-40 hover:bg-[#f5f5f4] transition-colors"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Delete Confirm Modal */}
            {confirmDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full">
                        <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 className="text-center font-bold text-[#1c1917] mb-1">Delete Blog</h3>
                        <p className="text-center text-sm text-[#78716c] mb-6">
                            Are you sure you want to delete <strong>"{confirmDelete.title}"</strong>? This action cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setConfirmDelete(null)}
                                className="flex-1 px-4 py-2.5 border border-[#e7e5e4] rounded-xl text-sm font-medium hover:bg-[#f5f5f4] transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleDelete(confirmDelete._id)}
                                disabled={deletingId === confirmDelete._id}
                                className="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
                            >
                                {deletingId === confirmDelete._id ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}