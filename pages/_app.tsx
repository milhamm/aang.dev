import { AppProps } from 'next/app'
import { Inter_Tight, Nunito, Prompt } from 'next/font/google'

import { cn } from '@/lib/utils'

import { Providers } from '../app/providers'

import '../app/globals.css'

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

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={cn(nunito.variable, interTight.variable, prompt.variable, 'font-sans')}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
      <style jsx global>
        {`
          :root {
            --font-brand: ${nunito.style.fontFamily};
            --font-head: ${interTight.style.fontFamily};
            --font-prompt: ${prompt.style.fontFamily};
          }
        `}
      </style>
    </div>
  )
}
