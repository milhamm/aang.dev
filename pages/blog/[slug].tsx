import { GetStaticPropsContext } from 'next'

import { BlogDetail, BlogDetailPageProps, getAllBlogPosts, getBlogPost } from '@/features/blogs'

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

export default function BlogDetailPage({ blog }: BlogDetailPageProps) {
  return <BlogDetail blog={blog} />
}
