import { Footer, Navbar } from '@/components/layouts'

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-[100dvh] flex-col'>
      <Navbar />
      <main className='mx-auto w-full max-w-3xl flex-1 px-5'>{children}</main>
      <Footer />
    </div>
  )
}
