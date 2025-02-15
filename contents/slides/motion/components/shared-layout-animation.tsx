import React, { useReducer, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

const items = ['React', 'Framer Motion', 'Layout Animations', 'is Magic']

const ArrowIcon = motion(ArrowRight)

export function SharedLayoutAnimation() {
  const [toggled, toggle] = useReducer((state) => !state, false)
  const [activeTabs, setActiveTabs] = useState(items[0])

  return (
    <div className='flex flex-col items-center gap-6'>
      <div
        className={cn(
          'flex h-36 gap-2',
          toggled ? 'flex-col items-start' : 'flex-row items-center'
        )}
      >
        {items.map((item) => (
          <motion.div
            id={item.split(' ').join('').toLowerCase()}
            layout
            className='font-prompt focus-visible:ring-ring relative cursor-pointer rounded-lg px-3 py-1 transition-colors focus-visible:ring-1 focus-visible:outline-hidden'
            key={item}
            onMouseEnter={() => setActiveTabs(item)}
            onMouseLeave={() => setActiveTabs(item)}
            onFocus={() => setActiveTabs(item)}
            tabIndex={0}
          >
            {activeTabs === item && (
              <motion.div
                layoutId='activeTabs'
                className='absolute inset-0 rounded-lg border border-pink-800 bg-linear-to-r from-pink-500/10 to-pink-700/40'
                transition={{ type: 'spring', duration: 0.8, bounce: 0.2 }}
              />
            )}
            <span className='relative'>{item}</span>
          </motion.div>
        ))}
      </div>
      <div className='flex gap-4'>
        <Button onClick={toggle} variant='secondary'>
          Toggle{' '}
          <ArrowIcon className='ml-2 size-4' animate={toggled ? { rotate: 90 } : { rotate: 0 }} />
        </Button>
      </div>
    </div>
  )
}
