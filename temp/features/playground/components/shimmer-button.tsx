import { CSSProperties } from 'react'

import { cn } from '@/lib/utils'

/**
 *  Paste this into your tailwind config keyframes
 *  Animate Shimmer Keyframes
 *
 * 'shimmer-button': {
 *   '50%': {
 *      opacity: 1
 *   },
 *   '100%': {
 *      opacity: 0,
 *      transform: 'translate(0, 0)'
 *    }
 *  }
 */

export function ShimmerButton() {
  return (
    <button
      className={cn(
        'group relative isolate h-16 overflow-hidden rounded-full px-12 text-white',
        'transition-colors after:absolute after:inset-[4px] after:-z-10 after:rounded-full after:bg-neutral-900 after:transition-colors hover:after:bg-neutral-700'
      )}
      type='button'
    >
      <span
        className='group-hover:animate-shimmer-button absolute inset-0 -z-10 h-[600%] w-[600%] -translate-x-[80%] transform-gpu opacity-0 transition-transform'
        style={
          {
            '--first': '#F6D242',
            '--second': '#FF52E5',
            '--third': '#1904E5',
            '--fourth': '#FAB2FF',
            '--fifth': '#F6416C',
            'background': `conic-gradient(from -60deg at 50% 100%,
                var(--first),
                var(--second),
                var(--third),
                var(--fourth),
                var(--fifth),
                var(--fifth),
                var(--fourth),
                var(--third),
                var(--second),
                var(--first) 120deg
              )`,
          } as CSSProperties
        }
      ></span>
      <span>Hover Me</span>
    </button>
  )
}
