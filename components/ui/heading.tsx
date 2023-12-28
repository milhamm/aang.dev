import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Hash } from 'lucide-react'

import { getId } from '@/lib/utils'

export function Heading2({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  const id = getId(children as string)
  return (
    <h2
      className='group relative ml-0 flex scroll-m-12 flex-row-reverse items-center justify-end gap-3 lg:-ml-10 lg:flex-row lg:justify-start'
      id={id}
      {...props}
    >
      <a href={`#${id}`} className='rounded p-1 opacity-0 hover:bg-muted group-hover:opacity-100'>
        <Hash className='size-5 text-muted-foreground' />
      </a>
      <span>{children}</span>
    </h2>
  )
}
