import { BlogPost } from '../lib'

import { BlogCard } from './blog-card'

type BlogListProps = {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  if (!posts || !posts.length) {
    return <p>{'No Post :('}</p>
  }

  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
      {posts.map(({ slug, metadata: { title, publishedAt, pallete } }) => (
        <BlogCard key={slug} slug={slug} data={{ title, date: publishedAt, color: pallete }} />
      ))}
    </div>
  )
}
