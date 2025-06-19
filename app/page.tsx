"use client";

import { useState } from "react";
import Form from "@/components/Form";
import PostCard from "@/components/PostCard";
import PostCardSkeleton from "@/components/PostCardSkeleton";
// import LoadingMessage from '@/components/LoadingMessage'
import { Post } from "@/types/post";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const handleResults = (result: Post[]) => {
    setPosts(result);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-100 text-gray-800 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
          🦙 Social Media Agent
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
          <Form onResult={handleResults} setLoading={setLoading} />
        </div>

        {/* {loading && <LoadingMessage className="bg-white/80 backdrop-blur-lg shadow-md rounded-xl" />} */}
        <div className="space-y-6">
          {loading
            ? [0, 1].map((i) => <PostCardSkeleton key={i} />)
            : posts.map((post, idx) => <PostCard key={idx} post={post} />)}
        </div>
      </div>
    </main>
  );
}
