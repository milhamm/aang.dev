import { cn } from '@/lib/utils'

type LayoutProps = React.PropsWithChildren<{
  title?: string
}>

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <h1 className={cn('mb-16 font-prompt text-6xl font-bold')}>{title}</h1>
      <section>{children}</section>
    </>
  )
}
