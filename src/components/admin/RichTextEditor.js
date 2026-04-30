"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useCallback } from "react";

const ToolbarButton = ({ onClick, active, disabled, title, children }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        title={title}
        className={`p-2 rounded-md text-sm font-medium transition-all duration-150 ${active
            ? "bg-[#2f8f68] text-white shadow-inner"
            : "text-[#44403c] hover:bg-[#eef7f2] hover:text-[#1e5942]"
            } disabled:opacity-30 disabled:cursor-not-allowed`}
    >
        {children}
    </button>
);

const Divider = () => <div className="w-px h-6 bg-[#e7e5e4] mx-1 self-center" />;

export default function RichTextEditor({ value, onChange, placeholder = "Write your blog content here..." }) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: { levels: [1, 2, 3] },
            }),
            Underline,
            // Image.configure({ inline: false, allowBase64: true }),
            Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-[#2f8f68] underline" } }),
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Placeholder.configure({ placeholder }),
        ],
        immediatelyRender: false,
        content: value || "",
        editorProps: {
            attributes: {
                class:
                    "prose prose-sm max-w-none min-h-[400px] p-5 focus:outline-none text-[#1c1917] leading-relaxed",
            },
        },
        onUpdate: ({ editor }) => {
            onChange?.(editor.getHTML());
        },
    });

    // Sync external value changes (e.g. when editing existing blog)
    useEffect(() => {
        if (editor && value !== undefined && editor.getHTML() !== value) {
            editor.commands.setContent(value || "", false);
        }
    }, [value, editor]);

    // const addImage = useCallback(() => {
    //     const url = window.prompt("Enter image URL:");
    //     if (url && editor) editor.chain().focus().setImage({ src: url }).run();
    // }, [editor]);

    const setLink = useCallback(() => {
        const previousUrl = editor?.getAttributes("link").href;
        const url = window.prompt("Enter URL:", previousUrl);
        if (url === null) return;
        if (url === "") {
            editor?.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }
        editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }, [editor]);

    if (!editor) return null;

    return (
        <div className="border border-[#d9efe3] rounded-xl overflow-hidden bg-white shadow-sm">
            {/* Toolbar */}
            <div className="border-b border-[#e7e5e4] bg-[#fafaf9] px-3 py-2 flex flex-wrap items-center gap-0.5">
                {/* Text Style */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    active={editor.isActive("bold")}
                    title="Bold"
                >
                    <strong>B</strong>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    active={editor.isActive("italic")}
                    title="Italic"
                >
                    <em>I</em>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    active={editor.isActive("underline")}
                    title="Underline"
                >
                    <span className="underline">U</span>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    active={editor.isActive("strike")}
                    title="Strikethrough"
                >
                    <span className="line-through">S</span>
                </ToolbarButton>

                <Divider />

                {/* Headings */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    active={editor.isActive("heading", { level: 1 })}
                    title="Heading 1"
                >
                    H1
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    active={editor.isActive("heading", { level: 2 })}
                    title="Heading 2"
                >
                    H2
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    active={editor.isActive("heading", { level: 3 })}
                    title="Heading 3"
                >
                    H3
                </ToolbarButton>

                <Divider />

                {/* Lists */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    active={editor.isActive("bulletList")}
                    title="Bullet List"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    active={editor.isActive("orderedList")}
                    title="Numbered List"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6h13M7 12h13M7 18h13M3 6h.01M3 12h.01M3 18h.01" />
                    </svg>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    active={editor.isActive("blockquote")}
                    title="Blockquote"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    active={editor.isActive("codeBlock")}
                    title="Code Block"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </ToolbarButton>

                <Divider />

                {/* Alignment */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign("left").run()}
                    active={editor.isActive({ textAlign: "left" })}
                    title="Align Left"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h14" />
                    </svg>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign("center").run()}
                    active={editor.isActive({ textAlign: "center" })}
                    title="Align Center"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M7 12h10M5 18h14" />
                    </svg>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign("right").run()}
                    active={editor.isActive({ textAlign: "right" })}
                    title="Align Right"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M10 12h10M6 18h14" />
                    </svg>
                </ToolbarButton>

                <Divider />

                {/* Media */}
                <ToolbarButton onClick={setLink} active={editor.isActive("link")} title="Insert Link">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </ToolbarButton>
                {/* <ToolbarButton onClick={addImage} title="Insert Image URL">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </ToolbarButton> */}

                <Divider />

                {/* History */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    title="Undo"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    title="Redo"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
                    </svg>
                </ToolbarButton>
            </div>

            {/* Editor Area */}
            <EditorContent editor={editor} />

            {/* Prose styles injected */}
            <style jsx global>{`
        .ProseMirror h1 { font-size: 1.875rem; font-weight: 700; color: #12352a; margin: 1.5rem 0 0.75rem; }
        .ProseMirror h2 { font-size: 1.5rem; font-weight: 600; color: #1e5942; margin: 1.25rem 0 0.6rem; }
        .ProseMirror h3 { font-size: 1.25rem; font-weight: 600; color: #256f52; margin: 1rem 0 0.5rem; }
        .ProseMirror p { margin: 0.75rem 0; color: #1c1917; }
        .ProseMirror ul { list-style-type: disc; padding-left: 1.5rem; margin: 0.75rem 0; }
        .ProseMirror ol { list-style-type: decimal; padding-left: 1.5rem; margin: 0.75rem 0; }
        .ProseMirror li { margin: 0.25rem 0; color: #1c1917; }
        .ProseMirror blockquote { border-left: 4px solid #2f8f68; padding-left: 1rem; margin: 1rem 0; color: #57534e; font-style: italic; background: #eef7f2; border-radius: 0 8px 8px 0; padding: 0.75rem 1rem; }
        .ProseMirror pre { background: #1c1917; color: #d9efe3; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0; }
        .ProseMirror code { background: #eef7f2; color: #256f52; padding: 0.15rem 0.4rem; border-radius: 4px; font-size: 0.875em; }
        .ProseMirror pre code { background: transparent; color: inherit; padding: 0; }
        .ProseMirror img { max-width: 100%; border-radius: 8px; margin: 1rem 0; }
        .ProseMirror a { color: #2f8f68; text-decoration: underline; }
        .ProseMirror p.is-editor-empty:first-child::before { content: attr(data-placeholder); float: left; color: #a8a29e; pointer-events: none; height: 0; }
        .ProseMirror hr { border: none; border-top: 2px solid #e7e5e4; margin: 1.5rem 0; }
      `}</style>
        </div>
    );
}