import { Metadata } from 'next'

import { PlaygroundLayout } from '@/components/layouts/playground-layout'

import { ThemeSwitcherButton } from './theme-switcher-button'
import { ThemeSwitcherButton2 } from './theme-switcher-button-2'

export const metadata: Metadata = {
  title: 'View Transition Theme Switcher - aang.dev',
  description: 'Theme switcher animation using View Transitions API',
}

export default function PlaygroundPage() {
  return (
    <PlaygroundLayout
      title='View Transitions Theme Switcher'
      subtitle='Theme switcher animation using View Transitions API'
    >
      <div className='mx-0 mb-6 grid h-56 grid-cols-2 place-items-center rounded-lg border border-neutral-700 dots dots-neutral-700/50 dark:dots-neutral-700/80 md:-mx-16 md:h-96'>
        <div className='relative grid size-full place-items-center'>
          <ThemeSwitcherButton />
          <span className='absolute bottom-0 left-0 right-0 rounded-bl bg-foreground p-2 text-center font-mono text-xs text-background md:right-auto md:text-left'>
            Slide In Reveal
          </span>
        </div>
        <div className='relative grid size-full place-items-center'>
          <ThemeSwitcherButton2 />
          <span className='absolute bottom-0 left-0 right-0 rounded-br bg-foreground p-2 text-center font-mono text-xs text-background md:right-auto md:rounded-none md:text-left'>
            Circular Reveal
          </span>
        </div>
      </div>
      <article className='prose mt-12 dark:prose-invert prose-headings:font-prompt'>
        <h3>Links</h3>
        <ul>
          <li>
            Github -{' '}
            <a
              href='https://github.com/milhamm/aang.dev/blob/main/app/playground/view-transition-theme-switcher/theme-switcher-button.tsx'
              target='_blank'
              rel='noopener noreferrer'
            >
              Slide in Reveal Code
            </a>
          </li>
          <li>
            Github -{' '}
            <a
              href='https://github.com/milhamm/aang.dev/blob/main/app/playground/view-transition-theme-switcher/theme-switcher-button-2.tsx'
              target='_blank'
              rel='noopener noreferrer'
            >
              Circular Reveal Code
            </a>
          </li>
        </ul>
        <h3>References</h3>
        <ul>
          <li>
            Chrome for Developers -{' '}
            <a
              href='https://developer.chrome.com/docs/web-platform/view-transitions'
              target='_blank'
              rel='noopener noreferrer'
            >
              Smooth and simple transitions with the View Transitions API
            </a>
          </li>
          <li>
            MDN -{' '}
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API'
              target='_blank'
              rel='noopener noreferrer'
            >
              Web Animations API
            </a>
          </li>
          <li>
            <a href='https://twitter.com/antfu' target='_blank' rel='noopener noreferrer'>
              @antfu
            </a>{' '}
            -{' '}
            <a href='https://antfu.me/' target='_blank' rel='noopener noreferrer'>
              antfu.me
            </a>
          </li>
          <li>
            <a href='https://twitter.com/raunofreiberg' target='_blank' rel='noopener noreferrer'>
              @raunofreiberg
            </a>{' '}
            -{' '}
            <a href='https://rauno.me/craft' target='_blank' rel='noopener noreferrer'>
              rauno.me/craft
            </a>
          </li>
        </ul>
      </article>
    </PlaygroundLayout>
  )
}
