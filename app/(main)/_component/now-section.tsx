import { Grid } from '@/components/ui'

export function NowSection() {
  return (
    <section>
      <Grid.Spacer />
      <Grid rows={1} columns={1}>
        <Grid.Cross row={1} column={1} />
        <Grid.Cell row={1} column={1} className='space-y-4 p-16 pb-0'>
          <h4 className='text-muted-foreground font-bricolage text-lg font-bold'>Now</h4>
          <h2 className='font-bricolage text-4xl font-bold'>
            <span className='text-primary'>Product Engineer </span> at Zero One Group
          </h2>
          <p>
            The place where I currently dedicate my time to develop and maintain high-impact web
            applications for diverse global industries.
          </p>
        </Grid.Cell>
      </Grid>
    </section>
  )
}
