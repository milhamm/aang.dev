import { BlogList, Section } from '@/components/shared'
import { getAllBlogPosts } from '@/lib/blogs.server'

import { Hero } from './_component'

export default async function IndexPage() {
  const posts = await getAllBlogPosts({ withDraft: true })
  return (
    <>
      <Hero />
      <Section title='Latest Posts' showMore={false}>
        <BlogList posts={posts} />
      </Section>
    </>
  )
}
