import { cn } from '@/lib/utils'

export function Footnotes({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <footer
      className={cn('text-muted-foreground fixed mt-11 w-full text-center text-xs', className)}
    >
      {children}
    </footer>
  )
}
