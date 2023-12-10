import { notFound } from 'next/navigation'
import { getMDXComponent } from 'mdx-bundler/client'
import { Metadata } from 'next'

import { getAllBlogPosts, getBlogPost } from '@/lib/blogs.server'

import { BlogHeader } from './_component/blog-header'

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

export async function generateStaticParams() {
  const posts = await getAllBlogPosts({ withDraft: true })
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogDetailPage({ params: { slug } }: BlogDetailPageProps) {
  const { success: exist, data } = await getBlogPost(slug)

  if (!exist) return notFound()

  const { frontmatter } = data

  const Content = getMDXComponent(data.code)

  return (
    <>
      <BlogHeader frontmatter={frontmatter} />
      <article className='prose mb-10 pl-0 dark:prose-invert prose-p:text-lg prose-p:leading-10 lg:pl-10'>
        <Content />
      </article>
    </>
  )
}
