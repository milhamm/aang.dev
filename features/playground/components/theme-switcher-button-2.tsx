'use client'

import { useCallback } from 'react'
import { flushSync } from 'react-dom'
import { useTheme } from 'next-themes'
import { Moon, SunDim } from 'lucide-react'

import { useIsMounted } from '@/lib/hooks'

/*
 CSS to disable fade-in animation
 ::view-transition-old(root),
 ::view-transition-new(root) {
    animation: none;
  }
*/

function useThemeTransition() {
  const { setTheme, theme } = useTheme()
  const isDark = theme === 'dark'

  const toggleTheme = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const md = window.matchMedia('(max-width: 768px)').matches

      if (
        !document.startViewTransition ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        setTheme(isDark ? 'light' : 'dark')
        return
      }

      const x = e.clientX
      const y = e.clientY
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setTheme(isDark ? 'light' : 'dark')
        })
      })

      transition.ready.then(() => {
        const duration = md ? 400 : 600

        document.documentElement.animate(
          {
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
            filter: [`blur(5px)`, `blur(0)`],
          },
          {
            duration,
            easing: 'cubic-bezier(.76,.32,.29,.99)',
            pseudoElement: '::view-transition-new(root)',
          }
        )
      })
    },
    [setTheme, isDark]
  )

  return {
    theme,
    toggleTheme,
  }
}

export function ThemeSwitcherButton2() {
  const { toggleTheme, theme } = useThemeTransition()
  const mounted = useIsMounted()

  if (!mounted) return null

  return (
    <button
      className='rounded-xl bg-neutral-200 p-4 dark:bg-neutral-800'
      type='button'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Moon /> : <SunDim />}
    </button>
  )
}
