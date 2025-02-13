import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export function ScrollLinkedAnimations() {
  const container = useRef<HTMLDivElement>(null)
  const target = useRef<HTMLDivElement>(null)
  const itemScroll = useRef<HTMLDivElement>(null)
  const rotateScroll = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target,
    container,
    offset: ['140px end', 'end center'],
  })

  const { scrollYProgress: scrollYProgressRotate } = useScroll({
    target: rotateScroll,
    container,
  })

  const [itemScrollWidth, setItemScrollWidth] = useState(0)
  const [targetWidth, setTargetWidth] = useState(0)

  useLayoutEffect(() => {
    if (itemScroll.current && target.current) {
      const { width } = itemScroll.current.getBoundingClientRect()
      const { width: targetWidth } = target.current.getBoundingClientRect()
      setItemScrollWidth(width)
      setTargetWidth(targetWidth)
    }
  }, [])

  const scrollSpring = useSpring(scrollYProgress, { mass: 0.1 })

  const x = useTransform(scrollSpring, [0, 1], ['0px', `-${targetWidth + itemScrollWidth}px`])

  const rotate = useTransform(scrollYProgressRotate, [0, 1], [0, 360])

  return (
    <>
      Scroll Container
      <div
        ref={container}
        className='relative flex h-96 w-[90%] flex-col items-center gap-4 overflow-x-clip overflow-y-scroll rounded-xl border-2 border-pink-500 p-8'
      >
        <span className='text-lime-500'>Scroll Target</span>
        <div
          ref={rotateScroll}
          className='flex h-[120svh] w-72 flex-none justify-center rounded-xl border-2 border-lime-500'
        >
          <motion.div
            className='mask-squircle sticky top-1/2 size-24 bg-[conic-gradient(var(--tw-gradient-stops))] from-pink-600 to-pink-400'
            style={{ rotate, y: '-50%' }}
          />
        </div>
        <span className='text-sky-500'>Scroll Target</span>
        <div
          ref={target}
          className='relative w-40 flex-none rounded-xl border-2 border-sky-500 p-3 text-center'
        >
          <div className='sticky top-1/2 z-20 bg-red-400'>
            <div className='relative h-full'>
              <motion.div
                ref={itemScroll}
                style={{ x, y: '-50%' }}
                className='absolute left-full top-1/2 flex gap-28 font-prompt font-bold'
              >
                <div className='whitespace-nowrap text-[5vw]'>Project 1</div>
                <div className='whitespace-nowrap text-[5vw]'>Project 2</div>
                <div className='whitespace-nowrap text-[5vw]'>Project 3</div>
                <div className='whitespace-nowrap text-[5vw]'>Project 4</div>
              </motion.div>
            </div>
          </div>
          <div className='relative z-10 flex flex-col *:my-12'>
            <div className='relative h-[170px] w-full overflow-clip rounded-xl'>
              <img
                src='/images/raycast-wp-1.jpg'
                className='!my-0 size-full object-cover'
                alt='raycast'
              />
            </div>
            <div className='relative h-[170px] w-full overflow-clip rounded-xl'>
              <img
                src='/images/raycast-wp-1.jpg'
                className='!my-0 size-full object-cover'
                alt='raycast'
              />
            </div>
            <div className='relative h-[170px] w-full overflow-clip rounded-xl'>
              <img
                src='/images/raycast-wp-1.jpg'
                className='!my-0 size-full object-cover'
                alt='raycast'
              />
            </div>
            <div className='relative h-[170px] w-full overflow-clip rounded-xl'>
              <img
                src='/images/raycast-wp-1.jpg'
                className='!my-0 size-full object-cover'
                alt='raycast'
              />
            </div>
          </div>
        </div>
        <div className='h-[30svh] w-72 flex-none'></div>
      </div>
    </>
  )
}
