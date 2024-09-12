'use client'

import { cn } from '@/lib/utils'

export function TextHeading({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h1
      className={cn(
        'max-w-5xl text-balance font-prompt !text-7xl font-bold tracking-tight',
        className
      )}
    >
      {children}
    </h1>
  )
}
