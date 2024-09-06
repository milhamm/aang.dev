import { ButtonThemeSwitch } from '@/components/layouts/button-theme-switch'
import { BackgroundNoise } from '@/components/shared/slides/background-noise'
import { SlidesControlProvider } from '@/components/shared/slides/slides-control-provider'
import { SlidesInner } from '@/components/shared/slides/slides-inner'
import { getSlides, GetSlidesMDXReturn } from '@/lib/slides.server'

const KEY = 'framer-motion'

export async function getStaticProps() {
  const slides = await getSlides(KEY)

  return {
    props: {
      slides,
    },
  }
}

export default function FramerMotionSlides({ slides }: { slides: GetSlidesMDXReturn }) {
  return (
    <SlidesControlProvider numSlides={slides.length - 1}>
      <header className='fixed right-6 top-6'>
        <ButtonThemeSwitch />
      </header>
      <BackgroundNoise />
      <SlidesInner slides={slides} />
    </SlidesControlProvider>
  )
}
