import { AnimatePresence, motion } from 'framer-motion'
import { useReducer } from 'react'

const infiniteTransition = {
  delay: 2,
  duration: 4,
  type: 'tween',
  ease: 'easeInOut',
  repeat: Infinity,
  repeatDelay: 2,
}

export function SmartCreatives() {
  return (
    <div className='flex items-center justify-center font-prompt'>
      <div className='relative flex items-center gap-[5%]'>
        <AnimatePresence>
          <motion.div
            animate={{
              x: ['0%', '55%', '55%', '55%', '0%'],
              backgroundColor: [
                'rgb(220 38 38)',
                'rgb(96 165 250)',
                'rgb(96 165 250)',
                'rgb(96 165 250)',
                'rgb(220 38 38)',
              ],
            }}
            transition={infiniteTransition}
            className='mask-squircle flex size-96 items-center justify-center text-3xl'
          >
            <motion.span animate={{ opacity: [1, 0, 0, 0, 1] }} transition={infiniteTransition}>
              Creatives
            </motion.span>
          </motion.div>
          <motion.div
            animate={{
              x: ['0%', '-55%', '-55%', '-55%', '0%'],
              backgroundColor: [
                'rgb(37 99 235)',
                'rgb(96 165 250)',
                'rgb(96 165 250)',
                'rgb(96 165 250)',
                'rgb(37 99 235)',
              ],
            }}
            transition={infiniteTransition}
            className='mask-squircle relative size-96 items-center justify-center text-3xl mix-blend-hard-light'
          >
            <motion.span
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
              animate={{ opacity: [1, 0, 0, 0, 1] }}
              transition={infiniteTransition}
            >
              Engineering
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 1, 1, 0] }}
              transition={infiniteTransition}
              className='absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 text-center text-black'
            >
              Smart Creatives
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
