import { ButtonThemeSwitch } from '@/components/layouts/button-theme-switch'
import { BackgroundNoise } from '@/components/shared/slides/background-noise'
import { NavigationMenu } from '@/components/shared/slides/navigation-menu'
import { SlidesControlProvider } from '@/components/shared/slides/slides-control-provider'
import { SlidesInner } from '@/components/shared/slides/slides-inner'
import { getSlides, GetSlidesMDXReturn } from '@/lib/slides.server'

const KEY = 'motion'

export async function getStaticProps() {
  const slides = await getSlides(KEY)

  return {
    props: {
      slides,
    },
  }
}

export default function MotionSlides({ slides }: { slides: GetSlidesMDXReturn }) {
  return (
    <SlidesControlProvider numSlides={slides.length - 1}>
      <header className='fixed right-6 top-6'>
        <ButtonThemeSwitch />
      </header>
      <BackgroundNoise />
      <NavigationMenu slideKey={KEY} totalSlides={slides.length} />
      <SlidesInner slides={slides} headTitle='After Office: Motion' />
    </SlidesControlProvider>
  )
}
