"use client";

import { notFound } from "next/navigation";
import ShareButtons from "@/components/ShareButtons";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(`https://my-api/posts/${params.slug}`);
  if (!res.ok) return notFound();

  const post = await res.json();

  return (
    <div className="flex flex-col items-center">
      <section className="h-screen bg-[url('/kitten_in_hand2.jpg')] bg-cover bg-center bg-fixed grayscale-80 w-full" />
      <main className="bg-[#f5f2f8] w-full flex flex-col items-center px-4 lg:px-8 py-10">
        <div className="w-full max-w-screen-lg flex flex-col lg:flex-row gap-10">
          {/* Article */}
          <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>

            <div className="mt-10">
              <ShareButtons
                title={post.title}
                url={`https://babykittyrescue.vercel.app/resources/${params.slug}`}
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3">
            <div className="bg-white p-6 shadow-md rounded-md">
              <h2 className="font-bold text-lg mb-4">Recent Posts</h2>
              <ul className="space-y-2 text-blue-700">
                <li>• Neonatal Care for Kittens</li>
                <li>• Help Kittens Socialize</li>
                <li>• Our Mission</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
