import React from 'react'

export default function SocialPreview({
  platform,
  content,
}: {
  platform: string
  content: string
}) {
  const isLinkedIn = platform.toLowerCase() === 'linkedin'
  const isTwitter = platform.toLowerCase() === 'twitter'

  return (
    <div className="mt-4 border rounded-lg shadow-sm p-4 bg-gray-50 text-sm text-gray-800">
      {isLinkedIn && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">LI</div>
            <div>
              <div className="font-semibold text-gray-900">Gihan Sanjula</div>
              <div className="text-xs text-gray-500">Posting to LinkedIn</div>
            </div>
          </div>
          <div className="whitespace-pre-line">{content}</div>
        </div>
      )}

      {isTwitter && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold">@</div>
            <div className="font-semibold text-gray-900">@gihansanjula</div>
          </div>
          <div className="whitespace-pre-line">{content}</div>
        </div>
      )}

      {!isLinkedIn && !isTwitter && (
        <div className="text-gray-500 italic">
          No preview available for this platform.
        </div>
      )}
    </div>
  )
}
