import {
  FRAMER_MOTION_KEY,
  FramerMotionSlides,
  getSlides,
  GetSlidesMDXReturn,
} from '@/features/slides'

export async function getStaticProps() {
  const slides = await getSlides(FRAMER_MOTION_KEY)
  return {
    props: {
      slides,
    },
  }
}

export default function FramerMotionSlidePage({ slides }: { slides: GetSlidesMDXReturn }) {
  return <FramerMotionSlides slides={slides} />
}
