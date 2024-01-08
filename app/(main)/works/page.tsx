import { Variants } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import { Layout } from '@/components/layouts'
import { MotionLi, MotionUl } from '@/components/ui/motion'
import { cn } from '@/lib/utils'

export default function WorksPage() {
  return (
    <Layout title='Works'>
      <WorkList year='Featured'>
        <WorkCard
          className='col-span-6 row-span-2 aspect-video md:col-span-3 md:aspect-[4/5]'
          title='Shumi'
          href='https://shumi.shop'
          subtitle='shumi.shop'
        />
        <WorkCard
          className='col-span-6 aspect-video md:col-span-3 md:aspect-[unset]'
          title='Pycon ID 2023'
          href='https://pycon.id'
          subtitle='pycon.id'
        />
        <WorkCard
          className='col-span-6 aspect-video md:col-span-3 md:aspect-[unset]'
          title='Global Energy Transition'
          href='https://global-energy-transition.org'
          subtitle='global-energy-transition.org'
        />
        <WorkCard
          className='col-span-6 aspect-video'
          title='Tourism Route Recommendation Using Reinforcement Learning'
          href='https://ieeexplore.ieee.org/document/10126347'
          subtitle='ieeexplore.ieee.org/document/10126347'
        />
      </WorkList>
      <WorkList year='Playground'>
        <WorkCard
          className='col-span-6 row-span-1 aspect-video md:col-span-3'
          title='Kinetic Carousel'
          href='https://www.aang.dev/playground/kinetic-carousel'
          subtitle='See more'
        />
        <WorkCard
          className='col-span-6 row-span-1 aspect-video md:col-span-3'
          title='View Transitions Theme Switcher'
          href='https://www.aang.dev/playground/view-transition-theme-switcher'
          subtitle='See more'
        />
        <WorkCard
          className='col-span-6 row-span-1 aspect-video md:col-span-3'
          title='Shimmer Button Animation'
          href='https://www.aang.dev/playground/shimmer-button-animation'
          subtitle='See more'
        />
      </WorkList>
    </Layout>
  )
}

const list: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      when: 'afterChildren',
    },
  },
}

type WorkListProps = {
  children: React.ReactNode[]
  year: string | number
}

function WorkList({ children, year }: WorkListProps) {
  return (
    <MotionUl
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={list}
      data-year={year}
      className={cn(
        'relative mt-24 grid w-full grid-cols-6 gap-3 before:absolute',
        `before:-top-16 before:right-0 before:-z-10 before:font-prompt before:text-4xl before:font-black before:text-neutral-200 before:content-[attr(data-year)]`
      )}
    >
      {children}
    </MotionUl>
  )
}

const item: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0,
    },
  },
  hidden: { opacity: 0, y: 50 },
}

type WorkCardProps = React.HTMLAttributes<HTMLLIElement> & {
  title: string
  subtitle: string
  href: string
}

function WorkCard({ title, subtitle, href, className }: WorkCardProps) {
  return (
    <MotionLi
      variants={item}
      className={cn(
        'flex h-full flex-col justify-end gap-2 rounded-xl border-2 border-neutral-600 bg-neutral-900 p-5',
        className
      )}
    >
      <span className='text-balance font-prompt text-2xl font-bold text-neutral-100'>{title}</span>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferer'
        className='group flex items-center gap-1 hover:underline'
      >
        <span className='text-neutral-400'>{subtitle}</span>
        <ArrowUpRight className='mt-0.5 hidden size-4 text-neutral-600 group-hover:block' />
      </a>
    </MotionLi>
  )
}
