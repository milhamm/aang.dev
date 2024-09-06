'use client'

export function TextHeading({ children }: React.PropsWithChildren) {
  return (
    <h1 className='max-w-5xl text-balance font-prompt !text-7xl font-bold tracking-tight'>
      {children}
    </h1>
  )
}
