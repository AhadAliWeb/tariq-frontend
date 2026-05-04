import connectDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import Link from "next/link";

export const metadata = {
    title: "Blog | Learn Quran Online",
    description: "Expert guidance, structured lessons, and clear learning pathways to help you understand and study the Quran with confidence.",
};

export const revalidate = 60; // ISR - revalidate every 60 seconds

async function getBlogs(searchParams) {
    await connectDB();
    const page = parseInt(searchParams?.page || "1");
    const limit = 9;
    const skip = (page - 1) * limit;

    const query = { status: "published" };

    const [blogs, total] = await Promise.all([
        Blog.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .select("-content")
            .lean(),
        Blog.countDocuments(query),
    ]);

    return { blogs, total, page, pages: Math.ceil(total / limit) };
}

export default async function BlogPage({ searchParams }) {
    const sp = await searchParams;
    const { blogs, total, page, pages } = await getBlogs(sp);

    return (
        <div className="min-h-screen bg-[#fafaf9]">
            {/* Hero */}
            <div className="bg-[#0e2a1e] py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 bg-[#2f8f68] text-[#80c9a6] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                        Insights & Resources
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                        Learn Quran <span className="text-[#c9a24a]">Online</span>
                    </h1>
                    <p className="text-[#80c9a6] text-lg max-w-2xl mx-auto">
                        Expert guidance, structured lessons, and clear learning pathways to help you understand and study the Quran with confidence.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Blog Grid */}
                {blogs.length === 0 ? (
                    <div className="text-center py-24 text-[#a8a29e]">
                        <p className="text-xl font-medium">No posts yet. Check back soon!</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                            {blogs.map((blog, i) => (
                                <BlogCard key={blog._id.toString()} blog={blog} featured={i === 0 && page === 1} />
                            ))}
                        </div>

                        {/* Pagination */}
                        {pages > 1 && (
                            <div className="flex items-center justify-center gap-2">
                                {page > 1 && (
                                    <Link
                                        href={`/blog?page=${page - 1}`}
                                        className="px-4 py-2 bg-white border border-[#e7e5e4] rounded-xl text-sm hover:bg-[#eef7f2] hover:border-[#2f8f68] transition-all"
                                    >
                                        ← Previous
                                    </Link>
                                )}
                                <span className="px-4 py-2 text-sm text-[#78716c]">
                                    Page {page} of {pages}
                                </span>
                                {page < pages && (
                                    <Link
                                        href={`/blog?page=${page + 1}`}
                                        className="px-4 py-2 bg-white border border-[#e7e5e4] rounded-xl text-sm hover:bg-[#eef7f2] hover:border-[#2f8f68] transition-all"
                                    >
                                        Next →
                                    </Link>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

function BlogCard({ blog, featured }) {
    return (
        <Link
            href={`/blog/${blog.slug}`}
            className={`group bg-white rounded-2xl overflow-hidden border border-[#e7e5e4] hover:border-[#2f8f68] hover:shadow-lg transition-all duration-300 flex flex-col ${featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
        >
            {/* Cover Image */}
            <div className="relative h-48 bg-gradient-to-br from-[#1e5942] to-[#0e2a1e] overflow-hidden">
                {blog.coverImage ? (
                    <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h2 className="font-bold text-[#12352a] text-base leading-snug mb-2 group-hover:text-[#2f8f68] transition-colors line-clamp-2">
                    {blog.title}
                </h2>
                <p className="text-[#78716c] text-sm leading-relaxed line-clamp-3 flex-1">{blog.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#f5f5f4]">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#eef7f2] rounded-full flex items-center justify-center text-[#2f8f68] text-xs font-bold">
                            {blog.author?.charAt(0) || "A"}
                        </div>
                        <div>
                            <p className="text-xs font-medium text-[#44403c]">{blog.author || "Admin"}</p>
                            <p className="text-xs text-[#a8a29e]">
                                {new Date(blog.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                            </p>
                        </div>
                    </div>
                    <span className="text-xs text-[#a8a29e] flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {blog.readTime} min
                    </span>
                </div>
            </div>
        </Link>
    );
}