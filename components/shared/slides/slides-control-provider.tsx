'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const SlidesContext = createContext<number | null>(null)

type SildesControlProviderProps = {
  numSlides: number
}

export function SlidesControlProvider({
  children,
  numSlides,
}: React.PropsWithChildren<SildesControlProviderProps>) {
  const [activeSlide, setActiveSlide] = useState(0)

  const next = () => {
    setActiveSlide((prev) => Math.min(prev + 1, numSlides))
  }

  const prev = () => {
    setActiveSlide((prev) => Math.max(prev - 1, 0))
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
  }, [])

  return <SlidesContext.Provider value={activeSlide}>{children}</SlidesContext.Provider>
}

export function useActiveSlides(): number {
  const context = useContext(SlidesContext)
  if (context === null) throw new Error('`useActiveSlides` must be inside of `SlidesControl`')
  return context
}
