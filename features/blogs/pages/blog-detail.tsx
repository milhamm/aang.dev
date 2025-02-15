import { useMemo } from 'react'
import Head from 'next/head'
import { getMDXComponent } from 'mdx-bundler/client'

import { MainLayout } from '@/components/layouts'
import { Heading2 } from '@/components/ui'

import { BlogHeader } from '../components'
import { BlogPostMDXContent } from '../lib'

export type BlogDetailPageProps = {
  blog: BlogPostMDXContent
}

export function BlogDetail({ blog }: BlogDetailPageProps) {
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
