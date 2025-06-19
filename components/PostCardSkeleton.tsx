export default function PostCardSkeleton() {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-100 animate-pulse space-y-3">
      <div className="h-5 w-24 bg-gray-200 rounded-full" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
    </div>
  )
}
