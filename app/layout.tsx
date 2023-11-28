import { Quicksand } from 'next/font/google'

import { cn } from '@/lib/utils'

import { Providers } from './providers'

import './globals.css'

export const metadata = {
  title: 'Hi there, I am Aang',
  description: 'Personal Blog',
}

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
})

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(quicksand.variable, 'font-sans')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
