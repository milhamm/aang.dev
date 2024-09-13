import { useRef } from 'react'
import { motion } from 'framer-motion'

export function ScrollTriggeredAnimations() {
  const scrollRef = useRef(null)

  return (
    <>
      Scroll Container
      <div
        ref={scrollRef}
        className='relative flex h-96 w-[90%] flex-col items-center gap-4 overflow-x-clip overflow-y-scroll rounded-xl border-2 border-pink-500 p-8'
      >
        <div className='flex h-[20svh] w-72 flex-none justify-center rounded-xl border-2 border-lime-500'></div>
        <div className='relative w-72 flex-none rounded-xl border-2 border-sky-500 p-3 text-center'>
          <div className='relative z-10 flex flex-col gap-12'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scrollRef, amount: 0.8, once: true }}
              className='relative h-[170px] w-full overflow-clip rounded-xl'
            >
              <img
                src='/images/raycast-wp-1.jpg'
                className='!my-0 size-full object-cover'
                alt='raycast'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ root: scrollRef, amount: 0.8, once: true }}
              className='relative h-[170px] w-full overflow-clip rounded-xl'
            >
              <img
                src='/images/raycast-wp-1.jpg'
                className='!my-0 size-full object-cover'
                alt='raycast'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 360 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ root: scrollRef, amount: 0.8, once: true }}
              className='relative h-[170px] w-full overflow-clip rounded-xl'
            >
              <img
                src='/images/raycast-wp-1.jpg'
                className='!my-0 size-full object-cover'
                alt='raycast'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ root: scrollRef, amount: 0.8, once: true }}
              className='relative h-[170px] w-full overflow-clip rounded-xl'
            >
              <img
                src='/images/raycast-wp-1.jpg'
                className='!my-0 size-full object-cover'
                alt='raycast'
              />
            </motion.div>
          </div>
        </div>
        <div className='h-[30svh] w-72 flex-none'></div>
      </div>
    </>
  )
}
