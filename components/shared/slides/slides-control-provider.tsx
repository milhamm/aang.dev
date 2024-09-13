'use client'

import { createContext, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

const SlidesContext = createContext<number | null>(null)

type SildesControlProviderProps = {
  numSlides: number
}

export function SlidesControlProvider({
  children,
  numSlides,
}: React.PropsWithChildren<SildesControlProviderProps>) {
  const router = useRouter()
  const page = Number(router.query['page'] as string) || 0

  const getCurrentPage = () => {
    if (typeof window === 'undefined') return 0
    const searchParams = new URLSearchParams(new URL(window.location.href).searchParams)
    const page = Number(searchParams.get('page')) || 0
    return page
  }

  const next = () => {
    const page = getCurrentPage()
    const url = `${router.asPath}?page=${Math.min(page + 1, numSlides)}`
    router.push(url, url, { shallow: true })
  }

  const prev = () => {
    const page = getCurrentPage()
    const url = `${router.asPath}?page=${Math.max(page - 1, 0)}`
    router.push(url, url, { shallow: true })
  }

  useEffect(() => {
    const handleKeyDown = (ev: globalThis.KeyboardEvent) => {
      if (ev.key === 'ArrowRight') {
        next()
      } else if (ev.key === 'ArrowLeft') {
        prev()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <SlidesContext.Provider value={page}>{children}</SlidesContext.Provider>
}

export function useActiveSlides(): number {
  const context = useContext(SlidesContext)
  if (context === null) throw new Error('`useActiveSlides` must be inside of `SlidesControl`')
  return context
}
