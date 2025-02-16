import { motion } from 'motion/react'

export function MotionComp() {
  return (
    <motion.div
      className='size-32 rounded-xl bg-linear-to-r from-pink-500 to-pink-700'
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    />
  )
}
