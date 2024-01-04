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

  const toggleTheme = useCallback(() => {
    if (
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTheme(isDark ? 'light' : 'dark')
      return
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? 'light' : 'dark')
      })
    })

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(50% at -100% 50%)`, `circle(100% at 50% 50%)`],
          filter: [`blur(10px)`, `blur(0)`],
        },
        {
          duration: 700,
          easing: 'ease-out',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
  }, [setTheme, isDark])

  return {
    theme,
    toggleTheme,
  }
}

export function ThemeSwitcherButton() {
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
