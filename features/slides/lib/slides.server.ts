import fs from 'fs/promises'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

const SLIDES_DIR = path.join(process.cwd(), '/features/slides/contents')

export type GetSlidesMDXReturn = Array<Awaited<ReturnType<typeof bundleMDX>>>

async function getSlidesEntries(key: string) {
  const paths = await fs.readdir(path.join(SLIDES_DIR, key, 'orders'))
  return paths
}

export async function getSlides(key: string): Promise<GetSlidesMDXReturn> {
  const slidesPath = await getSlidesEntries(key)
  const currentSlideDir = path.join(SLIDES_DIR, key, 'orders')

  const slides = slidesPath.map(async (filename) => {
    const fileEntry = path.join(currentSlideDir, filename)
    const source = (await fs.readFile(fileEntry)).toString()
    const mdxOut = await bundleMDX({
      source,
      cwd: currentSlideDir,
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? [])]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'append',
            },
          ],
          [
            rehypePrettyCode,
            {
              theme: 'min-dark',
            },
          ],
        ]
        return options
      },
      esbuildOptions(options) {
        options.loader = { '.js': 'jsx' }
        options.tsconfig = `${process.cwd()}/tsconfig.esbuild.json`
        return options
      },
    })
    return mdxOut
  })

  return Promise.all(slides)
}
