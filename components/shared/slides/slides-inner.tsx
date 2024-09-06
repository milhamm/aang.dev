import { useMemo } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { getMDXComponent } from 'mdx-bundler/client'

import { GetSlidesMDXReturn } from '@/lib/slides.server'

import { useActiveSlides } from './slides-control-provider'
import { SlidesWrapper } from './slides-wrapper'

export function SlidesInner({ slides }: { slides: GetSlidesMDXReturn }) {
  const activeSlide = useActiveSlides()
  const Content = useMemo(() => getMDXComponent(slides[activeSlide].code), [activeSlide, slides])

  const title = `${
    activeSlide > 0 ? `${slides[activeSlide].frontmatter.title} - ` : ''
  } Framer Motion Sharing Session`

  return (
    <SlidesWrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <motion.div
        className='prose prose-neutral w-full max-w-7xl px-6 dark:prose-invert prose-headings:font-prompt lg:prose-h1:text-5xl lg:prose-p:text-3xl lg:prose-p:leading-10 lg:prose-li:text-3xl'
        key={activeSlide}
        initial={{ y: 20, filter: 'blur(10px)', opacity: 0 }}
        animate={{ y: 0, filter: 'blur(0)', opacity: 1 }}
        exit={{ y: -40, filter: 'blur(10px)', opacity: 0 }}
        transition={{ duration: 0.2, type: 'tween', ease: ['easeOut'] }}
      >
        <Content />
      </motion.div>
    </SlidesWrapper>
  )
}
