import React, { useEffect, useRef, useState } from 'react'
import * as Portal from '@radix-ui/react-portal'
import { cva, VariantProps } from 'class-variance-authority'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'

import { useOnClickOutside } from '@/lib/hooks'
import { cn } from '@/lib/utils'

const headingContentVariants = cva('relative flex w-full items-end overflow-hidden rounded-lg', {
  variants: {
    variant: {
      default: 'h-96',
      sm: 'h-32',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type HeadingContentProps = React.HTMLAttributes<HTMLDivElement> &
  MotionProps &
  VariantProps<typeof headingContentVariants>

function HeadingContent({ variant, className, ...rest }: HeadingContentProps) {
  return (
    <motion.div
      layoutId='container'
      className={cn(headingContentVariants({ variant, className }))}
      {...rest}
    >
      <motion.div layout className='absolute inset-0'>
        <motion.img
          layoutId='image'
          src='/images/raycast-wp-1.jpg'
          alt='Raycast Wallpaper'
          className='!m-0 w-full object-cover object-center'
        />
      </motion.div>

      <div className={cn('w-full', variant === 'default' ? 'm-8' : 'm-4')}>
        <motion.h1
          layoutId='title'
          className={cn(
            'relative font-prompt text-white',
            variant === 'default' ? 'text-4xl font-bold' : '!mb-0 !text-lg'
          )}
        >
          Raycast Wallpaper 1
        </motion.h1>
        <motion.p
          layoutId='description'
          className={cn(
            'relative text-white',
            variant === 'default' ? 'mt-4 text-lg' : '!mb-0 mt-2 !text-sm'
          )}
        >
          Example of shared layout animations
        </motion.p>
      </div>
    </motion.div>
  )
}

export function SharedLayoutAnimation2() {
  const [active, setActive] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setActive(false))

  useEffect(() => {
    const handleKeyDown = (ev: globalThis.KeyboardEvent) => {
      if (ev.key === 'Escape') {
        setActive(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <AnimatePresence>
        {active && (
          <Portal.Root>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute inset-0 size-full bg-neutral-900/80'
            />

            <div className='absolute inset-0 grid place-items-center'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                ref={ref}
              >
                <motion.div
                  layout
                  layoutId='bg'
                  className='w-full max-w-4xl rounded-xl bg-background p-1'
                >
                  <HeadingContent variant='default' />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                    className='p-6'
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officiis
                    consectetur, aspernatur possimus iure libero sed, perspiciatis recusandae,
                    facere porro fugiat ipsam rem accusamus officia! Omnis vel doloremque maiores
                    tenetur.
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </Portal.Root>
        )}
      </AnimatePresence>
      <div className='grid grid-cols-3' key={`${active}`}>
        <motion.div layoutId='bg' className='w-full max-w-4xl rounded-xl bg-background p-1'>
          <HeadingContent
            tabIndex={0}
            variant='sm'
            className='cursor-pointer rounded-lg'
            onClick={() => setActive(true)}
          />
        </motion.div>
      </div>
    </>
  )
}
