import { ColorPallete } from '@/lib/pallete'
import { bundleMDX } from 'mdx-bundler'

export type BundleMDXReturn = Awaited<ReturnType<typeof bundleMDX<MatterMetadata>>>

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

export type BlogPost = {
  slug: string
  metadata: MatterMetadata
}
