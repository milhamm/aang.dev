import { NavItem } from '@/components/Navbar/NavItem'

import { ButtonThemeSwitch } from '../ButtonThemeSwitch'

const Navbar = () => {
  return (
    <nav className='mx-auto mb-2 flex w-full max-w-3xl justify-between py-8 lg:mb-12'>
      <ul className='ml-5 flex items-center'>
        <NavItem href='/' text='Home' />
        <NavItem href='/blog' text='Blog' />
        <NavItem href='/about' text='About Me' />
      </ul>
      <ButtonThemeSwitch />
    </nav>
  )
}

export { Navbar }
