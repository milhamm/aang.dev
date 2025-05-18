'use client'

import { AnimatePresence } from 'motion/react'

export function SlidesWrapper({ children }: React.PropsWithChildren) {
  return (
    <section className='bg-background flex min-h-svh flex-col items-center justify-center'>
      <AnimatePresence mode='wait'>{children}</AnimatePresence>
    </section>
  )
}
