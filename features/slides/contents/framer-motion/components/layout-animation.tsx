import React, { useReducer, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

const items = ['React', 'Framer Motion', 'Layout Animations', 'is Magic']

const ArrowIcon = motion(ArrowRight)

export function LayoutAnimation() {
  const [toggled, toggle] = useReducer((state) => !state, false)
  const [isLayout, setIsLayout] = useState(false)

  return (
    <div className='flex flex-col items-center gap-6' key={isLayout ? 'layout' : 'css'}>
      <div
        className={cn(
          'flex h-36 gap-2',
          toggled ? 'flex-col items-start' : 'flex-row items-center'
        )}
      >
        {items.map((item) => (
          <motion.div
            id={item.split(' ').join('').toLowerCase()}
            layout={isLayout}
            className='font-prompt rounded-lg border border-pink-800/50 bg-linear-to-r from-pink-600/10 to-pink-700/40 px-3 py-1'
            key={item}
          >
            {item}
          </motion.div>
        ))}
      </div>
      <div className='flex gap-4'>
        <Button
          onClick={() => {
            setIsLayout(true)
            setTimeout(() => {
              toggle()
            }, 100)
          }}
          variant='secondary'
        >
          Motion Layout Animation{' '}
          <ArrowIcon className='ml-2 size-4' animate={toggled ? { rotate: 90 } : { rotate: 0 }} />
        </Button>
        <Button
          onClick={() => {
            setIsLayout(false)
            setTimeout(() => {
              toggle()
            }, 100)
          }}
          variant='secondary'
        >
          CSS Layout Animation{' '}
          <ArrowIcon className='ml-2 size-4' animate={toggled ? { rotate: 90 } : { rotate: 0 }} />
        </Button>
      </div>
    </div>
  )
}
