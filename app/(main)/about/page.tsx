import Image from 'next/image'
import { Github, Linkedin, MailIcon, Twitter } from 'lucide-react'

import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function AboutPage() {
  return (
    <div className='space-y-6'>
      <div className='mask-squircle mx-auto flex size-[140px] items-center justify-center bg-background'>
        <Image
          src='https://avatars.githubusercontent.com/u/35242329?v=4'
          alt='Aang'
          className='mask-squircle'
          width='120'
          height='120'
          quality={100}
        />
      </div>
      <div className='inline-flex w-full flex-col gap-1 text-center'>
        <span className='font-prompt text-3xl font-bold'>Muhammad Ilham Mubarak</span>
        <span className='text-sm text-muted-foreground'>
          <a href='mailto:me@aang.dev' className='hover:underline'>
            me@aang.dev
          </a>{' '}
          {' · '} Indonesia
        </span>
      </div>
      <div className='space-y-4 text-lg leading-relaxed text-foreground'>
        <p>
          Hi everyone 👋, {"I'm Ilham or "}
          <span className='font-bold text-cyan-400'>Aang</span>.
        </p>
        <p>
          Interested in software engineering specifically web technologies. Currently living in
          Indonesia and working as a Product Engineer at{' '}
          <span className='font-bold text-cyan-300'>Zero One Group</span>.
        </p>
      </div>
      <div className='flex gap-2'>
        <Button
          className='aspect-square p-0'
          variant='outline'
          aria-label='me@aang.dev email'
          asChild
        >
          <a href='mailto:me@aang.dev'>
            <MailIcon className='size-4 text-muted-foreground' />
          </a>
        </Button>
        <Button className='aspect-square p-0' variant='outline' aria-label='LinkedIn' asChild>
          <a href='https://www.linkedin.com/in/milhamm/' target='_blank' rel='noopener noreferrer'>
            <Linkedin className='size-4 text-muted-foreground' />
          </a>
        </Button>
        <Button className='aspect-square p-0' variant='outline' aria-label='Github' asChild>
          <a href='https://github.com/milhamm' target='_blank' rel='noopener noreferrer'>
            <Github className='size-4 text-muted-foreground' />
          </a>
        </Button>
        <Button className='aspect-square p-0' variant='outline' aria-label='Twitter' asChild>
          <a href='https://twitter.com/gluekol' target='_blank' rel='noopener noreferrer'>
            <Twitter className='size-4 text-muted-foreground' />
          </a>
        </Button>
      </div>
      <div>
        <h2 className='mt-12 font-prompt text-2xl'>Experiences</h2>
        <ul className='mt-6 space-y-6'>
          <ExperienceCard
            title='Zero One Group'
            role='Product Engineer'
            href='https://www.zero-one-technology.com/'
            year='Jan 2023 — Now'
            alt='Zero One Group Logo'
            logo='/icons/zero-one-group-white.png'
            classnames={{
              image: 'bg-neutral-950',
            }}
          />
          <ExperienceCard
            title='Revou'
            role='Software Engineer Mentor'
            href='https://revou.co/'
            year='Apr 2024 — Jun 2024'
            alt='Revou Logo'
            logo='/icons/revou.jpg'
            classnames={{
              image: 'bg-[#fde900]',
            }}
          />
          <ExperienceCard
            title='Shumi'
            role='Frontend Engineer'
            href='https://shumi.shop/'
            year='Sep 2019 — Jan 2023'
            alt='Shumi Logo'
            logo='/icons/shumi-shop.jpeg'
            classnames={{
              image: 'bg-[#fde900]',
            }}
          />
          <ExperienceCard
            title='Digiflux Indonesia'
            role='Frontend Developer'
            href='https://www.digiflux.id/'
            year='Nov 2021 — Mar 2022'
            alt='Digiflux Indonesia Logo'
            logo='/icons/digiflux.jpg'
            classnames={{
              image: 'bg-white',
            }}
          />
          <ExperienceCard
            title='Gojek'
            role='Software Engineer Intern'
            year='Aug 2021 — Jan 2022'
            href='https://www.gojek.io/'
            alt='Gojek Logo'
            logo='/icons/gojek.png'
            classnames={{
              image: 'bg-[#05AA15]',
            }}
          />
          <ExperienceCard
            title='Techbros GmbH'
            role='Software Engineer Intern'
            href='https://www.techbros.io/'
            year='Jul 2021 — Sep 2021'
            alt='Techbros Logo'
            logo='/icons/techbros.jpeg'
            classnames={{
              image: 'bg-white',
            }}
          />
          <ExperienceCard
            title='Proclub Telkom University'
            role='Software Engineer'
            href='https://helloproclub.github.io/'
            year='Jan 2020 — Jul 2021'
            alt='Proclub Logo'
            logo='/icons/proclub.jpg'
            classnames={{
              image: 'bg-white',
            }}
          />
          <ExperienceCard
            title='Evomo.id (Jeager IIoT)'
            role='Frontend Developer Intern'
            href='https://evomo.id/'
            year='Jul 2018 — Sep 2018'
            alt='Jeager IIoT Logo'
            logo='/icons/evomo.jpeg'
            classnames={{
              image: 'bg-white',
            }}
          />
        </ul>
      </div>
    </div>
  )
}

type ExperienceCardProps = {
  title: string
  role: string
  href: string
  year: string
  logo: string
  alt: string
  classnames: {
    image?: string
  }
}

function ExperienceCard({
  title,
  role,
  href,
  year,
  logo,
  alt,
  classnames = { image: undefined },
}: ExperienceCardProps) {
  return (
    <li className='flex flex-col items-start border-b border-border/80 pb-6 last-of-type:border-none md:flex-row md:items-center'>
      <div className='flex flex-1 gap-4'>
        <div className={cn('mask-squircle p-2', classnames.image)}>
          <Image src={logo} width={38} height={38} alt={alt} />
        </div>
        <div className='flex flex-1 flex-col gap-1'>
          <a
            href={href}
            rel='noopener noreferrer'
            target='_blank'
            className='text-base font-semibold hover:underline'
          >
            {title}
          </a>
          <span className='text-sm text-muted-foreground'>{role}</span>
        </div>
      </div>
      <span className='mt-2 self-end text-xs text-muted-foreground md:mt-0 md:self-auto md:text-sm'>
        {year}
      </span>
    </li>
  )
}
