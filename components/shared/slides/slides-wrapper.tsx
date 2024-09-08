'use client'

import { AnimatePresence } from 'framer-motion'

export function SlidesWrapper({ children }: React.PropsWithChildren) {
  return (
    <section className='flex min-h-svh flex-col items-center justify-center bg-background'>
      <AnimatePresence mode='wait'>{children}</AnimatePresence>
    </section>
  )
}
