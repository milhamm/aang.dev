import { Section } from '@/components/shared'

import { Hero } from './_component'

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Section title='Latest Posts' showMore={false}>
        {'No Post :('}
      </Section>
    </>
  )
}
