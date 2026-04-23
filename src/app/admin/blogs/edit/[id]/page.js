import connectDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import BlogForm from "@/components/admin/BlogForm";
import { notFound } from "next/navigation";

export const metadata = { title: "Edit Blog — Admin" };

export default async function EditBlogPage({ params }) {
    const { id } = await params;
    await connectDB();
    const blog = await Blog.findById(id).lean();

    if (!blog) notFound();

    // Convert ObjectId and dates to plain strings for client component
    const plainBlog = {
        ...blog,
        _id: blog._id.toString(),
        createdAt: blog.createdAt?.toISOString(),
        updatedAt: blog.updatedAt?.toISOString(),
    };

    return <BlogForm mode="edit" initialData={plainBlog} />;
}