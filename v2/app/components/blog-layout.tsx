import { MDXProvider } from '@mdx-js/react';
import { Hash } from 'lucide-react';
import type { HTMLAttributes } from 'react';
import { Outlet } from 'react-router';

export function getId(text: string) {
  return text.toLowerCase().replace(/\s/g, '-').replace(/\.|\?/, '');
}

const components = {
  h1: ({ children, ...rest }: HTMLAttributes<HTMLHeadingElement>) => {
    const id = getId(children as string);
    return (
      <h1
        className="group relative ml-0 flex scroll-m-12 lg:-ml-8 lg:flex-row lg:justify-start"
        id={id}
        {...rest}
      >
        <a href={`#${id}`} className="flex items-center gap-1 no-underline">
          <Hash className="text-muted-foreground size-7 opacity-0 group-hover:opacity-100 hover:bg-muted rounded p-1" />
          <span>{children}</span>
        </a>
      </h1>
    );
  },
};

export default function BlogLayout() {
  return (
    <MDXProvider components={components}>
      <article className="prose dark:prose-invert">
        <Outlet />
      </article>
    </MDXProvider>
  );
}
