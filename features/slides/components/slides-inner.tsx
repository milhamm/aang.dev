import { useMemo } from 'react'
import Head from 'next/head'
import { getMDXComponent } from 'mdx-bundler/client'
import { motion } from 'motion/react'

import { Link } from '@/components/ui'
import { cn } from '@/lib/utils'

import { GetSlidesMDXReturn } from '../lib'

import { useActiveSlides } from './slides-control-provider'
import { SlidesWrapper } from './slides-wrapper'

export function SlidesInner({
  slides,
  headTitle,
}: {
  slides: GetSlidesMDXReturn
  headTitle?: string
}) {
  const activeSlide = useActiveSlides()
  const Content = useMemo(() => getMDXComponent(slides[activeSlide].code), [activeSlide, slides])

  const title = `${
    activeSlide > 0 ? `${slides[activeSlide].frontmatter.title} - ` : ''
  } ${headTitle}`

  return (
    <SlidesWrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <motion.div
        className={cn(
          'prose prose-neutral dark:prose-invert prose-headings:font-bricolage md:prose-p:text-lg md:prose-li:text-lg lg:prose-p:leading-10 w-full max-w-6xl px-6',
          'xl:prose-h1:text-4xl xl:prose-h2:text-3xl',
          '2xl:prose-p:text-xl 2xl:prose-li:text-xl'
        )}
        key={activeSlide}
        initial={{ y: 20, filter: 'blur(10px)', opacity: 0 }}
        animate={{ y: 0, filter: 'blur(0)', opacity: 1 }}
        exit={{ y: -40, filter: 'blur(10px)', opacity: 0 }}
        transition={{ duration: 0.2, type: 'tween', ease: ['easeOut'] }}
      >
        <Content
          components={{
            a: Link as any,
          }}
        />
      </motion.div>
    </SlidesWrapper>
  )
}
