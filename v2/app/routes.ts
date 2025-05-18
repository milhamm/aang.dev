import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('components/layout.tsx', [
    index('features/home/page.tsx'),
    layout('components/blog-layout.tsx', [
      route('blog/react-query-lite', 'features/home/nyoba.mdx'),
    ]),
  ]),
] satisfies RouteConfig;
