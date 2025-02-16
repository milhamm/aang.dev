import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as RadixNavMenu from '@radix-ui/react-navigation-menu'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

import { useActiveSlides } from './slides-control-provider'

const PREVIEW_WIDTH = 240
const PREVIEW_HEIGHT = 150

type NavigationMenuProps = {
  slideKey: string
  totalSlides: number
}

export function NavigationMenu({ slideKey, totalSlides }: NavigationMenuProps) {
  const activeSlide = useActiveSlides()
  const [value, setValue] = useState('')
  const [prevVal, setPrevVal] = useState('')

  const offset = value !== '' ? Number(value) : Number(prevVal)

  return (
    <RadixNavMenu.Root
      className='fixed bottom-2 left-6 z-50'
      value={value}
      onValueChange={(val) => {
        setPrevVal(value)
        setValue(val)
      }}
      style={
        {
          '--preview-width': `${PREVIEW_WIDTH}px`,
          '--preview-height': `${PREVIEW_HEIGHT}px`,
          '--trigger-width': '30px',
          '--trigger-height': '30px',
        } as React.CSSProperties
      }
    >
      <RadixNavMenu.List className='relative m-0 flex list-none'>
        {Array.from(Array(totalSlides).keys()).map((i) => (
          <RadixNavMenu.Item className='relative' key={i} value={`${i}`}>
            <RadixNavMenu.Trigger
              className={cn(
                'relative flex h-[var(--trigger-height)] w-[var(--trigger-width)] items-center justify-center bg-none'
              )}
              asChild
            >
              <Link href={`/slides/${slideKey}?page=${i}`} shallow>
                <div className={cn('bg-foreground/40 mx-0.5 h-0.5 w-full')}>
                  {i === activeSlide && (
                    <motion.div
                      layoutId='navActiveIndicator'
                      className='bg-foreground size-full'
                    ></motion.div>
                  )}
                </div>
              </Link>
            </RadixNavMenu.Trigger>
            <div className='hidden'>
              <RadixNavMenu.Content
                forceMount
                className='w-full flex-none transition-transform duration-500'
                style={{
                  transform: `translateX(calc(-1 * ${offset} * var(--preview-width)))`,
                }}
              >
                <RadixNavMenu.Link asChild>
                  <Link href={`/slides/${slideKey}?page=${i}`} shallow>
                    <Image
                      src={`/slides/${slideKey}/${i}.jpg`}
                      width={PREVIEW_WIDTH}
                      height={PREVIEW_HEIGHT}
                      alt='Slides Preview'
                      className='h-full rounded-md border-2 border-white object-cover'
                      loading='eager'
                    />
                  </Link>
                </RadixNavMenu.Link>
              </RadixNavMenu.Content>
            </div>
          </RadixNavMenu.Item>
        ))}
      </RadixNavMenu.List>
      <div
        className='absolute left-0 transition-transform duration-500'
        style={{
          top: 'calc(-1 * var(--preview-height))',
          transform: `translateX(calc(${offset} * var(--trigger-width)))`,
        }}
      >
        <RadixNavMenu.Viewport className='data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn relative mt-1 flex h-[var(--preview-height)] w-[var(--preview-width)] origin-center overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300' />
      </div>
    </RadixNavMenu.Root>
  )
}
