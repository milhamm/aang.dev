import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'clsx'
import { motion } from 'framer-motion'

interface NavItemPropTypes {
  href: string
  text: string
}

const NavItem = ({ href, text }: NavItemPropTypes) => {
  const { asPath } = useRouter()
  const isActive = asPath == href

  return (
    <li>
      <Link
        href={href}
        className={cx(
          'relative mr-2 h-full cursor-pointer rounded-lg px-3 py-1 text-sm lg:mr-5 lg:px-4 lg:py-2 lg:text-base',
          {
            'dark:text-gray-200': !isActive,
            'dark:text-white': isActive,
          }
        )}
      >
        {isActive ? (
          <motion.span
            layoutId='hovered'
            className='absolute inset-0 z-0 h-full w-full rounded-lg bg-neutral-200 px-3 py-1 dark:bg-gray-800 lg:px-4 lg:py-2'
          />
        ) : null}
        <span className='relative z-50'>{text}</span>
      </Link>
    </li>
  )
}

export { NavItem }
