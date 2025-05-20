import { Grid } from '@/components/ui'

export function AboutSection() {
  return (
    <section>
      <Grid.Spacer />
      <Grid rows={1} columns={1}>
        <Grid.Cell row={1} column={1} className='space-y-4 p-16'>
          <h4 className='text-muted-foreground font-bricolage text-lg font-bold'>About Me</h4>
          <p>
            Hi there, I’m Ilham or called<span className='text-primary'> Aang</span> by others, a
            <span className='text-primary'> product-minded frontend engineer</span> with 3+ years of
            experience specializing in React and the JavaScript ecosystem. Passionate about building
            user-friendly web applications, continuous learning, and sharing my knowledge through
            teaching and open-source contributions.
          </p>
        </Grid.Cell>
      </Grid>
    </section>
  )
}
