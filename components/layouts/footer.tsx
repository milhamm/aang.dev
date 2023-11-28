import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mx-auto mt-10 max-w-3xl px-5 pb-12'>
      <hr className='border-border' />
      <div className='mt-10 flex'>
        <FooterSection>
          <FooterItem href='/' text='Home' />
          <FooterItem href='/about' text='About' />
          <FooterItem href='/blog' text='Blog' />
          <FooterItem href='/resume' text='Resume' />
        </FooterSection>
        <FooterSection>
          <FooterItem href='https://github.com/milhamm' text='Github' blank />
          <FooterItem href='https://twitter.com/gluekol' text='Twitter' blank />
          <FooterItem href='https://www.linkedin.com/in/milhamm/' text='LinkedIn' blank />
        </FooterSection>
        <FooterSection>
          <FooterItem href='/slides' text='Slides' />
          <FooterItem href='/metrics' text='Metrics' />
        </FooterSection>
      </div>
    </footer>
  )
}

function FooterSection({ children }: React.PropsWithChildren) {
  return <ul className='flex w-32 flex-col gap-3'>{children}</ul>
}

type FooterItemProps = {
  href: string
  text: string
  blank?: boolean
}

function FooterItem({ href, text, blank }: FooterItemProps) {
  return (
    <li className='text-sm text-gray-500 hover:underline lg:text-base'>
      {!blank ? (
        <Link href={href}>{text}</Link>
      ) : (
        <a href={href} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      )}
    </li>
  )
}

export { Footer }
