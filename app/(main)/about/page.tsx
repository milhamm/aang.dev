import { cn } from '@/lib/utils'

export default function AboutPage() {
  return (
    <div className='space-y-6'>
      <div className=''>
        <h1 className='font-head text-3xl font-bold'>Muhammad Ilham Mubarak</h1>
      </div>
      <p className={cn('text-lg leading-relaxed text-foreground')}>
        Hi everyone 👋, {"I'm "}
        <span className='font-bold text-cyan-400'>Aang</span>. I am a developer living in Indonesia
        currently working as a Product Engineer at{' '}
        <span className='font-bold text-cyan-300'>Zero One Group</span>. I&lsquo;m interested in
        Software Engineering specifically web development. I got my Bachelor of Computer Science
        degree from Telkom University in 2023.
      </p>
      <div></div>
    </div>
  )
}
