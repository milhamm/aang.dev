import { cn } from '@/lib/utils'

type LayoutProps = React.PropsWithChildren<{
  title?: string
}>

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <h1 className={cn('mb-4 text-2xl font-bold')}>{title}</h1>
      <section>{children}</section>
    </>
  )
}
