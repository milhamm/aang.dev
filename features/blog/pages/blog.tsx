import { Layout } from '@/components/layouts'

import { BlogList } from '../components'
import { BlogPost } from '../types'

type BlogProps = { posts: Array<BlogPost> }

export function Blog({ posts }: BlogProps) {
  return (
    <Layout title='Blogs'>
      <BlogList posts={posts} />
    </Layout>
  )
}
