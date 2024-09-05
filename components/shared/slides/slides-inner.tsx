import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { getMDXComponent } from 'mdx-bundler/client'

import { GetSlidesMDXReturn } from '@/lib/slides.server'

import { useActiveSlides } from './slides-control-provider'
import { SlidesWrapper } from './slides-wrapper'

export function SlidesInner({ slides }: { slides: GetSlidesMDXReturn }) {
  const activeSlide = useActiveSlides()
  const Content = useMemo(() => getMDXComponent(slides[activeSlide].code), [activeSlide, slides])

  return (
    <SlidesWrapper>
      <motion.div
        className='prose prose-neutral dark:prose-invert lg:prose-p:text-2xl lg:prose-p:leading-10'
        key={activeSlide}
        initial={{ y: 20, filter: 'brightness(2) blur(3px)', opacity: 0 }}
        animate={{ y: 0, filter: 'brightness(1) blur(0)', opacity: 1 }}
        exit={{ y: -40, filter: 'brightness(1) blur(3px)', opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Content />
      </motion.div>
    </SlidesWrapper>
  )
}
