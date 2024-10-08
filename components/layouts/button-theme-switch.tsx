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
          // clipPath: [
          //   `polygon(0 0, -20% 0, 0 100%, 0 100%)`,
          //   `polygon(0 0, 120% 0, 100% 100%, 0 100%)`,
          // ],
          filter: [`blur(10px)`, `blur(0)`],
        },
        {
          duration: 800,
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

export function ButtonThemeSwitch() {
  const { toggleTheme, theme } = useThemeTransition()
  const mounted = useIsMounted()

  if (!mounted) return null

  return (
    <button
      className='rounded-xl bg-neutral-200 p-2 dark:bg-neutral-800'
      type='button'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Moon className='size-5' /> : <SunDim className='size-5' />}
    </button>
  )
}
