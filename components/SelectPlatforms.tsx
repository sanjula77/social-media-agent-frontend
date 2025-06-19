'use client'

import { Twitter, Linkedin, Instagram } from 'lucide-react'

const platforms = [
  { name: 'Twitter', icon: Twitter },
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'Instagram', icon: Instagram },
]

export default function SelectPlatforms({
  selected,
  onChange,
}: {
  selected: string[]
  onChange: (selected: string[]) => void
}) {
  const handleSelect = (platform: string) => {
    if (selected.includes(platform)) return // prevent deselecting the only selected item
    onChange([platform]) // Only allow one selected
  }

  return (
    <div>
      <label className="block font-semibold mb-2 text-gray-700">Select Platform</label>
      <div className="flex flex-wrap gap-3">
        {platforms.map(({ name, icon: Icon }) => {
          const isSelected = selected.includes(name)
          return (
            <button
              key={name}
              type="button"
              onClick={() => handleSelect(name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition text-sm font-medium shadow-sm ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
            >
              <Icon size={18} />
              {name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
