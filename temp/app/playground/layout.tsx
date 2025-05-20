'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PlaygroundLayout({ children }: React.PropsWithChildren) {
  const pathname = usePathname()

  return (
    <main className='mx-auto min-h-dvh max-w-2xl px-6 py-10 lg:px-2'>
      <p className='space-x-3 font-mono text-sm'>
        <Link href='/' className='font-semibold text-cyan-300 hover:underline'>
          aang.dev
        </Link>
        <span className='text-xs text-green-500'>❯</span>
        <span>~{pathname}</span>
      </p>
      <div className='mt-12 md:mt-24'>{children}</div>
      <footer className='border-border text-muted-foreground/70 mt-12 flex flex-col gap-3 border-t pt-5 text-sm'>
        <span>Built by</span>
        <span className='*:underline'>
          <a href='https://twitter.com/gluekol' target='_blank' rel='noopener noreferrer'>
            @gluekol
          </a>
          {'  ·  '}
          <a href='https://github.com/milhamm' target='_blank' rel='noopener noreferrer'>
            github.com/milhamm
          </a>
        </span>
      </footer>
    </main>
  )
}
