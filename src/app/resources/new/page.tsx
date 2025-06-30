"use client";

import React, { useState } from "react";
import { Editor } from "@tiptap/react";
import BlogEditor from "@/components/BlogEditor";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [editorInstance, setEditorInstance] = useState<Editor | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const content = editorInstance?.getHTML();

    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 space-y-4">
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 text-xl font-semibold"
      />
      <BlogEditor onEditorReady={(editor) => setEditorInstance(editor)} />
      <button
        type="submit"
        className="bg-[#221a20] text-white px-4 py-2 rounded-md hover:bg-[#332b30] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Publish
      </button>
    </form>
  );
};

export default CreatePost;
