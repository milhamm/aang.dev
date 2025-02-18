'use client'

import { Grid } from '@/components/ui'

import { AboutSection } from './about-section'
import { HeroSection } from './hero-section'
import { NowSection } from './now-section'
import { WritingSection } from './writing-section'

export function HomeSections() {
  return (
    <Grid.System borderWidth={1}>
      <HeroSection />
      <AboutSection />
      <NowSection />
      <WritingSection />
    </Grid.System>
  )
}
