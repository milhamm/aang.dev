import { ButtonThemeSwitch } from '@/components/layouts'

import { BackgroundNoise, NavigationMenu, SlidesControlProvider, SlidesInner } from '../components'
import { getSlides, GetSlidesMDXReturn } from '../lib/slides.server'

export const MOTION_SLIDE_KEY = 'motion'

export async function getStaticProps() {
  const slides = await getSlides(MOTION_SLIDE_KEY)

  return {
    props: {
      slides,
    },
  }
}

export function MotionSlides({ slides }: { slides: GetSlidesMDXReturn }) {
  return (
    <SlidesControlProvider numSlides={slides.length - 1}>
      <header className='fixed top-6 right-6'>
        <ButtonThemeSwitch />
      </header>
      <BackgroundNoise />
      <NavigationMenu slideKey={MOTION_SLIDE_KEY} totalSlides={slides.length} />
      <SlidesInner slides={slides} headTitle='After Office: Motion' />
    </SlidesControlProvider>
  )
}
