import { Inter_Tight, Nunito, Prompt, Bricolage_Grotesque } from 'next/font/google'

import { cn } from '@/lib/utils'

import { Providers } from './providers'

import './globals.css'

export const metadata = {
  title: 'Hi there, I am Aang',
  description: 'Personal Blog',
}

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-brand',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-head',
})

const prompt = Prompt({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-prompt',
})

const bricolage = Bricolage_Grotesque({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
})

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          nunito.variable,
          interTight.variable,
          prompt.variable,
          bricolage.variable,
          'font-sans'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
