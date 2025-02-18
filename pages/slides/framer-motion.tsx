import { FRAMER_MOTION_SLIDE_KEY, FramerMotionSlides } from '@/features/slides'
import { getSlides, GetSlidesMDXReturn } from '@/features/slides/index.server'

export async function getStaticProps() {
  const slides = await getSlides(FRAMER_MOTION_SLIDE_KEY)

  return {
    props: {
      slides,
    },
  }
}

export default function FramerMotionSlidesPage({ slides }: { slides: GetSlidesMDXReturn }) {
  return <FramerMotionSlides slides={slides} />
}
