import { ReactNode } from 'react'

interface SectionPropTypes {
  title: string
  children: ReactNode
}

const Section = ({ title, children }: SectionPropTypes) => {
  return (
    <div className='mt-12 flex w-full flex-col'>
      <h2 className='mb-8 text-2xl font-bold text-gray-900 dark:text-white'>{title}</h2>
      {children}
      <span className='mt-8 flex cursor-pointer gap-4 self-end transition-all hover:gap-5'>
        <span className=''>See More</span> →
      </span>
    </div>
  )
}

export { Section }
