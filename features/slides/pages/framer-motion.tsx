import { ButtonThemeSwitch } from '@/components/layouts'

import { BackgroundNoise, NavigationMenu, SlidesControlProvider, SlidesInner } from '../components'
import { GetSlidesMDXReturn } from '../lib/slides.server'

export const FRAMER_MOTION_KEY = 'framer-motion'

export function FramerMotionSlides({ slides }: { slides: GetSlidesMDXReturn }) {
  return (
    <SlidesControlProvider numSlides={slides.length - 1}>
      <header className='fixed top-6 right-6'>
        <ButtonThemeSwitch />
      </header>
      <BackgroundNoise />
      <NavigationMenu slideKey={FRAMER_MOTION_KEY} totalSlides={slides.length} />
      <SlidesInner slides={slides} headTitle='Framer Motion Sharing Session' />
    </SlidesControlProvider>
  )
}
