import type { BlogData } from '../data';

type BlogCardProps = {
  blog: BlogData;
};

export function BlogCard(props: BlogCardProps) {
  return (
    <article className="flex h-auto w-full flex-col gap-3 p-8 group hover:bg-foreground transition-colors">
      <div className="h-44" />
      <div className="text-muted-foreground group-hover:text-accent font-bricolage flex w-full items-center justify-between text-xs">
        <span>Design Pattern</span>
        <span>2024</span>
      </div>
      <h4 className="font-bricolage line-clamp-2 text-2xl group-hover:text-background">
        {props.blog.title}
      </h4>
    </article>
  );
}
