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

function useThemeTransition(easing: EffectTiming['easing']) {
  const { setTheme, theme } = useTheme()
  const isDark = theme === 'dark'

  const toggleTheme = useCallback(() => {
    const md = window.matchMedia('(max-width: 768px)').matches

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
      const blur = md ? 2 : 10
      const duration = md ? 500 : 700

      document.documentElement.animate(
        {
          clipPath: [
            `polygon(0 0, -20% 0, 0 100%, 0 100%)`,
            `polygon(0 0, 120% 0, 100% 100%, 0 100%)`,
          ],
          filter: [`blur(${blur}px)`, `blur(0)`],
        },
        {
          duration,
          easing,
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
  }, [setTheme, isDark, easing])

  return {
    theme,
    toggleTheme,
  }
}

export function ThemeSwitcherButtonExample({ easing }: { easing: EffectTiming['easing'] }) {
  const { toggleTheme, theme } = useThemeTransition(easing)
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
