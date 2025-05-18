import { useReducer, useState } from 'react'
import { AnimatePresence, AnimatePresenceProps, motion, Variants, wrap } from 'motion/react'

import { Button, ToggleGroup, ToggleGroupItem } from '@/components/ui'
import { ColorPallete, pallete } from '@/lib/pallete'
import { cn } from '@/lib/utils'

type SlideState = { dir: number; curr: number }

const colors: Array<ColorPallete> = ['blue', 'orange', 'pink']

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction * -100,
      opacity: 0,
    }
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction * 100,
      opacity: 0,
    }
  },
}

export function AnimatePresenceComp() {
  const [currentSlide, slide] = useReducer(
    (state: SlideState, direction: number) => {
      return {
        dir: direction,
        curr: wrap(0, colors.length, state.curr + direction),
      }
    },
    { dir: 1, curr: 0 }
  )

  const [mode, setMode] = useState<AnimatePresenceProps['mode']>('popLayout')

  return (
    <div className='flex w-full flex-col items-center gap-4'>
      <ToggleGroup
        className='mb-5'
        type='single'
        value={mode}
        onValueChange={(value) => setMode(value as AnimatePresenceProps['mode'])}
      >
        <ToggleGroupItem value='sync'>
          <code>sync</code>
        </ToggleGroupItem>
        <ToggleGroupItem value='wait'>
          <code>wait</code>
        </ToggleGroupItem>
        <ToggleGroupItem value='popLayout'>
          <code>popLayout</code>
        </ToggleGroupItem>
      </ToggleGroup>
      <div className='h-40'>
        <AnimatePresence mode={mode} custom={currentSlide.dir}>
          <motion.div
            key={`${colors[currentSlide.curr]}`}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            custom={currentSlide.dir}
            className={cn(
              'mask-squircle grid size-36 grid-cols-2 items-center gap-4 bg-linear-to-br p-4',
              pallete[colors[currentSlide.curr]]
            )}
          />
        </AnimatePresence>
      </div>
      <div className='flex gap-2'>
        <Button variant='secondary' onClick={() => slide(-1)}>
          Prev
        </Button>
        <Button variant='secondary' onClick={() => slide(1)}>
          Next
        </Button>
      </div>
    </div>
  )
}
