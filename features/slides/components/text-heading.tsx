'use client'

import { cn } from '@/lib/utils'

export function TextHeading({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h1
      className={cn(
        'font-prompt max-w-5xl text-7xl! font-bold tracking-tight text-balance',
        className
      )}
    >
      {children}
    </h1>
  )
}
