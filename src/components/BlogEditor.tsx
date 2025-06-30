"use client";

import React, { useEffect } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "font-bold bg-gray-200 px-2 py-1 rounded"
            : "px-2 py-1 border"
        }
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "italic bg-gray-200 px-2 py-1 rounded"
            : "px-2 py-1 border"
        }
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList")
            ? "bg-gray-200 px-2 py-1 rounded"
            : "px-2 py-1 border"
        }
      >
        • Bullets
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? "bg-gray-200 px-2 py-1 rounded"
            : "px-2 py-1 border"
        }
      >
        1. Ordered
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive("paragraph")
            ? "bg-gray-200 px-2 py-1 rounded"
            : "px-2 py-1 border"
        }
      >
        ¶ Paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "bg-gray-200 px-2 py-1 rounded"
            : "px-2 py-1 border"
        }
      >
        H2
      </button>
    </div>
  );
};

const BlogEditor = ({
  onEditorReady,
}: {
  onEditorReady: (editor: Editor) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Write your blog post here...</p>",
    editorProps: {
      attributes: {
        class: "prose prose-sm smLprose lg:prose-lg xl:prose-2xl",
      },
    },
  });

  useEffect(() => {
    if (editor) onEditorReady(editor);
  }, [editor]);

  return (
    <div className="space-y-4">
      <MenuBar editor={editor} />
      <div className="border rounded-md p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default BlogEditor;
