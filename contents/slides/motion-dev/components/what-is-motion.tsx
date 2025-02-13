import * as Collapsible from '@radix-ui/react-collapsible'

type TextRevealProps = {
  beforeText?: string
  afterText?: string
  triggerName: string
  content: React.ReactNode
  children?: React.ReactNode
}

function TextReveal({ beforeText, afterText, triggerName, content, children }: TextRevealProps) {
  return (
    <>
      {beforeText ? <span>{beforeText} </span> : null}
      <Collapsible.Root asChild>
        <span>
          <Collapsible.Trigger className='reveal-trigger cursor-help rounded-xl border border-foreground px-1 hover:border-[var(--motion-accent)] hover:bg-[var(--motion-accent)] hover:text-background focus:border-[var(--motion-accent)] focus:bg-[var(--motion-accent)] focus:text-background md:text-base xl:px-3 xl:text-2xl'>
            {triggerName}
          </Collapsible.Trigger>
          {afterText ? <span className='after-text'> {afterText} </span> : null}
          <Collapsible.Content
            hidden={false}
            asChild
            forceMount
            className='reveal-content data-[state="closed"]:pointer-events-none data-[state="open"]:animate-not-so-boring-fast data-[state="closed"]:text-foreground data-[state="closed"]:blur-[5px]'
          >
            <span>
              <span> {content} </span>
              {typeof children !== 'undefined' ? children : null}
            </span>
          </Collapsible.Content>
        </span>
      </Collapsible.Root>
    </>
  )
}

export function WhatIsMotion() {
  return (
    <div className='mx-auto w-full max-w-4xl text-center font-light tracking-tight md:text-xl md:leading-loose xl:text-3xl xl:leading-relaxed'>
      <TextReveal
        triggerName='Motion'
        afterText='is a modern animation library for Javascript and React'
        content='that allows us to create impressive, production-ready animations with simplicity in mind.'
      />
      <TextReveal
        beforeText='It offers'
        triggerName='Simple API'
        content='Motion pick-up-and-play API is easy to start and fun to master '
      />
      <TextReveal
        beforeText='while adding features such as'
        triggerName='Layout Animations'
        content='that can animate properties that are not possible to animate with CSS, like flex-direction.'
      ></TextReveal>
      <TextReveal
        triggerName='Exit Animations'
        content='that makes it easier than ever to animate elements as they exit the DOM.'
      ></TextReveal>
      <TextReveal
        triggerName='Spring Animations'
        content='allowing you to go beyond time-based animations with real spring physics for great-feeling animations.'
      ></TextReveal>
      <TextReveal
        triggerName='Timelines'
        content='that makes it easy to precisely orchestrate animations using variants, stagger and timelines.'
      ></TextReveal>
      <TextReveal
        triggerName='Scroll-linked Animations'
        content="that control animations based on the user's scroll position, enabling creative scroll-triggered effects."
      ></TextReveal>
      <TextReveal
        triggerName='And much more'
        content={
          <span>
            to explore, check out the{' '}
            <a href='https://motion.dev/docs' target='_blank' rel='noopener noreferer'>
              Motion Docs
            </a>
          </span>
        }
      ></TextReveal>
    </div>
  )
}
