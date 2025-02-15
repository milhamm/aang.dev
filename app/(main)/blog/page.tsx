import { Layout } from '@/components/layouts'
import { BlogList } from '@/components/shared/blog-list'
import { getAllBlogPosts } from '@/lib/blogs.server'

export default async function BlogPage() {
  const posts = await getAllBlogPosts({ withDraft: true })
  return (
    <Layout title='Blogs'>
      <BlogList posts={posts} />
    </Layout>
  )
}
