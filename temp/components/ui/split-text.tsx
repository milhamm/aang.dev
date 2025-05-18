'use client'

import React from 'react'
import { HTMLMotionProps, motion } from 'motion/react'

type SplitTextProps = {
  children: string
} & HTMLMotionProps<'div'>

export function SplitText({ children, ...rest }: SplitTextProps) {
  const words = children.split(' ')

  return (
    <div>
      {words.map((word, i) => {
        return (
          <div key={word} style={{ display: 'inline-block', overflow: 'hidden' }}>
            <motion.div {...rest} style={{ display: 'inline-block' }} custom={i}>
              {word + (i !== words.length - 1 ? '\u00A0' : '')}
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
