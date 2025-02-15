import { Layout } from '@/components/layouts'
import { BlogList, getAllBlogPosts } from '@/features/blogs'

export default async function BlogPage() {
  const posts = await getAllBlogPosts({ withDraft: true })
  return (
    <Layout title='Blogs'>
      <BlogList posts={posts} />
    </Layout>
  )
}
