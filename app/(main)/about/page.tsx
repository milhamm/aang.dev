import { Layout } from '@/components/layouts'
import { cn } from '@/lib/utils'

export default function AboutPage() {
  return (
    <Layout title='About Me'>
      <p className={cn('text-lg leading-relaxed text-foreground')}>
        Hey, Ilham{' '}
        <span className='bg-gradient-to-br from-cyan-500 to-cyan-300 bg-clip-text text-transparent'>
          (Aang)
        </span>{' '}
        here, a developer living in Indonesia currently working as a Product Engineer at Zero One
        Group. I&lsquo;m interested in Software Engineering specifically web development. I got my
        Bachelor of Computer Science degree from Telkom University in 2023.
      </p>
    </Layout>
  )
}
