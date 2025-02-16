import { Section } from '@/components/shared'
import { BlogList } from '@/features/blog'
import { getAllBlogPosts } from '@/features/blog/index.server'

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
