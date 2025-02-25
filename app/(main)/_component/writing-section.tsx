import { Grid } from '@/components/ui'
import { BlogCard2 } from '@/features/blog'
import { BlogPost } from '@/features/blog/types'

type WritingSectionProps = {
  posts: BlogPost[]
}

export function WritingSection({ posts }: WritingSectionProps) {
  return (
    <section>
      <Grid.Spacer />
      <Grid rows={1} columns={1}>
        <Grid.Cell row={1} column={1} className='space-y-4 p-16'>
          <h4 className='text-muted-foreground font-bricolage text-lg font-bold'>Writings</h4>
          <p>
            <span className='text-primary'>Sharing is caring</span>. Writing tech blogs is my way of
            giving back to the community—documenting insights, sharing solutions, and making
            learning a little easier for others. Whether it’s breaking down complex topics or
            exploring new ideas, I believe that knowledge grows when it’s shared.
          </p>
        </Grid.Cell>
      </Grid>
      <Grid rows={1} columns={3} className='border-t-0!'>
        <Grid.Cross row={1} column={1} />
        <Grid.Cross row={1} column={2} />
        <Grid.Cross row={1} column={3} />
        <Grid.Cross row={1} column={4} />
        {posts.map((post) => (
          <BlogCard2 key={post.slug} post={post} />
        ))}
      </Grid>
    </section>
  )
}
