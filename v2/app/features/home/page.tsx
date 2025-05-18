import { Grid } from '~/components/ui/grid';
import { AboutSection } from './components/about-section';
import { HeroSection } from './components/hero-section';
import { NowSection } from './components/now-section';
import { WritingSection } from './components/writing-section';

export function meta() {
  return [
    { title: 'Muhammad Ilham Mubarak - Product Engineer' },
    { name: 'description', content: 'Welcome to my page' },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Grid.Spacer />
      <NowSection />
      <Grid.Spacer />
      <WritingSection />
      <Grid.Spacer />
    </>
  );
}
