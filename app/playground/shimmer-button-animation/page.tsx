import { PlaygroundLayout } from '@/components/layouts/playground-layout'

import { ShimmerButton } from './shimmer-button'

export default function PlaygroundPage() {
  return (
    <PlaygroundLayout
      title='Shimmer Button Animation'
      subtitle='A shimmer effect on hover using conic-gradient'
    >
      <div className='mx-0 grid h-56 w-full place-items-center rounded-lg border border-neutral-700 dots dots-neutral-700/40 md:-mx-16 md:h-96'>
        <ShimmerButton />
      </div>
      <article className='prose mt-12 dark:prose-invert prose-headings:font-prompt'>
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
