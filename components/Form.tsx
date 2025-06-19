"use client";

import { useState } from "react";
import { generatePosts } from "@/lib/api";
import { Post } from "@/types/post";
import SelectPlatforms from "./SelectPlatforms";
import { Loader2 } from "lucide-react";

export default function Form({
  onResult,
  setLoading,
}: {
  onResult: (posts: Post[]) => void;
  setLoading: (isLoading: boolean) => void;
}) {
  const [videoId, setVideoId] = useState("");
  const [platforms, setPlatforms] = useState<string[]>(["Twitter"]);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setLoading(true);

    try {
      const result = await generatePosts(videoId, platforms);
      onResult(result);
    } catch (err) {
      alert("❌ Error generating posts");
      setLoading(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-semibold mb-1 text-gray-700">
          YouTube Video ID
        </label>
        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g. zOFxHmjIhvY"
          value={videoId}
          onChange={(e) => setVideoId(e.target.value)}
          required
        />
      </div>

      <SelectPlatforms selected={platforms} onChange={setPlatforms} />

      <button
        type="submit"
        disabled={submitting}
        className={`w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-medium px-6 py-2 rounded-lg transition ${
          submitting ? "opacity-70 cursor-not-allowed" : "hover:bg-indigo-700"
        }`}
      >
        {submitting ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Generating...
          </>
        ) : (
          "✨ Generate Posts"
        )}
      </button>
    </form>
  );
}
