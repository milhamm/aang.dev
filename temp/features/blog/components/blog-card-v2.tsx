import { BlogPost } from '../types'

type BlogCard2Props = {
  post: BlogPost
}

export function BlogCard2({ post }: BlogCard2Props) {
  return (
    <article className='flex h-auto w-full flex-col items-end gap-3 p-8'>
      <div className='h-44'></div>
      <div className='text-muted-foreground font-bricolage flex w-full items-center justify-between text-xs'>
        <span>Design Pattern</span>
        <span>{post.metadata.publishedAt}</span>
      </div>
      <h4 className='font-bricolage line-clamp-2 text-2xl' title={post.metadata.title}>
        {post.metadata.title}
      </h4>
    </article>
  )
}
