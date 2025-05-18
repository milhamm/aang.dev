import React from 'react'

type LinkProps = {
  href?: string
  children: React.ReactNode
}

export function Link({ href, children }: LinkProps) {
  if (href?.startsWith('http')) {
    return (
      <a className='underline' href={href} target='_blank' rel='noreferrer'>
        {children}
      </a>
    )
  }
  return <a href={href}>{children}</a>
}
