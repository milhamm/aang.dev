import { Grid } from '~/components/ui/grid';
import { BlogCard } from '~/features/blog/components';
import { blogData } from '~/features/blog/data';

export function WritingSection() {
  return (
    <section>
      <Grid rows={1} columns={1} className="h-auto">
        <Grid.Cell row={1} column={1} className="space-y-4 p-16">
          <h4 className="text-muted-foreground font-bricolage text-lg font-bold">Writings</h4>
          <p>
            <span className="text-primary">Sharing is caring</span>. Writing tech blogs is my way of
            giving back to the community—documenting insights, sharing solutions, and making
            learning a little easier for others. Whether it’s breaking down complex topics or
            exploring new ideas, I believe that knowledge grows when it’s shared.
          </p>
        </Grid.Cell>
      </Grid>
      <Grid rows={1} columns={3} className="border-t-0! h-auto">
        <Grid.Cross row={1} column={1} />
        {blogData.slice(0, 3).map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </Grid>
    </section>
  );
}
