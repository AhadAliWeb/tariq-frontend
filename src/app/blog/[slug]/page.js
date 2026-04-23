import connectDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./blog-content.css"

export const revalidate = 60;

export async function generateMetadata({ params }) {
    const { slug } = await params;
    await connectDB();
    const blog = await Blog.findOne({ slug, status: "published" }).select("title excerpt coverImage").lean();
    if (!blog) return { title: "Post Not Found" };
    return {
        title: `${blog.title} | Blog`,
        description: blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: blog.coverImage ? [blog.coverImage] : [],
        },
    };
}

async function getBlog(slug) {
    await connectDB();
    const blog = await Blog.findOne({ slug, status: "published" }).lean();
    if (!blog) return null;

    // Get related posts
    const related = await Blog.find({
        status: "published",
        _id: { $ne: blog._id },
    })
        .limit(3)
        .select("-content")
        .lean();

    return { blog, related };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const data = await getBlog(slug);

    if (!data) notFound();
    const { blog, related } = data;

    return (
        <div className="min-h-screen bg-[#fafaf9]">
            {/* Hero */}
            <div className="relative bg-[#0e2a1e] overflow-hidden">
                {blog.coverImage && (
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{ backgroundImage: `url(${blog.coverImage})` }}
                    />
                )}
                <div className="relative max-w-4xl mx-auto px-4 py-16">
                    <div className="mb-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-1.5 text-[#4caf83] hover:text-white text-sm transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Blog
                        </Link>
                    </div>

                    <span className="inline-block px-3 py-1 bg-[#2f8f68] text-[#80c9a6] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                        Blog Post
                    </span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 font-heading">
                        {blog.title}
                    </h1>

                    <p className="text-[#80c9a6] text-lg mb-6 leading-relaxed">{blog.excerpt}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#4caf83]">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#2f8f68] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {blog.author?.charAt(0) || "A"}
                            </div>
                            <span>{blog.author || "Admin"}</span>
                        </div>
                        <span>·</span>
                        <span>
                            {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>
                        <span>·</span>
                        <span>{blog.readTime} min read</span>
                        {/* <span>·</span> */}
                        {/* <span>{blog.views?.toLocaleString() || 0} views</span> */}
                    </div>
                </div>
            </div>

            {/* Cover Image */}
            {blog.coverImage && (
                <div className="max-w-4xl mx-auto px-4 -mt-8 mb-0 relative z-10">
                    <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
                    />
                </div>
            )}

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Article */}
                    <article className="lg:col-span-3">
                        <div
                            className="blog-content bg-white rounded-2xl p-8 shadow-sm border border-[#e7e5e4]"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        {/* Tags */}
                        {blog.tags?.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 bg-[#eef7f2] text-[#256f52] text-xs font-medium rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-5">
                        {/* Author Card */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e7e5e4]">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#2f8f68] to-[#1e5942] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                                {blog.author?.charAt(0) || "A"}
                            </div>
                            <p className="font-semibold text-[#1c1917] text-center text-sm">{blog.author || "Admin"}</p>
                        </div>

                        {/* Share */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e7e5e4]">
                            <h3 className="font-semibold text-[#1c1917] text-sm mb-3">Share this post</h3>
                            <div className="flex gap-2">
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`/blog/${blog.slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2 bg-[#1da1f2]/10 text-[#1da1f2] rounded-lg text-xs font-medium text-center hover:bg-[#1da1f2]/20 transition-colors"
                                >
                                    Twitter
                                </a>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`/blog/${blog.slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2 bg-[#0077b5]/10 text-[#0077b5] rounded-lg text-xs font-medium text-center hover:bg-[#0077b5]/20 transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Related Posts */}
                {related.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-[#12352a] mb-6">Related Posts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {related.map((post) => (
                                <Link
                                    key={post._id.toString()}
                                    href={`/blog/${post.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden border border-[#e7e5e4] hover:border-[#2f8f68] hover:shadow-md transition-all"
                                >
                                    <div className="h-36 bg-gradient-to-br from-[#1e5942] to-[#0e2a1e] overflow-hidden">
                                        {post.coverImage && (
                                            <img
                                                src={post.coverImage}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-[#1c1917] text-sm mt-1 line-clamp-2 group-hover:text-[#2f8f68] transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-xs text-[#a8a29e] mt-2">{post.readTime} min read</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}