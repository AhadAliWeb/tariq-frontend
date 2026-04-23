import connectDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;

        // Support both MongoDB _id and slug
        const blog = id.length === 24
            ? await Blog.findById(id)
            : await Blog.findOne({ slug: id });

        if (!blog) {
            return NextResponse.json(
                { success: false, error: "Blog not found" },
                { status: 404 }
            );
        }

        // Increment views (fire and forget)
        Blog.findByIdAndUpdate(blog._id, { $inc: { views: 1 } }).exec();

        return NextResponse.json({ success: true, blog });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        const body = await request.json();

        // Recalculate read time if content changed
        if (body.content) {
            const wordCount = body.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
            body.readTime = Math.max(1, Math.ceil(wordCount / 200));
        }

        const blog = await Blog.findByIdAndUpdate(
            id,
            { ...body },
            { new: true, runValidators: true }
        );

        if (!blog) {
            return NextResponse.json(
                { success: false, error: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, blog });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;

        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            return NextResponse.json(
                { success: false, error: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Blog deleted successfully",
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}