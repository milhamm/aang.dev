import { ButtonThemeSwitch } from '@/components/layouts'

import { BackgroundNoise, NavigationMenu, SlidesControlProvider, SlidesInner } from '../components'
import { GetSlidesMDXReturn } from '../index.server'

export const MOTION_SLIDES_KEY = 'motion'

export function MotionSlides({ slides }: { slides: GetSlidesMDXReturn }) {
  return (
    <SlidesControlProvider numSlides={slides.length - 1}>
      <header className='fixed top-6 right-6'>
        <ButtonThemeSwitch />
      </header>
      <BackgroundNoise />
      <NavigationMenu slideKey={MOTION_SLIDES_KEY} totalSlides={slides.length} />
      <SlidesInner slides={slides} headTitle='After Office: Motion' />
    </SlidesControlProvider>
  )
}
