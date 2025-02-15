import { Metadata } from 'next'

import { PlaygroundLayout } from '@/components/layouts/playground-layout'

import { ShimmerButton } from './shimmer-button'

export const metadata: Metadata = {
  title: 'Shimmer Button Animation - aang.dev',
  description: 'A shimmer effect on hover using conic-gradient',
}

export default function PlaygroundPage() {
  return (
    <PlaygroundLayout
      title='Shimmer Button Animation'
      subtitle='A shimmer effect on hover using conic-gradient'
    >
      <div className='dots dots-neutral-700/40 mx-0 grid h-56 place-items-center rounded-lg border border-neutral-700 md:-mx-16 md:h-96'>
        <ShimmerButton />
      </div>
      <article className='prose dark:prose-invert prose-headings:font-prompt mt-12'>
        <h3>Links</h3>
        <ul>
          <li>
            Github -{' '}
            <a
              href='https://github.com/milhamm/aang.dev/blob/main/app/playground/shimmer-button-animation/shimmer-button.tsx'
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
            <a href='https://twitter.com/jh3yy' target='_blank' rel='noopener noreferrer'>
              @jh3yy
            </a>{' '}
            -{' '}
            <a
              href='https://twitter.com/jh3yy/status/1740752768904958053'
              target='_blank'
              rel='noopener noreferrer'
            >
              Creating a scroll-animated &quot;Like&quot; button{' '}
            </a>
          </li>
        </ul>
      </article>
    </PlaygroundLayout>
  )
}
