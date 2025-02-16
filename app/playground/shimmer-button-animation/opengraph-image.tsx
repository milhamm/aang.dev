import { generatePlaygroundOgImage } from '@/features/playground/server'

export default async function OGImage() {
  return generatePlaygroundOgImage({
    title: 'Shimmer Button Animation',
    description: 'A shimmer effect on hover using conic-gradient',
  })
}
