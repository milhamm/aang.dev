import { notFound } from 'next/navigation'
import { getMDXComponent } from 'mdx-bundler/client'
import { Metadata } from 'next'

import { getBlogPost } from '@/lib/blogs.server'

type BlogDetailPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params: { slug },
}: BlogDetailPageProps): Promise<Metadata> {
  const { success: exist, data } = await getBlogPost(slug)

  if (!exist) return {}

  const { frontmatter } = data

  return {
    title: frontmatter.title,
  }
}

export default async function BlogDetailPage({ params: { slug } }: BlogDetailPageProps) {
  const { success: exist, data } = await getBlogPost(slug)

  if (!exist) return notFound()

  const Content = getMDXComponent(data.code)

  return (
    <article className='prose dark:prose-invert'>
      <Content />
    </article>
  )
}
