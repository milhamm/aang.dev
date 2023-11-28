import { Footer, Navbar } from '@/components/layouts'

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-3xl px-5'>{children}</main>
      <Footer />
    </>
  )
}
