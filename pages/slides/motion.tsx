import { getSlides, GetSlidesMDXReturn, MOTION_SLIDE_KEY, MotionSlides } from '@/features/slides'

export async function getStaticProps() {
  const slides = await getSlides(MOTION_SLIDE_KEY)
  return {
    props: {
      slides,
    },
  }
}

export default function MotionSlidesPage({ slides }: { slides: GetSlidesMDXReturn }) {
  return <MotionSlides slides={slides} />
}
