'use client'

import { Grid } from '@/components/ui'
import { BlogPost } from '@/features/blog/types'

import { AboutSection } from './about-section'
import { HeroSection } from './hero-section'
import { NowSection } from './now-section'
import { WritingSection } from './writing-section'

type HomeSectionsProps = {
  posts: BlogPost[]
}

export function HomeSections({ posts }: HomeSectionsProps) {
  return (
    <Grid.System borderWidth={1}>
      <HeroSection />
      <AboutSection />
      <NowSection />
      <WritingSection posts={posts} />
    </Grid.System>
  )
}
