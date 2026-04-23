import connectDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import Link from "next/link";

async function getStats() {
    await connectDB();
    const [total, published, drafts, totalViews] = await Promise.all([
        Blog.countDocuments(),
        Blog.countDocuments({ status: "published" }),
        Blog.countDocuments({ status: "draft" }),
        Blog.aggregate([{ $group: { _id: null, views: { $sum: "$views" } } }]),
    ]);
    const recentBlogs = await Blog.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("title status views createdAt category");

    return {
        total,
        published,
        drafts,
        totalViews: totalViews[0]?.views || 0,
        recentBlogs,
    };
}

const StatCard = ({ label, value, icon, color, sub }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e7e5e4] hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-sm text-[#78716c] font-medium mb-1">{label}</p>
                <p className={`text-3xl font-bold ${color}`}>{value}</p>
                {sub && <p className="text-xs text-[#a8a29e] mt-1">{sub}</p>}
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color === "text-[#2f8f68]" ? "bg-[#eef7f2]" : color === "text-[#c9a24a]" ? "bg-[#faf6ed]" : "bg-[#f5f5f4]"}`}>
                {icon}
            </div>
        </div>
    </div>
);

export default async function AdminDashboard() {
    const stats = await getStats();

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-[#12352a]">Dashboard</h1>
                <p className="text-[#78716c] text-sm mt-1">Welcome back — here's what's happening.</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
                <StatCard
                    label="Total Blogs"
                    value={stats.total}
                    color="text-[#2f8f68]"
                    sub="All time"
                    icon={
                        <svg className="w-6 h-6 text-[#2f8f68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    }
                />
                <StatCard
                    label="Published"
                    value={stats.published}
                    color="text-[#2f8f68]"
                    sub="Live on site"
                    icon={
                        <svg className="w-6 h-6 text-[#2f8f68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                />
                <StatCard
                    label="Drafts"
                    value={stats.drafts}
                    color="text-[#c9a24a]"
                    sub="Pending review"
                    icon={
                        <svg className="w-6 h-6 text-[#c9a24a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    }
                />
                <StatCard
                    label="Total Views"
                    value={stats.totalViews.toLocaleString()}
                    color="text-[#44403c]"
                    sub="Across all posts"
                    icon={
                        <svg className="w-6 h-6 text-[#78716c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    }
                />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Recent Blogs */}
                <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-[#e7e5e4] overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-[#f5f5f4]">
                        <h2 className="font-semibold text-[#1c1917]">Recent Blogs</h2>
                        <Link href="/admin/blogs" className="text-sm text-[#2f8f68] hover:text-[#1e5942] font-medium">
                            View all →
                        </Link>
                    </div>
                    <div className="divide-y divide-[#f5f5f4]">
                        {stats.recentBlogs.length === 0 ? (
                            <div className="px-6 py-10 text-center text-[#a8a29e] text-sm">
                                No blogs yet.{" "}
                                <Link href="/admin/blogs/new" className="text-[#2f8f68] underline">
                                    Create your first blog
                                </Link>
                            </div>
                        ) : (
                            stats.recentBlogs.map((blog) => (
                                <div key={blog._id} className="px-6 py-4 flex items-center justify-between hover:bg-[#fafaf9] transition-colors">
                                    <div className="flex-1 min-w-0 mr-4">
                                        <p className="font-medium text-[#1c1917] text-sm truncate">{blog.title}</p>
                                        <p className="text-xs text-[#a8a29e] mt-0.5">
                                            {blog.category} · {new Date(blog.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-xs text-[#78716c]">{blog.views} views</span>
                                        <span
                                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${blog.status === "published"
                                                ? "bg-[#eef7f2] text-[#2f8f68]"
                                                : "bg-[#faf6ed] text-[#c9a24a]"
                                                }`}
                                        >
                                            {blog.status}
                                        </span>
                                        <Link
                                            href={`/admin/blogs/edit/${blog._id}`}
                                            className="text-[#a8a29e] hover:text-[#2f8f68] transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#e7e5e4] p-6">
                    <h2 className="font-semibold text-[#1c1917] mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                        <Link
                            href="/admin/blogs/new"
                            className="flex items-center gap-3 w-full px-4 py-3 bg-[#2f8f68] text-white rounded-xl text-sm font-medium hover:bg-[#256f52] transition-colors shadow-sm"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Write New Blog
                        </Link>
                        <Link
                            href="/admin/blogs"
                            className="flex items-center gap-3 w-full px-4 py-3 bg-[#eef7f2] text-[#256f52] rounded-xl text-sm font-medium hover:bg-[#d9efe3] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                            Manage Blogs
                        </Link>
                        <Link
                            href="/admin/leads"
                            className="flex items-center gap-3 w-full px-4 py-3 bg-[#faf6ed] text-[#70541d] rounded-xl text-sm font-medium hover:bg-[#f4ead1] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            View Leads
                        </Link>
                        <Link
                            href="/blog"
                            target="_blank"
                            className="flex items-center gap-3 w-full px-4 py-3 bg-[#f5f5f4] text-[#57534e] rounded-xl text-sm font-medium hover:bg-[#e7e5e4] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Preview Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}