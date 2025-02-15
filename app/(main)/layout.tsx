import { MainLayout } from '@/components/layouts/main'

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>
}
