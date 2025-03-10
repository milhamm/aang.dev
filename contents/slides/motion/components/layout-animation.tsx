import React, { useReducer, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

const items = ['React', 'Motion', 'Layout Animations', 'is Magic']

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
            className='rounded-lg border border-yellow-600/50 bg-gradient-to-r from-yellow-400/10 to-yellow-500/40 px-3 py-1 font-prompt'
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
