import { Section } from '@/components/shared'
import { BlogCard } from '@/components/ui/blog-card'
import { getAllBlogPosts } from '@/lib/blogs.server'

import { Hero } from './_component'

export default async function IndexPage() {
  const posts = await getAllBlogPosts({ withDraft: true })
  return (
    <>
      <Hero />
      <Section title='Latest Posts' showMore={false}>
        <div className='grid grid-cols-3'>
          {posts.length
            ? posts.map(({ slug, metadata: { title, publishedAt } }, i) => (
                <BlogCard key={i} slug={slug} data={{ title, date: publishedAt }} />
              ))
            : 'No Post :('}
        </div>
      </Section>
    </>
  )
}
