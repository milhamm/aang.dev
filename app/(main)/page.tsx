import { getAllBlogPosts } from '@/features/blog/index.server'

import { HomeSections } from './_component/sections'

export default async function IndexPage() {
  const posts = await getAllBlogPosts({ withDraft: true })
  return <HomeSections />
}
