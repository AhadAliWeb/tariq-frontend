import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            maxlength: [200, "Title cannot exceed 200 characters"],
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        excerpt: {
            type: String,
            required: [true, "Excerpt is required"],
            maxlength: [500, "Excerpt cannot exceed 500 characters"],
        },
        content: {
            type: String,
            required: [true, "Content is required"],
        },
        coverImage: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            required: [true, "Category is required"],
            trim: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        author: {
            type: String,
            default: "Admin",
        },
        status: {
            type: String,
            enum: ["draft", "published"],
            default: "draft",
        },
        views: {
            type: Number,
            default: 0,
        },
        readTime: {
            type: Number,
            default: 5,
        },
    },
    { timestamps: true }
);

// Auto-generate slug from title if not provided
BlogSchema.pre("validate", function () {
    if (this.title && !this.slug) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();
    }
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);