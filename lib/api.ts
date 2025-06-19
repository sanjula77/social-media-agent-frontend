import axios from 'axios'
import { Post } from '@/types/post'

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export const generatePosts = async (video_id: string, platforms: string[]): Promise<Post[]> => {
  const res = await axios.post(`${BASE_URL}/generate`, { video_id, platforms })
  return res.data
}
