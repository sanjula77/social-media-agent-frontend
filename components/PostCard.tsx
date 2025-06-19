import { Post } from '@/types/post'

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-100">
      <span className="inline-block text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-2">
        {post.platform}
      </span>
      <p className="text-gray-700 whitespace-pre-line leading-relaxed">{post.content}</p>
    </div>
  )
}
