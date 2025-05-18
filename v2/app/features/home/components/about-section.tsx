import { Grid } from '~/components/ui/grid';

export function AboutSection() {
  return (
    <section>
      <Grid rows={1} columns={1} className="border-t-0">
        <Grid.Cross row={1} column={2} />
        <Grid.Cell row={1} column={1} className="space-y-4 p-16">
          <h4 className="text-muted-foreground font-bricolage text-lg font-bold">About Me</h4>
          <p>
            Hi there, I’m <span className="text-primary"> Aang</span>, a
            <span className="text-primary"> product-minded frontend engineer</span> with 3+ years of
            experience specializing in React and the JavaScript ecosystem.
          </p>
        </Grid.Cell>
      </Grid>
    </section>
  );
}
