import { useMemo } from 'react'
import Head from 'next/head'
import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticPropsContext } from 'next'

import { BlogHeader } from '@/components/shared/blog-header'
import { BlogPostMDXContent, getAllBlogPosts, getBlogPost } from '@/lib/blogs.server'

import { MainLayout } from '../../components/layouts/main'
import { Heading2 } from '../../components/ui/heading'

export async function getStaticProps(context: GetStaticPropsContext) {
  const blog = await getBlogPost(context.params?.slug as string)

  if (!blog.success) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blog,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllBlogPosts({ withDraft: true })
  return { paths: posts.map((post) => ({ params: { slug: post.slug } })), fallback: false }
}

type BlogDetailPageProps = {
  blog: BlogPostMDXContent
}

export default function BlogDetailPage({ blog }: BlogDetailPageProps) {
  const {
    data: { code, frontmatter },
  } = blog

  const Content = useMemo(() => getMDXComponent(code), [code])

  return (
    <MainLayout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <BlogHeader frontmatter={frontmatter} />
      <article className='prose dark:prose-invert prose-p:text-sm prose-p:leading-8 lg:prose-p:text-lg lg:prose-p:leading-10 mb-10 pl-2 md:pl-6 lg:pl-10'>
        <Content
          components={{
            h2: Heading2,
          }}
        />
      </article>
    </MainLayout>
  )
}
