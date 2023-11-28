import { Nunito } from 'next/font/google'

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

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(nunito.variable, 'font-sans')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
