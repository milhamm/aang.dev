import mdx from '@mdx-js/rollup';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command }) => ({
  ssr: {
    noExternal: command === 'build' ? true : undefined,
  },
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    },
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
}));
