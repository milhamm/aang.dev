import Link from 'next/link'

const FooterItem = ({ href, text, blank }: any) => {
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

export { FooterItem }
