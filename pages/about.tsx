import { cx } from 'utils/cx'

import { Page } from '@/components/Layout/Page'

const About = () => {
  return (
    <Page title='About Me'>
      <p className={cx('text-lg leading-relaxed')}>
        Hey, Ilham{' '}
        <span className='bg-gradient-to-br from-cyan-500 to-cyan-300 bg-clip-text text-transparent'>
          (Aang)
        </span>{' '}
        here, a developer living in Indonesia currently working as a Product Engineer at Zero One
        Group. I&lsquo;m interested in Software Engineering specifically web development. I got my
        Bachelor of Computer Science degree from Telkom University in 2023.
      </p>
    </Page>
  )
}

export default About
