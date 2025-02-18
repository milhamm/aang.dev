import { Grid } from '@/components/ui'
import { BlogCard2 } from '@/features/blog'

export function WritingSection() {
  return (
    <section>
      <Grid.Spacer />
      <Grid rows={1} columns={1}>
        <Grid.Cell row={1} column={1} className='space-y-4 p-16'>
          <h4 className='text-muted-foreground font-bricolage text-lg font-bold'>Writings</h4>
          <p>
            While my primary expertise is frontend engineering, I do have a basic experience in
            doing full-stack development and eager to learn more in those areas.
          </p>
        </Grid.Cell>
      </Grid>
      <Grid rows={1} columns={3} className='border-t-0!'>
        <BlogCard2 />
        <BlogCard2 />
        <BlogCard2 />
      </Grid>
    </section>
  )
}
