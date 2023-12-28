import fs from 'fs/promises'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

import { ColorPallete } from './pallete'

const BLOG_DIR = path.join(process.cwd(), '/contents/blogs')
const FILENAME = 'index.mdx'

async function getBlogEntries() {
  const paths = await fs.readdir(BLOG_DIR)
  return paths
}

type BundleMDXReturn = Awaited<ReturnType<typeof bundleMDX<MatterMetadata>>>

export type MatterMetadata = {
  title: string
  status: 'published' | 'draft'
  pallete: ColorPallete
  publishedAt: string
  updatedAt: string
}

export type BlogPostMDXContent = {
  success: true
  data: BundleMDXReturn & { slug: string }
}

export type GetBlogPost =
  | BlogPostMDXContent
  | {
      success: false
      data: null
    }

export async function getBlogPost(slug: string): Promise<GetBlogPost> {
  const currentBlogDir = path.join(BLOG_DIR, slug)
  const fileEntry = path.join(currentBlogDir, FILENAME)
  try {
    const source = (await fs.readFile(fileEntry)).toString()
    const mdxOut = await bundleMDX<MatterMetadata>({
      source,
      cwd: currentBlogDir,
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
              theme: 'rose-pine-moon',
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
    return { success: true, data: { ...mdxOut, slug } }
  } catch (error) {
    return { success: false, data: null }
  }
}

type GetAllBlogPostsArgs = {
  withDraft?: boolean
}

export type BlogPost = {
  slug: string
  metadata: MatterMetadata
}

export async function getAllBlogPosts({ withDraft }: GetAllBlogPostsArgs = {}): Promise<
  BlogPost[]
> {
  const paths = await getBlogEntries()
  const posts = await Promise.all(
    paths.map(async (slug) => {
      const postDir = path.join(BLOG_DIR, slug)
      const file = await fs.readFile(path.join(postDir, FILENAME))
      const { data: metadata } = matter(file.toString())
      return {
        slug,
        metadata,
      } as BlogPost
    })
  )

  return posts.filter((post) => withDraft || post.metadata['status'] !== 'draft')
}
