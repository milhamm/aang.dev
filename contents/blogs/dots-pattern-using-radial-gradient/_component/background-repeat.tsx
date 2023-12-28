import React from 'react'

import { Dots } from './dots'

export function BackgroundRepeat({ dot = 20, size = 50 }: { dot?: number; size?: number }) {
  return (
    <div className='not-prose rounded-lg border border-border p-1 pb-5 text-center'>
      <Dots dot={dot} size={size} />
      <p className='mt-5 text-sm text-muted-foreground'>
        Creating a dot using <span className='font-mono'>`radial-gradient`</span>
      </p>
    </div>
  )
}
