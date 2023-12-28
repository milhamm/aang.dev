'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, SunDim } from 'lucide-react'

export function ButtonThemeSwitch() {
  const { setTheme, theme } = useTheme()
  const [resolvedTheme, setResolvedTheme] = useState('dark')

  useEffect(() => {
    setResolvedTheme(theme || 'dark')
  }, [theme])

  return (
    <button
      className='rounded-lg bg-neutral-200 p-2 dark:bg-gray-800'
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
      }}
    >
      {resolvedTheme === 'dark' ? <SunDim className='size-5' /> : <Moon className='size-5' />}
    </button>
  )
}
