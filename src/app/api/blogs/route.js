import connectDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const status = searchParams.get("status");
        const category = searchParams.get("category");
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");
        const skip = (page - 1) * limit;

        const query = {};
        if (status) query.status = status;
        if (category) query.category = category;

        const [blogs, total] = await Promise.all([
            Blog.find(query)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .select("-content"),
            Blog.countDocuments(query),
        ]);

        return NextResponse.json({
            success: true,
            blogs,
            pagination: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();


        // Auto-calculate read time from content (avg 200 words/min)
        if (body.content) {
            const wordCount = body.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
            body.readTime = Math.max(1, Math.ceil(wordCount / 200));
        }

        // Generate unique slug
        const baseSlug = (body.slug || body.title)
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();

        let slug = baseSlug;
        let counter = 1;
        while (await Blog.findOne({ slug })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }
        body.slug = slug;

        const blog = await Blog.create(body);
        return NextResponse.json({ success: true, blog }, { status: 201 });
    } catch (error) {

        console.log(error);


        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}