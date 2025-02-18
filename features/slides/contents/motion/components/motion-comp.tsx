import { motion } from 'motion/react'

export function MotionComp() {
  return (
    <motion.div
      className='size-32 rounded-xl bg-linear-to-r from-yellow-400 to-yellow-500 dark:from-yellow-300 dark:to-yellow-400'
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    />
  )
}
