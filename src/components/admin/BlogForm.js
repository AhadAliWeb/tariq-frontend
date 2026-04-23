"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("./RichTextEditor"), { ssr: false });

const Field = ({ label, required, children, hint }) => (
    <div>
        <label className="block text-sm font-medium text-[#44403c] mb-1.5">
            {label} {required && <span className="text-red-400">*</span>}
        </label>
        {children}
        {hint && <p className="text-xs text-[#a8a29e] mt-1">{hint}</p>}
    </div>
);

export default function BlogForm({ initialData = {}, mode = "create" }) {
    const router = useRouter();
    const fileInputRef = useRef(null);

    const [form, setForm] = useState({
        title: initialData.title || "",
        slug: initialData.slug || "",
        excerpt: initialData.excerpt || "",
        content: initialData.content || "",
        tags: initialData.tags?.join(", ") || "",
        author: initialData.author || "Admin",
        status: initialData.status || "draft",
        coverImage: initialData.coverImage || "",
    });

    const [imagePreview, setImagePreview] = useState(initialData.coverImage || "");
    const [uploading, setUploading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState(null);

    const showToast = (msg, type = "success") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3500);
    };

    const handleChange = (field, value) => {
        setForm((prev) => {
            const next = { ...prev, [field]: value };
            // Auto-generate slug from title
            if (field === "title" && mode === "create") {
                next.slug = value
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-")
                    .replace(/-+/g, "-")
                    .trim();
            }
            return next;
        });
        if (errors[field]) setErrors((e) => ({ ...e, [field]: null }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Show local preview immediately
        const localUrl = URL.createObjectURL(file);
        setImagePreview(localUrl);

        setUploading(true);
        try {
            const fd = new FormData();
            fd.append("file", file);
            const res = await fetch("/api/upload", { method: "POST", body: fd });
            const data = await res.json();
            if (data.success) {
                setForm((prev) => ({ ...prev, coverImage: data.url }));
                setImagePreview(data.url);
                showToast("Image uploaded successfully!");
            } else {
                showToast(data.error || "Upload failed", "error");
                setImagePreview("");
            }
        } catch {
            showToast("Upload failed", "error");
            setImagePreview("");
        } finally {
            setUploading(false);
        }
    };

    const validate = () => {
        const errs = {};
        if (!form.title.trim()) errs.title = "Title is required";
        if (!form.excerpt.trim()) errs.excerpt = "Excerpt is required";
        if (!form.content || form.content === "<p></p>") errs.content = "Content is required";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async (status) => {
        if (!validate()) return;
        setSaving(true);
        try {
            const payload = {
                ...form,
                status,
                tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
            };

            const url = mode === "create" ? "/api/blogs" : `/api/blogs/${initialData._id}`;
            const method = mode === "create" ? "POST" : "PUT";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (data.success) {
                showToast(mode === "create" ? "Blog created!" : "Blog updated!");
                setTimeout(() => router.push("/admin/blogs"), 1000);
            } else {
                showToast(data.error || "Something went wrong", "error");
            }
        } catch {
            showToast("Network error", "error");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="p-8 max-w-5xl mx-auto">
            {/* Toast */}
            {toast && (
                <div
                    className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-xl text-sm font-medium flex items-center gap-2 transition-all ${toast.type === "error" ? "bg-red-500 text-white" : "bg-[#2f8f68] text-white"
                        }`}
                >
                    {toast.type === "error" ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                    {toast.msg}
                </div>
            )}

            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-white rounded-xl transition-colors text-[#78716c]"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-[#12352a]">
                        {mode === "create" ? "New Blog Post" : "Edit Blog Post"}
                    </h1>
                    <p className="text-sm text-[#78716c]">
                        {mode === "create" ? "Write and publish a new blog" : `Editing: ${initialData.title}`}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="xl:col-span-2 space-y-6">
                    {/* Title */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e7e5e4]">
                        <Field label="Title" required>
                            <input
                                type="text"
                                value={form.title}
                                onChange={(e) => handleChange("title", e.target.value)}
                                placeholder="Enter a compelling blog title..."
                                className={`w-full px-4 py-3 border rounded-xl text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68] text-base font-medium ${errors.title ? "border-red-400" : "border-[#e7e5e4]"}`}
                            />
                            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                        </Field>

                        <div className="mt-4">
                            <Field label="URL Slug" hint="Auto-generated from title. Edit if needed.">
                                <div className="flex items-center border border-[#e7e5e4] rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#2f8f68]">
                                    <span className="px-3 py-3 bg-[#f5f5f4] text-[#a8a29e] text-sm border-r border-[#e7e5e4]">/blog/</span>
                                    <input
                                        type="text"
                                        value={form.slug}
                                        onChange={(e) => handleChange("slug", e.target.value)}
                                        placeholder="your-blog-slug"
                                        className="flex-1 px-3 py-3 text-sm text-[#1c1917] focus:outline-none"
                                    />
                                </div>
                            </Field>
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e7e5e4]">
                        <Field label="Excerpt" required hint="Short summary shown in blog listings (max 500 chars)">
                            <textarea
                                value={form.excerpt}
                                onChange={(e) => handleChange("excerpt", e.target.value)}
                                placeholder="Write a brief, engaging summary of this post..."
                                rows={3}
                                maxLength={500}
                                className={`w-full px-4 py-3 border rounded-xl text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68] resize-none ${errors.excerpt ? "border-red-400" : "border-[#e7e5e4]"}`}
                            />
                            <div className="flex justify-between mt-1">
                                {errors.excerpt && <p className="text-red-500 text-xs">{errors.excerpt}</p>}
                                <p className="text-xs text-[#a8a29e] ml-auto">{form.excerpt.length}/500</p>
                            </div>
                        </Field>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e7e5e4]">
                        <label className="block text-sm font-medium text-[#44403c] mb-3">
                            Content <span className="text-red-400">*</span>
                        </label>
                        <RichTextEditor
                            value={form.content}
                            onChange={(val) => handleChange("content", val)}
                        />
                        {errors.content && <p className="text-red-500 text-xs mt-2">{errors.content}</p>}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-5">
                    {/* Publish Actions */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e7e5e4]">
                        <h3 className="font-semibold text-[#1c1917] mb-4 text-sm">Publish</h3>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleSubmit("published")}
                                disabled={saving}
                                className="w-full px-4 py-3 bg-[#2f8f68] text-white rounded-xl text-sm font-semibold hover:bg-[#256f52] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {saving ? (
                                    <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Saving...</>
                                ) : (
                                    <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        {mode === "create" ? "Publish Now" : "Update & Publish"}</>
                                )}
                            </button>
                            <button
                                onClick={() => handleSubmit("draft")}
                                disabled={saving}
                                className="w-full px-4 py-3 bg-[#faf6ed] text-[#70541d] border border-[#e8d5a3] rounded-xl text-sm font-medium hover:bg-[#f4ead1] transition-colors disabled:opacity-50"
                            >
                                Save as Draft
                            </button>
                        </div>
                    </div>

                    {/* Cover Image */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e7e5e4]">
                        <h3 className="font-semibold text-[#1c1917] mb-3 text-sm">Cover Image</h3>
                        {imagePreview ? (
                            <div className="relative">
                                <img
                                    src={imagePreview}
                                    alt="Cover"
                                    className="w-full h-40 object-cover rounded-xl"
                                />
                                {uploading && (
                                    <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    </div>
                                )}
                                <button
                                    onClick={() => { setImagePreview(""); setForm((p) => ({ ...p, coverImage: "" })); }}
                                    className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                disabled={uploading}
                                className="w-full border-2 border-dashed border-[#d9efe3] rounded-xl p-6 flex flex-col items-center gap-2 hover:border-[#2f8f68] hover:bg-[#eef7f2] transition-all text-[#78716c] group"
                            >
                                <div className="w-10 h-10 bg-[#eef7f2] rounded-full flex items-center justify-center group-hover:bg-[#d9efe3] transition-colors">
                                    <svg className="w-5 h-5 text-[#2f8f68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-[#2f8f68]">Upload cover image</span>
                                <span className="text-xs text-[#a8a29e]">JPEG, PNG, WebP · Max 5MB</span>
                            </button>
                        )}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                        {/* Or enter URL */}
                        <div className="mt-3">
                            <input
                                type="url"
                                value={!imagePreview.startsWith("blob:") ? form.coverImage : ""}
                                onChange={(e) => {
                                    setForm((p) => ({ ...p, coverImage: e.target.value }));
                                    setImagePreview(e.target.value);
                                }}
                                placeholder="Or paste image URL..."
                                className="w-full px-3 py-2 border border-[#e7e5e4] rounded-lg text-xs text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68]"
                            />
                        </div>
                    </div>

                    {/* Meta */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e7e5e4] space-y-4">
                        <h3 className="font-semibold text-[#1c1917] text-sm">Details</h3>

                        <Field label="Tags" hint="Comma-separated (e.g. tips, investing, guide)">
                            <input
                                type="text"
                                value={form.tags}
                                onChange={(e) => handleChange("tags", e.target.value)}
                                placeholder="tips, investing, guide"
                                className="w-full px-3 py-2.5 border border-[#e7e5e4] rounded-xl text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68]"
                            />
                        </Field>

                        <Field label="Author">
                            <input
                                type="text"
                                value={form.author}
                                onChange={(e) => handleChange("author", e.target.value)}
                                placeholder="Author name"
                                className="w-full px-3 py-2.5 border border-[#e7e5e4] rounded-xl text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#2f8f68]"
                            />
                        </Field>
                    </div>
                </div>
            </div>
        </div>
    );
}