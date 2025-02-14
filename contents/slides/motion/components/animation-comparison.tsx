import { LayoutGroup, MotionConfig } from 'framer-motion'

import { SharedLayoutAnimation2 } from './shared-layout-animation-2'

export function AnimationComparison() {
  return (
    <div className='mx-0 mb-6 grid h-56 grid-cols-2 place-items-center rounded-lg border border-neutral-700 bg-background dots dots-neutral-700/50 md:-mx-16 md:h-96 dark:dots-neutral-700/80'>
      <div className='relative grid size-full place-items-center'>
        <MotionConfig transition={{ type: 'tween', ease: 'linear', duration: 0.3 }}>
          <LayoutGroup id='linear'>
            <SharedLayoutAnimation2 className='' />
          </LayoutGroup>
        </MotionConfig>
        <span className='absolute bottom-0 left-0 right-0 rounded-bl bg-foreground p-2 text-center font-mono text-xs text-background md:right-auto md:text-left'>
          Dialog A
        </span>
      </div>
      <div className='relative grid size-full place-items-center'>
        <MotionConfig transition={{ type: 'tween', ease: [0.22, 0.61, 0.36, 1], duration: 0.3 }}>
          <LayoutGroup id='spring'>
            <SharedLayoutAnimation2 className='' />
          </LayoutGroup>
        </MotionConfig>
        <span className='absolute bottom-0 left-0 right-0 rounded-br bg-foreground p-2 text-center font-mono text-xs text-background md:right-auto md:rounded-none md:text-left'>
          Dialog B
        </span>
      </div>
    </div>
  )
}
