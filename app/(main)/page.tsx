import Hero from '@/components/Hero'
import { Section } from '@/components/Section'

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Section title='Latest Posts'>{'No Post :('}</Section>
    </>
  )
}
