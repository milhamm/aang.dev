import { useState } from 'react'
import { motion } from 'motion/react'

import { Button } from '@/components/ui'

export function TransitionComp() {
  const [key, setKey] = useState(0)
  const [animation, setAnimation] = useState('spring')
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  return (
    <div className='flex w-full flex-col gap-3' ref={setRef}>
      <div>
        <motion.div
          key={key}
          className='size-20 rounded-full bg-linear-to-r from-pink-500 to-pink-700'
          initial={{ x: 16 }}
          animate={{ x: (ref?.getBoundingClientRect().width || 0) - 80 - 16 }}
          transition={
            animation === 'spring'
              ? { type: 'spring', duration: 0.7, bounce: 0.2 }
              : { ease: [0.83, 0, 0.17, 1], duration: 0.7 }
          }
        />
      </div>
      <div className='flex w-full items-center justify-center gap-4'>
        <Button
          variant='secondary'
          onClick={() => {
            setKey((k) => k + 1)
            setAnimation('spring')
          }}
        >
          Spring
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
            setKey((k) => k + 1)
            setAnimation('tween')
          }}
        >
          Tween
        </Button>
      </div>
    </div>
  )
}
