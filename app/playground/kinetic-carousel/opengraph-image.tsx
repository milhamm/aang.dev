import { generatePlaygroundOgImage } from '@/features/playground/server'

export default async function OGImage() {
  return generatePlaygroundOgImage({
    title: 'Kinetic Carousel',
    description: `A recreation of Rauno Freiberg's Kinetic Carousel from ui.gallery`,
  })
}
