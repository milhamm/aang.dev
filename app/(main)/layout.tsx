import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-3xl px-5'>{children}</main>
      <Footer />
    </>
  )
}
