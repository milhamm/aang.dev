import { Footer } from './footer'
import { Navbar } from './navbar'

export function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-dvh flex-col'>
      <Navbar />
      <main className='mx-auto w-full max-w-4xl flex-1 px-5'>{children}</main>
      <Footer />
    </div>
  )
}
