'use client'

import { useLayoutEffect, useRef } from 'react'
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'motion/react'

const defaultWidth = 40
const expandedWidth = 400
const defaultSpringOptions = {
  damping: 60,
  stiffness: 900,
  mass: 2,
}

type CarouselItemProps = {
  mouseX: MotionValue
}

const CarouselItem = ({ mouseX }: CarouselItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const widthMotion = useMotionValue(defaultWidth)

  const distance = useTransform(mouseX, (e) => {
    const itemW = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return e - itemW.x - itemW.width / 2
  })

  const distanceToScale = useTransform(
    distance,
    [-900, -720, -450, 0, 450, 720, 900],
    [1, 1, 1.05, 1.6, 1.05, 1, 1]
  )

  const scale = useSpring(distanceToScale, defaultSpringOptions)
  const width = useSpring(widthMotion, defaultSpringOptions)

  return (
    <motion.div
      ref={ref}
      onClick={() => width.set(width.get() === expandedWidth ? defaultWidth : expandedWidth)}
      onMouseLeave={() => width.set(defaultWidth)}
      style={{
        width,
        scale,
      }}
      className='bg-foreground h-full origin-left cursor-pointer will-change-[transform,width]'
    ></motion.div>
  )
}

export function KineticCarousel() {
  const mouseX = useMotionValue(Infinity)

  useLayoutEffect(() => {
    document.body.style.setProperty('overflow-x', 'hidden')
  }, [])

  return (
    <div
      className='relative right-1/2 left-1/2 -mx-[50vw] h-96 w-screen'
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <div className='flex h-full w-full justify-center gap-x-10'>
        {Array.from(Array(21).keys()).map((e) => (
          <CarouselItem key={e} mouseX={mouseX} />
        ))}
      </div>
    </div>
  )
}
