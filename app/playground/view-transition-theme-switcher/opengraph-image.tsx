import { generatePlaygroundOgImage } from '@/features/playground/server'

export default async function OGImage() {
  return generatePlaygroundOgImage({
    title: ' View Transition Theme Switcher',
    description: 'Theme switcher animation using View Transitions API',
  })
}
