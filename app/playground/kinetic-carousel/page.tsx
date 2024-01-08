import { Metadata } from 'next'

import { PlaygroundLayout } from '@/components/layouts/playground-layout'

import { KineticCarousel } from './kinetic-carousel'

export const metadata: Metadata = {
  title: 'Kinetic Carousel',
  description: "A recreation of Rauno Freiberg's Kinetic Carousel from ui.gallery",
}

export default function PlaygroundPage() {
  return (
    <PlaygroundLayout
      title='Kinetic Carousel'
      subtitle="A recreation of Rauno Freiberg's Kinetic Carousel from ui.gallery"
    >
      <KineticCarousel />
      <article className='prose mt-12 dark:prose-invert prose-headings:font-prompt'>
        <h3>Links</h3>
        <ul>
          <li>
            Github -{' '}
            <a
              href='https://github.com/milhamm/aang.dev/blob/main/app/playground/kinetic-carousel/kinetic-carousel.tsx'
              target='_blank'
              rel='noopener noreferrer'
            >
              Code
            </a>
          </li>
        </ul>
        <h3>References</h3>
        <ul>
          <li>
            Rauno Freiberg&apos;s Kinetic Carousel -{' '}
            <a
              href='https://ui.gallery/#kinetic-carousel'
              target='_blank'
              rel='noopener noreferrer'
            >
              ui.gallery
            </a>
          </li>
        </ul>
      </article>
    </PlaygroundLayout>
  )
}
