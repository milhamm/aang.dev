import { cn } from '@/lib/utils'

type LayoutProps = React.PropsWithChildren<{
  title?: string
}>

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <h1 className={cn('font-prompt mb-16 text-6xl font-bold')}>{title}</h1>
      <section>{children}</section>
    </>
  )
}
