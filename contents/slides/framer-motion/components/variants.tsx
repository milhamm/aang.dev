import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export function VariantsComp() {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={container}
      className='mask-squircle grid size-36 grid-cols-2 items-center gap-4 bg-gradient-to-r from-pink-500 to-pink-700 p-4'
    >
      {Array.from(Array(4).keys()).map((i) => {
        return (
          <motion.div
            variants={item}
            className='size-full rounded-full bg-white'
            key={i}
          ></motion.div>
        )
      })}
    </motion.div>
  )
}
