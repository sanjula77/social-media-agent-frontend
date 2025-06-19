'use client'

import { useState } from 'react'
import { Post } from '@/types/post'
import { Tab } from '@headlessui/react'
import { Clipboard, Linkedin, Twitter } from 'lucide-react'
import SocialPreview from './SocialPreview'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

export default function PostCard({ post }: { post: Post }) {
  const [content, setContent] = useState(post.content)
  const platform = post.platform.toLowerCase()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content)
    alert('📋 Copied to clipboard!')
  }

  const shareToLinkedIn = async () => {
    await navigator.clipboard.writeText(content)
    alert('📋 Post copied! Paste it on LinkedIn.')
    window.open('https://www.linkedin.com/feed/?shareActive=true', '_blank')
  }

  const shareToTwitter = async () => {
    await navigator.clipboard.writeText(content)
    alert('📋 Tweet copied! Paste it on Twitter.')
    window.open('https://twitter.com/intent/tweet', '_blank')
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full capitalize">
          {post.platform}
        </span>
        <button
          onClick={copyToClipboard}
          className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
          title="Copy post content"
        >
          <Clipboard size={18} />
        </button>
      </div>

      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-2 mb-4">
          {['Edit', 'Preview'].map((label, i) => (
            <Tab
              key={label}
              className={({ selected }: { selected: boolean }) =>
                clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition',
                  selected
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )
              }
            >
              {label}
            </Tab>
          ))}
        </Tab.List>

        <AnimatePresence mode="wait">
          <Tab.Panels>
            <Tab.Panel key="edit" unmount={false}>
              {selectedIndex === 0 && (
                <motion.div
                  key="edit-motion"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <textarea
                    className="w-full p-4 text-gray-700 border border-gray-300 rounded-md resize-y"
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </motion.div>
              )}
            </Tab.Panel>

            <Tab.Panel key="preview" unmount={false}>
              {selectedIndex === 1 && (
                <motion.div
                  key="preview-motion"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <SocialPreview platform={post.platform} content={content} />
                </motion.div>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </AnimatePresence>
      </Tab.Group>

      <div className="flex gap-3 flex-wrap">
        {platform === 'linkedin' && (
          <button
            onClick={shareToLinkedIn}
            className="text-blue-700 hover:text-blue-900 flex items-center gap-1"
          >
            <Linkedin size={18} />
            Share to LinkedIn
          </button>
        )}
        {platform === 'twitter' && (
          <button
            onClick={shareToTwitter}
            className="text-sky-600 hover:text-sky-800 flex items-center gap-1"
          >
            <Twitter size={18} />
            Tweet
          </button>
        )}
      </div>
    </div>
  )
}
