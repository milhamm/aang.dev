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
          <Collapsible.Trigger className='reveal-trigger border-foreground hover:text-background cursor-help rounded-xl border px-1 hover:border-[var(--framer-accent)] hover:bg-[var(--framer-accent)] md:text-base xl:px-3 xl:text-2xl'>
            {triggerName}
          </Collapsible.Trigger>
          {afterText ? <span className='after-text'> {afterText} </span> : null}
          <Collapsible.Content
            hidden={false}
            asChild
            forceMount
            className='reveal-content data-[state="open"]:animate-not-so-boring-fast data-[state="closed"]:text-foreground data-[state="closed"]:pointer-events-none data-[state="closed"]:blur-[5px]'
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

export function WhatIsFramerMotion() {
  return (
    <div className='w-full text-center font-light tracking-tight md:text-xl md:leading-loose xl:text-3xl xl:leading-relaxed'>
      <TextReveal
        triggerName='Framer Motion'
        afterText='is a React-based animation library'
        content='that allows us to create impressive, production-ready animations with simplicity in mind.'
      />
      <TextReveal
        beforeText='It offers'
        triggerName='Declarative API'
        content='allowing developers to define animations directly. It avoids the need to interact with the DOM via selectors, refs or other kinds of error-prone, severable wiring using'
      >
        <TextReveal
          triggerName='Motion Components'
          content='which wrap standard HTML/SVG/React elements in motion components to animate them.'
        ></TextReveal>
        <TextReveal
          beforeText='In'
          triggerName='franker words'
          content='there is much less stuff to fuck up '
        ></TextReveal>
      </TextReveal>
      <TextReveal
        beforeText='while adding features such as'
        triggerName='Layout Animations'
        content='that can animate properties that are not possible to animate with CSS, like flex-direction.'
      ></TextReveal>
      <TextReveal
        triggerName='Exit Animations'
        content="that allows components to animate out when they're removed from the React tree."
      ></TextReveal>
      <TextReveal
        triggerName='Spring Animations'
        content='that is based on the behavior of an object attached to a spring in a physical world, so it feels more natural by definition.'
      ></TextReveal>
      <TextReveal
        triggerName='Gestures'
        content='a simple yet powerful set of UI gesture such as hover, tap, pan and drag detection.'
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
            <a href='https://framer.com/motion/' target='_blank' rel='noopener noreferer'>
              Framer Motion Docs
            </a>
          </span>
        }
      ></TextReveal>
    </div>
  )
}
