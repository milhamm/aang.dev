import { Layout } from '@/components/layouts'
import { BlogCard } from '@/components/ui/blog-card'
import { getAllBlogPosts } from '@/lib/blogs.server'

export default async function BlogPage() {
  const posts = await getAllBlogPosts({ withDraft: true })
  return (
    <Layout title='Blog'>
      <div className='grid grid-cols-3'>
        {posts.length
          ? posts.map(({ slug, metadata: { title, publishedAt } }, i) => (
              <BlogCard key={i} slug={slug} data={{ title, date: publishedAt }} />
            ))
          : 'No Post :('}
      </div>
    </Layout>
  )
}
