import { MOTION_SLIDES_KEY, MotionSlides } from '@/features/slides'
import { getSlides, GetSlidesMDXReturn } from '@/features/slides/index.server'

export async function getStaticProps() {
  const slides = await getSlides(MOTION_SLIDES_KEY)
  return {
    props: {
      slides,
    },
  }
}

export default function MotionSlidesPage({ slides }: { slides: GetSlidesMDXReturn }) {
  return <MotionSlides slides={slides} />
}
