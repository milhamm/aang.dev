import { defineConfig } from 'taze'

export default defineConfig({
  // ignore packages from bumping
  exclude: ['mdx-bundler', 'rehype-autolink-headings', 'rehype-pretty-code'],
  // override with different bumping mode for each package
  packageMode: {
    typescript: 'major',
  },
  depFields: {
    overrides: false,
  },
})
