'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

import { ButtonThemeSwitch } from './button-theme-switch'

export function Navbar() {
  return (
    <nav className='mx-auto mb-2 flex w-full max-w-3xl justify-between px-5 py-8 lg:mb-12'>
      <ul className='flex flex-1 items-center'>
        <NavItem href='/' text='Home' />
        <NavItem href='/blog' text='Blog' />
        <NavItem href='/about' text='About' />
      </ul>
      <ButtonThemeSwitch />
    </nav>
  )
}

type NavItemProps = {
  href: string
  text: string
}

function NavItem({ href, text }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname.split('/')[1] === href.replace('/', '')

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'relative mr-2 h-full cursor-pointer rounded-lg px-3 py-1 text-sm lg:mr-5 lg:px-4 lg:py-2 lg:text-base',
          isActive ? 'text-foreground' : 'text-muted-foreground'
        )}
      >
        {isActive ? (
          <motion.span
            layoutId='hovered'
            className='absolute inset-0 z-0 h-full w-full rounded-xl bg-neutral-200 px-3 py-1 dark:bg-gray-800 lg:px-4 lg:py-2'
          />
        ) : null}
        <span className='relative z-50'>{text}</span>
      </Link>
    </li>
  )
}
