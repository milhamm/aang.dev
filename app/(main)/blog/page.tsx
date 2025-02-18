import { Blog } from '@/features/blog'
import { getAllBlogPosts } from '@/features/blog/index.server'

export default async function BlogPage() {
  const posts = await getAllBlogPosts({ withDraft: true })
  return <Blog posts={posts} />
}
